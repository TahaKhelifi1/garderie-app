import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="daycare-footer">
      <div className="container">
        <div className="row g-4 justify-content-between pb-4 border-bottom border-secondary border-opacity-25">
          {/* Brand info */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="position-relative overflow-hidden rounded-circle bg-white border border-warning"
                style={{ width: "42px", height: "42px" }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Logo Garderie Les Petits Rayons"
                  fill
                  className="object-fit-cover"
                />
              </div>
              <span className="brand-font fs-4 fw-bold text-white">
                Les Petits <span style={{ color: "var(--daycare-coral)" }}>Rayons</span>
              </span>
            </div>
            <p className="small text-secondary mb-3 lh-base pe-md-4">
              Garderie d'enfants et crèche bienveillante dédiée à l'éveil, l'autonomie et le bonheur des tout-petits de 3 mois à 6 ans. Environnement sécurisé, alimentation 100% biologique et activités sensorielles & nature.
            </p>
            <div className="d-flex gap-2">
              <a
                href="#contact"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#contact"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#contact"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-md-3">
            <h4 className="fs-6 fw-bold text-white mb-3 text-uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="#accueil">Accueil</Link>
              </li>
              <li>
                <Link href="#services">Nos 3 Services d'éveil</Link>
              </li>
              <li>
                <Link href="#avantages">Pourquoi nous choisir</Link>
              </li>
              <li>
                <Link href="#visite">Réserver une visite</Link>
              </li>
              <li>
                <Link href="#contact">Coordonnées & Horaires</Link>
              </li>
            </ul>
          </div>

          {/* Services shortcuts */}
          <div className="col-6 col-md-4">
            <h4 className="fs-6 fw-bold text-white mb-3 text-uppercase tracking-wider">
              Nos Programmes
            </h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <span className="text-warning">👶 3 - 18 mois :</span> Crèche sensorielle & motricité
              </li>
              <li>
                <span className="text-danger">🎨 18m - 3 ans :</span> Ateliers créatifs & bilingues
              </li>
              <li>
                <span className="text-success">🌳 3 - 6 ans :</span> Jardin pédagogique & nature
              </li>
              <li className="pt-2">
                <span className="badge bg-warning text-dark fw-bold">
                  Agrément PMI n° 75-2024-08
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-4 small text-secondary">
          <div>
            © 2026 Garderie Les Petits Rayons. Tous droits réservés.
          </div>
          <div className="d-flex gap-3">
            <Link href="#accueil" className="text-secondary">Mentions légales</Link>
            <span>•</span>
            <Link href="#accueil" className="text-secondary">Politique de confidentialité</Link>
            <span>•</span>
            <Link href="#accueil" className="text-secondary">Règlement intérieur</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
