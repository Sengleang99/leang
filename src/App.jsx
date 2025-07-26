import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
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
