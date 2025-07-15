const express = require("express");
const router = express.Router();
const { addToCart, getCartItems } = require("../controllers/cartController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.post("/add", addToCart);
router.get("/", getCartItems);

module.exports = router;
