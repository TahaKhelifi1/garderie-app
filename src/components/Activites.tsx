"use client";

import { useEffect, useState } from "react";
import { ActiviteItem } from "@/types";
import { fetchActivites, defaultActivites } from "@/services/api";

export default function Activites() {
  const [activites, setActivites] = useState<ActiviteItem[]>(defaultActivites);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetchActivites()
      .then((data) => {
        if (isMounted) {
          setActivites(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="activites" className="py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container py-4">
        {/* En-tête de section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <span
              className="section-badge"
              style={{
                backgroundColor: "var(--daycare-teal-light)",
                color: "var(--daycare-teal)",
              }}
            >
              ⭐ Activités Pédagogiques
            </span>
            <h2 className="display-6 fw-bold mt-2 mb-3">
              Des journées rythmées par{" "}
              <span style={{ color: "var(--daycare-teal)" }}>l&apos;amusement</span>
            </h2>
            <p className="text-muted">
              Découvrez les ateliers quotidiens conçus pour éveiller la créativité, le langage et l&apos;autonomie des tout-petits.
            </p>
          </div>
        </div>

        {/* Grille d'activités Bootstrap */}
        <div className="row g-4">
          {activites.map((act) => (
            <div key={act.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center transition-all hover-lift">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: "var(--daycare-yellow-light)",
                    color: "var(--daycare-yellow-dark)",
                    fontSize: "1.8rem",
                  }}
                >
                  <i className={`bi ${act.icone}`}></i>
                </div>
                <span className="badge bg-light text-secondary rounded-pill mb-2 align-self-center px-3 py-1 small">
                  {act.categorie}
                </span>
                <h3 className="h5 fw-bold mb-2 text-dark">{act.titre}</h3>
                <p className="text-muted small mb-3 flex-grow-1">{act.description}</p>
                <div className="border-top pt-3 text-muted small fw-semibold">
                  <i className="bi bi-clock-fill text-warning me-1"></i> {act.horaire}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
