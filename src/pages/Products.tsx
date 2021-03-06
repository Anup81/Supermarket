import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import ProductLists from "../components/Products/ProductLists";

const Products = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <ProductLists />
      <Footer />
    </div>
  );
};

export default Products;
