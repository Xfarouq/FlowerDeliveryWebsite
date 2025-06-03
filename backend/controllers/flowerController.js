const Flower = require("../models/flowerModel");
const mongoose = require("mongoose");

// GET all flowers
const getFlowers = async (req, res) => {
  const flowers = await Flower.find({}).sort({ createdAt: -1 });
  res.status(200).json(flowers);
};

// GET a single flower
const getFlower = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such flower" });
  }
  const flower = await Flower.findById(id);
  if (!flower) {
    return res.status(404).json({ error: "No such flower" });
  }
  res.status(200).json(flower);
};

// CREATE a new flower (with Multer)
const createFlower = async (req, res) => {
  const { name, description, price, category } = req.body;
  let image = req.file ? req.file.filename : null;

  let emptyFields = [];
  if (!name) emptyFields.push("name");
  if (!description) emptyFields.push("description");
  if (!price) emptyFields.push("price");
  if (!category) emptyFields.push("category");
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const flower = await Flower.create({
      name,
      description,
      price,
      category,
      image,
    });
    res.status(200).json(flower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a flower
const deleteFlower = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such flower" });
  }
  const flower = await Flower.findOneAndDelete({ _id: id });
  if (!flower) {
    return res.status(400).json({ error: "No such flower" });
  }
  res.status(200).json(flower);
};

module.exports = {
  getFlowers,
  getFlower,
  createFlower,
  deleteFlower,
};
