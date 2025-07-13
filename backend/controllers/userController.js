const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create JWT
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// @desc    Signup a new user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password); // uses static method
    const token = createToken(user._id);

    res.status(200).json({ name: user.name, email: user.email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// @desc    Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password); // uses static method
    const token = createToken(user._id);

    res.status(200).json({ name: user.name, email: user.email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
};
