const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    price: Number
});

module.exports = mongoose.model('Item', itemSchema);
