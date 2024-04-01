import React, { useState, useEffect } from "react";
import homeImage from "../../Images/homebg.png";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Product from "../Components/Product";
import { winterProductData } from "../../data/winterProductData";
import { chairProductData } from "../../data/chairProductData";
import { autumnProductData } from "../../data/autumnProductData";
import TrendingProduct from "../Components/TrendingProduct";
import memberImage from "../../Images/member.jpg";
import Footer from "../Layout/Footer/Footer";
import axios from "axios";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
const Home = () => {
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [winterProductData, setwinterProductData] = useState();
  const { products, loading } = useSelector((state) => state.product);
  // console.log("data is ", winterProductData);
  useEffect(() => {
    dispatch(getAllProducts());
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch]);
  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  let ProductCount = 3;
  if (windowSize.innerWidth <= 512) {
    ProductCount = 1;
  } else if (windowSize.innerWidth > 512 && windowSize.innerWidth <= 775) {
    ProductCount = 2;
  } else if (windowSize.innerWidth > 775 && windowSize.innerWidth <= 1045) {
    ProductCount = 3;
  } else {
    ProductCount = 4;
  }
  return (
    <>
      <div className="container-lg">
        <section id="hero" className=" position-relative image-section">
          <div className="position-absolute ms-4 mt-5 tagname text-white">
            #Autumn_Sale_2024
          </div>
          <div className="position-absolute ms-4 text-white home-info">
            <div className="">Shop the Latest </div>
            <div className="">Trends in Fashion</div>
            <div className="">
              <a href="/products" className="btn btn-light text-primary px-3">
                Explore Sale<i className="bi bi-caret-right"></i>
              </a>
            </div>
          </div>
          <div style={{ height: "100%", overflow: "hidden" }}>
            {/* Apply styles to the img element */}
            <img
              className="img-fluid h-100"
              src={homeImage}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </section>

        <section className="my-4 d-flex justify-content-between section-2">
          <div className="w-75 section-2-first-div">
            <p>Winter is coming... so have offers.</p>
            <h3 className=" text-primary fw-bold section-2-heading">
              “Offer-fall” in before winter
            </h3>
            <p>
              Curated collection at market crash price for all your winter needs
            </p>
          </div>
          <button className="btn btn-outline-primary rounded-pill px-4 h-25">
            view all
          </button>
        </section>

        <section className="mb-5">
          <Swiper
            slidesPerView={ProductCount}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ height: "28em" }}
          >
            {products &&
              products.map((item, i) => (
                <SwiperSlide key={i}>
                  <Product
                    image={item.src}
                    name={item.productName}
                    price={item.productPrice}
                    category={item.productDescription}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>

        <section className="my-4 d-flex justify-content-between section-2">
          <div className="w-75 section-2-first-div">
            <p>The most relaxed position in your choices </p>
            <h3 className=" text-primary fw-bold section-2-heading">
              Sitting arrangements sorted
            </h3>
            <p>
              Curated collection at market crash price for all your Chair needs
            </p>
          </div>
          <button className="btn btn-outline-primary rounded-pill px-4 h-25">
            view all
          </button>
        </section>

        <section className="mb-5">
          <Swiper
            slidesPerView={ProductCount}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ height: "29em" }}
          >
            {products &&
              products.map((item, i) => (
                <SwiperSlide key={i}>
                  <Product
                    image={item.src}
                    name={item.productName}
                    price={item.productPrice}
                    category={item.productDescription}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>

        <section className="mb-4">
          <p className="text-center fw-bold">#Autumn_Sale_2023</p>
          <h2 className="text-center fw-bold ">Trending products on Offers</h2>
        </section>

        <section className="mb-4">
          <div
            className="w-100 d-flex justify-content-around align-items-center flex-wrap"
            style={{ minWidth: "300px" }}
          >
            {autumnProductData &&
              autumnProductData.map((item, i) => (
                // <SwiperSlide key={i}>
                <TrendingProduct
                  key={i}
                  image={item.src}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  className="mb-4"
                />
                // </SwiperSlide>
              ))}
          </div>
          <div className="w-100 m-auto mt-3 d-flex justify-content-center">
            <button className="btn btn-primary rounded-pill mx-atuo">
              Explore #Autumn_Sale_2024
            </button>
          </div>
        </section>

        <section>
          <div
            className="w-100 d-flex align-items-center flex-wrap justify-content-around"
            style={{ minWidth: "50%" }}
          >
            <div className="">
              <h2>Member yet?</h2>
              <p>Get exclusive perks and early access.</p>
            </div>
            <div className="">
              <button className="btn btn-primary rounded-pill px-4 d-inline">
                join now
              </button>
              <p className="d-inline ms-3 text-primary">
                Know more <i className="bi bi-chevron-right"></i>
              </p>
            </div>
          </div>
          <div className="member-height mb-5 mt-2">
            <img
              src={memberImage}
              alt="member"
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
