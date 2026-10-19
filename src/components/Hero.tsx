import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="accueil" className="hero-section position-relative">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column: Text & Call to Actions */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3 text-center text-lg-start pe-lg-4">
              {/* Pill badge */}
              <div>
                <span className="hero-pill-badge">
                  <i className="bi bi-stars text-warning fs-5"></i>
                  Garderie & Crèche Bilingue d'Excellence
                </span>
              </div>

              {/* Titre d'accueil */}
              <h1 className="display-4 fw-bolder lh-sm text-dark mt-2">
                Un cocon chaleureux où chaque enfant{" "}
                <span className="hero-title-highlight">grandit & sourit</span>
              </h1>

              {/* Description */}
              <p className="lead text-muted fs-5 lh-base my-2">
                Bienvenue à <strong>Les Petits Rayons</strong>. Nous offrons à vos enfants (de 3 mois à 6 ans) un cadre sécurisant, joyeux et stimulant inspiré des pédagogies actives, avec une alimentation 100% biologique et un encadrement bienveillant par des professionnelles diplômées.
              </p>

              {/* Bouton d'appel à l'action (CTA) */}
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 pt-2">
                <Link
                  href="#visite"
                  className="btn btn-daycare-primary justify-content-center"
                >
                  <i className="bi bi-calendar2-check-fill fs-5"></i>
                  <span>Réserver une visite découverte</span>
                </Link>

                <Link
                  href="#services"
                  className="btn btn-daycare-outline justify-content-center"
                >
                  <i className="bi bi-stars text-warning fs-5"></i>
                  <span>Découvrir nos services</span>
                </Link>
              </div>

              {/* Trust badges row */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-4 pt-4 mt-2 border-top border-warning-subtle">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-success-subtle text-success p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                    <i className="bi bi-shield-check fs-5"></i>
                  </div>
                  <span className="small fw-semibold text-secondary">
                    Agrément PMI & CAF
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-warning-subtle text-warning p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                    <i className="bi bi-clock-history fs-5"></i>
                  </div>
                  <span className="small fw-semibold text-secondary">
                    7h30 - 18h30 du lun au ven
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-danger-subtle text-danger p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                    <i className="bi bi-egg-fried fs-5"></i>
                  </div>
                  <span className="small fw-semibold text-secondary">
                    Repas 100% Bio & Frais
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Badges */}
          <div className="col-12 col-lg-6">
            <div className="position-relative mx-auto" style={{ maxWidth: "560px" }}>
              {/* Floating Badge Top Right */}
              <div className="floating-badge floating-badge-top">
                <div className="bg-warning text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                  <i className="bi bi-star-fill fs-6"></i>
                </div>
                <div>
                  <div className="fw-bold text-dark small lh-1">4.9 / 5 sur Google</div>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    +180 parents conquis
                  </div>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className="hero-image-wrapper">
                <Image
                  src="/images/hero-daycare.jpg"
                  alt="Enfants souriants jouant dans la garderie Les Petits Rayons"
                  width={640}
                  height={480}
                  className="hero-image"
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="floating-badge floating-badge-bottom">
                <div className="bg-success text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                  <i className="bi bi-heart-fill fs-6"></i>
                </div>
                <div>
                  <div className="fw-bold text-dark small lh-1">Accueil Bienveillant</div>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    De 3 mois à 6 ans
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
