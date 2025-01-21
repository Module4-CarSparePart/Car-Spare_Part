const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  
  brand: { type: String  },
  price: { type: Number  },
  category: { type: String },
  stock: { type: Number},
  description: { type: String },
  image: {type: String},
  createdAt: { type: Date, default: Date.now },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;