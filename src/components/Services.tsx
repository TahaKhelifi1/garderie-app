import Image from "next/image";
import Link from "next/link";

/* Données des 3 services de la garderie */
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

export default function Services() {
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
  );
}
