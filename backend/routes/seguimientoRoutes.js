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

//2. Listar síntomas por usuario y por documento para el administrador
router.get("/listaSintomas/:documento", authAdmin, async (req, res) => {
  const usuario = await Usuario.findOne({ documento: req.params.documento });
  //Si el usuario no existe
  if (!usuario) return res.status(400).send("El usuario no está registrado");
  //Si el usuario existe
  // const seguimiento = await Seguimiento.find({ idUsuario: req.usuario._id });
  const seguimiento = await Seguimiento.find({ idUsuario: usuario._id });
  res.send(seguimiento)
});

// 3. Listar síntomas todos los usuarios por el administrador una vez se loguea
// router.get("/listaSintomasTodos", authAdmin, async (req, res) =>{
router.get("/listaSintomasTodos", authAdmin, async (req, res) =>{
    // const usuario = await Usuario.findById(req.usuario._id);
    const usuarios = await Usuario.find({
      contratoActivo: true
    }).select(['_id', 'nombre', 'documento', 'contratoActivo']);
    //Si no hay usuarios
    if(!usuarios) return res.status(404).send("No hay usuarios registrados");
    //Si el usuario existe y el contrato está activo
    var allSeguimientos = [];
    // console.log(usuarios)
    // 
    
    for(let x = 0; x < usuarios.length; x++){
      
      let seguimientos = await Seguimiento.find(
        { idUsuario: usuarios[x]._id }
      )

      if(seguimientos){
        console.log("usuario:", usuarios[x]);
        console.log("seguimientos:", seguimientos);
        for (let y = 0; y < seguimientos.length; y++) {
          allSeguimientos.push(seguimientos[y]);
        }
        console.log("_all:", allSeguimientos);
        console.log("------------------------------")
      }
      
    }

    console.log("ALL:", allSeguimientos)

    if(!allSeguimientos || allSeguimientos.length === 0) return res.status(404).send("No hay seguimientos registrados");
    
    return res.status(200).send(allSeguimientos);
})


//Export
module.exports = router;
