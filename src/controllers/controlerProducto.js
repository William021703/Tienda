const express = require("express");
const item = require("../modelos/productos");

const controlerProductos = async (req, res) => {
  try {
    const product = await item.getProductos();
    return res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.mensaje });
  }
};

module.exports = { controlerProductos };
