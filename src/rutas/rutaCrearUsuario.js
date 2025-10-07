const express = require("express");
const rutaCrearUsuario = express.Router();
const { usuarioCreado } = require("../controllers/controladorCrearUsuario");

rutaCrearUsuario.post("/", usuarioCreado);

module.exports = { rutaCrearUsuario };
