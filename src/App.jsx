import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import PricingCard from "./components/PricingCard.jsx";
import PricingSection from "./components/PricingSection.jsx";

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Main app routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricingcard" element={<PricingCard />} />
        <Route path="/pricingsection" element={<PricingSection />} />
      </Route>
    </Routes>
  );
}

export default App;
