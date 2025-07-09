require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // ✅ Import CORS
const path = require('path');

const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

app.use(cors());  // ✅ Use CORS before routes
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

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
