const db = require("../confing/db");
const express = require("express");

const conseguirArticulos = async (usuario_id) => {
  try {
    const [rows, field] = await db
      .promise()
      .query("SELECT * FROM carrito WHERE usuario_id = ?", [
        parseInt(usuario_id),
      ]);
    if (!rows) {
      const error = "Hubo un error en la consulta";
      return error;
    }
    return rows;
  } catch (error) {
    throw error;
  }
};
module.exports = { conseguirArticulos };
