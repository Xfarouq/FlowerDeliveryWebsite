const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signup(name, email, password);
    const token = createToken(user._id);
    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ name: user.name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id; // comes from middleware
    const { productId, name, price, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Initialize cartData if it's empty
    if (!user.cartData) user.cartData = {};

    // If product already in cart, update quantity
    if (user.cartData[productId]) {
      user.cartData[productId].quantity += quantity;
    } else {
      user.cartData[productId] = { productId, name, price, quantity };
    }

    await user.save();

    res
      .status(200)
      .json({ message: "Item added to cart", cart: user.cartData });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ message: "Failed to add to cart" });
  }
};

module.exports = {
  signupUser,
  loginUser,
  addToCart, // ✅ Added
};
