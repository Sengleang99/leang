import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Profile from "../assets/photo_2024-09-03_23-25-36.jpg";

function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll parallax effects
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const socialLinks = [
    {
      icon: <FaTelegram size={19} />,
      name: "Telegram",
      url: "https://t.me/Sengleangyan",
      color: "hover:text-sky-500 hover:border-sky-300 hover:bg-sky-50/50",
    },
    {
      icon: <HiOutlineMail size={20} />,
      name: "Email",
      url: "mailto:sengleangyan@gmail.com",
      color: "hover:text-red-500 hover:border-red-300 hover:bg-red-50/50",
    },
    {
      icon: <FaGithub size={19} />,
      name: "GitHub",
      url: "https://github.com/Sengleang99",
      color: "hover:text-gray-900 hover:border-gray-400 hover:bg-gray-100/50",
    },
    {
      icon: <FaLinkedin size={19} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yan-sengleang-614a94277/",
      color: "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50",
    },
  ];

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative px-4 pt-28 pb-16 sm:px-6 md:px-10 lg:px-20 xl:px-32 md:pt-32 md:pb-24 bg-white overflow-hidden"
    >
      {/* Decorative ambient gradient backdrop spheres */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-200/50 to-indigo-100/30 blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 -right-28 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-teal-100/50 via-cyan-100/40 to-transparent blur-3xl -z-10"
      />

      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="flex flex-col-reverse items-center justify-between gap-12 sm:mt-4 lg:flex-row lg:gap-16"
      >
        {/* Text Section */}
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <motion.h1
            className="mb-3 font-extrabold text-gray-900 tracking-tight text-[clamp(1.9rem,5.5vw,3.75rem)]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
              Sengleang
            </span>
          </motion.h1>

          <motion.h2
            className="mb-6 font-bold text-[clamp(1.2rem,4vw,2.5rem)] min-h-[2.6rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text drop-shadow-xs">
              <Typewriter
                words={["FULL STACK DEVELOPER", "UX/UI DESIGNER", "MOBILE DEVELOPER"]}
                loop={true}
                cursor={false}
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1600}
              />
            </span>
            <span className="text-teal-400 font-light">
              <Cursor cursorStyle="|" cursorColor="#14b8a6" />
            </span>
          </motion.h2>

          <motion.p
            className="mb-8 text-gray-600 text-[clamp(1rem,2vw,1.15rem)] leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            I am a passionate Full Stack Developer specializing in building
            modern, scalable web applications with clean design, robust architecture,
            and seamless user experiences.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 text-gray-600 transition-all duration-300 rounded-full bg-white border border-gray-200/80 shadow-xs hover:shadow-md ${link.color}`}
                whileHover={{ y: -4, scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.75 + index * 0.08,
                  type: "spring",
                  stiffness: 300,
                }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Section */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[400px] lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated gradient ring aura behind image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 rounded-3xl opacity-30 blur-xl -z-10"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white"
          >
            <img
              src={Profile}
              alt="Sengleang - Software Developer"
              className="relative z-10 object-cover w-full h-auto cursor-pointer"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex flex-col items-center justify-center mt-12 cursor-pointer text-gray-400 hover:text-blue-600 transition-colors"
        onClick={() => {
          const el = document.getElementById("skill");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-gray-300 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2 rounded-full bg-blue-600"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
