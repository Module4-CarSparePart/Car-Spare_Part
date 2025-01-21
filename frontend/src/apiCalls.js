import axios from 'axios';
import { REGISTER_URL, LOGIN_URL, RESET_PASSWORD_URL, FORGOT_PASSWORD_URL } from './endPoint'; // Import the RESET_PASSWORD_URL

// User registration API call
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(REGISTER_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

// User login API call
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(LOGIN_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Login error: ", error);
    throw new Error(error.response?.data?.message || 'An error occurred during login');
  }
};


export const forgotPassword = async (data) => {
  try {
    const response = await axios.post(FORGOT_PASSWORD_URL, data);
    return response.data;
  } catch (error) {
    console.error("Forgot Password Error: ", error);
    throw error;
  }
};

export const resetPassword = async (data) => {
  try {
    const { token, newPassword } = data;

    // Log details for debugging
    console.log("Reset Password Token:", token);
    console.log("Reset Password URL:", `${RESET_PASSWORD_URL}/${token}`);
    console.log("newPassword:", newPassword);

    // Send a POST request with token in the URL and new password in the body
    const response = await axios.post(`${RESET_PASSWORD_URL}/${token}`, { newPassword });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and log detailed information
    console.error("Reset Password Error:", error.response?.data || error.message);
    throw error;
  }





};
