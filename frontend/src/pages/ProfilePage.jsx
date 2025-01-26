import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData(parsedUser);
    } else {
      console.error("No user data found in localStorage.");
      navigate("/login");
    }
  }, [navigate]);

  // Handle input change during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update profile information
  const handleSave = () => {
    axios
      .put("/api/user/profile", formData, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        setFormData(response.data);
        localStorage.setItem("user", JSON.stringify(response.data)); // Update localStorage
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  // Logout function
  const handleLogout = () => {
    axios
      .post("/api/user/logout", {}, { withCredentials: true })
      .then(() => {
        localStorage.removeItem("user"); // Remove user data from localStorage
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center p-6">
      {/* Centered Profile Card */}
      <div className="bg-white rounded-lg shadow-xl p-10 space-y-8 max-w-3xl w-full">
        {/* Profile Header */}
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-50 h-48 w-48 transform translate-x-4 translate-y-4"></div>
          <img
            src={user.profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="relative z-10 w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg animate-bounce"
          />
          <div className="ml-0 md:ml-8 text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-4xl font-bold text-blue-600">{user.name || "Your Name"}</h1>
            <p className="text-gray-500">{user.email || "your.email@example.com"}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p>
              <strong className="text-blue-600">Address:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-700">{user.address || "Not Provided"}</span>
              )}
            </p>
            <p>
              <strong className="text-blue-600">Phone:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-700">{user.phone || "Not Provided"}</span>
              )}
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <strong className="text-blue-600">Company:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="company"
                  value={formData.company || ""}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-700">{user.company || "Not Provided"}</span>
              )}
            </p>
            <p>
              <strong className="text-blue-600">Role:</strong>{" "}
              <span className="text-gray-700">{user.role || "User"}</span>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {isEditing ? (
            <div className="flex space-x-4">
              <button
                className="bg-green-500 text-white py-3 px-6 rounded shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white py-3 px-6 rounded shadow-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 transition duration-300"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
          <button
            className="bg-red-500 text-white py-3 px-6 rounded shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
