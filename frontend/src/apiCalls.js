import axios from "axios";
import {
  REGISTER_URL,
  LOGIN_URL,
  RESET_PASSWORD_URL,
  FORGOT_PASSWORD_URL,
  PRODUCT_BASE_URL, // Add base URL for Product APIs
  
} from "./endPoint"; // Import API endpoints

// User Authentication API Calls

// User Registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(REGISTER_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};

// User Login
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(LOGIN_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "An error occurred during login"
    );
  }
};

// Forgot Password
export const forgotPassword = async (data) => {
  try {
    const response = await axios.post(FORGOT_PASSWORD_URL, data);
    return response.data;
  } catch (error) {
    console.error(
      "Forgot Password Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Reset Password
export const resetPassword = async (data) => {
  try {
    const { token, newPassword } = data;
    const response = await axios.post(`${RESET_PASSWORD_URL}/${token}`, {
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Reset Password Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Product API Calls

// Get all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${PRODUCT_BASE_URL}/allpro`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
    throw error;
  }
};

// Get product by ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${PRODUCT_BASE_URL}/getprobyid/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching product with ID ${productId}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${PRODUCT_BASE_URL}/createpro`, productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error.response?.data || error.message);
    throw error;
  }
};

// Update a product
export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(
      `${PRODUCT_BASE_URL}/update/${productId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating product with ID ${productId}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${PRODUCT_BASE_URL}/delete/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting product with ID ${productId}:`,
      error.response?.data || error.message
    );
    throw error;
  }
}

export const fetchCheckout = async (totalAmount) => {
  console.log("Sending request to /api/checkout with totalAmount:", totalAmount);
  try {
    const response = await fetch("/api/payments/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalAmount }),
    });

    console.log("Response received from /api/checkout:", response);

    if (!response.ok) {
      console.error("Failed to fetch checkout details. Status:", response.status);
      throw new Error("Failed to fetch checkout details");
    }

    const data = await response.json();
    console.log("Checkout details fetched successfully:", data);

    return data;
  } catch (error) {
    console.error("Error fetching checkout details:", error);
    throw error;
  }
};

