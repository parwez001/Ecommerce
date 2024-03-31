import React, { useEffect, useState } from "react";
import RegisterImage from "../../Images/register.png";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { registerUser } from "../actions/userAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  // console.log(name, "", email, "", password, " ", confirmPassword);
  console.log(loading);
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, phone, email, password }));
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img className="img-fluid" src={RegisterImage} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
            <h1>Sign Up</h1>
            <div className="d-flex">
              <p>Enter your details below to create an account</p>
            </div>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="form-control"
                  id="exampleInputPhone"
                  aria-describedby="phonelHelp"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter Password"
                  className="form-control"
                  id="exampleInputconfirmPassword1"
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <span>Already a customer?</span>{" "}
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill mt-2"
              >
                {loading ? <>loading...</> : <>Sign up</>}
              </button>
            </form>

            <div className="mt-5 w-100 border border-top"></div>
            <p className="text-center text-secondary">Or continue with</p>
            <div className="d-flex align-items-center justify-content-center">
              <i className="bi bi-google"></i>
              <i className="bi bi-facebook mx-5"></i>
              <i className="bi bi-apple"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
