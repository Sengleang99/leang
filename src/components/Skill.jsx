import React from "react";
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
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
];

const row2Skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Redis", icon: <SiRedis className="text-red-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-900" /> },
];

function Technology() {
  return (
    <section id="skill" className="relative py-20 bg-white overflow-hidden">
      <div className="container px-5 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 md:text-5xl">
            Tech Stack
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-gray-600">
            Frameworks and technologies I specialize in
          </p>
        </motion.div>
      </div>

      {/* Two-Row Slider with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Slider Row 1: Sliding Left */}
        <div className="animate-marquee flex items-center gap-6 py-3">
          {[
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
            ...row1Skills,
          ].map((tech, index) => (
            <div
              key={`r1-${index}`}
              className="flex items-center gap-3.5 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:scale-105 select-none cursor-pointer"
            >
              <span className="text-3xl sm:text-4xl transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Slider Row 2: Sliding Right (Reverse) */}
        <div className="animate-marquee-reverse flex items-center gap-6 py-3">
          {[
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
            ...row2Skills,
          ].map((tech, index) => (
            <div
              key={`r2-${index}`}
              className="flex items-center gap-3.5 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:scale-105 select-none cursor-pointer"
            >
              <span className="text-3xl sm:text-4xl transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;
