const pool = require("./connections/connection");

async function fetchData() {
  try {
    const result = await pool.query('SELECT * FROM "disasters"');
    console.table(result.rows);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}
fetchData();