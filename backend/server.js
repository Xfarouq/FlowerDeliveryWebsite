// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // ✅ Import CORS
const path = require('path');

const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const stripeRoutes = require('./routes/stripeRoutes');

const app = express();

// ✅ Allow requests from your frontend origin
app.use(cors({
  origin: 'http://localhost:3000',  // or your frontend domain when deployed
  credentials: true,
}));

app.use(express.json()); // ✅ Must come before route handling
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// ✅ All routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/stripe', stripeRoutes);

// ✅ Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Connected to DB & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB:', error.message);
  });
