import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Technology from "./components/Skill";
import ExperienceSection from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-white min-h-screen text-gray-900 selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />
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
