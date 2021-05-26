import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Helmet from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Factura Agil</title>
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
        <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
