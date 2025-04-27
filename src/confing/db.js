const mySql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mySql2.createPool({
  host: process.env.MYSQLHOST, // Usar la variable 'MYSQLHOST' proporcionada por Railway
  user: process.env.MYSQLUSER, // Usar la variable 'MYSQLUSER' proporcionada por Railway
  password: process.env.MYSQL_ROOT_PASSWORD, // Usar la variable 'MYSQL_ROOT_PASSWORD' proporcionada por Railway
  database: process.env.MYSQL_DATABASE, // Usar la variable 'MYSQL_DATABASE' proporcionada por Railway
  port: process.env.MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error al cargar la base de datos:", err);
    return;
  }
  console.log("base de datos conectada");
});

module.exports = pool;

/*DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Wilmer17
DB_DATABASE=tienda
DB_PORT=3306
JWT_SECRET=william


STRIPE_SECRET_KEY=sk_test_51R5K2FCaO7t3wqngPDBgyvpAwGRoBT0FvZigRCwAzq5MEOxGRN8fSqC1Kb1qDrURg6O3mULXMQmx8Qe7ZnSBtwuu006DG5kRDT*/
