import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // register
    REGISTER_USER_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    REGISTER_USER_SUCCESS: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    REGISTER_USER_FAIL: (state, action) => {
      state.loading = false;
      console.log("reducer ", action.payload);
      state.error = action.payload;
    },
    Login_USER_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null;
    },

    // login
    LOGIN_USER_SUCCESS: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    LOGIN_USER_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      console.log(action.payload.message);
      state.error = action.payload.message;
    },

    // logout
    LOGOUT_USER_REQUEST: (state) => {
      state.isAuthenticated = true;
    },
    LOGOUT_USER_SUCCESS: (state) => {
      state.isAuthenticated = false;
    },
    LOGOUT_USER_FAIL: (state) => {
      state.isAuthenticated = true;
    },
  },
});
export const {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  Login_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} = userSlice.actions;
export default userSlice.reducer;
