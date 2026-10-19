"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { fetchServices, defaultServices } from "@/services/api";

export default function Services() {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetchServices()
      .then((data) => {
        if (isMounted) {
          setServices(data);
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
              Trois services d&apos;éveil pour accompagner{" "}
              <span style={{ color: "var(--daycare-coral)" }}>chaque âge</span>
            </h2>
            <p className="text-muted">
              Nos programmes pédagogiques s&apos;adaptent aux besoins de chaque tranche d&apos;âge
              avec bienveillance et expertise.
            </p>
          </div>
        </div>

        {/* Grille de cartes Bootstrap chargées dynamiquement */}
        <div className="row g-4">
          {services.map((s) => (
            <div key={s.id} className="col-12 col-md-6 col-lg-4">
              <div className="card service-card h-100">
                {/* Image de la carte */}
                <div className="position-relative overflow-hidden" style={{ height: 220 }}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt || s.title}
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
  );
}
