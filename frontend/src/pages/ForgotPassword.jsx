import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../apiCalls";
 // API call for forgot password

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await forgotPassword({ email });

      if (response.success) {
        setMessage("Password reset link sent to your email.");
        // Navigate to login page after success, not reset password
        setTimeout(() => navigate("/login"), 5000);  // Redirect to login after 5 seconds
      } else {
        setError(response.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Error sending reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your email"
            required
          />
          {message && <div className="text-green-600 mb-4">{message}</div>}
          {error && <div className="text-green-600 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
