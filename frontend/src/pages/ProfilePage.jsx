import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Pencil Icon for editing
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProfilePage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // State to handle profile picture, name, email, and additional profile info
  const [profile, setProfile] = useState({
    name: "wabale pooja", // This will be replaced with dynamic user data
    email: "pooja@gmail.com", // This will be replaced with dynamic user data
    phone: "+919307927009", // Example phone number
    address: "Akshay shanskruti,baif road, B wing 206,Wagholi", // Example address
    profilePic: null,
  });

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prevState) => ({
        ...prevState,
        profilePic: URL.createObjectURL(file),
      }));
    }
  };

  // Navigate to Add Product Page
  const handleAddProductClick = () => {
    navigate("/add-product"); // Redirect to the Add Product Page
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=')", // Replace with actual image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
      }}
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex justify-center items-center min-h-screen">
        {/* Content Container */}
        <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-lg w-full z-10 relative transition-all duration-300 ease-in-out">
          {/* Profile Section */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              {/* Profile Image Circle with Edit Option */}
              <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-4 border-blue-500 relative flex justify-center items-center transition-all duration-300 ease-in-out hover:border-blue-600 hover:scale-105">
                <img
                  src={profile.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Edit Icon */}
                <label
                  htmlFor="profilePic"
                  className="absolute top-0 left-0 bg-blue-500 p-2 rounded-full cursor-pointer m-2 transition-all duration-300 ease-in-out hover:bg-blue-600"
                >
                  <FaEdit className="text-white text-lg" />
                </label>
                <input
                  type="file"
                  id="profilePic"
                  className="hidden"
                  onChange={handleProfilePicChange}
                />
              </div>
              {/* Profile Information */}
              <div className="text-center mt-4">
                <h2 className="text-3xl font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-600">
                  {profile.name}
                </h2>
                <p className="text-gray-500">{profile.email}</p>
                <p className="text-gray-500 mt-2">{profile.phone}</p>
                <p className="text-gray-500 mt-2">{profile.address}</p>
              </div>
            </div>
          </div>

          {/* Additional Profile Fields */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Personal Info</h3>
              <div className="flex justify-between mt-2">
                <p className="text-gray-600">Date of Birth:</p>
                <p className="text-gray-600">January 1, 2004</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Shipping Address</h3>
              <div className="flex justify-between mt-2">
                <p className="text-gray-600">Address:Akshay shanskruti,baif road, B wing 206,Wagholi</p>
                <p className="text-gray-600"> Pune,Maharashtra - 412207,India</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-gray-600">Postal Code:</p>
                <p className="text-gray-600">62701</p>
              </div>
            </div>
          </div>

          {/* Add Product Button */}
          <div className="text-center mt-6">
            <button
              onClick={handleAddProductClick} // Navigate to the Add Product page
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transform transition duration-300 ease-in-out hover:scale-105"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
