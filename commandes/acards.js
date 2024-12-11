const fs = require('fs');
const path = require('path');

// Fonction pour déterminer le prix en fonction du nom du fichier
function determinePrice(pricePart) {
    // Normaliser les majuscules en minuscules pour gérer "1M" et "1m"
    pricePart = pricePart.toLowerCase();

    // Gérer les prix terminés par "nc" (ex: 50nc -> 50🔷)
    if (pricePart.endsWith('nc')) {
        return pricePart.replace('nc', '🔷');
    }
    
    // Gérer les prix terminés par "k" ou "m"
    let total = 0;
    const priceRegex = /(\d+)([km]?)/g;
    let match;

    while ((match = priceRegex.exec(pricePart)) !== null) {
        const value = parseInt(match[1]);
        const unit = match[2];

        if (unit === 'k') {
            total += value * 1000; // Si c'est "k", multiplier par 1 000
        } else if (unit === 'm') {
            total += value * 1000000; // Si c'est "m", multiplier par 1 000 000
        } else {
            total += value; // Sinon, c'est une valeur entière sans unité
        }
    }

    // Convertir le nombre en format avec des points pour les milliers et ajouter le symbole 🧭
    return total.toLocaleString() + '🧭';
}

// Fonction pour déterminer la catégorie (s-, s, s+, etc.)
function determineCategory(categoryPart) {
    switch (categoryPart) {
        case 'sm': return 's-';
        case 'sp': return 's+';
        case 's': return 's';
        case 'ssm': return 'ss-';
        case 'ssp': return 'ss+';
        case 'ss': return 'ss';
        default: return 'inconnu';
    }
}

// Fonction pour créer une carte à partir du nom du fichier
function createCard(fileName) {
    const parts = fileName.replace('.jpg', '').split('_'); // Découper le nom de fichier en parties

    const name = parts[0]; // Ex: Gojo
    const grade = parts[1]; // Ex: bronze
    let placement = parts[2]; // Ex: legend ou legende

    // Normaliser le placement pour traiter "legende" et "card_legende" comme "legend"
    if (placement === 'legende') {
        placement = 'legend';
    }

    const category = determineCategory(parts[3]); // Ex: s+, s-, etc.
    const price = determinePrice(parts[4]); // Ex: 50nc, 500k, 1m500k, etc.
    const image = `./Card_data/${fileName}`; // Chemin de l'image

    return {
        name,
        grade,
        placement,
        category,
        price,
        image
    };
}

// Fonction pour regrouper les cartes selon leur placement (sparking, ultra, legends, etc.)
function groupCardsByPlacement(cards) {
    const groupedCards = {};

    cards.forEach(card => {
        // Normalisation du placement pour inclure "legend" et "legende" sous la catégorie "legend"
        let placement = card.placement;

        if (placement === 'legende' || placement === 'card_legende' || placement === 'legend') {
            placement = 'legend';
        }

        // Créer une clé pour chaque type de placement (ex: 'ultra', 'sparking', 'legend')
        if (!groupedCards[placement]) {
            groupedCards[placement] = [];
        }
        groupedCards[placement].push({
            grade: card.grade,
            name: card.name,
            category: card.category,
            image: card.image,
            price: card.price
        });
    });

    return groupedCards;
}

// Fonction principale pour lire les fichiers et générer les cartes
function generateCards() {
    const cardDirectory = './Card_data/';
    
    // Lire tous les fichiers du répertoire Card_data
    const files = fs.readdirSync(cardDirectory);

    // Filtrer uniquement les fichiers .jpg qui ne commencent pas par "IMG"
    const cardFiles = files.filter(file => file.endsWith('.jpg') && !file.startsWith('IMG'));

    // Créer les cartes à partir des noms de fichiers
    const cards = cardFiles.map(file => createCard(file));

    // Regrouper les cartes par leur placement
    const groupedCards = groupCardsByPlacement(cards);

    return groupedCards;
}

generateCards();

// Exporter les cartes générées
const cardData = generateCards();
module.exports = { cards: cardData };

// Afficher les cartes générées pour vérifier
// console.log(JSON.stringify(cardData, null, 2));
