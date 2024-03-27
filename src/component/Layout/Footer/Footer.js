import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const [email, setEmail] = useState();
  return (
    <>
      <div className="container-lg mb-4">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h3>Trsutt.com</h3>
            <div className="d-flex align-items-center">
              <div className="w-50">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control rounded-pill"
                  id="exampleInputPassword1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="w-25 ms-4">
                <input
                  type="submit"
                  name="subscribe"
                  placeholder="Enter your email"
                  className="form-control rounded-pill bg-primary"
                  id="exampleInputPassword1"
                  value="subscribe"
                />
              </div>
            </div>
          </div>
          <div className="  col-lg-2 col-md-4 mt-4 col-sm-4 small-screen-d-none">
            <h4>Coulmn One</h4>
            <div className="d-flex flex-column">
              <Link className="text-decoration-none text-dark">link1</Link>
              <Link className="text-decoration-none text-dark">link2</Link>
              <Link className="text-decoration-none text-dark">link3</Link>
              <Link className="text-decoration-none text-dark">link4</Link>
              <Link className="text-decoration-none text-dark">link5</Link>
            </div>
          </div>
          <div className=" col-lg-2 col-md-4 mt-4 col-sm-4 small-screen-d-none">
            <h4>Coulmn Two</h4>
            <div className="d-flex flex-column">
              <Link className="text-decoration-none text-dark">link6</Link>
              <Link className="text-decoration-none text-dark">link7</Link>
              <Link className="text-decoration-none text-dark">link8</Link>
              <Link className="text-decoration-none text-dark">link9</Link>
              <Link className="text-decoration-none text-dark">link10</Link>
            </div>
          </div>
          <div className=" col-lg-2 col-md-4 mt-4 col-sm-4">
            <h4>Follow Us</h4>
            <div className="d-flex flex-column small-screen">
              <Link className="text-decoration-none text-dark">
                <i className="bi bi-facebook me-2"></i>{" "}
                <span className="small-screen-d-none">Facebook</span>
              </Link>
              <Link className="text-decoration-none text-dark">
                <i className="bi bi-instagram me-2"></i>{" "}
                <span className="small-screen-d-none">Instagram</span>
              </Link>
              <Link className="text-decoration-none text-dark">
                <i className="bi bi-twitter-x me-2"></i>{" "}
                <span className="small-screen-d-none">X</span>
              </Link>
              <Link className="text-decoration-none text-dark">
                <i className="bi bi-linkedin me-2"></i>{" "}
                <span className="small-screen-d-none">Linkedin</span>
              </Link>
              <Link className="text-decoration-none text-dark">
                <i className="bi bi-youtube me-2"></i>{" "}
                <span className="small-screen-d-none">Youtube</span>
              </Link>
            </div>
          </div>
        </div>

        <hr className="mt-5" />

        <div className="d-flex justify-content-between for-small">
          <div>
            <p>© 2024. All rights reserved.</p>
          </div>
          <div>
            <Link className="text-decoration-none text-dark small-link-font">
              Privacy Policy
            </Link>
            <Link className="text-decoration-none text-dark small-link-font mx-4">
              Terms of Service
            </Link>
            <Link className="text-decoration-none text-dark small-link-font">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
