import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import BookingContact from "@/components/BookingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top Welcome Announcement Bar */}
      <div
        className="text-center py-2 px-3 small fw-semibold text-white d-none d-sm-block"
        style={{
          background: "linear-gradient(90deg, #f59e0b 0%, #ff6b6b 100%)",
          letterSpacing: "0.02em",
        }}
      >
        🎉 Inscriptions ouvertes pour l'année 2026-2027 • Places limitées pour garantir des petits groupes • Visites sur rendez-vous
      </div>

      {/* Navbar Section : logo, nom de la garderie et menu de navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow-1">
        {/* Hero Section : titre d'accueil, description, image et bouton d'appel à l'action */}
        <Hero />

        {/* Services Section : présentation de trois services sous forme de cartes Bootstrap */}
        <Services />

        {/* Why Choose Us & Trust Pillars */}
        <WhyUs />

        {/* Interactive Booking & Practical Info */}
        <BookingContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
