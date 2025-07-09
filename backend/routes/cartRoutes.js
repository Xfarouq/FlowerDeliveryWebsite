const express = require('express');
const { addToCart, getCart } = require('../controllers/cartController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth); // protect all cart routes

router.post('/add', addToCart);
router.get('/', getCart);

module.exports = router;
