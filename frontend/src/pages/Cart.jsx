import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    // Calculate total price
    const totalPrice = storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  }, []);

  // Handle increasing product quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle decreasing product quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle removing product from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle checkout or empty cart action
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Proceed to checkout (for now just a placeholder)
    alert("Proceeding to checkout...");
  };

  // Render empty cart message
  if (cart.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl text-gray-600">Your cart is empty</h2>
        <Link to="/products" className="text-blue-600 mt-4 inline-block">
          Browse Products
        </Link>
      </div>
    );
  }

  // Render cart items
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.brand}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                +
              </button>
              <div className="text-lg font-bold text-red-600">
                ₹{item.price * item.quantity}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-semibold ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 flex justify-between text-lg font-semibold text-gray-800">
        <span>Total Price:</span>
        <span className="text-red-600">₹{total}</span>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleCheckout}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
