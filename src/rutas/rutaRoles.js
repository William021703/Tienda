const express = require("express");
const rutaRoles = express.Router();
const { role } = require("../controllers/controladorRoles");

rutaRoles.get("/", role);

module.exports = { rutaRoles };
