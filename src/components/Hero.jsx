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
      url: "sengleangyan@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div
      id="home"
      className="px-4 py-12 sm:px-6 md:px-10 lg:px-20 xl:px-32 md:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-12 mt-16 lg:flex-row lg:gap-20">
        {/* Left Text Section */}
        <motion.div
          className="w-full text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-600">Sengleang</span>
          </motion.h1>

          <motion.h2
            className="mb-6 text-2xl font-bold text-transparent sm:text-3xl md:text-4xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Typewriter
              words={["SOFTWARE DEVELOPER|"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p
            className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I am studying Software Engineering at Beltei International
            University, with a focus on clean design develop analysis.
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

        {/* Profile Image Section */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing pulse behind the photo */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-400 to-teal-400 opacity-60"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />

          {/* Animated profile image */}
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
