const { Client } = require("pg");
// const client = new Client("postgres://localhost:5432/bazinga-games");


const client = new Client(process.env.DATABASE_URL
  || "postgres://localhost:5432/bazinga-games"

);

module.exports = client
