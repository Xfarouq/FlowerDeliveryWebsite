const User = require('../models/userModel');

// Add to cart
const addToCart = async (req, res) => {
  const userId = req.user._id; // assuming auth middleware adds `user` to `req`
  const { productId, name, price, image, quantity } = req.body;

  try {
    const user = await User.findById(userId);
    const existingItem = user.cartData[productId];

    user.cartData[productId] = {
      name,
      price,
      image,
      quantity: existingItem ? existingItem.quantity + quantity : quantity,
    };

    await user.save();
    res.status(200).json({ message: 'Item added to cart', cart: user.cartData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get cart
const getCart = async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user.cartData || {});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addToCart, getCart };
