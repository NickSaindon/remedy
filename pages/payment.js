import { useEffect, useContext, useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
import { ToastContainer, toast, Slide } from "react-toastify";

const Payment = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const [isChecked, setIsChecked] = useState(false);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      toast.error("Payment method is required", {
        theme: "colored"
      });
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
      Cookies.set('paymentMethod', paymentMethod);
      router.push('/placeorder');
    }
  };
    
  return (
    <Layout>
      <div className="payment-container">
        <ToastContainer 
          position="top-center" 
          draggable={false} 
          transition={Slide} 
          autoClose={3000}
          hideProgressBar={true}
          className="toast-alert"
        />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <h1 className="text-center">Payment Method</h1>
              <form onSubmit={submitHandler}>
                <div 
                  className="payment-radio-btn"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioFilter" value="PayPal" id="paypal" />
                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioFilter" value="Stripe" id="stripe" />
                    <label className="form-check-label text-nowrap" htmlFor="stripe">Stripe</label>
                </div>
                </div>
                <button 
                  className="w-100 btn btn-lg btn-outline-primary light" 
                  type="submit"
                >
                  Continue
                </button>
                <button 
                  className="w-100 btn btn-lg btn-outline-primary light" 
                  type="button"
                  onClick={() => router.push('/shipping')}
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;