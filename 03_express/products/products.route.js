const express = require('express');
const productRouter = express.Router();

productRouter.get('/products', (req , res)=>{
    return res.send("product")
})

module.exports =  productRouter;