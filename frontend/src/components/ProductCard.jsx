import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * ProductCard Component
 * Renders an individual product card with animations.
 */
const ProductCard = ({ productId, productName, productImage, productPrice }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${productId}`);
  };

  return (
    
    <motion.div
      className="p-3 border rounded hover:shadow-md transition-shadow duration-300 w-64"
      whileHover={{ scale: 1.05 }}
    >
      {/* Product Image */}
      <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded mb-3">
        <img
          src={productImage}
          alt={productName}
          className="h-full object-contain"
          onError={(e) => (e.target.src = "/placeholder-image.png")} // Fallback image
        />
      </div>

      {/* Product Name */}
      <h3 className="text-base font-semibold mb-1">{productName}</h3>

      {/* Product Price */}
      {productPrice !== null && (
        <p className="text-sm text-gray-600 mb-2">
          ₹{productPrice.toLocaleString("en-IN")}
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-1 text-sm rounded hover:bg-blue-600">
          Add to Cart
        </button>
        <button
          onClick={handleViewDetails}
          className="bg-blue-400 text-white px-4 py-1 text-sm rounded hover:bg-blue-500"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

// Validate prop types
ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])])
    .isRequired,
};

// Default props for fallback values
ProductCard.defaultProps = {
  productImage: null,
  productPrice: null,
};

export default ProductCard;
