const { Pool } = require("pg");

const adminPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

class Mutator {
  static async createDatabase(dbName) {
    try {
      await adminPool.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database ${dbName} created!`);
    } catch (err) {
      console.error(err);
    }
  }

  static async deleteDatabase(dbName) {
    try {
      await adminPool.query(`DROP DATABASE IF EXISTS "${dbName}"`);
      console.log(`Database ${dbName} deleted!`);
    } catch (err) {
      console.error(err.detail);
    }
  }

  static async clearDatabase(dbName) {
    try {
      await adminPool.query(`SELECT pg_terminate_backend(pid)
      FROM pg_stat_activity
      WHERE datname = '${dbName}'
        AND pid <> pg_backend_pid();`);
      console.log(`Database ${dbName} cleared!`);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Mutator;
