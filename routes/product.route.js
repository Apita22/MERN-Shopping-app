const express =require('express');
const product =require('../controller/product');
const router=express.Router();
router.get('/:id',product.getOneProduct);
module.exports=router;