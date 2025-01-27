import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTools, FaConciergeBell, FaInfoCircle, FaSignInAlt, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import img2 from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto py-0">
        {/* Top Section: Logo, Search Bar, and My Account with Cart */}
        <div className="flex items-center justify-between ">
          {/* Logo Section */}
          <div flex items-center space-x-3 justify-start >
            {/* Replace this with your logo image */}
            <img 
              src={img2} // Replace this with the actual path to your logo image
              alt="SpeedySpare Logo"
              className="h-20 object-contain w-full pl-10 "
            />
          </div>

          {/* Search Bar */}
          <div className="relative w-2/3 md:w-1/2 mx-auto">
            <input
              type="text"
              placeholder="Search for car parts..."
              className="px-6 py-3 w-full bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 absolute right-0 top-0">
              Search
            </button>
          </div>

          {/* My Account and Cart Section */}
          <div className="flex items-center space-x-6">
            <Link to="/profilepage" className="flex items-center space-x-2 hover:text-gray-300">
              <FaUserCircle />
              <span>My Account</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-300">
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Navigation Links */}
        <div className="py-2">
          <ul className="flex space-x-6 justify-center">
            <li>
              <Link to="/home" className="flex items-center space-x-2 hover:text-gray-300">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="flex items-center space-x-2 hover:text-gray-300">
                <FaTools />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center space-x-2 hover:text-gray-300">
                <FaConciergeBell />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300">
                <FaInfoCircle />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center space-x-2 hover:text-gray-300">
                <FaSignInAlt />
                <span>Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
