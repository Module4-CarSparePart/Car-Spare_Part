import React, { useState } from "react";

const AddProductPage = () => {
  // State to handle the product form
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  // Handle input changes for the product form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
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
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better contrast */}
      
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full z-10">
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Add Product
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Product Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={productData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Product Price */}
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Product Image URL */}
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-600">
                Product Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
