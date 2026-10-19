import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Link from "next/link";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar : logo, nom de la garderie et menu de navigation */}
      <Navbar />

      <main className="flex-grow-1">
        {/* Hero : titre d'accueil, description, image et bouton CTA */}
        <Hero />

        {/* Services : trois services sous forme de cartes Bootstrap */}
        <Services />

        {/* Section contact */}
        <section
          id="contact"
          className="py-5"
          style={{ background: "linear-gradient(135deg, #fff7ed, #fef2f2)" }}
        >
          <div className="container text-center">
            <h2 className="display-6 fw-bold mb-3">
              Envie de visiter notre garderie ?
            </h2>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: 600 }}>
              Prenez rendez-vous pour découvrir nos locaux, rencontrer notre équipe et poser
              toutes vos questions.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="tel:+33123456789" className="btn btn-daycare-primary">
                <i className="bi bi-telephone-fill"></i> 01 23 45 67 89
              </a>
              <a href="mailto:contact@petitsrayons.fr" className="btn btn-daycare-outline">
                <i className="bi bi-envelope-fill text-warning"></i> contact@petitsrayons.fr
              </a>
            </div>
            <p className="text-muted small mt-4">
              <i className="bi bi-geo-alt-fill text-danger me-1"></i>
              15 Avenue des Petits Pas, 75015 Paris &bull; Lundi – Vendredi : 7h30 – 18h30
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4" style={{ backgroundColor: "#1e293b", color: "#94a3b8" }}>
        <div className="container">
          <p className="mb-0 small">
            © 2026 Garderie Les Petits Rayons – Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
