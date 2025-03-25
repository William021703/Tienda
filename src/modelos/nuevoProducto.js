const express = require("express");
const db = require("../confing/db");

const nuevoProducto = async (product) => {
  const { nombre, descripcion, img, precio, cantidad } = product;
  try {
    const [producto] = await db
      .promise()
      .query(
        "INSERT INTO productos (nombre, descripcion, img, precio, cantidad) VALUES (?,?,?,?,?) ",
        [nombre, descripcion, img, precio, cantidad]
      );
    const insertado = {
      id: producto.insertId,
      nombre,
      descripcion,
      img,
      precio,
      cantidad,
    };
    return insertado;
  } catch (error) {
    throw error;
  }
};

module.exports = { nuevoProducto };

/* 
este es el objeto que mysql return cuando hacemos un update ,delete,= y un post
{
fieldCount:	Siempre será 0 en un INSERT, ya que no estamos recuperando filas.
affectedRows:	Indica cuántas filas fueron afectadas por la consulta. En un INSERT, si se agregó 1 fila, será 1.
insertId:	Es el id del nuevo registro insertado, si la columna id es AUTO_INCREMENT.
serverStatus:	Representa el estado del servidor MySQL después de la consulta. No suele ser relevante en la mayoría de los casos.
warningCount:	Si hubo advertencias durante la consulta, este número será mayor que 0. Si todo está bien, es 0.
message:	Mensaje adicional de MySQL, suele estar vacío en un INSERT.
protocol41:	Indica si se usó el protocolo de MySQL 4.1 o superior. Es true en la mayoría de los casos y no suele ser relevante.
changedRows:	Solo se usa en UPDATE o DELETE, indica cuántas filas fueron modificadas. En un INSERT es 0.
}

*/
