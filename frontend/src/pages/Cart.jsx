import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("/cart")) || [];
    console.log("Loaded cart from localStorage:", storedCart);
    setCart(storedCart);
    const totalPrice = storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log("Calculated total price:", totalPrice);
    setTotal(totalPrice);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`Form data updated: ${e.target.name} = ${e.target.value}`);
  };

  const loadRazorpayScript = () => {
    console.log("Loading Razorpay script...");
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        console.log("Razorpay script loaded successfully.");
        resolve(true);
      };
      script.onerror = () => {
        console.log("Error loading Razorpay script.");
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const createOrder = async () => {
    try {
      setIsProcessing(true);
      console.log("Creating Razorpay order...");
      const response = await axios.post("http://localhost:4000/api/payments/create-order", {
        amount: total * 100, // Convert to paise
      });
      console.log("Razorpay order created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("Error creating order. Please try again.");
      return null;
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please try again.");
      return;
    }

    const orderData = await createOrder();
    if (!orderData) return;

    console.log("Payment initiated with order data:", orderData);
    const options = {
      key: "rzp_test_qLvM3i0PO1VLdD", // Replace with your Razorpay Key
      amount: orderData.amount,
      currency: "INR",
      name: "Car Spare Parts",
      description: "Purchase of car parts",
      image: "/logo.png",
      order_id: orderData.id,
      handler: async (response) => {
        try {
          console.log("Payment successful, verifying payment...");
          await axios.post("http://localhost:4000/api/payments/verify", {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        } catch (error) {
          console.error("Payment verification failed:", error);
          alert("Payment verification failed. Please contact support.");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#f97316" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, proceeding to payment...");
    handlePayment();
  };

  if (cart.length === 0) {
    console.log("Cart is empty.");
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl text-gray-600">Your cart is empty</h2>
        <Link to="/products" className="text-blue-600 mt-4 inline-block">
          Browse Products
        </Link>
      </div>
    );
  }

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
            <div className="text-lg font-bold text-red-600">₹{item.price * item.quantity}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between text-lg font-semibold text-gray-800">
        <span>Total Price:</span>
        <span className="text-red-600">₹{total}</span>
      </div>

      <div className="mt-6 text-center">
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Proceed to Checkout</button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Enter Order Details</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
              <div className="flex justify-between">
                <button type="button" onClick={() => setIsOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" disabled={isProcessing}>{isProcessing ? "Processing..." : "Proceed to Payment"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
