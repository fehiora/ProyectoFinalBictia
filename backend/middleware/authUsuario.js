//Requiriendo módulos de node
const jwt = require('jsonwebtoken');

//Creación de validación de usuarios
function authUsuario(req, res, next) {
    let jwtToken = req.header('Authorization');
    jwtToken = jwtToken.split(' ')[1];
    //Si el token no existe
    if (!jwtToken) return res.status(400).send('No hay token para el acceso');
    //Si el token existe
    try {
        const payload = jwt.verify(jwtToken, 'claveUsuario');
        req.usuario = payload;
        next();
    } catch (error) {
        res.status(406).send('El token no es válido');
    }
}

//Exports
module.exports = authUsuario