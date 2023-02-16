const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require ('multer');
const path = require('path');


const db = require('../database/models/');
const fs = require('fs');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');



const User = db.Usuarios;

// ************ Configuracion Multer para los midleware ************
const storage = multer.diskStorage({
    
    destination: function(req, file, cb){
        cb(null, 'public/images/')
    },

    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + path.extname(file.originalname)

        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer ({storage: storage})
// // LOGIN
router.get('/login', userController.login);
router.post('/login/', userController. processLogin);
router.get('/logout', userController.logout);
// // NUEVO USUARIO
router.get('/registro', userController.registro);
router.post('/registro/', upload.any(''),userLoggedMiddleware, userController.registrar)
router.get('/editar/:id/',userController.editar);
router.post('/editar/:id/', upload.any(''), userController.actualizar)
router.get('/perfil/:id/', userController.perfil);



// DETALLE DEL USUARIO
// router.get('/users/:id/', userController.usuario);

// EDITAR PRODUCTO
// router.get('/editar/:id/', userController.editar);
// router.put('/editar/:id/', upload.any(''), userController.update)

// //BORRAR EL USUARIO
// router.delete('/delete/:id/', userController.eliminar)

module.exports = router