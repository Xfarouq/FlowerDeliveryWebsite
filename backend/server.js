// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Optional: Log each incoming request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/flowers', flowerRoutes); // Flower endpoints
app.use('/api/users', userRoutes);     // User authentication endpoints

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Connected to DB & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB:', error.message);
  });
