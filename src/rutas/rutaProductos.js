const express = require("express");
const route = express.Router();
const { controlerProductos } = require("../controllers/controlerProducto");

route.get("/", controlerProductos);

module.exports = route;
