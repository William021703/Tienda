const mySql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mySql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error al cargar la base de datos");
    console.log("error");
    return;
  }
  console.log("base de datos conectada");
});

module.exports = pool;
