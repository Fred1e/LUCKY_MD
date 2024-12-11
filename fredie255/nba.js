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

async function createNbaTable() {
  const client = await pool.connect();

  try {
    // Créez la table nba si elle n'existe pas déjà
    await client.query(`
      CREATE TABLE IF NOT EXISTS nba(
        id SERIAL PRIMARY KEY,
        e1 TEXT DEFAULT 'aucun',
        e2 TEXT DEFAULT 'aucun',
        e3 INTEGER DEFAULT 0,
        e4 INTEGER DEFAULT 0,
        e5 INTEGER DEFAULT 0,
        e6 TEXT DEFAULT 'aucun',
        e7 TEXT DEFAULT 'aucun',
        e8 INTEGER DEFAULT 0,
        e9 INTEGER DEFAULT 0,
        e10 INTEGER DEFAULT 0,
        e11 TEXT DEFAULT 'aucun',
        e12 TEXT DEFAULT 'aucun',
        e13 INTEGER DEFAULT 0,
        e14 INTEGER DEFAULT 0,
        e15 INTEGER DEFAULT 0,
        e16 TEXT DEFAULT 'aucun',
        e17 TEXT DEFAULT 'aucun',
        e18 INTEGER DEFAULT 0,
        e19 INTEGER DEFAULT 0,
        e20 INTEGER DEFAULT 0,
        e21 TEXT DEFAULT 'aucun',
        e22 TEXT DEFAULT 'aucun',
        e23 INTEGER DEFAULT 0,
        e24 INTEGER DEFAULT 0,
        e25 INTEGER DEFAULT 0,
        e26 TEXT DEFAULT 'aucun',
        e27 TEXT DEFAULT 'aucun',
        e28 INTEGER DEFAULT 0,
        e29 INTEGER DEFAULT 0,
        e30 INTEGER DEFAULT 0,
        e31 TEXT DEFAULT 'aucun',
        e32 TEXT DEFAULT 'aucun',
        e33 INTEGER DEFAULT 0,
        e34 INTEGER DEFAULT 0,
        e35 INTEGER DEFAULT 0,
        e36 TEXT DEFAULT 'aucun',
        e37 TEXT DEFAULT 'aucun',
        e38 INTEGER DEFAULT 0,
        e39 INTEGER DEFAULT 0,
        e40 INTEGER DEFAULT 0
        );
    `);
    console.log('Table nba créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table nba:', error);
  } finally {
    client.release();
  }
}

/*async function insertData1() {
  const client = await pool.connect();

  try {
    // Modifiez la définition de la table pour ajouter les colonnes
    await client.query(`
      ALTER TABLE nba
     `);

    console.log('Colonnes ajoutées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des colonnes:', error);
  } finally {
    client.release();
  }
}*/
// Fonction pour insérer des données
async function insertData() {
  const client = await pool.connect();
  try {
    for (let i = 1; i <= 12; i++) {
      const query = `
        INSERT INTO nba(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23, e24, e25, e26, e27, e28, e29, e30, e31, e32, e33, e34, e35, e36, e37, e38, e39, e40)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40)
      `;

      const values = [
        'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 'aucun', 'aucun', 0, 0, 0,
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
   const query = 'SELECT e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23, e24, e25, e26, e27, e28, e29, e30, e31, e32, e33, e34, e35, e36, e37, e38, e39, e40 FROM nba WHERE id = $1';
    const result = await client.query(query, [ide]);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}


// Appeler la fonction createNorth1FicheTable après la création de la table
createNbaTable();
//insertData();

module.exports = {
  createNbaTable,
 // insertData1,
 // insertData,
  getData
};
