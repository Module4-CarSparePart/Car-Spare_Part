import React, { useState } from "react";
import { createProduct } from "../apiCalls"; // Import the API function

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false); // For handling loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call the API function to create the product
      const response = await createProduct(productData);

      if (response) {
        alert("Product added successfully!");
        setProductData({
          name: "",
          brand: "",
          price: "",
          category: "",
          stock: "",
          description: "",
          image: "",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gray-100"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full z-10">
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Add Product
          </h3>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Product Name", name: "name", type: "text" },
              { label: "Brand", name: "brand", type: "text" },
              { label: "Price", name: "price", type: "number" },
              { label: "Category", name: "category", type: "text" },
              { label: "Stock", name: "stock", type: "number" },
              { label: "Description", name: "description", type: "textarea" },
              { label: "Image URL", name: "image", type: "text" },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label htmlFor={field.name} className="block text-gray-600">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={productData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={productData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={field.name !== "image"}
                  />
                )}
              </div>
            ))}

            <div className="text-center">
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg text-white ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
