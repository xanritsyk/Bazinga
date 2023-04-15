const { Client } = require("pg");
// const client = new Client("postgres://localhost:5432/capstone");


const client = new Client(process.env.DATABASE_URL
  || "postgres://localhost:5432/capstone"

);


module.exports = client
