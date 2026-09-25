import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Profile from "../assets/photo_2024-09-03_23-25-36.jpg";

function Hero() {
  const socialLinks = [
    {
      icon: <FaTelegram size={20} />,
      name: "Telegram",
      url: "https://t.me/Sengleangyan",
      color: "hover:text-blue-600",
    },
     {
      icon: <HiOutlineMail size={20} />,
      name: "Email",
      url: "mailto:sengleangyan@gmail.com",
      color: "hover:text-red-500",
    },
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
   
  ];

  return (
    <div
      id="home"
      className="px-4 pt-24 pb-12 sm:px-6 md:px-10 lg:px-20 xl:px-32 md:py-20 bg-white"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-12 mt-4 sm:mt-8 lg:flex-row lg:gap-20">
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
            Hi, I&apos;m <span className="text-blue-600">Sengleang</span>
          </motion.h1>

          <motion.h2
            className="mb-6 font-bold text-[clamp(1.5rem,5vw,2.5rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text drop-shadow-sm">
              <Typewriter
                words={["FULL STACK DEVELOPER", "UX/UI DESIGNER"]}
                loop={true}
                cursor={false}
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
            <span className="text-teal-400 font-light">
              <Cursor cursorStyle="|" cursorColor="#14b8a6" />
            </span>
          </motion.h2>

          <motion.p
            className="mb-8 text-gray-600 text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I am a passionate Full Stack Developer specializing in building
            modern, scalable web applications with clean design, robust architecture,
            and seamless user experiences.
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
