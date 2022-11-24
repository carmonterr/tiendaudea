const express=require("express");
const app = express();

app.use(express.json());

//importar rutas de productos
const productos=require("./routes/products")

app.use('/api',productos)

module.exports=app