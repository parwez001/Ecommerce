import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
// import { cartData } from "../../../data/cartData";
import axios from "axios";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();

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

  // const decreaseQuantity = (id) => {
  //   setQuantities((prevQuantities) =>
  //     prevQuantities.map((quantity) =>
  //       quantity.id === id && quantity.quantity > 1
  //         ? { ...quantity, quantity: quantity.quantity - 1 }
  //         : quantity
  //     )
  //   );
  // };
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [cartItem, setCartItem] = useState();

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
  const totalPrice =
    cartItem &&
    cartItem.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.totalPrice;
    }, 0);
  // console.log("total price", totalPrice);

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    else getCartItem();
  }, [isAuthenticated]);

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
          {cartItem &&
            cartItem.map((item, i) => (
              <div className="mt-3 d-flex w-100" key={i}>
                <div className="w-25 ">
                  <img
                    className="img-fluid rounded-3"
                    src={item?.product?.imageUrl}
                    alt="char"
                  />
                </div>
                <div className="ms-4 w-100">
                  <div className="d-flex justify-content-between">
                    <p>{item.product.productName}</p>
                    <p>{item.product.productPrice}</p>
                  </div>
                  <p>{item.product.productDescription}</p>
                  <div className="d-flex justify-content-between">
                    <span className=" px-3  d-flex align-items-center ">
                      <Link
                        onClick={() =>
                          decreaseQuantity(item.product.id, item.quantity)
                        }
                      >
                        <i className="bi bi-dash-circle"></i>
                      </Link>
                      <span
                        className="mx-2 fs-5 text-primary border-1 border border-primary text-center"
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
                    <Link to="/" className="text-decoration-none">
                      {item.product.productDescription}
                    </Link>
                  </div>
                  <div className="w-25 p-3">
                    <p className="">₹{item.totalPrice}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-between align-items-center p-3 mt-4 section3-bg">
            <p>Total</p>
            <p>₹{totalPrice}</p>
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
