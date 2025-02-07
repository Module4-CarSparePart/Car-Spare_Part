import React, { useEffect, useState } from "react";
import { getAllProducts } from "../apiCalls";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [brands] = useState(["Bosch", "Magneti Marelli", "Denso", "Mann Filter", "WIX Filters"]);
  const [carMakes] = useState({
    Tata: ["Altroz", "Nexon", "Harrier"],
    Hyundai: ["i20", "Creta", "Venue"],
  });
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

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

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory && product.category?.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      if (selectedBrand && product.brand?.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      if (selectedMake && product.make?.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }
      if (selectedModel && product.model?.toLowerCase() !== selectedModel.toLowerCase()) {
        return false;
      }
      return true;
    });

  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 border-r">
          <h2 className="font-bold text-lg mb-4">Filter Parts By</h2>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Car Make</h3>
            <select
              className="w-full border p-2 rounded"
              value={selectedMake}
              onChange={(e) => {
                setSelectedMake(e.target.value);
                setSelectedModel(""); // Reset model when make changes
              }}
            >
              <option value="">Select Car Make</option>
              {Object.keys(carMakes).map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Car Model</h3>
            <select
              className="w-full border p-2 rounded"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={!selectedMake}
            >
              <option value="">Select Car Model</option>
              {selectedMake &&
                carMakes[selectedMake].map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  productId={product._id}
                  productName={product.name}
                  productImage={product.image}
                  productPrice={product.price}
                />
              ))
            ) : (
              <p className="text-center col-span-full">No products found for the selected filters.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;
