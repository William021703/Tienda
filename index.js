const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const pool = require("./src/confing/db");
const rutaProductos = require("./src/rutas/rutaProductos");
const rutaCrearProducto = require("./src/rutas/rutaCrearProducto");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrytp = require("bcryptjs");
const { rutaRoles } = require("./src/rutas/rutaRoles");
const routeLogin = require("./src/rutas/rutaLogin");
const { rutaCrearUsuario } = require("./src/rutas/rutaCrearUsuario");
const routeUsuario = require("./src/rutas/rutaUsuario");
const { rutaActualizarCarrito } = require("./src/rutas/rutaActualizarCarrito");
const { rutaCarritoId } = require("./src/rutas/rutaCarritoId");
const { rutaEliminar } = require("./src/rutas/rutaEliminar");
const { rutaEliminarTodo } = require("./src/rutas/rutaEliminarTodo");
const { rutaStripe } = require("./src/rutas/rutaStripe");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.MYSQLPORT || 3020;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "[https://teal-pony-fe4b61.netlify.app, http://localhost:5173/]",
  })
);

app.use("/productos", rutaProductos);
app.use("/crearProductos", rutaCrearProducto);
app.use("/roles", rutaRoles);
app.use("/login", routeLogin);
app.use("/nuevoUsuario", rutaCrearUsuario);
app.use("/usuario", routeUsuario);
app.use("/actualizarCarrito", rutaActualizarCarrito);
app.use("/carrito", rutaCarritoId);
app.use("/eliminar", rutaEliminar);
app.use("/eliminarTodo", rutaEliminarTodo);
app.use("/pagos", rutaStripe);
app.use(express.static(path.resolve("src/public")));

app.listen(PORT, () => {
  console.log(`servidor a ecutandose en e localhost:${PORT}`);
});
