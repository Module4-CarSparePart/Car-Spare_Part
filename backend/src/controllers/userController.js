import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import hashPassword from "../helpers/userHelper.js";
import { sendEmail } from "../helpers/sendEmail.js";
import User from "../models/User.js";
import dotenv from "dotenv";
import PasswordResetToken from "../models/forget.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "kjdenfijwhfihieufhwuhfiwhifhwhr"; // Replace with your actual secret key

// POST: Register User
const RegisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: "Error in user registration",
    });
  }
};

// POST: Login User
const LoginController = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Validate request
      if (!email || !password) {
          return res.status(400).json({
              success: false,
              message: "Email and password are required",
          });
      }

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found. Please register first.",
          });
      }

      // Compare passwords using bcrypt
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
          return res.status(401).json({
              success: false,
              message: "Invalid credentials. Please try again.",
          });
      }

      // Generate JWT Token
      // Generate a token (session)
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Optionally save session in the database if you need persistent session tracking
    user.sessionToken = token;
    await user.save();

      // Login success
      res.status(200).json({
          success: true,
          message: "Login successful",
          user: { email: user.email, name: user.name },
          token,
      });
       } catch (error) {
      console.error("Login Error Details:", error);
      res.status(500).json({
          success: false,
          error: "Internal Server Error",
      });
  }
};


// POST: Forgot Password
const ForgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User with this email does not exist." });
    }

    const { token, hash, expiresAt } = PasswordResetToken.generateToken(user._id);

    await PasswordResetToken.create({
      userId: user._id,
      token: hash,
      expiresAt,
    });

    // Keep the reset URL simple without appending the token
    const resetUrl = `https://glistening-figolla-261b41.netlify.app/reset-password/${token}`;

    // Include the token separately in the email body
    await sendEmail(user.email, "Password Reset Request", `
      Hi ${user.name || "User"},
      You requested a password reset. Click the link below:${resetUrl}
      Token:${token}
      If you did not request this, ignore this email.
    `);

    res.status(200).json({ message: "Password reset link sent to your email." });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// GET: Get User by Email
const GetUserByEmailController = async (req, res) => {
  try {
    const { email } = req.params;

    // Validate the email parameter
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Respond with user data (excluding sensitive information)
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};




// POST: Reset Password
const ResetPasswordController = async (req, res) => {
  const { token} = req.params;
  const {  newPassword } = req.body;
  

  if (!token || !newPassword) {
    return res.status(400).json({ message: "Token and new password are required" });
  }

  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const resetToken = await PasswordResetToken.findOne({ token: tokenHash });

  if (!resetToken || resetToken.expiresAt < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const user = await User.findById(resetToken.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.password = await hashPassword(newPassword);
  await user.save();
  await PasswordResetToken.deleteOne({ _id: resetToken._id });

  res.status(200).json({ message: "Password has been reset successfully" });
};

// PUT: Update User
const UpdateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) {
      updateData.password = await hashPassword(password);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: "Error in user update",
    });
  }
};

// DELETE: Delete User
const DeleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: "Error in user deletion",
    });
  }
};

export {
  RegisterController,
  LoginController,
  ForgotPasswordController,
  ResetPasswordController,
  UpdateUserController,
  DeleteUserController,
  GetUserByEmailController
  
  
};
