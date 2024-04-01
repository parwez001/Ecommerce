import axios from "axios";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
} from "../../features/product/productSlice";

export const getAllProducts = () => async (dispatch) => {
  dispatch(ALL_PRODUCTS_REQUEST());

  try {
    const res = await axios.get("http://localhost:8080/products");
    dispatch(ALL_PRODUCTS_SUCCESS(res?.data));
  } catch (error) {
    dispatch(ALL_PRODUCTS_FAIL());
  }
};
