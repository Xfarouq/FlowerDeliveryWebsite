const User = require("../models/userModel");

// === Add to Cart ===
const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, name, price, quantity } = req.body;

  if (!productId || !name || !price || !quantity) {
    return res.status(400).json({ message: "Missing cart item details" });
  }

  try {
    const user = await User.findById(userId);

    // Ensure cartData is always treated as an object here
    const cart = user.cartData instanceof Map
      ? Object.fromEntries(user.cartData)
      : user.cartData || {};

    // Add or update the product in cart
    cart[productId] = {
      name,
      price: Number(price),
      quantity: Number(quantity),
    };

    // ✅ Store as Map to match schema
    user.cartData = new Map(Object.entries(cart));

    await user.save();

    res.status(200).json({
      message: "Item added to cart",
      cart: Object.fromEntries(user.cartData), // send as plain object in response
    });
  } catch (error) {
    console.error("❌ Cart Add Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// === Get Cart Items ===
const getCartItems = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user || !user.cartData) {
      return res.status(200).json({ items: [] });
    }

    const plainCart = Object.fromEntries(user.cartData); // Convert Map to plain object
    const cartItems = Object.entries(plainCart).map(([productId, item]) => ({
      productId,
      ...item,
    }));

    res.status(200).json({ items: cartItems });
  } catch (error) {
    console.error("❌ Get Cart Error:", error.message);
    res.status(500).json({ message: "Failed to load cart" });
  }
};


module.exports = {
  addToCart,
  getCartItems,
};
