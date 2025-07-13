require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const stripeRoutes = require('./routes/stripeRoutes');

const app = express();

// ✅ CORS options for both local and deployed frontends
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://flowerdeliverywebsite-frontend.onrender.com'
  ],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Log every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// ✅ API routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/stripe', stripeRoutes);

// ✅ MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Connected to DB & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB:', error.message);
  });
