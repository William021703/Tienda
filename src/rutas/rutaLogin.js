const express = require("express");
const routeLogin = express.Router();
const { loging } = require("../controllers/controladorLoging");

routeLogin.post("/", loging);

module.exports = routeLogin;
