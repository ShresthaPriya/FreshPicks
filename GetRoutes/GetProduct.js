const express  = require('express');
const router = express.Router();
const productInfo = require("../getControllers/getProduct");


router.get('/getproduct',productInfo);
module.exports = router;