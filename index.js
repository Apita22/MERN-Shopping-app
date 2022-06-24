const express = require('express')
const app = express()
const products =require('./assets/products.json')


app.get('/', function (req, res) {
  res.send('hello')
   })
    let cat=[];
    app.get('/getproducts/', (req, res)=> { 
       let i = products.filter((data)=> {

    if(data.category==="jewelery"){
      cat.push(data);
    }

  
     })
        res.send(cat)
    
 });
app.listen(3000);