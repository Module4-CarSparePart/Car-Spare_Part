import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { loginUser } from '../apiCalls';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import default styles for toast

const Login = () => {
  // State hooks for form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // To navigate between pages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = { email, password,token };
    
    try {
      setLoading(true);
      setError('');
      
      const response = await loginUser(userData); // API call to login
      
      if (response.success) {
    

        // Store token in localStorage for session management
        localStorage.setItem("authToken", response.token);

        // Optionally store user details if needed
        localStorage.setItem("user", JSON.stringify(response.user));

        // Close the alert and refresh or redirect
        setTimeout(() => {
          navigate("/home"); // Navigate to HomePage
          window.location.reload(); // Force page refresh to ensure state update
        }, 200); // Adjust the delay as needed (1 second in this case)
      } else {
        alert(response.message); // Show error message
      }

      if (response.success) {
        // Show success toast message first
        toast.success('Login successful!', {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        // Then navigate to the home page
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
    } 
    catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
    
  };
  
  return (
    <div className="h-screen flex">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 p-8 relative">
        {/* Login Form with Semi-Transparent Background */}
        <div className="max-w-md w-full bg-white/80 p-8 rounded-xl shadow-lg border border-gray-300 relative z-10">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-600">
              Access your account to continue exploring.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Display Error */}
            {error && <div className="text-red-600 text-sm">{error}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Forgot Password Option */}
          <p className="text-center text-sm text-gray-500 mt-4">
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </span>
          </p>

          {/* Register Option */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{' '}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Register
            </span>
          </p>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=')",
        }}
      >
        <div className="h-full w-full bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold p-6 text-center shadow-md">
            Reliable Spare Parts<br />Just a Click Away
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
