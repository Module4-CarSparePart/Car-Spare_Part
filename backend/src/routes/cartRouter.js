const express = require("express");
const {
  addItemToCart,
  removeItemFromCart,
  getCartItems,
  clearCart,
} = require("../controllers/cartController");

const cartrouter = express.Router();

// Add item to cart
cartrouter.post("/addcart", addItemToCart);

// Remove item from cart
cartrouter.delete("/cart/:userId/:productId", removeItemFromCart);

// Get cart items
cartrouter.get("/cart/:userId", getCartItems);

// Clear cart
cartrouter.delete("/cart/:userId", clearCart);

module.exports = cartrouter;
