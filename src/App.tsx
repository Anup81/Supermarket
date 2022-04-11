import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import Help from "./pages/Help";
import Login from "./pages/Login";
import { Main } from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import DalleMomos from "./pages/Products/DalleMomos";
import Signatures from "./pages/Products/Signatures";
import Snacks from "./pages/Products/Snacks";
import Short_Code from "./pages/Short_Code";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/shortcode" element={<Short_Code />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/dalle%20momos" element={<DalleMomos />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/signatures" element={<Signatures />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
