const expres = require("express");
const { eliminarTodo } = require("../modelos/eliminarTodo");

const controladorEliminarTodo = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(404).json({ mensaje: "id no valido" });
  }
  try {
    const eliminar = await eliminarTodo(id);
    if (eliminar.affectedRows == 0) {
      return "No filas no encontradas";
    }
    return res.status(200).json({ mensaje: "Carrito vaciado" });
  } catch (error) {
    res.status(400).json({ error: error.mensaje });
  }
};

module.exports = { controladorEliminarTodo };
