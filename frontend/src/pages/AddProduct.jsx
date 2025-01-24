import React, { useState } from "react";
import { FaUpload, FaTag, FaDollarSign, FaBox, FaImage } from "react-icons/fa"; // Importing icons for styling

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
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full z-10 transform transition-all hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Add New Product
          </h3>
          <form onSubmit={handleSubmit}>
            {[  
              {
                label: "Product Name",
                name: "name",
                type: "text",
                icon: <FaTag className="text-gray-500" />,
              },
              {
                label: "Brand",
                name: "brand",
                type: "text",
                icon: <FaTag className="text-gray-500" />,
              },
              {
                label: "Price",
                name: "price",
                type: "number",
                icon: <FaDollarSign className="text-gray-500" />,
              },
              {
                label: "Category",
                name: "category",
                type: "text",
                icon: <FaBox className="text-gray-500" />,
              },
              {
                label: "Stock",
                name: "stock",
                type: "number",
                icon: <FaBox className="text-gray-500" />,
              },
              {
                label: "Description",
                name: "description",
                type: "textarea",
                icon: <FaBox className="text-gray-500" />,
              },
              {
                label: "Image URL",
                name: "image",
                type: "text",
                icon: <FaImage className="text-gray-500" />,
              },
            ].map((field) => (
              <div key={field.name} className="mb-6 flex items-center">
                <div className="mr-3">{field.icon}</div>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={productData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition-all duration-200 ease-in-out"
                    placeholder={`Enter ${field.label}`}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={productData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition-all duration-200 ease-in-out"
                    placeholder={`Enter ${field.label}`}
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
                    : "bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 ease-in-out"
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">Adding...</span>
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
