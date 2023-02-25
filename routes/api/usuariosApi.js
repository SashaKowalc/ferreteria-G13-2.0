const express = require('express');
const router = express.Router();
const apiUsuariosController=require('../../controllers/api/apiUsuariosController')

router.get('/users',apiUsuariosController.total);
router.get('/users',apiUsuariosController.total);



module.exports=router