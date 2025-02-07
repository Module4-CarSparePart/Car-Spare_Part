import mongoose from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes leading and trailing whitespaces
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure the price is non-negative
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Ensure stock is non-negative
    default: 0,
  },
  image: {
    type: String, // URL of the product image
    required: false,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps automatically
});

// Create the product model
const Product = mongoose.model('Product', productSchema);

export default Product;
