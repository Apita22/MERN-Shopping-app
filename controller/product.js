const data=require('../assets/products.json');

module.exports.getOneProduct=((res,req)=>{
    let id=req.params.id;

    res.send(id);

})