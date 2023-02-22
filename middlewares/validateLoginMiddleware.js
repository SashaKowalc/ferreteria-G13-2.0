
const { body } = require('express-validator');
console.log("valida rober");
module.exports = [
	
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
]