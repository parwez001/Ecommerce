import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    REGISTER_USER_REQUEST: (state) => {
      state.loading = true;
    },
    REGISTER_USER_SUCCESS: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    REGISTER_USER_FAIL: (state) => {
      state.loading = false;
    },
    Login_USER_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_USER_SUCCESS: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    LOGIN_USER_FAIL: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    },
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
