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
    }
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Product', productSchema);
