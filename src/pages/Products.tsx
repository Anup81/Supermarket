import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import ProductLists from "../components/Products/ProductLists";

const Products = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Breadcrumb />
      <ProductLists />
      <Footer />
    </div>
  );
};

export default Products;
