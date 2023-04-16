import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';


const Layout = ({ children , description, keywords, author, title}) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "81vh" }}>
      <Toaster />
        {children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps ={
    title:'Ecommerce app - default Page',
    description:'mern stack projcet 2023',
    keywords:'mern, react, node, mongodb, 2023',
    author:'WebTrue'
}

export default Layout;


// hudao hudai hudai hudaihudai
