require('./config/config');
// require('./models/DB');
const routes=require('./routes/index.router')
const product=require('./routes/product.route')
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api',routes);
  app.use('/product',product)
app.listen(process.env.PORT);
// const express = require("express");
// const products = require("./assets/products.json");
// const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hello World");
// });

// app.get("/products", (req, res) => {
// 	res.send(products);
// });
//  app.listen(3000);