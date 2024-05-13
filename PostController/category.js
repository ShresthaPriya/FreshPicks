const model = require('../models/checkout');

const storecheckout = async (req, res) => {
    try {
        const checkout = await model.create(req.body);
        res.status(201).json(checkout);

    } catch(error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

module.exports = storecheckout;
