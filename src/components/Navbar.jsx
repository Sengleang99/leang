import { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLabel, setHoveredLabel] = useState("");
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef(null);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "skill", icon: <FaCode />, label: "Skills" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience" },
    { id: "projects", icon: <FaLaptopCode />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Prevent scroll-spy from flickering activeSection while smooth scrolling from a click
      if (isClickScrolling.current) return;

      const sectionIds = ["home", "skill", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setHoveredLabel("");

    // Lock scroll spy while smooth scrolling to target section
    isClickScrolling.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);

    const section = document.getElementById(id);
    if (section) {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const navHeight = 70;
        const targetPosition =
          section.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-40 flex justify-center pointer-events-none px-3 sm:px-4">
      <nav
        className={`pointer-events-auto flex items-center justify-center transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border border-gray-200/90 shadow-xl shadow-blue-900/10"
            : "bg-white/80 backdrop-blur-md border border-gray-100/90 shadow-sm"
        }`}
      >
        <div className="flex items-center p-1.5 space-x-1 sm:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isLabelVisible = hoveredLabel === item.label;

            return (
              <div key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollToSection(e, item.id)}
                  className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 z-10 touch-manipulation select-none ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-100/70"
                  }`}
                  onMouseEnter={() => setHoveredLabel(item.label)}
                  onMouseLeave={() => setHoveredLabel("")}
                  aria-label={item.label}
                >
                  {/* Smooth active background pill */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-500/30 -z-10 transition-all duration-300 ease-out ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 pointer-events-none"
                    }`}
                  />
                  <span className="text-lg sm:text-xl relative z-10">
                    {item.icon}
                  </span>
                </a>

                {/* Previous style label popup directly underneath the icon (desktop only to prevent mobile touch stickiness) */}
                <div
                  className={`hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 z-50 pointer-events-none ${
                    isLabelVisible
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-1 invisible"
                  }`}
                >
                  <div className="relative px-3 py-1 text-xs sm:text-sm font-medium text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap">
                    {item.label}
                    <div className="absolute top-0 w-2 h-2 transform rotate-45 -translate-x-1/2 -translate-y-1/2 bg-gray-800 left-1/2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
