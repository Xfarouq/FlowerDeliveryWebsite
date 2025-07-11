// routes/stripeRoutes.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireAuth = require('../middleware/requireAuth');

router.post('/create-checkout-session', requireAuth, async (req, res) => {
  const { cartItems } = req.body;

  console.log("🛒 Stripe received cartItems:", cartItems);

  try {
    const line_items = cartItems.map(item => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);

      if (isNaN(price) || isNaN(quantity)) {
        throw new Error(`Invalid item: ${JSON.stringify(item)}`);
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(price * 100), // in cents
        },
        quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cart',
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error('❌ Stripe error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
