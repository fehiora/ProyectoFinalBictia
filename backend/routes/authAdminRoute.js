//Requiriendo el módulos de node
const express = require("express");
const router = express.Router();

//Requiriendo módulos internos
const { Usuario } = require("../models/usuario");

//Generando la ruta
router.post("/", async (req, res) => {
    //Validar que el documento exista
    const usuario = await Usuario.findOne({
        documento: req.body.documento
    });
    //Si el documento no existe
    if (!usuario)
        return res.status(400).send("Usuario o contraseña incorrectos");
    //Si no existe la clave
    if (usuario.clave !== req.body.clave)
        return res.status(400).send("Usuario o contraseña incorrectos");

    //Generar el JWT
    if (usuario.admin == true) {
        const jwtToken = usuario.generateJWTAdmin();
        res.status(200).send({
            jwtToken
        });
    } else {
        res.status(403).send('El Usuario no es Administrador');
    }
});

module.exports = router;