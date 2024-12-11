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

// Fonction pour créer la table duels
async function createDuelsTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS duels (
        id SERIAL PRIMARY KEY,
        ide INT,
        equipe1 JSONB,
        equipe2 JSONB,
        arene JSONB,
        stats_custom TEXT,            
        status TEXT DEFAULT 'close'
      );
    `);
    console.log('Table duels créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table duels:', error);
  } finally {
    client.release();
  }
}

async function enregistrerDuel(ide, equipe1, equipe2, arene, statsCustom, status) {
   const client = await pool.connect();
   const query = `
        INSERT INTO duels (ide, equipe1, equipe2, arene, stats_custom, status)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;
    `;
    const values = [
        ide,
        JSON.stringify(equipe1),
        JSON.stringify(equipe2),
        JSON.stringify(arene),
        statsCustom,
        status
    ];

    try {
        const res = await client.query(query, values);
        console.log('Duel enregistré avec l\'ID:', res.rows[0].id);
        return res.rows[0].id; // Retourne l'ID du duel enregistré
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du duel', error);
    }
}

async function getDuelIds() {
    const client = await pool.connect();
    const query = `
        SELECT ide FROM duels WHERE status = 'open';
    `;
    try {
        const res = await client.query(query);
        return res.rows.map(row => row.ide); // Retourne un tableau des ide
    } catch (error) {
        console.error('Erreur lors de la récupération des duels ouverts', error);
        return []; // Retourne un tableau vide en cas d'erreur
    } finally {
        client.release();
    }
}


createDuelsTable();

module.exports = {
    enregistrerDuel, 
    getDuelIds
};
