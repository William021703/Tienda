const express = require("express");
const rutaStripe = express.Router();
const { createSession } = require("../controllers/controladorStripe");
const path = require("path");

rutaStripe.post("/", createSession);
rutaStripe.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pagoHecho.html"));
});
rutaStripe.get("/cancelar", (req, res) => {
  res.send("cancelar");
});

module.exports = { rutaStripe };
