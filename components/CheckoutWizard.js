import { useRouter } from 'next/router';

const CheckoutWizard = () => {
  const router = useRouter();

  return (
    <div className="stepper-container">
        <div className="container">
        <div className="steps">
    <div id="line" value={0} max={100} ></div>
    <div className="step-item">
        {router.asPath == "/shipping" ? (
            <div className="step-circle-green text-center">
                1
            </div>
        ) : router.asPath !== "/shipping" ? (
            <div className="step-circle-green-fill text-center">
                <i className="bi bi-check-lg"></i>
            </div>
        ) : (
            <div className="step-circle text-center">
                1
            </div>
        )}
        <div className="step-title-one">
            Shipping Address
        </div>
    </div>
    <div className="step-item">
        {router.asPath == "/payment" ? (
            <div className="step-circle-green text-center">
                2
            </div>
        ) : router.asPath !== "/payment" || router.asPath !== "/shippment" ? (
            <div className="step-circle-green-fill text-center">
                <i className="bi bi-check-lg"></i>
            </div>
        ) : (
            <div className="step-circle text-center">
                2
            </div>
        )}
        <div className="step-title-two">
            Payment Method
        </div>
    </div>
    <div className="step-item">
        {router.asPath == "/placeorder" ? (
            <div className="step-circle-green text-center">
                3
            </div>
        ) : router.asPath !== "/payment" || router.asPath !== "/shippment" ? (
            <div className="step-circle-green-fill text-center">
                <i className="bi bi-check-lg"></i>
            </div>
        ) : (
            <div className="step-circle text-center">
                3
            </div>
        )}
        <div className="step-title-three">
            Place Order
        </div>
    </div>
        </div>
        </div>

    </div>
  );
};

export default CheckoutWizard;