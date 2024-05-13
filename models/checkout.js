const model = require('mongoose');
const { required } = require('nodemon/lib/config');

const checkoutSchema = new model.Schema({
    username: {
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
    },
    phone:{
        type:Number,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    }
   

},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = model.model('Checkout', checkoutSchema)