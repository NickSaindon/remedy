import React, { useContext, useEffect, useReducer } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';
import { Store } from '../../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getError } from '../../utils/error';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import moment from 'moment';
import { ToastContainer, toast, Slide } from "react-toastify";

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false, errorPay: action.payload };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false, errorPay: '' };
    case 'DELIVER_REQUEST':
      return { ...state, loadingDeliver: true };
    case 'DELIVER_SUCCESS':
      return { ...state, loadingDeliver: false, successDeliver: true };
    case 'DELIVER_FAIL':
      return { ...state, loadingDeliver: false, errorDeliver: action.payload };
    case 'DELIVER_RESET':
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
        errorDeliver: '',
      };
    default:
      state;
  }
}

const Order = ({params}) => {
  const orderId = params.id;
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;
  
  const [
    { loading, error, order, successPay, loadingDeliver, successDeliver },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  const {
    shippingAddress,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  const redirectToStripeCheckout = async () => {
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
      items: Object.entries(orderItems).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      }))
    });
  };
  
  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    }
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (
      !order._id ||
      successPay ||
      successDeliver ||
      (order._id && order._id !== orderId)
    ) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: 'PAY_RESET' });
      }
      if (successDeliver) {
        dispatch({ type: 'DELIVER_RESET' });
      }
    } 
  }, [order, successPay, successDeliver]);
  
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  async function paidOrderHandler() {
    try {
      dispatch({ type: 'PAY_REQUEST' });
      const { data } = await axios.put(
        `/api/orders/${order._id}/pay`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'PAY_SUCCESS', payload: data });
      toast.success("Order is paid", {
        theme: "colored"
      });
    } catch (err) {
      dispatch({ type: 'PAY_FAIL', payload: getError(err) });
      toast.error(getError(err), {
        theme: "colored"
      });
    }




    // return actions.order.capture().then(async function (details) {
    //   try {
    //     dispatch({ type: 'PAY_REQUEST' });
    //     const { data } = await axios.put(
    //       `/api/orders/${order._id}/pay`,
    //       details,
    //       {
    //         headers: { authorization: `Bearer ${userInfo.token}` },
    //       }
    //     );
    //     dispatch({ type: 'PAY_SUCCESS', payload: data });
    //     toast.error("Order is paid", {
    //       theme: "colored"
    //     });
    //   } catch (err) {
    //     dispatch({ type: 'PAY_FAIL', payload: getError(err) });
    //     toast.error(getError(err), {
    //       theme: "colored"
    //     });
    //   }
    // });
  }
  
  // const onError = (err) => {
  //   toast.error(getError(err), {
  //     theme: "colored"
  //   });
  // }
  
  async function deliverOrderHandler() {
    try {
      dispatch({ type: 'DELIVER_REQUEST' });
      const { data } = await axios.put(
        `/api/orders/${order._id}/deliver`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'DELIVER_SUCCESS', payload: data });
      toast.success("Order is delivered", {
        theme: "colored"
      });
    } catch (err) {
      dispatch({ type: 'DELIVER_FAIL', payload: getError(err) });
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  }

  return (
    <Layout>
      <div className="place-order-container">
        <ToastContainer 
          position="top-center" 
          draggable={false} 
          transition={Slide} 
          autoClose={5000}
          hideProgressBar={true}
          className="toast-alert"
        />
        <div className="container">
          <h1 className="text-center">Order {orderId}</h1>
          <div className="row gy-5">
            {userInfo && userInfo.isAdmin === true ? (
              <div className="col p-3">
                <Link href="/admin/orders" passHref>
                  <button type="button" className="btn btn-link"><i className="bi bi-arrow-left"></i> back to order history</button>
                </Link>
              </div>
            ) : (
              <div className="col p-3">
                <Link href="/vendor/order-history" passHref>
                  <button type="button" className="btn btn-link"><i className="bi bi-arrow-left"></i> back to order history</button>
                </Link>
              </div>
            )}

            </div>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : error ? (
            toast.error(error, {
              theme: "colored"
            })
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="card shipping-card">
                  <div className="card-body">
                    <h2 className="card-title">Shipping Address</h2>
                    <p>
                      <b>{shippingAddress.fullName}</b><br/> 
                      {shippingAddress.companyName}<br/>
                      {shippingAddress.address}<br/>
                      {shippingAddress.city}, {' '}
                      {shippingAddress.state}, {' '}
                      {shippingAddress.zipCode}                      
                    </p>
                    <p>
                      <b>Status:</b>{' '}
                      {isDelivered
                        ? `delivered at ${moment(deliveredAt).format('MM/DD/YYYY')}`
                        : 'not delivered'}
                    </p>
                  </div>
                </div>
                <div className="card payment-card">
                  <div className="card-body">
                    <h2 className="card-title">Delivery</h2>
                    <p>
                      Shipment will be sent through <b>{shippingAddress.shipmentType}</b>
                    </p>
                    <p>
                      <b>Status:</b>{' '}
                      {isDelivered
                        ? `delivered at ${moment(deliveredAt).format('MM/DD/YYYY')}`
                        : 'not delivered'}
                    </p>
                    {userInfo && userInfo.isAdmin === true && !order.isDelivered && (
                      <div>
                        {loadingDeliver && 
                          <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        }
                        <button 
                          type="button" 
                          class="btn btn-primary"
                          onClick={deliverOrderHandler}
                        >
                          Delivered
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="card payment-card">
                  <div className="card-body">
                    <h2 className="card-title">Payment</h2>
                    <p>
                      Wise transfer payment request was sent to <b>{shippingAddress.email}</b>
                    </p>
                    <p>
                      <b>Status:</b> {isPaid ? `paid at ${moment(paidAt).format('MM/DD/YYYY')}` : 'not paid'}
                    </p>
                    {userInfo && userInfo.isAdmin === true && !order.isPaid && (
                      <div>
                        {loadingDeliver && 
                          <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        }
                        <button 
                          type="button" 
                          class="btn btn-primary"
                          onClick={paidOrderHandler}
                        >
                          Paid
                        </button>
                      </div>
                    )}
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
                          <th scope="col">Process Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderItems.map((item) => (
                          <tr key={item._id}>
                            <td>
                              <Link href={`/product/${item.slug}`} passHref>
                                <Image src={item.imageOne} className="d-block w-100" width={50} height={50} alt="..." />
                              </Link>
                            </td>
                            <td className="align-middle">{item.name}<br />{item.color}</td>
                            <td className="align-middle">{item.quantity}t</td>
                            <td className="align-middle">{item.processType}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  return { props: { params } };
}
  
export default dynamic(() => Promise.resolve(Order), { ssr: false });