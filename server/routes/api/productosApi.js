const express = require('express');
const router = express.Router();
const apiController=require('../../controllers/api/apiProductosController')

router.get('/products/', apiController.total);
router.get('/listProducts', apiController.lista);
router.get('/products/:id', apiController.detalleProducto);
router.get('/lastProduct', apiController.ultimo);
router.get('/categorias', apiController.categorias);
module.exports=router