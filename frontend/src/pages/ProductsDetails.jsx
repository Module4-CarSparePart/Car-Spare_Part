// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve the product ID from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);
  

  useEffect(() => {
    // Fetch product details from the backend
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/product/getprobyid/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }

        const data = await response.json();
        console.log(data);
        
        setProduct(data); // Set product data
        setLoading(false); // Turn off the loading state
      } catch (error) {
        setError(error.message); // Capture the error
        setLoading(false); // Turn off the loading state
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

  // Render product details
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded-lg"
      />

      {/* Product Name */}
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

      {/* Product Description */}
      <p className="text-gray-600 mt-2">{product.description}</p>

      {/* Product Brand */}
      <p className="text-lg font-semibold mt-4">Brand: {product.brand}</p>

      {/* Product Category */}
      <p className="text-lg mt-2">Category: {product.category}</p>

      {/* Product Price */}
      <p className="text-lg font-bold text-blue-600 mt-2">
        Price: ₹{product.price}
      </p>

      {/* Product Stock */}
      <p className="text-lg mt-2">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;
