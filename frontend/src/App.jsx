import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Add Navigate import for redirect
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductsDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          {/* Default route to redirect to login page */}
          <Route path="/" element={<Navigate to="/home" />} /> 
          <Route path="/register" element={<Registration/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reset-password/:token" element={<ResetPassword/>}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} /> {/* Home route */}
          <Route path="/products" element={<Product />} />
          <Route path="/product/:partNumber" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
