import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll to add background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 py-3 transition-all duration-300 lg:px-10 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-pink-500 bg-clip-text md:text-2xl">
          SengLeang
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden space-x-6 md:flex">
          <a
            href="/"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#services"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden space-x-4 md:flex">
          <a
            href="https://web.facebook.com/yan.sengleang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-blue-700 hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/_sengleang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-pink-600 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yan-sengleang-614a94277/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-blue-600 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sengleang99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-black hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={toggleMobileMenu} className="block md:hidden">
          {!isMobileMenuOpen ? (
            <HiMenuAlt3 className="text-2xl text-gray-700" />
          ) : (
            <HiX className="text-2xl text-gray-700" />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 left-0 z-50 w-60 md:w-1/2 h-full bg-white shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <div className="px-6 py-4 text-xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-pink-500 bg-clip-text md:text-2xl">
          SengLeang
        </div>
        <div className="px-6 py-4 space-y-4">
          <a
            href="/"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#services"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block font-medium text-gray-600 transition hover:text-blue-700"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center py-4 space-x-4 bg-gray-100">
          <a
            href="https://web.facebook.com/yan.sengleang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-blue-700 hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/_sengleang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-pink-600 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yan-sengleang-614a94277/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-blue-600 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sengleang99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 transition duration-300 transform hover:text-black hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
