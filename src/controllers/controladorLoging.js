const express = require("express");
const login = require("../modelos/loging");
const jwt = require("jsonwebtoken");
const doten = require("dotenv");
const bcrypt = require("bcryptjs");
doten.config();

const loging = async (req, res) => {
  const { nombre, contrasena } = req.body;
  try {
    const buscarUsuario = await login(nombre);
    if (!buscarUsuario) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }
    console.log(buscarUsuario);
    const verificarContrasena = await bcrypt.compare(
      contrasena,
      buscarUsuario.contrasena
    );
    if (!verificarContrasena) {
      return res.status(401).json({ error: "contrasena incorrecta" });
    }
    const token = jwt.sign(
      { id: buscarUsuario.usuario_id, nombre: buscarUsuario.nombre },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      usuario: {
        nombre: buscarUsuario.nombre,
        apellido: buscarUsuario.apellido,
        id: buscarUsuario.usuario_id,
        rol_id: buscarUsuario.rol_id,
      },
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.menssage });
  }
};

module.exports = { loging };
