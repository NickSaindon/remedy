import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import '../styles/globals.scss';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from '../utils/Store';
import PageTransitions from '../components/PageTransitions';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <StoreProvider>
      <PayPalScriptProvider>
        <PageTransitions 
          route={router.asPath}
        >
            <Component {...pageProps} />
        </PageTransitions>
      </PayPalScriptProvider>
    </StoreProvider>
  )
}

export default MyApp;
