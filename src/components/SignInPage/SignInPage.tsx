import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../Breadcumb/Breadcumb";

const SignInPage = () => {
  const handleLogin = async (e: any) => {
    e.preventDefault();

    const loginData = {
      grant_type: process.env.REACT_APP_GRANT_TYPE,
      email: e.target.email.value,
      username: e.target.email.value,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENTSECRET,
      password: e.target.password.value,
    };
    // console.log(loginData);

    fetch("https://uat.ordering-dalle.ekbana.net/api/v4/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.expires_in) {
          alert("You are logged in successfully.");
        } else {
          alert("Login failed!");
        }
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("warehouse_id", data.warehouse_id);
      });
  };

  return (
    <div>
      <Breadcumb name="Login" />
      <div className="login">
        <div className="container">
          <h2>Login Form</h2>

          <div
            className="login-form-grids animated wow slideInUp"
            data-wow-delay=".5s"
          >
            <form onSubmit={handleLogin}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <div className="forgot">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
          <h4>For New People</h4>
          <p>
            <Link to="/register">Register Here</Link> (Or) go back to{" "}
            <Link to="/">
              Home
              <span
                className="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              ></span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
