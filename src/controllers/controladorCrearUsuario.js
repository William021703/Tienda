const express = require("express");
const { crearUsuario } = require("../modelos/crearUsuario");

const bcrypt = require("bcryptjs");

const usuarioCreado = async (req, res) => {
  const { nombre, apellido, contrasena, rol_id } = req.body;
  if (!nombre || !apellido || !contrasena) {
    return res
      .status(400)
      .json({
        mensaje: "Campos incompletos o error en la forma de escribirlos",
      });
  }

  try {
    const salt = await bcrypt.genSalt(10);

    const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);

    const nuevoUsuario = await crearUsuario(
      nombre,
      apellido,
      contrasenaEncriptada,
      rol_id
    );
    res.status(200).json(nuevoUsuario);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = { usuarioCreado };
