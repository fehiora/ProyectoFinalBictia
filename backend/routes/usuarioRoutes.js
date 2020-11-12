//Requiriendo los módulos de node
const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

//importando módulos internos
const {
    Usuario
} = require("../models/usuario");

//Rutas de la API

//1. Creación y almacenamiento de usuarios
router.post("/", async (req, res) => {
    let usuario = await Usuario.findOne({
        documento: req.body.documento,
    });
    //si el documento se encuentra en la BD
    if (usuario) return res.status(400).send("El usuario ya está registrado");
    //Si el documento no se encuentra en la BD, se puede registrar el usuario
    usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        sexo: req.body.sexo,
        cargo: req.body.cargo,
        rol: req.body.rol, //Esto viene del body? no depende del tipo de usuario lo cual está marcado en la BD?
        clave: req.body.clave,
        preMedica: req.body.preMedica,
        estadoContrato: req.body.estadoContrato,
        imagen: req.body.imagen,
        fechaNacim: req.body.fechaNacim,
        fechaModifica: req.body.fechaModifica, //cómo chuchas hago esto?
        ultimoIngreso: req.body.ultimoIngreso, //cómo chuchas hago esto?
    });
    // Guardando el usuario en la BD con la creación del JWT
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({
        jwtToken,
    });
    // res.status(200).send({ jwtToken } + 'Usuario registrado con exito');
});

//2. Modificar datos del usuario
router.put("/", auth, async (req, res) => {
    //Si el usuario existe

    // const usuario = await Usuario.findByIdAndUpdate(
    //     req.usuario._id, {
    //         nombre: req.body.nombre,
    //         apellido: req.body.apellido,
    //         documento: req.body.documento,
    //         sexo: req.body.sexo,
    //         cargo: req.body.cargo,
    //         rol: req.body.rol, //Esto viene del body? no depende del tipo de usuario lo cual está marcado en la BD?
    //         clave: req.body.clave,
    //         preMedica: req.body.preMedica,
    //         estadoContrato: req.body.estadoContrato,
    //         imagen: req.body.imagen,
    //         fechaNacim: req.body.fechaNacim,
    //     }, {
    //         new: true,
    //     }
    // );

    const usuario = await Usuario.findByIdAndUpdate(
        req.usuario._id, 
        req.body, 
        { new: true, }
    );

    //Si el usuario no existe
    if (!usuario) return res.status(404).send("El usuario no está registrado");

    res.status(200).send(usuario);
});

//Creando el export
module.exports = router;