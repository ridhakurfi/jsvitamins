const pool = require("../connections/connection");
const Factory = require("./class");

class Model {
  static async load() {
    try {
      let result = await pool.query('SELECT * FROM "disasters"');
      result = Factory.createManyDisaster(result.rows);
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      pool.end();
    }
  }
  static async loadById(id) {
    try {
      let result = await pool.query(
        `SELECT * FROM "disasters" WHERE id = ${Number(id)}`
      );
      result = Factory.createDisaster(result.rows[0]);
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      pool.end();
    }
  }
  static async createDisaster(item) {
    try {
      let result = await pool.query(
        `INSERT INTO "disasters" ("name","type","origin","effect")VALUES ('${item[0]}','${item[1]}','${item[2]}','${item[3]}')`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  static async editDisaster(item) {
    try {
      let result = await pool.query(
        `UPDATE "disasters"
      SET name = '${item[1]}'
      WHERE "id" = ${Number(item[0])}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteDisaster(item) {
    try {
      let result = await pool.query(`DELETE FROM "disasters"
      WHERE "id" = ${Number(item)}`);
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      pool.end();
    }
  }
}

module.exports = Model;
