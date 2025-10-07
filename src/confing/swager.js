const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api para la tienda en linea ",
      version: "1.0.0",
      description: "Documentación de la API de la tienda",
    },
  },
  apis: ["./rutas/*.js"],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpecs;
