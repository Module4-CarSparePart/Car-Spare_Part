const razorpayInstance = require('../utils/razorpayInstance');
const crypto = require('crypto');

// Create an order
const createOrder = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount , // Amount in smallest currency unit
            currency: 'INR',
            receipt: `order_rcptid_${new Date().getTime()}`,
        };

        const order = await razorpayInstance.orders.create(options);
        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Unable to create order.' });
    }
};

// Verify payment
const verifyPayment = (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === razorpay_signature) {
            res.status(200).json({ success: true, message: 'Payment verified successfully!' });
        } else {
            res.status(400).json({ success: false, message: 'Invalid payment signature!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Verification failed.' });
    }
};

module.exports = { createOrder, verifyPayment };