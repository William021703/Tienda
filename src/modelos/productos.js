const express = require("express");
const db = require("../confing/db");

const getProductos = async () => {
  try {
    const [rows, field] = await db.promise().query("SELECT * FROM productos");
    if (!rows) {
      const error = "hubo un error en la consulta";
      return error;
    }
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { getProductos };
