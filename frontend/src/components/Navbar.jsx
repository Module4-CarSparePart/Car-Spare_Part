import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
<div className="text-2xl font-bold">
<img 
  src={logo} 
  alt="CarSpareShop Logo" 
  style={{ height: "150px", width: "300" }} 
/>

</div>


        {/* Search Bar */}
  <div className="relative mt-8">
    <input
      type="text"
      placeholder="Search for car parts..."
      className="px-4 py-2 w-80 md:w-96 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
      Search
    </button>
  </div>

        {/* Navigation Links (Right) */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
