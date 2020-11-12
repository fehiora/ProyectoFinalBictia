//Requiriendo módulos internos de node.js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Creando el esquema

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    apellido: String,
    documento: String,
    sexo: String,
    cargo: String,
    rol: String,
    clave: String,
    preMedica: String,
    estadoContrato: String,
    imagen: String, //Se debe verificar el tipo de datos para pruebas lo dejo en String mientras
    fechaNacim: Date,
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    fechaModifica: Date,
    ultimoIngreso: Date,
});

//Generando el jwt para encriptamiento al ingreso del usuario
esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
            _id: this._id,
            nombre: this.nombre,
            documento: this.documento,
        },
        "clave"
    );
};

//Exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;