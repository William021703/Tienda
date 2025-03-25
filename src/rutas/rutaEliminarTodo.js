const expres = require("express");
const {
  controladorEliminarTodo,
} = require("../controllers/controladorEliminarTodo");
const rutaEliminarTodo = expres.Router();

rutaEliminarTodo.delete("/:id", controladorEliminarTodo);

module.exports = { rutaEliminarTodo };
