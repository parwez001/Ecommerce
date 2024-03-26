import React from "react";
import { Link } from "react-router-dom";
import trusttLogo from "../../../Images/trusttLogo.png";

const Header = () => {
  return (
    <>
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            className="navbar-brand d-inline"
            to="/"
            style={{ width: "30px" }}
          >
            <img src={trusttLogo} alt="logo" className="w-100 h-100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
            <form className="d-flex  mb-2 mb-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-primary rounded-pill p-1 w-100 ms-2 me-3"
                  aria-current="page"
                  to="/cart"
                >
                  <i className="bi bi-cart-check"></i>
                  <span className="ms-1">1</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary rounded-pill p-1 w-100 me-3"
                  aria-current="page"
                  to="/login"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
