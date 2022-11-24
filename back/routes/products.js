const express=require("express")
const router=express.Router();

const {getProducts} = require("../controllers/productscontroller") //traemos la respuesta json desde del controlador

router.route('/productos').get(getProducts)//establecemps de que ruta queremos ver el getproducto

module.exports=router;