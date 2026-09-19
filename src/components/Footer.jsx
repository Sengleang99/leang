import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/Sengleang99",
      hoverColor: "hover:text-gray-900 hover:border-gray-400 hover:bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/yan-sengleang-614a94277/",
      hoverColor: "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="w-5 h-5" />,
      url: "https://web.facebook.com/yan.sengleang",
      hoverColor: "hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/_sengleang/",
      hoverColor: "hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:sengleangyan@gmail.com",
      hoverColor: "hover:text-red-500 hover:border-red-300 hover:bg-red-50",
    },
  ];

  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container px-5 mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm font-medium text-gray-600 text-center sm:text-left">
          &copy; {currentYear} Yan Sengleang. All rights reserved.
        </p>

        {/* Contact / Social Icons */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full bg-white border border-blue-100/90 text-gray-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow ${social.hoverColor}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
