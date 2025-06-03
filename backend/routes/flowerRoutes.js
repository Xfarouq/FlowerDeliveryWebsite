const express = require('express')
const router = express.Router()
const multer = require('multer')
const { getFlowers, getFlower, createFlower, deleteFlower } = require('../controllers/flowerController')

// Setup Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // save images to uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })

// Routes
router.get('/', getFlowers)
router.get('/:id', getFlower)
router.post('/', upload.single('image'), createFlower) // Upload image with 'image' field
router.delete('/:id', deleteFlower)

module.exports = router
