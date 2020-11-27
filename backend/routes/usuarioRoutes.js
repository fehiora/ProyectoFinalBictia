//Requiriendo los módulos de node
const express = require("express");
const authAdmin = require("../middleware/authAdmin");
const authUsuario = require("../middleware/authUsuario");
const router = express.Router();

//Importando módulos internos
const {
    Usuario
} = require("../models/usuario");

//Rutas de la API

//1. Creación y almacenamiento de administrador
router.post("/crear_admin", async (req, res) => {
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
        admin: true,
        clave: req.body.clave,
        preMedica: req.body.preMedica,
        contratoActivo: req.body.contratoActivo,
        fechaNacim: req.body.fechaNacim,
        ultimoIngreso: req.body.ultimoIngreso, //cómo chuchas hago esto?
    });
    const result = await usuario.save();
    res.status(200).send({msg: 'Usuario registrado con éxito'});
});

//2. Creación y almacenamiento de usuarios
router.post("/crear_user", async (req, res) => {
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
        fechaNacim: req.body.fechaNacim,
        preMedica: req.body.preMedica,
        cargo: req.body.cargo,
        clave: req.body.clave,
        usoDatos: req.body.usoDatos,
        admin: false,
        contratoActivo: true,
    });

    // Si el usuario no acepta tratamiento de datos
    if (usuario.usoDatos == false) {
        res.status(412).send({ err: 'Usuario no registrado, debe aceptar tratamiento de datos' })
    } else {
        const result = await usuario.save();
        res.status(200).send({ msg: 'Usuario registrado con éxito' });
    }
});


//3. Modificar datos del usuario (menos la clave). Esta acción solo la puede hacer el administrador
router.put("/modificaUsuario/:documento", authAdmin, async (req, res) => {
    delete req.body.clave
    delete req.body.fechaCreacion
    delete req.body.ultimoIngreso
    const usuario = await Usuario.findOneAndUpdate({
            documento: req.params.documento
        },
        req.body, {
            new: true,
        }
    );
    //Si el usuario no existe
    if (!usuario) return res.status(404).send("El usuario no está registrado");
    res.status(200).send(usuario);
});


//3. Modificar los datos de usuario, esta acción la hace el usuario
router.put("/", authUsuario, async (req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(
        req.usuario._id, 
        req.body, 
        {
            new: true,
        }
    );
    //Si el usuario no existe
    if (!usuario) return res.status(404).send("El usuario no está registrado");
    res.status(200).send(usuario);
});

//4. Obtener los datos del usuario
router.get("/", authUsuario, async (req, res) => {
    const usuario = await Usuario.findById(
        req.usuario._id, 
    );
    //Si el usuario no existe
    if (!usuario) return res.status(404).send("El usuario no está registrado");
    res.status(200).send(usuario);
});

//5. Obtener listado de usuarios
router.get("/listarUsuarios", authAdmin, async (req, res) => {
    const usuarios = await Usuario.find();
    //Si el usuario no existe
    if (!usuarios) return res.status(404).send("No hay usuarios registrados");
    res.status(200).send(usuarios);
});

//6. Obtener los datos del usuario por documento
router.get("/:documento", authAdmin, async (req, res) => {
    const usuario = await Usuario.findOne({
        documento: req.params.documento
    });
    //Si el usuario no existe
    if (!usuario) return res.status(404).send("El usuario no está registrado");
    res.status(200).send(usuario);
});

//7. Modificar los datos de usuario por documento, esta acción la hace el admin
router.put("/:documento", authAdmin, async (req, res) => {
    const usuario = await Usuario.findOne({
        documento: req.params.documento
    });

    //Si el usuario no existe
    if (!usuario) return res.status(404).send("El usuario no está registrado");

    const nuevo_usuario = await Usuario.findByIdAndUpdate(
        usuario._id, 
        req.body, 
        {
            new: true,
        }
    );
    //Si el usuario no existe
    if (!nuevo_usuario) return res.status(500).send("Error al actualizar el usuario");
    res.status(200).send(nuevo_usuario);
});

//Creando el export
module.exports = router;