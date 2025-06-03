// Import .env file
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Middleware
app.use(express.json()) // Parse JSON
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
const flowerRoutes = require('./routes/flowerRoutes')
app.use('/api/flowers', flowerRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to Database and Server is running on port', process.env.PORT)
    })
  })
  .catch((error) => console.log(error))
