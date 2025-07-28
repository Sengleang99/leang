import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import Profile from "../assets/photo_2024-09-03_23-25-36.jpg";

function Hero() {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      name: "GitHub",
      url: "https://github.com/Sengleang99",
      color: "hover:text-gray-800",
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yan-sengleang-614a94277/",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      url: "https://www.instagram.com/_sengleang/",
      color: "hover:text-pink-600",
    },
    {
      icon: <FaFacebook size={20} />,
      name: "Facebook",
      url: "https://web.facebook.com/yan.sengleang",
      color: "hover:text-blue-800",
    },
    {
      icon: <HiOutlineMail size={20} />,
      name: "Email",
      url: "mailto:sengleangyan@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div
      id="home"
      className="px-4 py-12 sm:px-6 md:px-10 lg:px-20 xl:px-32 md:py-20 bg-gradient-to-b from-blue-100 via-white to-blue-50"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-12 mt-10 lg:flex-row lg:gap-20">
        {/* Text Section */}
        <motion.div
          className="w-full text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 font-bold text-gray-900 text-[clamp(2rem,6vw,3.5rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-600">Sengleang</span>
          </motion.h1>

          <motion.h2
            className="mb-6 font-bold text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text drop-shadow-sm text-[clamp(1.5rem,5vw,2.5rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Typewriter
              words={["SOFTWARE DEVELOPER", "UX/UI SPECIALIST", "DATA ANALYST"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            className="mb-8 text-gray-600 text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I am studying Software Engineering at Beltei International
            University, focusing on clean design, development, and data analysis.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 text-gray-500 transition-all duration-300 rounded-full bg-gray-100 hover:bg-white ${link.color} hover:shadow-md`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[400px] lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-400 to-teal-400 opacity-60"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.img
            src={Profile}
            alt="Sengleang - Software Developer"
            className="relative z-10 object-cover w-full h-auto shadow-2xl cursor-pointer rounded-xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
