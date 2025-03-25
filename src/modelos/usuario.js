const express = require("express");
const db = require("../confing/db");

const getUsuario = async (id) => {
  try {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM usuario WHERE usuario_id = ?", [parseInt(id)]);

    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = getUsuario;
