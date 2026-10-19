const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

// Données : Informations générales de la garderie
const garderieInfo = {
  nom: "Garderie Les Petits Rayons",
  slogan: "Grandir, s'épanouir et sourire chaque jour",
  description:
    "Un environnement chaleureux, bienveillant et sécurisé pensé pour l'épanouissement, la créativité et le bien-être de votre enfant de 3 mois à 5 ans.",
  adresse: "15 Avenue des Petits Pas, 75015 Paris",
  telephone: "01 23 45 67 89",
  email: "contact@petitsrayons.fr",
  horaires: "Lundi – Vendredi : 7h30 – 18h30",
  capacite: 35,
  anneeFondation: 2018,
  agrement: "Agréé PMI & CAF",
  statistiques: [
    { valeur: "98%", label: "Parents satisfaits" },
    { valeur: "12+", label: "Éducatrices qualifiées" },
    { valeur: "100%", label: "Alimentation bio & locale" },
    { valeur: "6 ans", label: "D'expérience & d'amour" },
  ],
};

// Données : Liste des 3 services proposés
const servicesData = [
  {
    id: "eveil",
    title: "Crèche Douceur & Éveil Sensoriel",
    badge: "👶 3 à 18 mois",
    badgeClass: "badge-soft-warning",
    description:
      "Un cocon chaleureux avec un rythme personnalisé pour chaque bébé, des espaces moteurs doux et des professionnelles de la petite enfance dévouées.",
    image: "/images/service-eveil.svg",
    features: [
      "Espace snoezelen & stimulation sensorielle",
      "Taux d'encadrement renforcé (1 pour 3)",
      "Repas bio adaptés au rythme de diversification",
    ],
  },
  {
    id: "arts",
    title: "Ateliers Créatifs & Langage",
    badge: "🎨 18 mois à 3 ans",
    badgeClass: "badge-soft-coral",
    description:
      "Peinture tactile, pâte à modeler végétale, éveil musical et comptines bilingues pour stimuler l'imagination, l'expression et la curiosité.",
    image: "/images/service-arts.svg",
    features: [
      "Éveil musical et rythmique quotidien",
      "Sensibilisation douce à l'anglais",
      "Développement de la motricité fine",
    ],
  },
  {
    id: "nature",
    title: "Découverte & Plein Air",
    badge: "🌿 3 à 5 ans",
    badgeClass: "badge-soft-teal",
    description:
      "Jardin pédagogique, potager bio, motricité en extérieur et jeux coopératifs pour apprendre le vivre-ensemble et respecter la nature.",
    image: "/images/service-nature.svg",
    features: [
      "Sorties quotidiennes au jardin sécurisé",
      "Mini-potager et compostage ludique",
      "Jeux coopératifs et autonomie montessorienne",
    ],
  },
];

// Données : Liste des activités destinées aux enfants
const activitesData = [
  {
    id: 1,
    titre: "Éveil Musical & Chants",
    horaire: "Mardi & Jeudi à 10h00",
    icone: "bi-music-note-beamed",
    categorie: "Musique",
    description:
      "Découverte des instruments, comptines à gestes et exploration sonore pour stimuler le langage et le rythme.",
  },
  {
    id: 2,
    titre: "Atelier Potager & Nature",
    horaire: "Mercredi matin à 09h30",
    icone: "bi-flower1",
    categorie: "Nature",
    description:
      "Sensibilisation au vivant : planter des graines, arroser les aromates et observer les insectes du jardin.",
  },
  {
    id: 3,
    titre: "Peinture Sensorielle & Arts",
    horaire: "Lundi après-midi à 15h00",
    icone: "bi-palette",
    categorie: "Créativité",
    description:
      "Gouache aux doigts, empreintes végétales et fresques collectives sans contrainte pour libérer la créativité.",
  },
  {
    id: 4,
    titre: "Parcours Moteur & Gym Douce",
    horaire: "Vendredi matin à 10h30",
    icone: "bi-activity",
    categorie: "Motricité",
    description:
      "Tunnels souples, modules en mousse et ponts d'équilibre pour développer la coordination et la confiance corporelle.",
  },
];

// Routes API REST

/**
 * GET /api/garderie
 * Retourne les informations générales de la garderie
 */
app.get('/api/garderie', (req, res) => {
  res.json({
    success: true,
    data: garderieInfo,
  });
});

/**
 * GET /api/services
 * Retourne la liste des services proposés par la garderie
 */
app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    data: servicesData,
  });
});

/**
 * GET /api/activites
 * Retourne la liste des activités destinées aux enfants
 */
app.get('/api/activites', (req, res) => {
  res.json({
    success: true,
    data: activitesData,
  });
});

// Route racine d'information
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur l'API REST de la Garderie Les Petits Rayons",
    version: "1.0.0",
    endpoints: [
      { method: "GET", path: "/api/garderie", description: "Informations générales de la garderie" },
      { method: "GET", path: "/api/services", description: "Liste des services proposés" },
      { method: "GET", path: "/api/activites", description: "Liste des activités destinées aux enfants" },
    ],
  });
});

// Démarrage du serveur si exécuté directement
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
    console.log(`- GET /api/garderie`);
    console.log(`- GET /api/services`);
    console.log(`- GET /api/activites`);
  });
}

module.exports = app;
