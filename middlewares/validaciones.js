const {body, check} = require ('express-validator')
console.log("Valida usuario rober");
const validaciones=[
    body('email').notEmpty().isEmail().withMessage('Email invalido'),
    body('contraseña').notEmpty().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
]
module.exports = validaciones;