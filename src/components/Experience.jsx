import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

// Experience Data (newest to oldest)
const experienceData = [
  {
    title: "Full Stack Engineer",
    institution: "Kas Cambodia (Freelancer)",
    year: "March 2026 - Present",
    type: "Freelance / Remote",
    description:
      "Architecting and developing full-stack web platforms and backend services with containerized deployment, caching, and scalable databases.",
    technologies: ["Next.js", "Express", "Docker", "Redis", "Figma", "PostgreSQL"],
  },
  {
    title: "Mobile App Developer",
    institution: "SamrithEk MFI",
    year: "September 2025 - December 2026",
    type: "Full-Time",
    description:
      "Developed and maintained mobile financial application features, integrating secure API frameworks, database operations, and intuitive user interfaces.",
    technologies: ["Flutter", "Vue.js", "Magic API", "MySQL", "Figma"],
  },
];

// Timeline Item
const TimelineItem = ({ title, institution, year, type, description, technologies, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -35 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative pl-6 sm:pl-8 md:pl-12 mb-10 sm:mb-12 group last:mb-0"
  >
    {/* Animated Timeline Node */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 20,
        delay: index * 0.15 + 0.1,
      }}
      className="absolute -left-[10px] top-2 z-10"
    >
      <div className="relative flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-40 group-hover:opacity-75" />
        <div className="w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-md group-hover:scale-125 group-hover:border-indigo-600 transition-all duration-300" />
      </div>
    </motion.div>

    {/* Card */}
    <motion.div
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="p-4 sm:p-6 md:p-8 transition-all duration-300 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/80"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/70 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
            <FiBriefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm font-semibold text-gray-600 mt-0.5">
              {institution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {type && (
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200/60 rounded-full">
              {type}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-2xs">
            <FiCalendar className="w-3 h-3" />
            {year}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
        {description}
      </p>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -1 }}
              className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/60 rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  </motion.div>
);

// Main Experience Section
const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative px-4 sm:px-6 py-20 sm:py-24 bg-white overflow-hidden">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute -bottom-10 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 tracking-tight">
            Work Experience
          </h2>
          <p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            My professional career path and key engineering contributions
          </p>
        </motion.div>

        {/* Timeline with animated progress fill */}
        <div ref={containerRef} className="relative ml-2 sm:ml-4 md:ml-6">
          {/* Static gray track */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-blue-100" />

          {/* Animated filling gradient line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-600 to-teal-400 origin-top shadow-[0_0_8px_rgba(37,99,235,0.4)]"
          />

          {experienceData.map((exp, index) => (
            <TimelineItem
              key={`${exp.institution}-${index}`}
              index={index}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
