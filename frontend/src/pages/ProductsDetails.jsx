import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve the product ID from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);
  

  // Fetch product details from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://car-spare-part-1.onrender.com/api/product/getprobyid/${id}`);

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

  // Handle loading state
  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  // Handle error state
  if (error) {
    return (
      <p className="text-center text-red-600">
        Error: {error}. Please try again later.
      </p>
    );
  }

  // Ensure product exists before rendering
  if (!product) {
    return <p className="text-center text-gray-600">No product found.</p>;
  }

  // Add to Cart Handler
  const addToCart = () => {
    // Get the existing cart from localStorage or initialize an empty cart
    const existingCart = JSON.parse(localStorage.getItem("/cart")) || [];

    // Check if product is already in the cart
    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);

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

  

  // Render product details
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-2 text-xs font-semibold text-green-600">In Stock</div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg font-semibold mt-2">Brand: {product.brand}</p>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Price */}
          <div className="text-2xl font-bold text-red-600 mt-4">
            ₹{product.price}
            <span className="text-gray-500 text-lg line-through ml-2">
              ₹{product.originalPrice}
            </span>
          </div>

          {/* Available Options */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg text-gray-800">Available Options</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="text-center">
                <span className="block text-sm text-gray-500">COD</span>
                <span className="text-green-600">Available</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-500">Warranty</span>
                <span className="text-green-600">1 Year</span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-500">GST</span>
                <span className="text-green-600">Available</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={addToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
