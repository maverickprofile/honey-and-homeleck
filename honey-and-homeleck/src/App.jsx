// src/App.jsx
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsetSection from "./components/SkillsetSection";
import ClientShowcase from "./components/ClientShowcase";
import FeaturedProjects from "./components/FeaturedProjects";
import FoundersSection from "./components/FoundersSection";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Main content on top */}
      <div className="relative z-10">
        <Navbar />
        <AboutSection />
        <SkillsetSection />
        <ClientShowcase />
        <FeaturedProjects />
        <FoundersSection />
        <ContactCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
