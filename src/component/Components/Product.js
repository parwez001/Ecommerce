import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Product = ({ image, name, price, category, pId }) => {
  // console.log("image is ", image);
  //   const { src, name, price, category } = props;
  //   console.log("src", props);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const addToCart = async () => {
    try {
      if (!isAuthenticated) {
        navigate("/login");
        return;
      }
      const userId = user.user.id;
      const quantity = 1;
      console.log("user id is ", userId, " producut Id is ", pId);
      const res = await axios.post("http://172.16.6.230:8080/cart/add", {
        userId,
        pId,
        quantity,
      });
      console.log("response is ", res);
    } catch (error) {}
  };
  return (
    <div className="card rounded-3" style={{ width: "15rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt="image1"
        style={{ width: "100%", height: "17em" }}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="card-title">{name}</h6>
          <p className="fw-bold">₹{price}</p>
        </div>
        <p className="card-text">{category}</p>
        <button
          className="btn btn-primary w-100 rounded-pill"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
