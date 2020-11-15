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
    admin: Boolean,
    clave: String,
    preMedica: String,
    contratoActivo: Boolean,
    fechaNacim: Date,
    usoDatos: Boolean,
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    ultimoIngreso: Date,
});

//Generando el jwt para encriptamiento al ingreso del usuario
esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
            _id: this._id,
            documento: this.documento,
        },
        "claveUsuario"
    );
};

//Generando el jwt para encriptamiento al ingreso del administrador
esquemaUsuario.methods.generateJWTAdmin = function () {
    return jwt.sign({
            _id: this._id,
            documento: this.documento,
            admin: this.admin,
        },
        "claveAdmin"
    );
};

//Exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;