import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * ProductCard Component
 * Renders an individual product card with a professional hover animation.
 */
const ProductCard = ({
  productId,
  productName,
  productImage,
  productPrice,
}) => {
  const navigate = useNavigate();
  console.log(productId);
  console.log(productName);
  
  
  const handleViewDetails = () => {
    navigate(`/product/${productId}`);
  };
  

  
  return (
    <motion.div
      className="p-4 border rounded-lg bg-white cursor-pointer"
      whileHover={{ scale: 1.05 }} // Restored the scale animation on hover
      transition={{ duration: 0.3 }} // Smooth scaling
      style={{
        borderColor: "darkblue", // Matches theme
      }}
    >
      <img
        src={productImage}
        alt={productName}
        className="w-full h-48 object-cover rounded mb-4"
        onError={(e) => (e.target.src = productImage)}
      />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{productName}</h3>
      {productPrice !== null && (
        <p className="text-gray-600 text-sm mb-3">
          ₹{productPrice.toLocaleString("en-IN")}
        </p>
      )}
      <div className="flex justify-between space-x-2">
        <button
          className="text-sm px-4 py-2 rounded transition-all duration-300"
          style={{
            backgroundColor: "orange", // Accent color
            color: "white", // Button text color
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "darkorange") // Darker orange on hover
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "orange") // Original color
          }
        >
          Add to Cart
        </button>
        <button
          onClick={handleViewDetails}
          className="text-sm px-4 py-2 rounded transition-all duration-300"
          style={{
            backgroundColor: "navy", // Primary theme color
            color: "white", // Button text color
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "midnightblue") // Darker blue on hover
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "navy") // Original color
          }
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
  productPrice: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]).isRequired,
};

// Default props for fallback values
ProductCard.defaultProps = {
  productImage: null,
  productPrice: null,
};

export default ProductCard;