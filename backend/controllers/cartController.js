// backend/controllers/cartController.js
const User = require("../models/userModel");

/**
 * @desc    Add an item to the cart
 * @route   POST /api/cart/add
 * @access  Private (requires JWT)
 */
const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, name, price, quantity } = req.body;

  if (!productId || !name || !price || !quantity) {
    return res.status(400).json({ message: "Missing cart item details" });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Make sure cartData is a plain object
    if (!user.cartData || typeof user.cartData !== "object") {
      user.cartData = {};
    }

    // Add or update the cart item
    user.cartData[productId] = {
      name,
      price: Number(price),
      quantity: Number(quantity),
    };

    await user.save();

    res.status(200).json({
      message: "Item added to cart",
      cart: user.cartData,
    });
  } catch (error) {
    console.error("❌ Cart Add Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Get all items in the user's cart
 * @route   GET /api/cart
 * @access  Private (requires JWT)
 */
const getCartItems = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user || !user.cartData || typeof user.cartData !== "object") {
      return res.status(200).json({ items: [] });
    }

    const items = Object.keys(user.cartData).map((productId) => ({
      productId,
      ...user.cartData[productId],
    }));

    res.status(200).json({ items });
  } catch (error) {
    console.error("❌ Cart Fetch Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  addToCart,
  getCartItems,
};
