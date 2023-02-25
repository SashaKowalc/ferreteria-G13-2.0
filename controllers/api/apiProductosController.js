const path = require('path');
let db = require('../../database/models');

const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const apiProductosController = {
    total: (req, res) => {
        let acum=0;
        let prod =db.Productos.findAll();
        let catego =db.Categorias.findAll({include:['productos']});
        let categoriasDelProducto = db.ProductoCategorias.findAll()
        Promise.all([prod, catego,categoriasDelProducto])
        .then(function([productos,categorias,prodCates ]) {
            let respuesta = { 
                cantidad:prodCates.length,
                count: productos.length,
                countByCategory: categorias.map(categoria=>({"categoria": categoria.categoria_id,
                "nombre":categoria.nombre,"cantidad de productos":categoria.productos.length
               })),
             
       
            
            
            }
                
                
                res.json({respuesta});
                
               }).catch(err=>console.log(err));
    }       

}

module.exports =apiProductosController;