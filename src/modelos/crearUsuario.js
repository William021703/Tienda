const express = require("express");
const db = require("../confing/db");

const crearUsuario = async (nombre, apellido, contrasena, rol_id) => {
  try {
    const [user] = await db
      .promise()
      .query(
        "INSERT INTO usuario (nombre, apellido, contrasena, rol_id ) VALUES (?,?,?,?)",
        [nombre, apellido, contrasena, rol_id]
      );
    const insertado = {
      id: user.insertId,
      nombre,
      apellido,
      contrasena,
      rol_id,
    };
    return insertado;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearUsuario };
