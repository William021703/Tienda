const express = require("express");
const routeUsuario = express.Router();
const controladorUsuario = require("../controllers/controladorUsuario");

routeUsuario.get("/:id", controladorUsuario);

module.exports = routeUsuario;
