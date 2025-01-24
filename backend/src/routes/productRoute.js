const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const productrouter = express.Router();


productrouter.get('/allpro', getAllProducts);
productrouter.get('/getprobyid/:id',getProductById);
router.get('/product/:id', getProductDetails);

productrouter.post('/createpro', createProduct);
productrouter.put('/update/:id',updateProduct);
productrouter.delete('/delete/:id', deleteProduct);

module.exports = productrouter;
