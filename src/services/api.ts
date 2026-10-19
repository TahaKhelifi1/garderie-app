import { GarderieInfo, ServiceItem, ActiviteItem } from "@/types";

export const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (typeof window !== "undefined") {
    // Dans le navigateur, utilise le proxy Next.js /api (sans risque de CORS ou port bloqué)
    return "/api";
  }
  return "http://127.0.0.1:5000/api";
};

// Données de secours par défaut au cas où le serveur Express n'est pas encore lancé
export const defaultGarderieInfo: GarderieInfo = {
  nom: "Garderie Les Petits Rayons",
  slogan: "Grandir, s'épanouir et sourire chaque jour",
  description:
    "Un cocon chaleureux où chaque enfant grandit à son rythme. Nous offrons à vos enfants (de 3 mois à 6 ans) un cadre sécurisant, joyeux et stimulant avec une alimentation 100 % biologique et un encadrement bienveillant.",
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

export const defaultServices: ServiceItem[] = [
  {
    id: "eveil",
    title: "Crèche Douceur & Éveil Sensoriel",
    badge: "👶 3 à 18 mois",
    badgeClass: "badge-soft-warning",
    description:
      "Un cocon chaleureux avec un rythme personnalisé pour chaque bébé, des espaces moteurs doux et des professionnelles de la petite enfance dévouées.",
    image: "/images/service-eveil.jpg",
    imageAlt: "Bébés en activité d'éveil sensoriel",
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
    imageAlt: "Ateliers créatifs, peinture et comptines",
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
    imageAlt: "Enfants dans le jardin potager pédagogique",
    features: [
      "Sorties quotidiennes au jardin sécurisé",
      "Mini-potager et compostage ludique",
      "Jeux coopératifs et autonomie montessorienne",
    ],
  },
];

export const defaultActivites: ActiviteItem[] = [
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

/**
 * Récupère les informations générales de la garderie depuis l'API Express
 */
export async function fetchGarderieInfo(): Promise<GarderieInfo> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/garderie`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
    const json = await res.json();
    return json.data || json;
  } catch (err) {
    console.warn("API Express /api/garderie inaccessible, utilisation des données de secours :", err);
    return defaultGarderieInfo;
  }
}

/**
 * Récupère la liste des services depuis l'API Express
 */
export async function fetchServices(): Promise<ServiceItem[]> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/services`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
    const json = await res.json();
    return json.data || json;
  } catch (err) {
    console.warn("API Express /api/services inaccessible, utilisation des données de secours :", err);
    return defaultServices;
  }
}

/**
 * Récupère la liste des activités depuis l'API Express
 */
export async function fetchActivites(): Promise<ActiviteItem[]> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/activites`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
    const json = await res.json();
    return json.data || json;
  } catch (err) {
    console.warn("API Express /api/activites inaccessible, utilisation des données de secours :", err);
    return defaultActivites;
  }
}
