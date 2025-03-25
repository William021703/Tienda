const express = require("express");
const db = require("../confing/db");

const eliminarArticulo = async (usuario_id, producto_id) => {
  try {
    const [rows, field] = await db
      .promise()
      .query("DELETE from carrito WHERE usuario_id = ? and producto_id = ?", [
        usuario_id,
        producto_id,
      ]);
    if (!rows) {
      return error;
    }
    return "Articulo eliminado";
  } catch (error) {
    throw error;
  }
};

module.exports = { eliminarArticulo };
