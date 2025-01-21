// src/api/endPoint.js

export const API_BASE_URL = 'http://localhost:4000/api/user';  // Your backend URL

// Registration Endpoint
export const REGISTER_URL = `${API_BASE_URL}/register`;

// Login Endpoint
export const LOGIN_URL = `${API_BASE_URL}/login`;  // Assuming you will have a login route


export const RESET_PASSWORD_URL = `${API_BASE_URL}/reset-password`; // or a similar valid endpoint



export const FORGOT_PASSWORD_URL =`${API_BASE_URL}/forgot-password`;
