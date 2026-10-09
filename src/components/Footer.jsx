import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegram className="w-5 h-5" />,
      url: "https://t.me/Sengleangyan",
      hoverColor: "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:sengleangyan@gmail.com",
      hoverColor: "hover:text-red-500 hover:border-red-300 hover:bg-red-50",
    },
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
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 bg-white border-t border-gray-100"
    >
      <div className="container px-5 mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm font-medium text-gray-500 text-center sm:text-left">
          &copy; 2024 Yan Sengleang. All rights reserved.
        </p>

        {/* Contact / Social Icons & Back to Top */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              className={`p-2.5 rounded-full bg-white border border-gray-200/80 text-gray-600 transition-colors shadow-2xs hover:shadow-md ${social.hoverColor}`}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            className="p-2.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-2xs hover:shadow-md cursor-pointer"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
