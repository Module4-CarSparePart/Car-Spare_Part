import React, { useEffect, useState } from "react";
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

  
  const handleViewDetails = () => {
    navigate(`/product/${productId}`);
  };
  const id=productId;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  

  // Fetch product details from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://car-spare-part-2.onrender.com/api/product/getprobyid/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }

        const data = await response.json();
        setProduct(data); // Set product data
        setLoading(false); // Turn off the loading state
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    // Get the existing cart from localStorage or initialize an empty cart
    const existingCart = JSON.parse(localStorage.getItem("/cart")) || [];

    // Check if product is already in the cart
    const existingProductIndex = existingCart.findIndex((item) => item.id === productId);

    if (existingProductIndex !== -1) {
      // Update the product quantity if it already exists in the cart
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // Add the product to the cart with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("/cart", JSON.stringify(existingCart));

    // Optionally, you can show a success message here
    alert("Product added to cart!");
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
          onClick={addToCart}
          className="text-sm px-4 py-2 rounded transition-all duration-300"
          style={{
            backgroundColor: "orange", // Primary theme color
            color: "white", // Button text color
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "midnightblue") // Darker blue on hover
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