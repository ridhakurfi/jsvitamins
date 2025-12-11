const { Pool } = require("pg");

const adminPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

async function createDatabase(dbName) {
  try {
    await adminPool.query(`CREATE DATABASE "${dbName}"`);
    console.log(`Database ${dbName} created!`);
  } catch (err) {
    console.error(err);
  } finally {
    adminPool.end();
  }
}
// createDatabase("floraproject_db");

async function deleteDatabase(dbName) {
  try {
    await adminPool.query(`DROP DATABASE IF EXISTS "${dbName}"`);
    console.log(`Database ${dbName} deleted!`);
  } catch (err) {
    console.error(err);
  } finally {
    await adminPool.end();
  }
}
// deleteDatabase("floraproject_db");

module.exports = adminPool