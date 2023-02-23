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
                meta:{
                    status:200,
                    detail:"/api/users"
                },
                data:{
                    usuarios
                    
                } 
        }
        res.json(respuesta);
            })
    },
}
module.exports = apiController;