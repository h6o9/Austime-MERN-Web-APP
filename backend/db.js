// const { Client } = require("pg");
// require("dotenv").config();
// const client = new Client({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
// console.log({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });
// client
//   .connect()
//   .then(() => console.log("Connected to PostgreSQL"))
//   .catch((err) => console.error("Connection error", err.stack));

require("dotenv").config(); // Load environment variables from .env

const { neon } = require("@neondatabase/serverless");

// Initialize the Neon SQL client with the DATABASE_URL from .env
const sql = neon(process.env.DATABASE_URL);

module.exports = sql;
