import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "eveil",
      title: "Crèche Douceur & Éveil Sensoriel",
      ageBadge: "👶 3 à 18 mois",
      badgeClass: "badge-age-yellow",
      accentColor: "var(--daycare-yellow)",
      imageSrc: "/images/service-eveil.jpg",
      imageAlt: "Bébés et tout-petits en activité d'éveil sensoriel",
      description:
        "Un cocon apaisant pensé pour les tout-petits. Nous favorisons la motricité libre, l'éveil des sens par les matières naturelles et le respect scrupuleux des rythmes de sommeil de chaque nourrisson.",
      features: [
        "Espace Snoezelen et lumières douces",
        "Motricité libre sur tapis ergonomiques",
        "Rapport quotidien digitalisé pour les parents",
        "Encadrement renforcé (1 adulte pour 3 bébés)",
      ],
      btnText: "Découvrir la crèche",
      btnClass: "btn-daycare-primary",
    },
    {
      id: "arts",
      title: "Ateliers d'Art & Expression",
      ageBadge: "🎨 18 mois à 3 ans",
      badgeClass: "badge-age-coral",
      accentColor: "var(--daycare-coral)",
      imageSrc: "/images/service-arts.svg",
      imageAlt: "Ateliers créatifs, peinture et comptines",
      description:
        "Stimulez l'imagination débordante et la motricité fine de votre enfant grâce à la peinture sensorielle, la pâte à modeler végétale, les comptines interactives et l'initiation bilingue.",
      features: [
        "Peintures naturelles et argile non-toxique",
        "Éveil musical et instruments du monde",
        "Comptines bilingues (Français / Anglais)",
        "Jeux coopératifs et gestion des émotions",
      ],
      btnText: "Explorer les ateliers",
      btnClass: "btn-daycare-coral",
    },
    {
      id: "nature",
      title: "Jardin Nature & Pré-Maternelle",
      ageBadge: "🌳 3 à 6 ans",
      badgeClass: "badge-age-mint",
      accentColor: "var(--daycare-mint)",
      imageSrc: "/images/service-nature.svg",
      imageAlt: "Enfants dans le jardin potager pédagogique",
      description:
        "Une passerelle idéale vers l'école primaire ! Les enfants découvrent la nature dans notre potager bio, développent leur autonomie et s'initient aux bases du langage et du raisonnement logique.",
      features: [
        "Potager bio entretenu par les enfants",
        "Activités quotidiennes en plein air",
        "Jeux de lettres, de chiffres et logique",
        "Préparation sereine à la rentrée scolaire",
      ],
      btnText: "Programme pré-maternelle",
      btnClass: "btn-daycare-primary",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-10 col-lg-8">
            <span
              className="section-badge"
              style={{
                backgroundColor: "var(--daycare-coral-light)",
                color: "var(--daycare-coral-dark)",
              }}
            >
              🌈 Nos Programmes Adaptés
            </span>
            <h2 className="display-5 fw-bold text-dark mt-2 mb-3">
              Trois services d'éveil pour accompagner{" "}
              <span style={{ color: "var(--daycare-coral)" }}>
                chaque âge
              </span>
            </h2>
            <p className="lead text-muted fs-6">
              Chaque étape du développement de l'enfant est unique. Nos
              programmes pédagogiques s'adaptent avec tendresse et expertise aux
              besoins physiologiques, moteurs et émotionnels des tout-petits.
            </p>
          </div>
        </div>

        {/* Bootstrap Cards Grid */}
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              {/* Bootstrap Card */}
              <div className="card service-card h-100">
                {/* Card Image Container */}
                <div className="service-card-img-container">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={400}
                    height={250}
                    className="card-img-top service-card-img"
                  />
                  {/* Floating Age Tag on Image */}
                  <div
                    className="position-absolute top-0 start-0 m-3"
                    style={{ zIndex: 2 }}
                  >
                    <span className={service.badgeClass}>
                      {service.ageBadge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>

                  <p className="card-text">{service.description}</p>

                  {/* Feature Checklist */}
                  <ul className="service-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check-circle-fill text-success"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Footer with CTA */}
                  <div className="service-card-footer mt-auto">
                    <Link
                      href="#visite"
                      className={`btn ${service.btnClass} w-100 justify-content-center text-decoration-none`}
                    >
                      <span>{service.btnText}</span>
                      <i className="bi bi-arrow-right-short fs-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring note banner */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="p-4 rounded-4 text-center d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
              style={{
                background: "linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              <div className="d-flex align-items-center gap-3 text-start">
                <div
                  className="rounded-circle bg-white p-3 shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: "54px", height: "54px" }}
                >
                  <i className="bi bi-calendar-heart fs-3 text-warning"></i>
                </div>
                <div>
                  <h4 className="fs-5 fw-bold text-dark mb-1">
                    Besoin d'un planning flexible (temps plein ou partiel) ?
                  </h4>
                  <p className="text-secondary small mb-0">
                    Nous nous adaptons à vos contraintes professionnelles : garde occasionnelle, demi-journées ou semaine complète.
                  </p>
                </div>
              </div>
              <Link
                href="#visite"
                className="btn btn-daycare-primary text-nowrap"
              >
                Demander un devis personnalisé
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
