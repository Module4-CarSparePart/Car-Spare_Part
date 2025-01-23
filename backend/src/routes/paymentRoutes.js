const express = require('express');
const { createOrder, verifyPayment } = require('../controllers/paymentController.js');

const paymentRouter = express.Router();

paymentRouter.post('/create-order', createOrder);
paymentRouter.post('/verify-payment', verifyPayment);

module.exports = paymentRouter;
