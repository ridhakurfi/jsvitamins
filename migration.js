const pool = require(`./connections/connection`);

let createTableProject = `
CREATE TABLE IF NOT EXISTS "project" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "element" VARCHAR(100) NOT NULL,
    "region" VARCHAR(100) NOT NULL
)`;
let deleteTableProject = `DROP TABLE IF EXISTS "project"`;

async function migrating() {
  try {
    
    await pool.query(deleteTableProject);
    await pool.query(createTableProject);

    console.log("Migration success: Table created!");
  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
}

migrating();
