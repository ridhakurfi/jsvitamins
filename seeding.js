const pool = require(`./connections/connection`);
const fs = require('fs').promises;

async function insertProjects() {
    try {
        const values = JSON.parse(await fs.readFile('./data/projects.json', 'utf-8'))
            .map(pro => { return`(
                '${pro.name}', 
                '${pro.element}', 
                '${pro.region}'
            )`})
            .join(',\n');
        const query = `
            INSERT INTO "project" ("name", "element", "region")
            VALUES ${values}
        `;
        await pool.query(query);
        console.log('✅ Project seeding done!');
    } catch (error) {
        console.error('Error seeding projects:', error);
    }
}

async function seedDatabase() {
    await insertProjects();
    await pool.end();
}

seedDatabase();