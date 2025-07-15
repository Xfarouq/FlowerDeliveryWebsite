// routes/stripeRoutes.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireAuth = require('../middleware/requireAuth');
const CartItem = require('../models/cartModel');

router.post('/create-checkout-session', requireAuth, async (req, res) => {
  try {
    const userId = req.user._id;

    // Get cart items from DB
    const cartItems = await CartItem.find({ userId });

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "Your cart is empty." });
    }

    const line_items = cartItems.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // in cents
      },
      quantity: item.quantity,
    }));

    // Choose success/cancel URL based on request origin
    const origin = req.headers.origin || req.headers.referer;
    const baseUrl = origin && origin.includes('onrender.com')
      ? 'https://flowerdeliverywebsite-frontend.onrender.com'
      : 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cart`,
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error('❌ Stripe error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
