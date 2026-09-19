import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skill" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/Sengleang99",
      hoverColor: "hover:text-white hover:bg-slate-800",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/yan-sengleang-614a94277/",
      hoverColor: "hover:text-blue-400 hover:bg-blue-900/30",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="w-5 h-5" />,
      url: "https://web.facebook.com/yan.sengleang",
      hoverColor: "hover:text-blue-500 hover:bg-blue-900/30",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/_sengleang/",
      hoverColor: "hover:text-pink-400 hover:bg-pink-900/30",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:sengleangyan@gmail.com",
      hoverColor: "hover:text-red-400 hover:bg-red-900/30",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative gradient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative px-6 py-14 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-center">
          {/* Brand & Bio */}
          <div className="text-center md:text-left space-y-3">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="inline-block text-2xl font-extrabold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              Yan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Sengleang
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Software Developer crafting responsive web apps, full-stack solutions, and intuitive digital experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-slate-400 transition-colors duration-200 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 hover:scale-110 shadow-sm ${social.hoverColor}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <FaArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} Yan Sengleang. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
