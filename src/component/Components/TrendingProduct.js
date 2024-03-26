import React from "react";

const TrendingProduct = ({ image, name, price }) => {
  // console.log("image is ", image);
  //   const { src, name, price, category } = props;
  //   console.log("src", props);
  return (
    <div className="card rounded-5" style={{ width: "20rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt="image1"
        style={{ width: "100%", height: "17em" }}
      />
      <div className="card-body">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h6 className="card-title">{name}</h6>
          <p className="fw-bold">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
