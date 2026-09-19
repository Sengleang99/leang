import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Technology from "./components/Skill";
import ExperienceSection from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <Technology />
      <ExperienceSection />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
