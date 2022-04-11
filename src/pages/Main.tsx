import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import Home from "../components/Home/Home";

const Home = lazy(() => import("../components/Home/Home"));

export const Main = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Please Wait!! It's Loading!</div>}>
        <Home />
      </Suspense>
      <Footer />
    </>
  );
};
