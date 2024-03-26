import React from "react";

const Product = ({ image, name, price, category }) => {
  // console.log("image is ", image);
  //   const { src, name, price, category } = props;
  //   console.log("src", props);
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
        <button className="btn btn-primary w-100 rounded-pill">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
