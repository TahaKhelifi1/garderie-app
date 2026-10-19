"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GarderieInfo } from "@/types";
import { fetchGarderieInfo, defaultGarderieInfo } from "@/services/api";

export default function Hero() {
  const [info, setInfo] = useState<GarderieInfo>(defaultGarderieInfo);

  useEffect(() => {
    let isMounted = true;
    fetchGarderieInfo().then((data) => {
      if (isMounted) {
        setInfo(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
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
              Garderie & Crèche Bilingue d&apos;Excellence
            </span>

            <h1 className="display-4 fw-bold lh-sm mb-3">
              Un cocon chaleureux où chaque enfant{" "}
              <span className="hero-title-highlight">grandit & sourit</span>
            </h1>

            <p className="lead text-muted fs-5 mb-4">
              {info.description}
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

            {/* Badges de confiance dynamiques */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-4 pt-3 border-top">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>
                <span className="small fw-semibold text-secondary">{info.agrement || "Agrément PMI"}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <i className="bi bi-clock-history"></i>
                </div>
                <span className="small fw-semibold text-secondary">{info.horaires}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <i className="bi bi-heart-fill"></i>
                </div>
                <span className="small fw-semibold text-secondary">Capacité {info.capacite} enfants</span>
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
                    +180 avis vérifiés
                  </div>
                </div>
              </div>

              {/* Image principale */}
              <div className="hero-image-wrapper">
                <Image
                  src="/images/hero-banner.jpg"
                  alt="Enfants souriants jouant ensemble à la garderie"
                  width={600}
                  height={420}
                  className="hero-image"
                  priority
                />
              </div>

              {/* Badge flottant bas */}
              <div className="floating-badge floating-badge-bottom d-none d-md-flex">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <i className="bi bi-emoji-smile-fill"></i>
                </div>
                <div>
                  <div className="fw-bold text-dark small lh-1">
                    {info.statistiques?.[0]?.valeur || "98%"}
                  </div>
                  <div className="text-muted" style={{ fontSize: "0.72rem" }}>
                    {info.statistiques?.[0]?.label || "Parents satisfaits"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
