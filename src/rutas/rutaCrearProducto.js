const express = require("express");
const routeCrearProductos = express.Router();
const {
  controlerCrearProductos,
} = require("../controllers/controlerCrearProducto");

routeCrearProductos.post("/", controlerCrearProductos);

module.exports = routeCrearProductos;
