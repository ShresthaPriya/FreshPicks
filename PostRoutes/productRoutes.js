const express = require('express');
const multer = require('multer');
const router = express.Router();

// const authController = require('../controllers/authController');
const {createProduct} = require('../PostController/product.js');

const upload = multer({ dest: 'uploads/' });
router.post('/api/add_product', upload.single('image'), createProduct);
// router.post('/product', createProduct);
module.exports = router;

