export interface Statistique {
  valeur: string;
  label: string;
}

export interface GarderieInfo {
  nom: string;
  slogan: string;
  description: string;
  adresse: string;
  telephone: string;
  email: string;
  horaires: string;
  capacite: number;
  anneeFondation: number;
  agrement: string;
  statistiques: Statistique[];
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  image: string;
  imageAlt?: string;
  features: string[];
}

export interface ActiviteItem {
  id: number;
  titre: string;
  horaire: string;
  icone: string;
  categorie: string;
  description: string;
}
