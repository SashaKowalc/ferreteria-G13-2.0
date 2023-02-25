const express = require('express');
const router = express.Router();
const apiController=require('../../controllers/api/apiProductosController')

router.get('/products/', apiController.total)



module.exports=router