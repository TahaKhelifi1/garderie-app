"use client";

import { useState, useEffect, FormEvent } from "react";
import { GarderieInfo } from "@/types";
import { fetchGarderieInfo, defaultGarderieInfo } from "@/services/api";

export default function BookingContact() {
  const [info, setInfo] = useState<GarderieInfo>(defaultGarderieInfo);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    serviceInterested: "eveil",
    date: "",
    message: "",
  });

  useEffect(() => {
    let isMounted = true;
    fetchGarderieInfo().then((data) => {
      if (isMounted) setInfo(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-5 position-relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-8">
            <span
              className="section-badge"
              style={{
                backgroundColor: "var(--daycare-yellow-light)",
                color: "var(--daycare-yellow-dark)",
              }}
            >
              ✉️ Contact & Inscriptions
            </span>
            <h2 className="display-6 fw-bold text-dark mt-2 mb-3">
              Contactez-nous & Réservez une visite !
            </h2>
            <p className="lead text-muted fs-6">
              Une question sur nos programmes ou envie de découvrir nos locaux ? Remplissez ce formulaire et notre équipe vous recontactera rapidement.
            </p>
          </div>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Form Column */}
          <div className="col-12 col-lg-7">
            <div className="p-4 p-md-5 rounded-4 shadow-sm border border-1 border-light-subtle bg-white h-100">
              {submitted ? (
                <div className="text-center py-5">
                  <div
                    className="rounded-circle bg-success-subtle text-success d-inline-flex align-items-center justify-content-center mb-4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-check-circle-fill fs-1"></i>
                  </div>
                  <h3 className="fs-3 fw-bold text-dark mb-2">Message envoyé avec succès !</h3>
                  <p className="text-muted mb-4">
                    Merci <strong>{formData.parentName || "cher parent"}</strong> ! Nous prendrons contact avec vous très rapidement au <strong>{formData.phone || formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-daycare-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: "",
                        email: "",
                        phone: "",
                        childAge: "",
                        serviceInterested: "eveil",
                        date: "",
                        message: "",
                      });
                    }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="fs-4 fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                    <i className="bi bi-envelope-paper-heart-fill text-warning"></i>
                    Formulaire de Contact & Visite
                  </h3>

                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Nom et Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="Ex : Marie Dupont"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="Ex : 55 123 388"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="parent@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Âge de votre enfant
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="Ex : 14 mois / 3 ans"
                        value={formData.childAge}
                        onChange={(e) =>
                          setFormData({ ...formData, childAge: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Programme qui vous intéresse
                      </label>
                      <select
                        className="form-select form-select-lg rounded-3 fs-6"
                        value={formData.serviceInterested}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceInterested: e.target.value,
                          })
                        }
                      >
                        <option value="eveil">Crèche Douceur & Éveil (3 à 18 mois)</option>
                        <option value="arts">Ateliers d&apos;Art & Expression (18 mois à 3 ans)</option>
                        <option value="nature">Jardin Nature & Pré-maternelle (3 à 6 ans)</option>
                        <option value="autre">Accueil occasionnel / Autre question</option>
                      </select>
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Date souhaitée de visite (optionnel)
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-lg rounded-3 fs-6"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-bold text-secondary">
                        Votre message ou question *
                      </label>
                      <textarea
                        rows={4}
                        required
                        className="form-control rounded-3 fs-6"
                        placeholder="Bonjour, j'aimerais avoir plus de renseignements sur les inscriptions..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-daycare-primary w-100 py-3 justify-content-center fs-5 shadow-sm"
                      >
                        <i className="bi bi-send-fill"></i>
                        <span>Envoyer mon message</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Opening Hours Column */}
          <div className="col-12 col-lg-5">
            <div className="p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between" style={{ background: "linear-gradient(145deg, #fff7ed 0%, #fef2f2 100%)", border: "1px solid rgba(251, 146, 60, 0.2)" }}>
              <div>
                <h3 className="fs-4 fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-danger"></i>
                  Informations Pratiques
                </h3>

                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-danger shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-geo-alt-fill fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Notre Adresse</h4>
                      <p className="text-muted small mb-0">
                        {info.adresse}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-success shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-telephone-fill fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Téléphone & WhatsApp</h4>
                      <p className="text-muted small mb-0">
                        <a href={`tel:${info.telephone.replace(/\s+/g, '')}`} className="text-dark fw-bold text-decoration-none">
                          {info.telephone}
                        </a>
                        <br />
                        <span className="text-muted">Disponible du lundi au vendredi.</span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-warning shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-envelope-fill fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Email Direct</h4>
                      <p className="text-muted small mb-0">
                        <a href={`mailto:${info.email}`} className="text-dark text-decoration-none fw-semibold">
                          {info.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-info shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-clock-fill fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Horaires d&apos;Accueil</h4>
                      <p className="text-muted small mb-0">
                        <strong>{info.horaires}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Banner Card */}
              <div className="mt-4 p-3 rounded-3 bg-white shadow-sm border border-warning-subtle d-flex align-items-center gap-3">
                <i className="bi bi-patch-check-fill text-warning fs-1"></i>
                <div>
                  <div className="fw-bold text-dark small">{info.nom}</div>
                  <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                    {info.slogan}
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
