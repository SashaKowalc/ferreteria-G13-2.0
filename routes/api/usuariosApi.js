const express = require('express');
const router = express.Router();
const apiController=require('../../controllers/api/apiController')

router.get('/users',apiController.total);
router.get('/users/:id',apiController.detalle);



module.exports=router