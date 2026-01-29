import Navbar from "./components/Navbar";
import Hero from "./components/hero.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import PricingCard from "./components/PricingCard.jsx";
import PricingSection from "./components/PricingSection.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <FeatureSection />
        <PricingSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
