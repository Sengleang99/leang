import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiExpress,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiGithub,
} from "react-icons/si";

const row1Skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" />, glow: "hover:border-gray-900/40" },
  { name: "Express", icon: <SiExpress className="text-gray-800" />, glow: "hover:border-gray-800/40" },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, glow: "hover:border-sky-500/40" },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" />, glow: "hover:border-blue-600/40" },
];

const row2Skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" />, glow: "hover:border-emerald-600/40" },
  { name: "Docker", icon: <SiDocker className="text-blue-500" />, glow: "hover:border-blue-500/40" },
  { name: "Redis", icon: <SiRedis className="text-red-600" />, glow: "hover:border-red-600/40" },
  { name: "GitHub", icon: <SiGithub className="text-gray-900" />, glow: "hover:border-gray-900/40" },
];

function Technology() {
  return (
    <section id="skill" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10" />

      <div className="container px-5 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 tracking-tight">
            Tech Stack
          </h2>
          <p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Modern tools, frameworks, and technologies I leverage to build robust applications
          </p>
        </motion.div>
      </div>

      {/* Two-Row Slider with Gradient Edge Masks & Motion InView */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden py-3"
      >
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Slider Row 1: Sliding Left */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2 sm:py-3">
          {[
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
          ].map((tech, index) => (
            <motion.div
              key={`r1-${index}`}
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className={`flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-6 py-2.5 sm:py-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 select-none cursor-pointer ${tech.glow}`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Slider Row 2: Sliding Right (Reverse) */}
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-2 sm:py-3">
          {[
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
          ].map((tech, index) => (
            <motion.div
              key={`r2-${index}`}
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className={`flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-6 py-2.5 sm:py-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 select-none cursor-pointer ${tech.glow}`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Technology;
