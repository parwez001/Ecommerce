import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Header from "./component/Layout/Header/Header";
import Login from "./component/Pages/Login";
import { Register } from "./component/Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./component/Pages/Cart/Cart";
import Checkout from "./component/Pages/Checkout/Checkout";
import Footer from "./component/Layout/Footer/Footer";

function App() {
  return (
    <>
      <ToastContainer />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
