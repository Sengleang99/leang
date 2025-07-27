import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Technology from "./components/Skill";
import ExperienceSection from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technology />
      <ExperienceSection/>
      <Contact />
    </div>
  );
}

export default App;
