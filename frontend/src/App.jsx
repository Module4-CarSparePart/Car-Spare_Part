import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Add Navigate import for redirect
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductsDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import AddProductPage from "./pages/AddProduct";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import CartPage from "./pages/Cart";


export const App = () => {
  return (
    <Router>
      {/* Navbar remains constant across pages */}
      <Navbar />
      <div>
        <Routes>
          {/* Default route redirects to /login */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* User Authentication Routes */}
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Main Application Routes */}
          <Route path="/home" element={<Home />} /> {/* Home route */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

          {/* Product Management Routes */}
          <Route path="/products" element={<Product />} /> {/* View All Products */}
          <Route path="/product/:id" element={<ProductDetails />} />{/* View Product Details */}
          <Route path="/add-product" element={<AddProductPage />} /> {/* Add a New Product */}

          {/* User Profile Route */}
          <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      </div>
      {/* Footer remains constant across pages */}
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
