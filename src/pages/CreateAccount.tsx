import React from "react";
import Breadcumb from "../components/Breadcumb/Breadcumb";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Registration from "../components/Registration/Registration";

function CreateAccount() {
  return (
    <>
      <Header />
      <Navigation />
      <Breadcumb />
      <Registration />
      <Footer />
    </>
  );
}

export default CreateAccount;
