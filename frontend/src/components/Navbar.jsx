import React from "react";
import { Link } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import { FaHome, FaTools, FaConciergeBell, FaInfoCircle, FaSignInAlt, FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Import the required icons

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto">
        {/* Top Section: Logo, Search Bar, and My Account */}
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="text-4xl font-extrabold flex items-center space-x-3">
            <GiCarWheel className="text-yellow-500 text-5xl" /> {/* Wheel icon */}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500">
              SpeedySpare
            </span>
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

          {/* My Account Section */}
          <div className="flex items-center space-x-3">
            <Link to="/profilepage" className="flex items-center space-x-2 hover:text-gray-300">
              <FaUserCircle />
              <span>My Account</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Navigation Links */}
        <div className="py-4">
          <ul className="flex space-x-6 justify-start">
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
            <li>
              <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-300">
                <FaShoppingCart />
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
