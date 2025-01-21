import React, { useState } from "react";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Initially empty cart
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0 });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.description) {
      setCartItems([
        ...cartItems,
        {
          id: cartItems.length + 1,
          name: newProduct.name,
          description: newProduct.description,
          price: Math.floor(Math.random() * 1000) + 100, // Random price in INR
          quantity: 1,
        },
      ]);
      setNewProduct({ name: "", description: "", price: 0 });
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Content Area */}
      <div className="flex-grow relative">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=')",
            zIndex: -1,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              filter: "blur(80px)",
              zIndex: -1,
            }}
          ></div>
        </div>

        <div className="relative z-10 p-4 text-white">
          <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <h1 className="text-lg font-semibold">Car Spare Parts Cart</h1>
              <button
                className="bg-white text-blue-600 py-1 px-3 rounded hover:bg-gray-200 transition"
                onClick={() => (window.location.href = "/")}
              >
                Back to Home
              </button>
            </div>

            {/* Add New Product */}
            <div className="p-4 bg-gray-700 border-t border-gray-600">
              <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
              <div className="grid grid-cols-3 gap-4 items-center">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="p-2 border rounded bg-gray-600 text-white col-span-1"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="p-2 border rounded bg-gray-600 text-white col-span-1"
                />
                <button
                  onClick={handleAddProduct}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition col-span-1"
                >
                  Add Product
                </button>
              </div>
            </div>

            {/* Cart Table */}
            {cartItems.length > 0 ? (
              <div className="p-4 overflow-x-auto">
                <table className="w-full border-collapse text-white">
                  <thead>
                    <tr className="bg-gray-700 text-left">
                      <th className="p-2 border">#</th>
                      <th className="p-2 border">Product Name</th>
                      <th className="p-2 border">Description</th>
                      <th className="p-2 border">Quantity</th>
                      <th className="p-2 border">Price (₹)</th>
                      <th className="p-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={item.id} className="border-t">
                        <td className="p-2 border text-center">{index + 1}</td>
                        <td className="p-2 border">{item.name}</td>
                        <td className="p-2 border">{item.description}</td>
                        <td className="p-2 border text-center">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value)
                              )
                            }
                            className="w-16 p-1 border rounded bg-gray-600 text-white"
                          />
                        </td>
                        <td className="p-2 border text-center">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-2 border text-center">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4 text-center text-gray-400">Your cart is empty. Add products to get started!</div>
            )}

            {/* Total Price */}
            {cartItems.length > 0 && (
              <div className="p-4 bg-gray-700 border-t border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semi bold text-blue-400">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            {/* Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-4">
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
