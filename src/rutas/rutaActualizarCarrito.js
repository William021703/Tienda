const express = require("express");
const rutaActualizarCarrito = express.Router();
const {
  actualizarCarrito,
} = require("../controllers/controladorCarritoActualizado");

rutaActualizarCarrito.post("/", actualizarCarrito);

module.exports = { rutaActualizarCarrito };
