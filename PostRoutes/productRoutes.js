// const express = require('express');
// const router = express.Router();
// // const authController = require('../controllers/authController');
// const createProduct = require('../PostController/Product.js');


// router.post('/product', createProduct);
// module.exports = router;

const express = require('express');
const router = express.Router();
const createProduct = require('../PostController/Product.js');

router.post('/product', createProduct);

module.exports = router;
// productRoutes.js

// const express = require('express');
// const router = express.Router();
// const Product = require('../models/productModel'); // Assuming this is your product model

// // Route to fetch product data
// router.get('/api/products', async (req, res) => {
//     try {
//         // Fetch all products from the database
//         const products = await Product.find();

//         // Send the products as a response
//         res.json(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// module.exports = router;
