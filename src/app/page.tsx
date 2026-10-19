"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Activites from "@/components/Activites";
import BookingContact from "@/components/BookingContact";
import { GarderieInfo } from "@/types";
import { fetchGarderieInfo, defaultGarderieInfo } from "@/services/api";

export default function Home() {
  const [info, setInfo] = useState<GarderieInfo>(defaultGarderieInfo);

  useEffect(() => {
    let isMounted = true;
    fetchGarderieInfo().then((data) => {
      if (isMounted) setInfo(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar : logo, nom de la garderie et menu de navigation */}
      <Navbar />

      <main className="flex-grow-1">
        {/* Hero : titre d'accueil, description, image et bouton CTA */}
        <Hero />

        {/* Services : trois services sous forme de cartes Bootstrap (chargés via GET /api/services) */}
        <Services />

        {/* Activités : activités pour les enfants (chargées via GET /api/activites) */}
        <Activites />

        {/* Formulaire interactif de contact & informations pratiques */}
        <BookingContact />
      </main>

      {/* Footer */}
      <footer className="text-center py-4" style={{ backgroundColor: "#1e293b", color: "#94a3b8" }}>
        <div className="container">
          <p className="mb-0 small">
            © 2026 {info.nom} – Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
