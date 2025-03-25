const express = require("express");
const item = require("../modelos/nuevoProducto");

const controlerCrearProductos = async (req, res) => {
  try {
    const nuevoProducto = await item.nuevoProducto(req.body);

    return res.status(200).json(nuevoProducto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { controlerCrearProductos };
