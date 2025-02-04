import React, { useEffect, useState } from "react";
import axios from "axios";

const CheckoutPage = () => {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Fetching total amount from localStorage");
    const storedAmount = localStorage.getItem("totalAmount");
    if (storedAmount) {
      setAmount(parseFloat(storedAmount));
      console.log("Total amount set to:", storedAmount);
    }
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      console.log("Loading Razorpay script");
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        console.log("Razorpay script loaded successfully");
        resolve(true);
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay script");
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const createOrder = async () => {
    try {
      console.log("Creating Razorpay order");
      setLoading(true);
      const response = await axios.post("http://localhost:4000/api/payments/create-order", {
        amount: amount * 100, // Convert to paise
      });
      console.log("Order created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("Error creating order. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    console.log("Initiating payment process");
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please try again.");
      return;
    }

    const orderData = await createOrder();
    if (!orderData) return;

    console.log("Opening Razorpay payment gateway");
    const options = {
      key: "rzp_test_qLvM3i0PO1VLdD", // Replace with actual Razorpay Key
      amount: orderData.amount,
      currency: "INR",
      name: "Car Spare Parts",
      description: "Purchase of car parts",
      image: "/logo.png",
      order_id: orderData.id, // Use the order ID from backend
      handler: async (response) => {
        console.log("Payment successful. Response:", response);
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

        try {
          console.log("Verifying payment with backend");
          await axios.post("http://localhost:4000/api/payments/verify", {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });
          console.log("Payment verification successful");
        } catch (error) {
          console.error("Payment verification failed:", error);
          alert("Payment verification failed. Please contact support.");
        }
      },
      prefill: {
        name: "Your Name",
        email: "youremail@example.com",
        contact: "9876543210",
      },
      notes: { address: "Your Company Address" },
      theme: { color: "#f97316" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-6">Checkout</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Total Amount (INR)
          </label>
          <input
            type="number"
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-orange-300 focus:border-orange-500"
            value={amount}
            readOnly
          />
        </div>
        <button
          className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          onClick={handlePayment}
          disabled={loading || amount <= 0}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
