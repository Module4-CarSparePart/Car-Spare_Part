import React, { useEffect, useState } from "react";
import { getAllProducts } from "../apiCalls";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}  // Use _id here instead of id
            productId={product._id}  // Use _id here instead of id
            productName={product.name}
            productImage={product.image}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
