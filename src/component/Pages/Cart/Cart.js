import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import charImage from "../../../Images/chair.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="container-lg">
      <div className="d-flex align-items-center">
        <Link className="text-dark fw-bold h-25" to="/">
          {" "}
          <i className="bi bi-chevron-left fs-4 fw-bold"></i>
        </Link>
        <h2 className="my-2 ms-1">Shopping Cart</h2>
      </div>
      <div className="row">
        <div className="col-lg-8 h-auto">
          <div className="mt-3 d-flex w-100">
            <div className="w-25 ">
              <img className="img-fluid rounded-3" src={charImage} alt="char" />
            </div>
            <div className="ms-4 w-100">
              <div className="d-flex justify-content-between">
                <p>Rocking chair</p>
                <p>10,999</p>
              </div>
              <p>Description</p>
              <div className="d-flex justify-content-between">
                <span className=" px-3  d-flex align-items-center ">
                  <Link>
                    <i className="bi bi-dash-circle"></i>
                  </Link>
                  <span
                    className="mx-2 fs-5 text-primary border-1 border border-primary text-center"
                    style={{ width: "2rem" }}
                  >
                    {" "}
                    1{" "}
                  </span>

                  <Link>
                    <i className="bi-plus-circle"></i>
                  </Link>
                </span>
                <button className="mt-1 py-1 px-3 rounded-pill btn btn-outline-danger">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex w-100">
            <div className="w-25 ">
              <img className="img-fluid rounded-3" src={charImage} alt="char" />
            </div>
            <div className="ms-4 w-100">
              <div className="d-flex justify-content-between">
                <p>Rocking chair</p>
                <p>10,999</p>
              </div>
              <p>Description</p>
              <div className="d-flex justify-content-between">
                <span className="px-3  d-flex align-items-center ">
                  <Link>
                    <i className="bi bi-dash-circle "></i>
                  </Link>
                  <span
                    className="mx-2 fs-5 text-primary border-1 border-primary border text-center"
                    style={{ width: "2rem" }}
                  >
                    1
                  </span>
                  <Link>
                    <i className="bi-plus-circle"></i>
                  </Link>
                </span>
                <button className="mt-1 py-1 px-3 rounded-pill btn btn-outline-danger">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 ">
          <div className="section-bg p-3">
            <h5>Order Summary</h5>
          </div>
          <div className="d-flex flex-column p-3 section2-bg">
            <div className="d-flex justify-content-between w-100">
              <div className="w-50 ">
                <p>Rocking-chair</p>
                <Link to="/product" className="text-decoration-none">
                  chair
                </Link>
              </div>
              <div className="w-25 p-3">
                <p className="">₹10,999</p>
              </div>
            </div>
            <div className="d-flex justify-content-between w-100">
              <div className="w-50 ">
                <p>Rocking-chair</p>
                <Link to="/product" className="text-decoration-none">
                  chair
                </Link>
              </div>
              <div className="w-25 p-3">
                <p className="">₹10,999</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center p-3 mt-4 section3-bg">
            <p>Total</p>
            <p>10,999</p>
          </div>
          <div>
            <button
              onClick={() => navigate("/checkout")}
              className="btn btn-primary w-100 rounded-pill mt-4 mb-3"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
