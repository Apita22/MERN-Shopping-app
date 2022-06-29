const controller=require('../controller/product.controller') 
const express=require('express');
const router=express.Router();
router.get('/',controller.getProduct);
module.exports=router;