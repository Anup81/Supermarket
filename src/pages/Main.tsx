import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";

export const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />

      <Link to="/help">abcd</Link>
    </>
  );
};
