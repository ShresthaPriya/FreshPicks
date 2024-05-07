const productInfo = require("../models/productModel");

// const getProduct = async (req, res) => {
//     try {
//         const customers = await customer_name.find();
//         res.status(200).json(customers);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//         console.log(error);
//     }
// }

Product.find({}, (err, foundProducts) => {
    if (err) {
        console.log(err);
    } else {
        // Group products by category
        const groupedProducts = foundProducts.reduce((acc, product) => {
            acc[product.category] = acc[product.category] || [];
            acc[product.category].push(product);
            return acc;
        }, {});

        res.render('product.html', { groupedProducts: groupedProducts });
    }
});
module.exports = getproduct;