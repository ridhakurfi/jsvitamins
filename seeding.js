const pool = require(`./connections/connection`);
const fs = require("fs").promises;

class Seeder {
  static async insertDisaster() {
    try {
      const values = JSON.parse(
        await fs.readFile("./data/disasters.json", "utf-8")
      )
        .map((dis) => {
          return `(
                    '${dis.name}', 
                    '${dis.type}', 
                    '${dis.origin}',
                    '${dis.effect}'
                )`;
        })
        .join(",\n");
      const query = `
                INSERT INTO "disasters" ("name", "type", "origin", "effect")
                VALUES ${values}
            `;
      await pool.query(query);
      console.log("✅ Chaos seeding done!");
    } catch (error) {
      console.error("Error seeding projects:", error);
    }
  }
}

module.exports = Seeder;
