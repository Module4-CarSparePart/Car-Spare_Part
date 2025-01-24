// Base URLs for API
export const API_BASE_URL = 'http://localhost:4000/api/user';  // User-related backend URL
export const PRODUCT_BASE_URL = 'http://localhost:4000/api/product'; // Product-related backend URL

// User Authentication Endpoints
export const REGISTER_URL = `${API_BASE_URL}/register`; // Registration Endpoint
export const LOGIN_URL = `${API_BASE_URL}/login`; // Login Endpoint
export const RESET_PASSWORD_URL = `${API_BASE_URL}/reset-password`; // Reset Password Endpoint
export const FORGOT_PASSWORD_URL = `${API_BASE_URL}/forgot-password`; // Forgot Password Endpoint

// Product API Endpoints
export const GET_ALL_PRODUCTS_URL = `${PRODUCT_BASE_URL}/allpro`; // Fetch all products
export const GET_PRODUCT_BY_ID_URL = `${PRODUCT_BASE_URL}/getprobyid/:id`; // Fetch a product by ID (append ID in request)
export const CREATE_PRODUCT_URL = `${PRODUCT_BASE_URL}/createpro`; // Create a new product
export const UPDATE_PRODUCT_URL = `${PRODUCT_BASE_URL}/update`; // Update a product by ID (append ID in request)
export const DELETE_PRODUCT_URL = `${PRODUCT_BASE_URL}/delete`; // Delete a product by ID (append ID in request)
