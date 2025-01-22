import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * ProductCard Component
 * Renders an individual product card with animations.
 */
const ProductCard = ({ productName, productImage, productPrice }) => {
  console.log("Product Image URL:", productImage);
  console.log("Product Name:", productName);

  return (
    <motion.div
      className="p-4 border rounded hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={productImage}
        alt={productName}
        className="w-full h-48 object-cover rounded mb-4"
        onError={(e) => (e.target.src =productImage)}
      />
      <h3 className="text-lg font-semibold mb-2">{productName}</h3>
      {productPrice !== null && (
        <p className="text-gray-600 mb-2">
          ₹{productPrice.toLocaleString("en-IN")}
        </p>
      )}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </motion.div>
  );
};

// Validate prop types
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired, // Ensure productName is a string and required
  productImage: PropTypes.string.isRequired, // Ensure productImage is a string and required
  productPrice: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]), // Allow productPrice to be null
  ]).isRequired,
};


// Default props for fallback values
ProductCard.defaultProps = {
  productImage: null, // Placeholder image as default
  productPrice: null, // Default price to null
};

export default ProductCard;
