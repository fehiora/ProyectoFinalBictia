//Requiriendo node
const express = require("express");
const router = express.Router();

//Módulos internos
const Seguimiento = require("../models/seguimiento");
const { Usuario } = require("../models/usuario");
const auth = require("../middleware/auth");

//Rutas
//1.Crear el reporte de síntomas
router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  //Si el usuario no existe
  if (!usuario) return res.status(400).send("El usuario no está registrado");
  //si el usuario existe
  const seguimiento = new Seguimiento({
    idUsuario: usuario._id,
    garganta: req.body.garganta,
    malestar: req.body.malestar,
    fiebre: req.body.fiebre,
    tos: req.body.tos,
    respiracion: req.body.respiracion,
    olfato: req.body.olfato,
    aislamiento1: req.body.aislamiento1,
    aislamiento2: req.body.aislamiento2,
    convivencia: req.body.convivencia,
    contacto: req.body.contacto,
    nasal: req.body.nasal,
    fatiga: req.body.fatiga,
    jornada: req.body.jornada,
  });
  const result = await seguimiento.save();
  res.status(200).send(result);
});

//2. Listar síntomas por usuario y por documento
router.get("/listaSintomas/:documento", auth, async (req, res) => {
  const usuario = await Usuario.findOne({ documento: req.params.documento });
  //Si el usuario no existe
  if (!usuario) return res.status(400).send("El usuario no está registrado");
  //Si el usuario existe
  // const seguimiento = await Seguimiento.find({ idUsuario: req.usuario._id });
  const seguimiento = await Seguimiento.find({ idUsuario: usuario._id });
  res.send(seguimiento)
});

// 3. Listar síntomas todos los usuarios para el administrador una vez se loguea
router.get("/listaSintomasTodos", auth, async (req, res) =>{
    const usuario = await Usuario.findById(req.usuario._id);
    //si no hay usuarios
    if(!usuario) return res.status(400).send("No hay usuarios registrados");
    //Si hay usuarios
    const seguimiento = await Seguimiento.find({});
    res.send(seguimiento)
})


//Export
module.exports = router;
