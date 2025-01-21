import React from "react";
import { motion } from "framer-motion";

/**
 * ProductCard Component
 * Renders an individual product card with animations.
 * 
 * Props:
 * @param {string} productName - The name of the product.
 * @param {string} productImage - The URL of the product image.
 * @param {number|null} productPrice - The price of the product (can be null for non-priced items).
 */
const ProductCard = ({ productName, productImage, productPrice }) => {
  return (
    <motion.div
      className="p-4 border rounded hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={productImage}
        alt={productName}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{productName}</h3>
      {productPrice !== null && (
        <p className="text-gray-600 mb-2">₹{productPrice.toLocaleString("en-IN")}</p>
      )}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;