const express = require("express");
const { eliminarArticulo } = require("../modelos/eliminarArticulo");

const contrladorEliminar = async (req, res) => {
  const { usuario_id, producto_id } = req.params;
  if (!usuario_id || !producto_id) {
    return "Faltan parametros o Parametros incompletos";
  }
  try {
    const eliminar = await eliminarArticulo(usuario_id, producto_id);
    if (eliminar.affectedRows === 0) {
      return "Articulo no encontrado";
    }
    return res.status(200).json({ mensaje: "Articulo eliminado" });
  } catch (error) {
    return res.status(400).json({ error: error.mensaje });
  }
};

module.exports = { contrladorEliminar };
