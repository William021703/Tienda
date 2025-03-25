const express = require("express");
const getUsuario = require("../modelos/usuario");

const controladorUsuario = async (req, res) => {
  try {
    const usuario = await getUsuario(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.mensaje });
  }
};
module.exports = controladorUsuario;
