// src/components/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser } from '../apiCalls';
 // Importing the API call

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };

    try {
      setLoading(true);
      setError('');
      const response = await registerUser(userData); // API call to register user

      if (response.success) {
        alert('Registration successful! Redirecting to home page...');
        navigate('/login'); // Redirect to the login page
      } else {
        setError(response.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Error during registration. Please try again.',err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side: Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 p-8 relative">
        <div className="max-w-md w-full bg-white/80 p-8 rounded-xl shadow-lg border border-gray-300 relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Register</h1>
            <p className="text-gray-600">Create your account to explore our services.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

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
                placeholder="Create a password"
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')} // Navigate to Login page
            >
              Sign In
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
            High-Quality Spare Parts<br />Delivered to Your Doorstep
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Registration;
