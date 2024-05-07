// const express = require('express');
// const router = express.Router();
// // const authController = require('../controllers/authController');
// const deleteCategory = require('../deleteControllers/deleteCategory.js');

// router.delete('/deletecategory/:_id', deleteCategory);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const categoryController = require('./deleteControllers/deleteCategory');

// // DELETE route for deleting a category
// router.delete('/category/:id', async (req, res) => {
//     const { id } = req.params;
//     if (!id) {
//         return res.status(400).send('Category ID is required');
//     }

//     try {
//         const result = await categoryController.deleteCategory(id);
//         res.send(result);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// module.exports = router;
