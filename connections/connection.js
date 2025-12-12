const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "disaster_bd",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 200,
});

module.exports = pool;