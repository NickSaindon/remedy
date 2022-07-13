import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ title, description, children}) {


  return (
    <div>
      <Head>
      <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Navbar />
        <div>
            { children }
        </div>
      <Footer />
    </div>
  );
}

export default Layout;