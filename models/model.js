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
      let { name, type, origin, effect } = item;
      console.log(item, "<<<<<<<<");
      
      // let result = await pool.query(
      //   `INSERT INTO "disasters" ("name","type","origin","effect")VALUES (${name},${type},${origin},${effect})`
      // );
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      pool.end();
    }
  }
}

module.exports = Model;
