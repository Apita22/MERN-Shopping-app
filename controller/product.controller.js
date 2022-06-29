const data=require('../assets/products.json')
module.exports.getProduct = (req,res)=>{
    res.send(data)
}