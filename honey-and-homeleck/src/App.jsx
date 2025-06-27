// src/App.jsx
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsetSection from "./components/SkillsetSection";
import ClientShowcase from "./components/ClientShowcase";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <AboutSection />
      <SkillsetSection />
      <ClientShowcase />
      <FeaturedProjects />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
