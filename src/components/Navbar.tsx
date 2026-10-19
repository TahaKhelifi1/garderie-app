"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top daycare-navbar py-2 py-lg-3">
      <div className="container">
        {/* Brand / Logo + Daycare Name */}
        <Link
          href="#accueil"
          className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
          onClick={closeMenu}
        >
          <div className="position-relative overflow-hidden rounded-circle shadow-sm border border-warning" style={{ width: "48px", height: "48px" }}>
            <Image
              src="/images/logo.jpg"
              alt="Logo Garderie Les Petits Rayons"
              fill
              className="object-fit-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="d-flex flex-column">
            <span className="brand-font fs-4 fw-bold text-dark lh-1">
              Les Petits <span style={{ color: "var(--daycare-coral)" }}>Rayons</span>
            </span>
            <span className="brand-badge mt-1">
              🌻 Crèche & Garderie Éducative
            </span>
          </div>
        </Link>

        {/* Mobile Hamburger Toggler */}
        <button
          className="navbar-toggler border-0 shadow-none px-2 py-1 rounded-3"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Basculer le menu de navigation"
          onClick={toggleMenu}
          style={{ backgroundColor: "var(--daycare-yellow-light)" }}
        >
          <i
            className={`bi ${isMenuOpen ? "bi-x-lg text-danger" : "bi-list text-warning"} fs-2`}
          ></i>
        </button>

        {/* Navigation Menu */}
        <div
          className={`collapse navbar-collapse mt-3 mt-lg-0 ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto gap-1 gap-lg-2 text-center my-3 my-lg-0">
            <li className="nav-item">
              <Link
                href="#accueil"
                className="nav-link"
                onClick={closeMenu}
              >
                <i className="bi bi-house-door-fill me-1 d-lg-none"></i>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#services"
                className="nav-link"
                onClick={closeMenu}
              >
                <i className="bi bi-grid-fill me-1 d-lg-none"></i>
                Nos Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#avantages"
                className="nav-link"
                onClick={closeMenu}
              >
                <i className="bi bi-heart-fill me-1 d-lg-none"></i>
                Pourquoi Nous
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#visite"
                className="nav-link"
                onClick={closeMenu}
              >
                <i className="bi bi-calendar-check-fill me-1 d-lg-none"></i>
                Visites & Inscriptions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#contact"
                className="nav-link"
                onClick={closeMenu}
              >
                <i className="bi bi-geo-alt-fill me-1 d-lg-none"></i>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Action CTA */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mt-2 mt-lg-0">
            <a
              href="tel:+33123456789"
              className="d-none d-xl-flex align-items-center gap-2 text-decoration-none text-muted fw-bold me-2"
            >
              <i className="bi bi-telephone-fill text-warning fs-5"></i>
              <span>01 23 45 67 89</span>
            </a>
            <Link
              href="#visite"
              className="btn btn-daycare-primary w-100 w-lg-auto"
              onClick={closeMenu}
            >
              <i className="bi bi-calendar-heart"></i>
              <span>Réserver une visite</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
