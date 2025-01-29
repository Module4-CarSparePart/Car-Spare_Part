import React, { useState } from "react";

const CheckoutPage = ({ totalAmount }) => {
  const [amount, setAmount] = useState(totalAmount || 0);

  const loadRazorpayScript = () => {
    console.log("Attempting to load Razorpay script...");
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        console.log("Razorpay script loaded successfully.");
        resolve(true);
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay script.");
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    console.log("Initiating payment process...");
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please try again.");
      return;
    }

    console.log("Razorpay script loaded. Creating payment options...");
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay Key ID
      amount: amount , // Convert to smallest currency unit (paise for INR)
      currency: "INR",
      name: "Car Spare Parts",
      description: "Purchase of car parts",
      image: "/logo.png", // Replace with your logo URL
      handler: function (response) {
        console.log("Payment successful. Response:", response);
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Handle success here (e.g., save payment details to your backend)
      },
      prefill: {
        name: "Your Name",
        email: "youremail@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "Your Company Address",
      },
      theme: {
        color: "#f97316", // Accent color
      },
    };

    console.log("Opening Razorpay payment modal...");
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-6">Checkout</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Enter Amount (INR)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-orange-300 focus:border-orange-500"
            value={amount}
            onChange={(e) => {
              console.log("Amount changed:", e.target.value);
              setAmount(e.target.value);
            }}
            placeholder="Enter amount"
          />
        </div>
        <button
          className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          onClick={() => {
            console.log("Pay Now button clicked.");
            handlePayment();
          }}
          disabled={amount <= 0}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};


export default CheckoutPage;
