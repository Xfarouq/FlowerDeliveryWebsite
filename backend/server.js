require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // 
const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();


app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 


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
