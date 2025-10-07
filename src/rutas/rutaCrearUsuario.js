const express = require("express");
const rutaCrearUsuario = express.Router();
const { usuarioCreado } = require("../controllers/controladorCrearUsuario");

/**
 * @swagger
 * /nuevoUsuario:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un usuario en la base de datos con nombre, apellido, contraseña encriptada y rol.
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *               - contrasena
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan
 *               apellido:
 *                 type: string
 *                 example: Pérez
 *               contrasena:
 *                 type: string
 *                 example: miContrasena123
 *               rol_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 15
 *                 nombre:
 *                   type: string
 *                   example: Juan
 *                 apellido:
 *                   type: string
 *                   example: Pérez
 *                 contrasena:
 *                   type: string
 *                   example: $2a$10$...
 *                 rol_id:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Campos incompletos o mal escritos
 *       404:
 *         description: Error al crear el usuario
 */

rutaCrearUsuario.post("/", usuarioCreado);

module.exports = { rutaCrearUsuario };
