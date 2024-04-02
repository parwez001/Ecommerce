import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import charImage from "../../../Images/chair.png";
import { useSelector } from "react-redux";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [cartItem, setCartItem] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const increaseQuantity = async (pId, qty) => {
    try {
      const userId = user.user.id;
      const res = await axios.put(`http://172.16.6.230:8080/cart`, {
        userId,
        pId,
        quantity: qty + 1,
      });

      console.log("increase res ", res);
      getCartItem();
    } catch (error) {}
  };
  const decreaseQuantity = async (pId, qty) => {
    if (qty === 1) return;
    try {
      const userId = user.user.id;
      const res = await axios.put(`http://172.16.6.230:8080/cart`, {
        userId,
        pId,
        quantity: qty - 1,
      });

      console.log("decrease res ", res);
      getCartItem();
    } catch (error) {}
  };
  const removeItem = async (pId) => {
    try {
      const userId = user.user.id;
      const res = await axios.delete(
        `http://172.16.6.230:8080/cart/${userId}/${pId}`
      );
      console.log("remove res ", res);
      getCartItem();
    } catch (error) {}
  };
  const getCartItem = async () => {
    try {
      const userId = user.user.id;
      const res = await axios.get(`http://172.16.6.230:8080/cart/${userId}`);
      console.log("cart item", res.data);
      setCartItem(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const totalPrice =
    cartItem &&
    cartItem.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.totalPrice;
    }, 0);
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    else getCartItem();
  }, [isAuthenticated]);
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
          {!isAuthenticated ? (
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
          {isAuthenticated && (
            <div className="row">
              <h4 className="fw-bold">Order Summary</h4>
              <div className="col-lg-8 h-auto">
                {cartItem &&
                  cartItem.map((item) => (
                    <div className="mt-3 d-flex w-100">
                      <div className="w-25 ">
                        <img
                          className="img-fluid rounded-3"
                          src={item.product.imageUrl}
                          alt="char"
                        />
                      </div>
                      <div className="ms-4 w-100">
                        <div className="d-flex justify-content-between">
                          <p>{item.product.productName}</p>
                          <p>₹{item.product.productPrice}</p>
                        </div>
                        <p>{item.product.productDescription}</p>
                        <div className="d-flex justify-content-between">
                          <span className="px-3  d-flex align-items-center ">
                            <Link
                              onClick={() =>
                                decreaseQuantity(item.product.id, item.quantity)
                              }
                            >
                              <i className="bi bi-dash-circle "></i>
                            </Link>
                            <span
                              className="mx-2 fs-5 text-primary border-1 border-primary border text-center"
                              style={{ width: "2rem" }}
                            >
                              {item.quantity}
                            </span>
                            <Link
                              onClick={() =>
                                increaseQuantity(item.product.id, item.quantity)
                              }
                            >
                              <i className="bi-plus-circle"></i>
                            </Link>
                          </span>
                          <button
                            className="mt-1 py-1 px-3 rounded-pill btn btn-outline-danger"
                            onClick={() => removeItem(item.product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

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
            {cartItem &&
              cartItem.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between w-100"
                >
                  <div className="w-50 ">
                    <p>{item.product.productName}</p>
                    <Link to="/product" className="text-decoration-none">
                      {item.product.productDescription}
                    </Link>
                  </div>
                  <div className="w-25 p-3">
                    <p className="">₹{item.totalPrice}</p>
                  </div>
                </div>
              ))}
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
            <p>₹{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
