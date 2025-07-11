const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Map,
    of: new mongoose.Schema(
      {
        name: String,
        price: Number,
        quantity: Number,
      },
      { _id: false }
    ),
    default: {},
  },
});

module.exports = mongoose.model("User", userSchema);
