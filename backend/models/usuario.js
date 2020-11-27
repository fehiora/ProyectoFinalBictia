//Requiriendo módulos internos de node.js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Creando el esquema

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    apellido: String,
    documento: Number,
    sexo: String,
    fechaNacim: Date,
    preMedica: String,
    cargo: String,
    clave: String,
    usoDatos: Boolean,
    admin: Boolean,
    contratoActivo: Boolean,
    fechaCreacion: {
        type: Date,
        default: Date.now,
    }
});

//Generando el jwt para encriptamiento al ingreso del usuario
esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
            _id: this._id,
            documento: this.documento,
            nombre: `${this.nombre} ${this.apellido}`,
            admin: false,
        },
        "claveUsuario",
        { expiresIn: 20 * 60 } // expira en 20min
    );
};

//Generando el jwt para encriptamiento al ingreso del administrador
esquemaUsuario.methods.generateJWTAdmin = function () {
    return jwt.sign({
            _id: this._id,
            documento: this.documento,
            nombre: `${this.nombre} ${this.apellido}`,
            admin: this.admin,
        },
        "claveAdmin",
        { expiresIn: 60 * 60 } // expira en 1h
    );
};

//Exports
const Usuario = mongoose.model("usuario", esquemaUsuario, 'usuario');
module.exports.Usuario = Usuario;