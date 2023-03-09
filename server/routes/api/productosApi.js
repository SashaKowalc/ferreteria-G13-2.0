const express = require('express');
const router = express.Router();
const apiController=require('../../controllers/api/apiProductosController')

router.get('/products/', apiController.total);
router.get('/listProducts', apiController.listProducts);
router.get('/products/:id', apiController.detalleProducto);
router.get('/lastProduct', apiController.lastProduct);
router.get('/categorias', apiController.categorias);
module.exports=router