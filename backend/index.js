//Requiriendo módulos de node
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Requiriendo módulos internos
const usuario = require("./routes/usuarioRoutes");
const authUsuario = require("./routes/authUsuarioRoute");
const authAdmin = require("./routes/authAdminRoute");
const seguimiento = require('./routes/seguimientoRoutes');

//Creando la aplicación
const app = express();
app.use(cors());
app.use(express.json());
app.use("/apiCov/usuario/", usuario);
app.use("/apiCov/authUsuario", authUsuario);
app.use("/apiCov/authAdmin", authAdmin);
app.use('/apiCov/seguimiento/', seguimiento);

//Configurando el puerto de ejecución del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando servidor en puerto: " + port));

//Conectando con MongoDB

mongoose
    // .connect("mongodb://localhost/covIt", {
    .connect("mongodb://192.168.0.28/covIt", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión con MongoDB exitosa"))
    .catch((error) => console.log("Conexión con MongoDB fallida"));