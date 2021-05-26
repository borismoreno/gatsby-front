import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Helmet from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{lang:'es', translate:'no'}}>
        <title>Factura Agil</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Emision comprobantes electronicos Ecuador."></meta>
      </Helmet>
      <Header />
        <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
