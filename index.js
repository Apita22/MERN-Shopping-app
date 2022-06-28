// require('./config/config');
// require('./models/DB');
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.get('/getProducts',(req,res)=>{
//     console.log('did');
//     })
// app.listen(process.env.PORT);
const express = require("express");
const products = require("./assets/products.json");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/products", (req, res) => {
	res.send(products);
});

app.listen(3000);