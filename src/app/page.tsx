"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =============================================================
   Landing Page – Garderie "Les Petits Rayons"
   Fichier unique contenant : Navbar, Hero et Services
   ============================================================= */

export default function Home() {
  /* ---------- State pour le menu mobile ---------- */
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------- Données des 3 services ---------- */
  const services = [
    {
      id: "eveil",
      title: "Crèche Douceur & Éveil Sensoriel",
      badge: "👶 3 à 18 mois",
      badgeClass: "badge-age-yellow",
      image: "/images/service-eveil.jpg",
      imageAlt: "Bébés en activité d'éveil sensoriel",
      description:
        "Un cocon apaisant pensé pour les tout-petits. Nous favorisons la motricité libre, l'éveil des sens et le respect des rythmes de chaque nourrisson.",
      features: [
        "Espace Snoezelen et lumières douces",
        "Motricité libre sur tapis ergonomiques",
        "Rapport quotidien pour les parents",
        "1 adulte pour 3 bébés",
      ],
    },
    {
      id: "arts",
      title: "Ateliers d'Art & Expression Créative",
      badge: "🎨 18 mois à 3 ans",
      badgeClass: "badge-age-coral",
      image: "/images/service-arts.svg",
      imageAlt: "Ateliers créatifs, peinture et comptines",
      description:
        "Stimulez l'imagination de votre enfant grâce à la peinture sensorielle, la pâte à modeler végétale et les comptines bilingues.",
      features: [
        "Peintures naturelles non-toxiques",
        "Éveil musical et comptines",
        "Initiation bilingue Français / Anglais",
        "Jeux coopératifs et gestion des émotions",
      ],
    },
    {
      id: "nature",
      title: "Jardin Nature & Pré-Maternelle",
      badge: "🌳 3 à 6 ans",
      badgeClass: "badge-age-mint",
      image: "/images/service-nature.svg",
      imageAlt: "Enfants dans le jardin potager pédagogique",
      description:
        "Une passerelle vers l'école ! Les enfants découvrent la nature dans notre potager bio et s'initient au langage et à la logique.",
      features: [
        "Potager bio entretenu par les enfants",
        "Activités quotidiennes en plein air",
        "Jeux de lettres, chiffres et logique",
        "Préparation à la rentrée scolaire",
      ],
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* ============================================================= */}
      {/* SECTION 1 : NAVBAR – logo, nom de la garderie, menu navigation */}
      {/* ============================================================= */}
      <nav className="navbar navbar-expand-lg sticky-top daycare-navbar py-2">
        <div className="container">
          {/* Logo + Nom */}
          <Link
            href="#accueil"
            className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo Garderie Les Petits Rayons"
              width={46}
              height={46}
              className="rounded-circle border border-warning"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="d-flex flex-column">
              <span
                className="fs-5 fw-bold"
                style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
              >
                Les Petits{" "}
                <span style={{ color: "var(--daycare-coral)" }}>Rayons</span>
              </span>
              <span
                className="text-muted"
                style={{ fontSize: "0.72rem", fontWeight: 600 }}
              >
                🌻 Crèche & Garderie Éducative
              </span>
            </div>
          </Link>

          {/* Bouton hamburger mobile */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} fs-2`}
              style={{ color: menuOpen ? "#ef4444" : "#f59e0b" }}
            ></i>
          </button>

          {/* Menu de navigation */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-1 my-3 my-lg-0 text-center">
              <li className="nav-item">
                <Link href="#accueil" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Nos Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="#contact"
              className="btn btn-daycare-primary"
              onClick={() => setMenuOpen(false)}
            >
              <i className="bi bi-calendar-heart"></i>
              <span>Réserver une visite</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">
        {/* ============================================================= */}
        {/* SECTION 2 : HERO – titre, description, image, bouton CTA      */}
        {/* ============================================================= */}
        <section id="accueil" className="hero-section">
          <div className="container">
            <div className="row align-items-center gy-5">
              {/* Colonne texte */}
              <div className="col-12 col-lg-6 text-center text-lg-start">
                <span
                  className="d-inline-block mb-3 px-3 py-2 rounded-pill fw-bold"
                  style={{
                    background: "linear-gradient(135deg, #fef3c7 0%, #ffe4e6 100%)",
                    color: "#9a3412",
                    fontSize: "0.92rem",
                    border: "1px solid rgba(251, 146, 60, 0.3)",
                  }}
                >
                  <i className="bi bi-stars text-warning me-1"></i>
                  Garderie & Crèche Bilingue d'Excellence
                </span>

                <h1 className="display-4 fw-bold lh-sm mb-3">
                  Un cocon chaleureux où chaque enfant{" "}
                  <span className="hero-title-highlight">grandit & sourit</span>
                </h1>

                <p className="lead text-muted fs-5 mb-4">
                  Bienvenue à <strong>Les Petits Rayons</strong>. Nous offrons à vos enfants
                  (de 3 mois à 6 ans) un cadre sécurisant, joyeux et stimulant avec une
                  alimentation 100 % biologique et un encadrement bienveillant.
                </p>

                {/* Boutons d'appel à l'action */}
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                  <Link href="#contact" className="btn btn-daycare-primary justify-content-center">
                    <i className="bi bi-calendar2-check-fill"></i>
                    Réserver une visite
                  </Link>
                  <Link href="#services" className="btn btn-daycare-outline justify-content-center">
                    <i className="bi bi-stars text-warning"></i>
                    Découvrir nos services
                  </Link>
                </div>

                {/* Badges de confiance */}
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-4 pt-3 border-top">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center"
                      style={{ width: 36, height: 36 }}
                    >
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <span className="small fw-semibold text-secondary">Agrément PMI</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center"
                      style={{ width: 36, height: 36 }}
                    >
                      <i className="bi bi-clock-history"></i>
                    </div>
                    <span className="small fw-semibold text-secondary">7h30 – 18h30</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center"
                      style={{ width: 36, height: 36 }}
                    >
                      <i className="bi bi-heart-fill"></i>
                    </div>
                    <span className="small fw-semibold text-secondary">100 % Bio</span>
                  </div>
                </div>
              </div>

              {/* Colonne image */}
              <div className="col-12 col-lg-6">
                <div className="position-relative mx-auto" style={{ maxWidth: 540 }}>
                  {/* Badge flottant haut */}
                  <div className="floating-badge floating-badge-top d-none d-md-flex">
                    <div
                      className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 36, height: 36 }}
                    >
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-dark small lh-1">4.9 / 5 sur Google</div>
                      <div className="text-muted" style={{ fontSize: "0.72rem" }}>
                        +180 avis
                      </div>
                    </div>
                  </div>

                  {/* Image principale */}
                  <div className="hero-image-wrapper">
                    <Image
                      src="/images/hero-daycare.jpg"
                      alt="Enfants jouant à la garderie Les Petits Rayons"
                      width={640}
                      height={480}
                      className="w-100 h-auto"
                      priority
                      sizes="(max-width: 768px) 100vw, 540px"
                    />
                  </div>

                  {/* Badge flottant bas */}
                  <div className="floating-badge floating-badge-bottom d-none d-md-flex">
                    <div
                      className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 36, height: 36 }}
                    >
                      <i className="bi bi-heart-fill"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-dark small lh-1">Accueil Bienveillant</div>
                      <div className="text-muted" style={{ fontSize: "0.72rem" }}>
                        De 3 mois à 6 ans
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* SECTION 3 : SERVICES – trois cartes Bootstrap 5               */}
        {/* ============================================================= */}
        <section id="services" className="py-5 bg-white">
          <div className="container py-4">
            {/* En-tête de section */}
            <div className="row justify-content-center text-center mb-5">
              <div className="col-12 col-lg-8">
                <span
                  className="section-badge"
                  style={{
                    backgroundColor: "var(--daycare-coral-light)",
                    color: "var(--daycare-coral-dark)",
                  }}
                >
                  🌈 Nos Programmes
                </span>
                <h2 className="display-6 fw-bold mt-2 mb-3">
                  Trois services d'éveil pour accompagner{" "}
                  <span style={{ color: "var(--daycare-coral)" }}>chaque âge</span>
                </h2>
                <p className="text-muted">
                  Nos programmes pédagogiques s'adaptent aux besoins de chaque tranche d'âge
                  avec bienveillance et expertise.
                </p>
              </div>
            </div>

            {/* Grille de cartes Bootstrap */}
            <div className="row g-4">
              {services.map((s) => (
                <div key={s.id} className="col-12 col-md-6 col-lg-4">
                  <div className="card service-card h-100">
                    {/* Image de la carte */}
                    <div className="position-relative overflow-hidden" style={{ height: 220 }}>
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        width={400}
                        height={220}
                        className="card-img-top service-card-img"
                      />
                      <span
                        className={`badge-age ${s.badgeClass} position-absolute top-0 start-0 m-3`}
                      >
                        {s.badge}
                      </span>
                    </div>

                    {/* Corps de la carte */}
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title">{s.title}</h3>
                      <p className="card-text text-muted small">{s.description}</p>

                      <ul className="service-features-list mt-auto">
                        {s.features.map((f, i) => (
                          <li key={i}>
                            <i className="bi bi-check-circle-fill"></i>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="#contact"
                        className="btn btn-daycare-primary w-100 justify-content-center mt-2"
                      >
                        En savoir plus <i className="bi bi-arrow-right-short fs-4"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* Mini section contact                                           */}
        {/* ============================================================= */}
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

      {/* ===== Footer ===== */}
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
