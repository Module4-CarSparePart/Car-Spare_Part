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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productName={product.name}
            productImage={product.imageUrl}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
