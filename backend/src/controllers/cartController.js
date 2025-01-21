
const Cart = require("../models/Cart.js");
const Product = require("../models/Product.js");

const addItemToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Fetch the product from the database to get the price
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const price = product.price;
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.productId == productId);

      if (itemIndex > -1) {
        // Update quantity if product exists
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new product to the cart
        cart.items.push({ productId, quantity, price });
      }

      // Update the total price
      cart.totalPrice += price * quantity;
    } else {
      // Create a new cart for the user
      cart = new Cart({
        userId,
        items: [{ productId, quantity, price }],
        totalPrice: price * quantity,
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addItemToCart };


// Remove Item from Cart
const removeItemFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.productId == productId);

      if (itemIndex > -1) {
        const item = cart.items[itemIndex];
        cart.totalPrice -= item.quantity * item.price; // Adjust total price
        cart.items.splice(itemIndex, 1); // Remove the item
      }

      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Cart Items
const getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Clear Cart (Optional)
const clearCart = async (req, res) => {
  const { userId } = req.params;

  try {
    await Cart.findOneAndDelete({ userId });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addItemToCart,
  removeItemFromCart,
  getCartItems,
  clearCart,
};
