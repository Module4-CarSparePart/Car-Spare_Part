import express from 'express';
import {
  RegisterController,
  LoginController,
  ForgotPasswordController,
  ResetPasswordController,
  UpdateUserController,
  DeleteUserController,
  GetUserByEmailController
} from '../controllers/userController.js';

const router = express.Router();

// Routes for User Operations
router.post('/register', RegisterController);
router.post('/login', LoginController);
router.put('/update/:id', UpdateUserController); // Update user details by ID
router.delete('/delete/:id', DeleteUserController); // Delete a user by ID

router.get("/get/:email", GetUserByEmailController);

// Routes for Forgot and Reset Password
router.post('/forgot-password', ForgotPasswordController); // Send reset token via email
router.post('/reset-password/:token', ResetPasswordController); // Reset password using the token

export default router; // Use ES Module export
