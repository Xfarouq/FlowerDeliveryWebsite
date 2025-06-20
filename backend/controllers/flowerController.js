const Flower = require('../models/flowerModel');
const mongoose = require('mongoose');

// GET all flowers
const getFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find({}).sort({ createdAt: -1 });
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flowers.' });
  }
};

// GET a single flower
const getFlower = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid flower ID.' });
  }

  try {
    const flower = await Flower.findById(id);
    if (!flower) {
      return res.status(404).json({ error: 'Flower not found.' });
    }
    res.status(200).json(flower);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching flower.' });
  }
};

// CREATE a new flower
const createFlower = async (req, res) => {
  const { name, description, price, category } = req.body;

  let emptyFields = [];
  if (!name) emptyFields.push('name');
  if (!description) emptyFields.push('description');
  if (!price) emptyFields.push('price');
  if (!category) emptyFields.push('category');
  if (!req.file) emptyFields.push('image');

  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: 'Please fill all required fields.',
      emptyFields
    });
  }

  try {
    const flower = await Flower.create({
      name,
      description,
      price,
      category,
      image: req.file.path
    });
    res.status(201).json(flower);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Failed to create flower.' });
  }
};

// DELETE a flower
const deleteFlower = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid flower ID.' });
  }

  try {
    const flower = await Flower.findByIdAndDelete(id);
    if (!flower) {
      return res.status(404).json({ error: 'Flower not found.' });
    }
    res.status(200).json({ message: 'Flower deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete flower.' });
  }
};

// UPDATE a flower
const updateFlower = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid flower ID.' });
  }

  try {
    const flower = await Flower.findByIdAndUpdate(id, req.body, { new: true });
    if (!flower) {
      return res.status(404).json({ error: 'Flower not found.' });
    }
    res.status(200).json(flower);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update flower.' });
  }
};

module.exports = {
  getFlowers,
  getFlower,
  createFlower,
  deleteFlower,
  updateFlower
};
