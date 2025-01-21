const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const productrouter = express.Router();


productrouter.get('/allpro', getAllProducts);
productrouter.get('/getprobyid/:id',getProductById);
productrouter.post('/createpro', createProduct);
productrouter.put('/update/:id',updateProduct);
productrouter.delete('/delete/:id', deleteProduct);

module.exports = productrouter;
