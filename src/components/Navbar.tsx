"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GarderieInfo } from "@/types";
import { fetchGarderieInfo, defaultGarderieInfo } from "@/services/api";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
              <Link href="#activites" className="nav-link" onClick={() => setMenuOpen(false)}>
                Activités
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
  );
}
