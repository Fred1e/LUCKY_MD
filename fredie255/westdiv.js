const { Pool } = require("pg");

const s = require("../set");

var dbUrl = s.DB;
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

async function createWestDivTable() {
  const client = await pool.connect();

  try {
    // Créez la table westdiv si elle n'existe pas déjà
    await client.query(`
      CREATE TABLE IF NOT EXISTS westdiv(
        id SERIAL PRIMARY KEY,
        e1 TEXT DEFAULT 'aucun',
        e2 TEXT DEFAULT 'aucun',
        e3 TEXT DEFAULT 'aucun',
        e4 TEXT DEFAULT 'aucun',
        e5 INTEGER DEFAULT 0,
        e6 INTEGER DEFAULT 0,
        e7 INTEGER DEFAULT 0,
        e8 INTEGER DEFAULT 0,
        e9 INTEGER DEFAULT 0,
        e10 INTEGER DEFAULT 0,
        e11 INTEGER DEFAULT 0,
        e12 INTEGER DEFAULT 0,
        e13 INTEGER DEFAULT 0,
        e14 INTEGER DEFAULT 0,
        e15 INTEGER DEFAULT 0,
        e16 INTEGER DEFAULT 0,
        e17 TEXT DEFAULT 'aucun',
        e18 INTEGER DEFAULT 0,
        e19 INTEGER DEFAULT 0,
        e20 INTEGER DEFAULT 0,
        e21 INTEGER DEFAULT 0,
        e22 INTEGER DEFAULT 0,
        e23 TEXT DEFAULT 'aucun'
        );
    `);
    console.log('Table westdiv créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table westdiv:', error);
  } finally {
    client.release();
  }
}

async function insertData1() {
  const client = await pool.connect();

  try {
    // Modifiez la définition de la table pour ajouter les colonnes
    await client.query(`
      ALTER TABLE westdiv
      ADD COLUMN e23 TEXT DEFAULT 'aucun'
     `);

    console.log('Colonnes ajoutées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des colonnes:', error);
  } finally {
    client.release();
  }
}
//insertData1()
// Fonction pour insérer des données
async function insertData() {
  const client = await pool.connect();
  try {
    for (let i = 1; i <= 50; i++) {
      const query = `
        INSERT INTO westdiv(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
      `;

      const values = [
        'aucun', 'aucun', 'aucun', 'aucun', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'aucun', 0, 0, 0, 0, 0, 'aucun'
      ];

      await client.query(query, values);
      console.log(`Données insérées avec succès pour l'ID ${i}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'insertion des données:", error);
  } finally {
    client.release();
  }
}
// Fonction pour récupérer toutes les données
async function getData(ide) {
  const client = await pool.connect();

  try {
   const query = 'SELECT e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23 FROM westdiv WHERE id = $1';
    const result = await client.query(query, [ide]);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}


// Appeler la fonction createNorth1FicheTable après la création de la table
createWestDivTable();
//insertData();

module.exports = {
  createWestDivTable,
 //insertData1,
// insertData,
  getData
};
