const express = require("express");
const rutaCarritoId = express.Router();
const { contraladorCarritoId } = require("../controllers/controladorCarritoId");

rutaCarritoId.get("/:id", contraladorCarritoId);

module.exports = { rutaCarritoId };
