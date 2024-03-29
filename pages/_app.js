import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-quill/dist/quill.snow.css';
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
      <PayPalScriptProvider deferLoading={true}>
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
