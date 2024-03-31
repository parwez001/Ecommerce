import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  Login_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../../features/user/userSlice";
import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  dispatch(REGISTER_USER_REQUEST());
  try {
    const { name, phone, email, password } = userData;
    const res = await axios.post("http://localhost:8080/api/register", {
      name,
      email,
      phoneNumber: phone,
      password,
    });
    // console.log("data is ", res.data);
    dispatch(REGISTER_USER_SUCCESS(res.data));
  } catch (err) {
    dispatch(REGISTER_USER_FAIL());
    // Handle error if needed
  }
};

// login user
export const loginUser = (email, password) => async (dispatch) => {
  dispatch(Login_USER_REQUEST());

  try {
    const res = await axios.post("http://localhost:8080/api/login", {
      email,
      password,
    });
    console.log("data is ", res.data);
    if (res?.data?.success) {
      localStorage.setItem("authId", res?.data?.user?.id);
      dispatch(LOGIN_USER_SUCCESS(res.data));
    } else {
      dispatch(LOGIN_USER_FAIL());
    }
  } catch (e) {
    dispatch(LOGIN_USER_FAIL());
  }
};

// logout user

export const logoutUser = () => async (dispatch) => {
  dispatch(LOGOUT_USER_REQUEST());

  try {
    localStorage.removeItem("authId");
    dispatch(LOGOUT_USER_SUCCESS());
  } catch (err) {
    dispatch(LOGOUT_USER_FAIL());
  }
};
