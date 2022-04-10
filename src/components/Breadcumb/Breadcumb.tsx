import React from "react";

function Breadcumb() {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <ol
            className="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="index.html">
                <span
                  className="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li className="active">Login Page</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Breadcumb;
