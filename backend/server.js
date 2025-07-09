// Load environment variables
require('dotenv').config();

// Core dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import routes
const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

// App instance
const app = express();

// Middlewares
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Register API routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`✅ Connected to DB & listening on port ${process.env.PORT}`)
    );
  })
  .catch((error) =>
    console.error('❌ Failed to connect to MongoDB:', error.message)
  );
