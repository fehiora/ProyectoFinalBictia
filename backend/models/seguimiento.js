//Requiriendo módulos de node js
const mongoose = require("mongoose");

//Generando el modelo
const esquemaSeguimiento = new mongoose.Schema({
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'}, //Se usa esta referencia para que traiga datos del usuario relacionados con el seguimiento
    garganta: Boolean,
    malestar: Boolean,
    fiebre: Boolean,
    tos: Boolean,
    respiracion: Boolean,
    olfato: Boolean,
    aislamiento1: Boolean,
    aislamiento2: Boolean,
    convivencia: Boolean,
    contacto: Boolean,
    nasal: Boolean,
    fatiga: Boolean,
    jornada: String,
    fecha: {
        type: Date,
        default: Date.now,
    },
});

//Generando exports
const Seguimiento = mongoose.model('seguimiento', esquemaSeguimiento, 'seguimiento');
module.exports = Seguimiento;