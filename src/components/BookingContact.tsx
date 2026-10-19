"use client";

import { useState, FormEvent } from "react";

export default function BookingContact() {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="visite" className="py-5 position-relative" style={{ backgroundColor: "#ffffff" }}>
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
              🗓️ Inscriptions 2026-2027
            </span>
            <h2 className="display-6 fw-bold text-dark mt-2 mb-3">
              Venez visiter notre garderie avec votre enfant !
            </h2>
            <p className="lead text-muted fs-6">
              Rien ne remplace le contact humain. Réservez une visite découverte de 30 minutes sans engagement pour rencontrer notre équipe et ressentir l'ambiance chaleureuse de nos locaux.
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
                  <h3 className="fs-3 fw-bold text-dark mb-2">Demande envoyée avec succès !</h3>
                  <p className="text-muted mb-4">
                    Merci <strong>{formData.parentName || "cher parent"}</strong> ! Notre directrice pédagogique prendra contact avec vous dans les 24h ouvrées pour confirmer votre rendez-vous.
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
                    Faire une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="fs-4 fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                    <i className="bi bi-pencil-square text-warning"></i>
                    Formulaire de visite & pré-inscription
                  </h3>

                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Nom et Prénom du parent *
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
                        placeholder="Ex : 06 12 34 56 78"
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
                        placeholder="marie.dupont@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Âge de votre enfant *
                      </label>
                      <input
                        type="text"
                        required
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
                        Service souhaité
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
                        <option value="arts">Ateliers d'Art & Expression (18 mois à 3 ans)</option>
                        <option value="nature">Jardin Nature & Pré-maternelle (3 à 6 ans)</option>
                        <option value="autre">Accueil occasionnel / Autre</option>
                      </select>
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-bold text-secondary">
                        Date souhaitée pour la visite
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
                        Questions particulières ou précisions
                      </label>
                      <textarea
                        rows={3}
                        className="form-control rounded-3 fs-6"
                        placeholder="Allergies, date d'entrée souhaitée, temps plein ou partiel..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-daycare-primary w-100 py-3 justify-content-center fs-5"
                      >
                        <i className="bi bi-send-fill"></i>
                        <span>Confirmer ma demande de visite</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Opening Hours Column */}
          <div className="col-12 col-lg-5" id="contact">
            <div className="p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between" style={{ background: "linear-gradient(145deg, #fff7ed 0%, #fef2f2 100%)", border: "1px solid rgba(251, 146, 60, 0.2)" }}>
              <div>
                <h3 className="fs-4 fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-danger"></i>
                  Informations Pratiques
                </h3>

                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-warning shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-geo-alt fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Notre Adresse</h4>
                      <p className="text-muted small mb-0">
                        15 Derriere mosque el-fath,2200 Tozeur,Tunisie<br />
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-success shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-telephone fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Téléphone & WhatsApp</h4>
                      <p className="text-muted small mb-0">
                        55 123 388<br />
                        Disponibles pour toute question du lundi au vendredi.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-white text-info shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                      <i className="bi bi-clock fs-5"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">Horaires d'Accueil</h4>
                      <p className="text-muted small mb-0">
                        <strong>Lundi - Vendredi :</strong> 07h30 - 18h30<br />
                        <strong>Fermeture annuelle :</strong> 2 semaines en août & semaine entre Noël et Nouvel An.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Banner Card */}
              <div className="mt-4 p-3 rounded-3 bg-white shadow-sm border border-warning-subtle d-flex align-items-center gap-3">
                <i className="bi bi-patch-check-fill text-warning fs-1"></i>
                <div>
                  <div className="fw-bold text-dark small">Établissement Agréé</div>
                  <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                    Agrément Protection Maternelle et Infantile (PMI) & Allocations Familiales (CAF - CMG applicable).
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
