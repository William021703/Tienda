const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hola mundo desde expres");
});

const port = 4020;

app.listen(port, () => {
  console.log(`servidor en ejeccion el http://localhost:${port}`);
});
