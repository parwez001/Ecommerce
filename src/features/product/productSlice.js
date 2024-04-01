import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    ALL_PRODUCTS_REQUEST: (state) => {
      state.loading = true;
    },
    ALL_PRODUCTS_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    ALL_PRODUCTS_FAIL: (state) => {
      state.loading = false;
    },
  },
});

export const { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL } =
  productSlice.actions;
export default productSlice.reducer;
