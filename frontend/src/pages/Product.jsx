import React, { useEffect, useState } from "react";
import { getAllProducts } from "../apiCalls";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([
    "Bosch",
    "Magneti Marelli",
    "Denso",
    "Mann Filter",
    "WIX Filters", // Add your predefined brands here
  ]); // Predefined brands
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [selectedBrand, setSelectedBrand] = useState(""); // State for selected brand

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
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 border-r">
          <h2 className="font-bold text-lg mb-4">Filter Parts By</h2>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Genuine or Aftermarket</h3>
            <div>
              <label className="block">
                <input type="radio" name="type" className="mr-2" />
                Aftermarket
              </label>
              <label className="block">
                <input type="radio" name="type" className="mr-2" />
                Genuine
              </label>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Car Make</h3>
            <select className="w-full border p-2 rounded">
              <option value="">Select Car Make</option>
              <option value="make1">Tata</option>
              <option value="make2">Hyundai</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Car Model</h3>
            <select className="w-full border p-2 rounded">
              <option value="">Select Car Model</option>
              <option value="model1">Altroz</option>
              <option value="model2">Nexon</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Parts Category</h3>
            <select
              className="w-full border p-2 rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="strut">Strut Mount & Kits</option>
              <option value="accessories">Accessories</option>
              <option value="body">Body Parts</option>
              <option value="brake">Brake</option>
              <option value="electrical">Electrical</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Brand</h3>
            <select
              className="w-full border p-2 rounded"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-5/4 p-6">
          {/* Sorting */}
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl font-bold">Shop for Car Spare Parts</h1>
            <select className="border p-2 rounded">
              <option value="">Sort by popularity</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products
              .filter((product) =>
                selectedCategory ? product.category === selectedCategory : true
              )
              .filter((product) =>
                selectedBrand ? product.brand === selectedBrand : true
              )
              .map((product) => (
                <ProductCard
                
                  productId={product._id}
                  productName={product.name}
                  productImage={product.image}
                  productPrice={product.price}
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;
