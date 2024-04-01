import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../Images/login.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  // console.log(email + " " + password);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (isAuthenticated) {
      toast.success(user.message);
      navigate("/");
    }
    if (error) toast.error(error);
  }, [isAuthenticated, navigate, error, dispatch]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img className="img-fluid" src={loginImage} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
            <h1>Sign In</h1>
            <div className="d-flex">
              <p>Enter your email & password below to sign in</p>
            </div>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character."
                  required
                />
              </div>

              <div className="d-flex justify-content-between">
                <Link className="text-decoration-none" to="/forgot-password">
                  Forgot Password
                </Link>
                <Link className="text-decoration-none" to="/register">
                  Sign up
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill mt-2"
              >
                {loading ? <>Loadin...</> : <> Log in </>}
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

export default Login;
