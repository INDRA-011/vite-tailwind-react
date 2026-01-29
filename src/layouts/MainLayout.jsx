import Navbar from "../components/Navbar.jsx";
import PricingSection from "../components/PricingSection.jsx";
import Hero from "../components/hero.jsx";
import Footer from "../components/footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <PricingSection />
      <Footer />
      <main className="pt-24 px-6">{children}</main>
    </div>
  );
}
