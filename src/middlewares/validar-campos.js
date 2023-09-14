const { validationResult } = require("express-validator");

//Con esta funcion validamos que las restricciones planteadas en las rutas se cumplan, de lo contrario nos devuelve un error
const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = { validarCampos, }