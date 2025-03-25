const express = require("express");
const { carrito } = require("../modelos/carritoActualizado");

const actualizarCarrito = async (req, res) => {
  const { usuario_id, producto_id, nombre_producto, precio, img, cantidad } =
    req.body;
  console.log(req.body);
  console.log("hola mundo");
  try {
    const actualizar = await carrito(
      usuario_id,
      producto_id,
      nombre_producto,
      precio,
      img,
      cantidad
    );
    return res.status(200).json({ message: "Cambios guardados exitosamente!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { actualizarCarrito };
