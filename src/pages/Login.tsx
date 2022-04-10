import React from "react";
import Breadcumb from "../components/Breadcumb/Breadcumb";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SignInPage from "../components/SignInPage/SignInPage";

function Login() {
  return (
    <div>
      <Header />
      <Navigation />
      <Breadcumb />
      <SignInPage />
      <Footer />
    </div>
  );
}

export default Login;
