const express = require("express");
const { conseguirArticulos } = require("../modelos/carrito");

const contraladorCarritoId = async (req, res) => {
  try {
    carrito = await conseguirArticulos(req.params.id);
    res.status(200).json(carrito);
  } catch (error) {
    res.status(400).json({ error: error.mensaje });
  }
};
module.exports = { contraladorCarritoId };
