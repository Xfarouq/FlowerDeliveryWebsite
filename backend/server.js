require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ Import CORS
const path = require('path');
const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://flowerdeliverywebsite-admin-dashboard.onrender.com'],
  methods: ['GET', 'POST', 'DELETE']
};


app.use(cors(corsOptions)); // ✅ Use CORS

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// ✅ Routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);

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
