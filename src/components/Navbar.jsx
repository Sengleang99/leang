import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLabel, setActiveLabel] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "skill", icon: <FaCode />, label: "Skills" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience" },
    // { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "projects", icon: <FaLaptopCode />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "shadow-xl rounded-full" : ""
        }`}
    >
      <div
        className={`flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 rounded-full w-auto max-w-[95vw] mx-auto bg-white
          ${isScrolled
            ? "bg-white/90 backdrop-blur-md border border-gray-200"
            : "bg-white/80 backdrop-blur-sm border border-gray-100"
          }`}
      >
        {/* Always show nav items inline for all devices */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollToSection(e, item.id)}
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 text-gray-600 transition-all duration-300 rounded-full hover:bg-gray-100 hover:text-blue-600"
                onMouseEnter={() => setActiveLabel(item.label)}
                onMouseLeave={() => setActiveLabel("")}
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
              </a>

              {/* Label on Hover */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 z-50 ${activeLabel === item.label
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
                  }`}
              >
                <div className="relative px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-md whitespace-nowrap">
                  {item.label}
                  <div className="absolute top-0 w-2 h-2 transform rotate-45 -translate-x-1/2 -translate-y-1/2 bg-gray-800 left-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
