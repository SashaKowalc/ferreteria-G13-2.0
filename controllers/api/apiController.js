const path = require('path');
let db = require('../../database/models');

const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const apiController = {
    total: (req, res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            let respuesta = {
                count: usuarios.length,
                usuarios:{
                name:usuarios.map(usuario=>("id : "+usuario.usuario_id+",name : "+usuario.nombre +","+ "email : "+usuario.email+"detail: http://localhost:3030/api/users/:"+usuario.usuario_id)),
               
            }
                }
            
                res.json(respuesta);
            
            })
                
        
                

                 
            
                 
        }
    }
            
    

module.exports = apiController;