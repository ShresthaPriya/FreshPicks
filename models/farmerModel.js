const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
<<<<<<< HEAD
        
=======
>>>>>>> c6f0763fdc806b8054428c4870b6b486ac60b96e
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);
