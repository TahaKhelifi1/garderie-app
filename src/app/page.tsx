"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Activites from "@/components/Activites";
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

        {/* Section contact dynamique (chargée via GET /api/garderie) */}
        <section
          id="contact"
          className="py-5"
          style={{ background: "linear-gradient(135deg, #fff7ed, #fef2f2)" }}
        >
          <div className="container text-center">
            <h2 className="display-6 fw-bold mb-3">
              Envie de visiter {info.nom} ?
            </h2>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: 650 }}>
              Prenez rendez-vous pour découvrir nos locaux, rencontrer notre équipe et poser
              toutes vos questions.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href={`tel:${info.telephone.replace(/\s+/g, '')}`} className="btn btn-daycare-primary">
                <i className="bi bi-telephone-fill"></i> {info.telephone}
              </a>
              <a href={`mailto:${info.email}`} className="btn btn-daycare-outline">
                <i className="bi bi-envelope-fill text-warning"></i> {info.email}
              </a>
            </div>
            <p className="text-muted small mt-4">
              <i className="bi bi-geo-alt-fill text-danger me-1"></i>
              {info.adresse} &bull; {info.horaires}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4" style={{ backgroundColor: "#1e293b", color: "#94a3b8" }}>
        <div className="container">
          <p className="mb-0 small">
            © 2026 {info.nom} – Tous droits réservés. ({info.agrement})
          </p>
        </div>
      </footer>
    </div>
  );
}
