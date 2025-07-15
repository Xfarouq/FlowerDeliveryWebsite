// controllers/cartController.js
const CartItem = require("../models/cartModel");

// POST: Add to Cart
const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, name, price, quantity } = req.body;

  if (!productId || !name || !price || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingItem = await CartItem.findOne({ userId, productId });

    if (existingItem) {
      // Update quantity if item exists
      existingItem.quantity += Number(quantity);
      await existingItem.save();
      return res.status(200).json({ message: "Cart updated", item: existingItem });
    }

    const newItem = await CartItem.create({
      userId,
      productId,
      name,
      price,
      quantity,
    });

    res.status(201).json({ message: "Item added to cart", item: newItem });
  } catch (error) {
    console.error("❌ Add to cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET: Fetch Cart Items
const getCartItems = async (req, res) => {
  const userId = req.user._id;

  try {
    const items = await CartItem.find({ userId });
    res.status(200).json({ items });
  } catch (error) {
    console.error("❌ Get cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addToCart,
  getCartItems,
};
