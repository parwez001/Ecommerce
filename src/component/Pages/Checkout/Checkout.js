import React, { useState } from "react";
import { Link } from "react-router-dom";
import charImage from "../../../Images/chair.png";

const Checkout = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container-lg mb-3">
      <div className="d-flex align-items-center">
        <Link className="text-dark fw-bold h-25" to="/cart">
          {" "}
          <i className="bi bi-chevron-left fs-4 fw-bold"></i>
        </Link>
        <h2 className="my-2 ms-1">Checkout</h2>
      </div>
      <div className="row">
        <div className="col-lg-8 h-auto mb-3">
          {!isLogin ? (
            <div className="d-flex justify-content-between w-100 mt-2 align-items-center">
              <div className="">
                <h4>Sign in</h4>
                <p className=" fw-light">
                  Sign in to proceed with the checkout
                </p>
                <Link
                  className="btn btn-primary rounded-pill px-3"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Sign in
                </Link>
              </div>
              <div>
                <p className=" fw-bold">₹10,999</p>
              </div>
            </div>
          ) : (
            <div>
              <div className=" d-flex  justify-content-between w-100">
                <h4>
                  Delivery Address <i className="bi bi-check text-primary"></i>
                </h4>
                <Link className="btn btn-outline-primary rounded-pill px-2">
                  Add new address
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <div>
                  <h5 className="d-inline">parwez zafar</h5>
                  <span className="mx-2 text-primary fw-bold">Home</span>
                  <span className="fw-bold">+91 1234567890</span> |{" "}
                  <span className="fw-bold">trustt@trustt.com</span>
                  <p>
                    146nDebai Pukur Road, Jora Bari, Konnagar, West Bengal -
                    721301
                  </p>
                </div>
              </div>
            </div>
          )}

          <hr />
          {isLogin && (
            <div className="row">
              <h4 className="fw-bold">Order Summary</h4>
              <div className="col-lg-8 h-auto">
                <div className="mt-3 d-flex w-100">
                  <div className="w-25 ">
                    <img
                      className="img-fluid rounded-3"
                      src={charImage}
                      alt="char"
                    />
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
                <div className="mt-3 d-flex w-100">
                  <div className="w-25 ">
                    <img
                      className="img-fluid rounded-3"
                      src={charImage}
                      alt="char"
                    />
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

                <div className="my-4 d-flex justify-content-between">
                  <p className="d-inline">
                    Invoice will be sent to - trustt@trustt.com
                  </p>
                  <button className="mt-1 px-4 rounded-pill btn btn-primary">
                    continue
                  </button>
                </div>
              </div>
            </div>
          )}
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

          <div className="d-flex justify-content-between align-items-center p-3 section3-bg">
            <p>Delivery charges</p>
            <p>
              <span className=" text-decoration-line-through">₹150</span>
              <span className=" ms-1 text-success">Free</span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center p-3 mt-4 section3-bg">
            <p>Total</p>
            <p>10,999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
