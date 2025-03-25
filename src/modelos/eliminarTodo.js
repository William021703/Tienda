const db = require("../confing/db");
const expres = require("express");

const eliminarTodo = async (id) => {
  try {
    const [eliminar] = await db
      .promise()
      .query("DELETE from carrito WHERE usuario_id = ?", [id]);
    if (eliminar.affectedRows === 0) {
      throw new error("no se encontro nada");
    }
    return eliminar;
  } catch (error) {
    throw error;
  }
};

module.exports = { eliminarTodo };
