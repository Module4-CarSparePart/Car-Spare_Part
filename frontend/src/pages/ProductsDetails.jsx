import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Must be at the top level
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/product/getprobyid/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;


  return (
    <div className="max-w-3xl mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-4">Brand: {product.brand}</p>
      <p className="text-lg mt-2">Category: {product.category}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">Price: ₹{product.price}</p>
      <p className="text-lg mt-2">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;
