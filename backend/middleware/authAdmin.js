//Requiriendo módulos de node
const jwt = require('jsonwebtoken');

//Creación de validación de administrador
function authAdmin(req, res, next) {
    let jwtTokenAdmin = req.header('Authorization');
    jwtTokenAdmin = jwtTokenAdmin.split(' ')[1];
    console.log("AdminToken: " + jwtTokenAdmin)
    //Si el token no existe
    if (!jwtTokenAdmin) return res.status(400).send('No hay token para el acceso');
    //Si el token existe
    try {
        const payload = jwt.verify(jwtTokenAdmin, 'claveAdmin');
        req.usuario = payload;
        next();
    } catch (error) {
        res.status(406).send('El token no es válido');
    }
}

//Exports
module.exports = authAdmin