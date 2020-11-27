//Requiriendo node
const express = require("express");
const router = express.Router();

//Módulos internos
const Seguimiento = require("../models/seguimiento");
const { Usuario } = require("../models/usuario");
const authUsuario = require("../middleware/authUsuario");
const authAdmin = require("../middleware/authAdmin");

//Rutas
//1.Crear el reporte de síntomas
router.post("/", authUsuario, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  //Si el usuario no existe
  if (!usuario) return res.status(404).send("El usuario no está registrado");
  //si el usuario existe
  const seguimiento = new Seguimiento({
    usuario: usuario._id,
    jornada: req.body.jornada,
    garganta: req.body.garganta,
    malestar: req.body.malestar,
    fatiga: req.body.fatiga,
    fiebre: req.body.fiebre,
    tos: req.body.tos,
    respiracion: req.body.respiracion,
    olfato: req.body.olfato,
    nasal: req.body.nasal,
    aislamiento1: req.body.aislamiento1,
    aislamiento2: req.body.aislamiento2,
    convivencia: req.body.convivencia,
    contacto: req.body.contacto,
  });
  const result = await seguimiento.save();
  res.status(200).send(result);
});

//2. Listar síntomas por usuario y por documento para el administrador
router.get("/listaSintomas/:documento", authAdmin, async (req, res) => {
  const usuario = await Usuario.findOne({ documento: req.params.documento });
  //Si el usuario no existe
  if (!usuario) return res.status(400).send("El usuario no está registrado");
  //Si el usuario existe
  // const seguimiento = await Seguimiento.find({ idUsuario: req.usuario._id });
  await Seguimiento.find({ 
    usuario: usuario._id 
  }).populate({
    path: 'usuario',
    select: 'nombre apellido documento cargo -_id'
  }).exec( (error, seguimientos) => {
    if (error) { 
      return res.status(404).send("No hay seguimientos registrados");
    }

    // console.log("seguimientos:", seguimientos)
    return res.status(200).send(seguimientos);
  })
  
});

// 3. Listar síntomas todos los usuarios por el administrador una vez se loguea
// router.get("/listaSintomasTodos", authAdmin, async (req, res) =>{
router.get("/listaSintomas/", authAdmin, async (req, res) =>{
    // const usuario = await Usuario.findById(req.usuario._id);
    const usuarios = await Usuario.find({
      contratoActivo: true
    }).select(['_id']);
    //Si no hay usuarios
    if(!usuarios) return res.status(404).send("No hay usuarios registrados");
    //Si el usuario existe y el contrato está activo

    await Seguimiento.find({
      usuario: {$in: usuarios}
    }).populate({
      path: 'usuario',
      select: 'nombre apellido documento cargo -_id'
    }).exec( (error, seguimientos) => {
      if (error) { 
        return res.status(404).send("No hay seguimientos registrados");
      }

      // console.log("seguimientos:", seguimientos)
      return res.status(200).send(seguimientos);
    })

})


//Export
module.exports = router;
