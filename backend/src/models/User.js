const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Error message on missing name
      trim: true, // Remove leading/trailing spaces
    },
    email: {
      type: String,
      required: [true, "Email is required"], // Error message on missing email
      unique: true, // Ensure the email is unique
      trim: true, // Remove leading/trailing spaces
    },
    password: {
      type: String,
      required: [true, "Password is required"], // Error message on missing password
      minlength: [6, "Password must be at least 6 characters long"], // Minimum length
    },
    
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
