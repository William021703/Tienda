const express = require("express");
const rutaEliminar = express.Router();
const { contrladorEliminar } = require("../controllers/controladorEliminar");

rutaEliminar.delete("/:usuario_id/:producto_id", contrladorEliminar);

module.exports = { rutaEliminar };
