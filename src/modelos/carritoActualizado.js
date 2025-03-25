const express = require("express");
const db = require("../confing/db");

const carrito = async (
  usuario_id,
  producto_id,
  nombre_producto,
  precio,
  img,
  cantidad
) => {
  try {
    let [rows, field] = await db
      .promise()
      .query(
        "SELECT * FROM carrito WHERE usuario_id = ? AND producto_id = ? ",
        [usuario_id, producto_id]
      );

    if (rows.length === 0) {
      return (rows = await db
        .promise()
        .query(
          "INSERT INTO carrito (usuario_id, producto_id, nombre_producto, precio, img, cantidad) VALUES (?,?,?,?,?,?)",
          [usuario_id, producto_id, nombre_producto, precio, img, cantidad]
        ));
    }
    rows = await db
      .promise()
      .query(
        "UPDATE carrito SET  cantidad = ? WHERE usuario_id = ? AND producto_id = ?",
        [cantidad, usuario_id, producto_id]
      );
    return { message: "carrito actualizado con exito " };
  } catch (error) {
    throw error;
  }
};

module.exports = { carrito };
