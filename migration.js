const pool = require(`./connections/connection`);

let createTableChaos = `
CREATE TABLE IF NOT EXISTS "disasters" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "origin" VARCHAR(100) NOT NULL,
    "effect" VARCHAR(100) NOT NULL
)`;
let deleteTableChaos = `DROP TABLE IF EXISTS "disasters"`;

class Migrator {
  static async migrating() {
    try {
      await pool.query(deleteTableChaos);
      await pool.query(createTableChaos);

      console.log("Migration success: Table created!");
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Migrator;
