import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect, useContext } from 'react';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import db from '../utils/db';
import Product from '../models/Product';

const Products = (props) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;
  const { products } = props;

  useEffect(() => {
    if (!userInfo.isVendor) {
      router.push('/login');
    }
  }, []);

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const processType = 'nano';
    const tierPrice = quantity <= 10 ? (product.price
      ) : quantity >= 11 && quantity <= 15 ? (
        product.price - 1
      ) : quantity >= 16 && quantity <= 19 ? (
        product.price - 2
      ) : quantity >= 20 && quantity <= 29 ? (
        product.price - 3
      ) : (
        product.price - 5
      )

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity, tierPrice, processType } });
  };

  return (
    <Layout title="Products Page">
      <div className="products-container">
        <div className="container-xxl">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src="/images/kratom.jpg" className="d-block w-100" width={1920} height={825} alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Kratom Products</h1>
                </div>
              </div>
              <div className="carousel-item">
                <Image src="/images/kratom2.jpg" className="d-block w-100" width={1920} height={825} alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Maeng Da Kratom</h1>
                </div>
              </div>
              <div className="carousel-item">
                <Image src="/images/kratom3.jpg" className="d-block w-100" width={1920} height={825} alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Third slide label</h1>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="product-list-container">
          <div className="product-list-wrapper">
            <div className="container-xl">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
                {products.map((product) => (
                  <div className="col" key={product._id}>
                    <div className="card shadow-sm">
                      <Link 
                        key={product.name}
                        href={`/product/${product.slug}`} 
                        passHref
                      >
                        <a>
                          <Image src={product.imageOne} className="d-block w-100" width={600} height={600} alt="..." />
                        </a>
                      </Link>
                      <div className="card-body">
                        <h4 className="card-text">{product.name} - {product.color}</h4>
                        <p>{product.benefits.substring(0, 70)}{ product.description.length >= 10 && `...` }</p>
                        <div className="row">
                          <div className="col-lg-6">
                          <Link 
                            key={product.name}
                            href={`/product/${product.slug}`} 
                            passHref
                          >
                            <button 
                              type="button" 
                              className="w-100 btn btn-lg btn-outline-primary light"
                            >
                              Read More
                            </button>
                          </Link>
                          </div>
                          <div className="col-lg-6">

                          <button 
                            type="button" 
                            className="w-100 btn btn-lg btn-outline-primary light"
                            onClick={() => addToCartHandler(product)}
                          >
                            Add To Cart
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

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