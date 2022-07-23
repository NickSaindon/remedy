import SideNav from '../../components/SideNav';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { useEffect, useContext } from 'react';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';
import db from '../../utils/db';
import Product from '../../models/Product';

const AdminCreateOrder = (props) => {
    const { state, dispatch } = useContext(Store);
    const router = useRouter();
    const { userInfo } = state;
    const { products } = props;
  
    useEffect(() => {
      if (!userInfo.isAdmin) {
        router.push('/login');
      }
    }, []);

    const addToCartHandler = async (product) => {
        const existItem = state.cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const processType = 'nano';
    
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity, processType } });
      };

  return (
    <Layout>
      <div className="dashboard-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <SideNav />
            </div>
            <div className="col-lg-10">
              <div className="card">
                  <div className="card-body">
                      <h1 className="card-title text-center">
                          Create Order
                      </h1>
                      <div className="product-list">
                          <h2>Product List</h2>
                          <div className="d-flex justify-content-center">
                              <div className="col-lg-6">

                          <ul className="list-group list-group-flush">
                          {products.map((product) => (
                              <li className="list-group-item p-3" key={product._id}>
                                  <div className="p-3 d-flex justify-content-between align-items-start">
                                      <Image src={product.imageOne} className="d-block w-100" width={50} height={50} alt="..." />
                                      <h5>{product.name} - {product.color}</h5>
                                      {/* <p>{product.color}</p>  */}
                                  </div>
                                  <button 
                                      type="button" 
                                      className="btn btn-lg btn-outline-primary light"
                                      onClick={() => addToCartHandler(product)}
                                  >
                                      Add To Cart
                                  </button>
                              </li>
                          ))}
                          </ul>
                          </div>
                          </div>

                      </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCreateOrder;

export async function getServerSideProps() {
    await db.connect();
    const products = await Product.find({}).lean();
    await db.disconnect();
    return {
      props: {
        products: products.map(db.convertDocToObj)
      }
    }
}