export default function WhyUs() {
  const pillars = [
    {
      icon: "bi-shield-fill-check",
      iconColor: "#10b981",
      iconBg: "#d1fae5",
      title: "Sécurité & Hygiène Maximale",
      desc: "Locaux entièrement sécurisés aux normes PMI, contrôle d'accès biométrique, matériel hypoallergénique et protocoles stricts.",
    },
    {
      icon: "bi-heart-pulse-fill",
      iconColor: "#ff6b6b",
      iconBg: "#ffe5e5",
      title: "Éducatrices 100% Diplômées",
      desc: "Une équipe pluridisciplinaire d'éducatrices de jeunes enfants (EJE), auxiliaires de puériculture et pédiatre référent.",
    },
    {
      icon: "bi-basket2-fill",
      iconColor: "#f59e0b",
      iconBg: "#fef3c7",
      title: "Repas Bio Cuisinés sur Place",
      desc: "Menus équilibrés élaborés par une diététicienne pédiatrique, ingrédients 100% biologiques et circuits courts locaux.",
    },
    {
      icon: "bi-phone-vibrate-fill",
      iconColor: "#8b5cf6",
      iconBg: "#ede9fe",
      title: "Application Mobile Parents",
      desc: "Photos du jour, suivi des siestes, repas et activités partagés en temps réel pour une totale tranquillité d'esprit.",
    },
  ];

  return (
    <section id="avantages" className="py-5 bg-light position-relative">
      <div className="container py-4">
        {/* Section Title */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-8">
            <span
              className="section-badge"
              style={{
                backgroundColor: "var(--daycare-mint-light)",
                color: "var(--daycare-mint)",
              }}
            >
              ⭐ Nos Engagements
            </span>
            <h2 className="display-6 fw-bold text-dark mt-2 mb-3">
              Pourquoi les parents nous confient leurs trésors ?
            </h2>
            <p className="lead text-muted fs-6">
              Nous concevons la garderie comme une véritable extension bienveillante de la maison, où votre enfant est entouré d'amour et de respect.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="row g-4">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="stat-card h-100 d-flex flex-column align-items-center text-center">
                <div
                  className="stat-icon-wrapper"
                  style={{
                    backgroundColor: pillar.iconBg,
                    color: pillar.iconColor,
                  }}
                >
                  <i className={`bi ${pillar.icon}`} style={{ fontSize: "1.8rem" }}></i>
                </div>
                <h3 className="fs-5 fw-bold text-dark mb-2">{pillar.title}</h3>
                <p className="text-secondary small mb-0 lh-base">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
