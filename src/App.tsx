import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Help from "./pages/Help";
import Login from "./pages/Login";
import { Main } from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
