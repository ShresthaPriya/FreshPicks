// // const model = require('../models/categoryModel');

// // const deleteCategory = async (req, res) => {
// //     try {
// //         const deletedCategory = await model.findByIdAndDelete(req.params._id);
// //         if (!deletedCategory) {
// //             return res.status(404).json({ message: 'Category not found' });
// //         }
// //         res.status(200).json({ message: 'Category deleted successfully' });
// //     } catch (error) {
// //         console.error('Error deleting category:', error);
// //         res.status(500).json({ message: error.message });
// //     }
// // }

// // module.exports = deleteCategory;

const Category = require('../models/Category');  // Adjust the path as necessary

async function deleteCategory(categoryId) {
    if (!categoryId.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error('Invalid ObjectId format');
    }

    try {
        const result = await Category.findByIdAndDelete(categoryId);
        if (!result) {
            throw new Error('Category not found');
        }
        return { message: 'Category successfully deleted', categoryId: result._id };
    } catch (error) {
        throw error;  // Propagate errors back to the caller
    }
}

module.exports = { deleteCategory };

