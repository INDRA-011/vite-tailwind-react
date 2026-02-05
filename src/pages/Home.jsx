import Navbar from "../components/Navbar.jsx";
import Hero from "../components/hero.jsx";
import Footer from "../components/footer.jsx";
import FeatureSection from "../components/FeatureSection.jsx";
import PricingSection from "../components/PricingSection.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/context/AuthContext.jsx";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 text-center pt-32">
        <Hero />

        <FeatureSection />

        <PricingSection className="mt-16" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
