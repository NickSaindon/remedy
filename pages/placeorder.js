import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import CheckoutWizard from '../components/CheckoutWizard';
// import { getError } from '../utils/error';
import Cookies from 'js-cookie';

const PlaceOrder = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state;
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46
  const itemsPrice = round2(cartItems.reduce((a, c) => a + c.quantity * c.tierPrice * 1000, 0));
  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  useEffect(() => {
    if (userInfo.isVendor) {
      if (!paymentMethod) {
        router.push('/payment');
      }
      if (cartItems.length === 0) {
        router.push('/cart');
      }
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    // closeSnackbar();
    try {
      setLoading(true);
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cartItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'CART_CLEAR' });
      Cookies.remove('cartItems');
      setLoading(false);
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
    //   enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  return (
    <Layout>
      <div className="place-order-container">
        {userInfo && userInfo.isVendor === true &&
          <CheckoutWizard />
        }
        <div className="container">
          <h1 className="text-center">Place Order</h1>
          <div className="row">
            <div className="col-lg-8">
              <div className="card shipping-card">
                <div className="card-body">
                  <h2 className="card-title">Shipping Address</h2>
                  <p>
                    {shippingAddress.fullName}, {shippingAddress.address},{' '}
                    {shippingAddress.city}, {shippingAddress.zipCode}, {' '}
                    {shippingAddress.state}
                  </p>
                </div>
              </div>
              <div className="card payment-card">
                <div className="card-body">
                  <h2 className="card-title">Payment Method</h2>
                  <p>{paymentMethod}</p>
                </div>
              </div>
              <div className="card order-card">
                <div className="card-body">
                  <h2 className="card-title">Order Items</h2>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Grind Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item._id}>
                          <td>
                          <Link href={`/product/${item.slug}`} passHref>
                              <Image src={item.imageOne} className="d-block w-100" width={50} height={50} alt="..." />
                          </Link>
                          </td>
                          <td className="align-middle">{item.name}<br />{item.color}</td>
                          <td className="align-middle">{item.quantity}t</td>
                          <td className="align-middle">${item.tierPrice}</td>
                          <td className="align-middle">{item.grindType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card summary-card">
                <div className="card-body">
                    <h2 className="card-title">Order Summary</h2>
                    <div className="summary d-flex justify-content-between">
                        <h6>Items:</h6>
                        <span className="text-muted">${itemsPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </div>
                    <div className="summary d-flex justify-content-between">
                        <h6>Tax:</h6>
                        <span className="text-muted">${taxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </div>
                    <div className=" summary d-flex justify-content-between">
                        <h6>Shipping:</h6>
                        <span className="text-muted">${shippingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </div>
                    <div className="summary-total d-flex justify-content-between">
                        <h5>Total:</h5>
                        <span>${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </div>
                    <button 
                        className="w-100 btn btn-lg btn-outline-primary light" 
                        type="button"
                        onClick={placeOrderHandler}
                    >
                        Place Order
                    </button>
                    {loading && (
                      <div className="spinner-border text-primary text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
