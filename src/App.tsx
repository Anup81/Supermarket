import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Help from "./pages/Help";
import Login from "./pages/Login";
import { Main } from "./pages/Main";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
