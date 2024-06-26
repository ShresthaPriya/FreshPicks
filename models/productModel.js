// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     productName: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//         default: 0
//     },
//     image: {
//         type: String,
//         default: ""

//     },
//     description:{
//         type: String,
//         required: true
//     },
    
//     category:{
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    farmer:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);