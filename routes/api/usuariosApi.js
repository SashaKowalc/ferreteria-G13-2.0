const express = require('express');
const router = express.Router();
const apiController=require('../../controllers/api/apiController')

router.get('/users',apiController.total);




module.exports=router