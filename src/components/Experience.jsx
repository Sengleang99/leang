import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

// Experience Data (newest to oldest)
const experienceData = [
  {
    title: "Full Stack Engineer",
    institution: "Kas Cambodia (Freelancer)",
    year: "March 2026 - Present",
    description:
      "Architecting and developing full-stack web platforms and backend services with containerized deployment, caching, and scalable databases.",
    technologies: ["Next.js", "Express", "Docker", "Redis", "Figma", "PostgreSQL"],
  },
  {
    title: "Mobile App Developer",
    institution: "SamrithEk MFI",
    year: "September 2025 - December 2026",
    description:
      "Developed and maintained mobile financial application features, integrating secure API frameworks, database operations, and intuitive user interfaces.",
    technologies: ["Flutter", "Vue.js", "Magic API", "MySQL", "Figma"],
  },
  {
    title: "Application Support & Developer Intern",
    institution: "Poscar Digital Co., LTD",
    year: "March 2024 - April 2024",
    description:
      "Collaborated on mobile application feature prototyping, user support, bug fixing, and cloud database integrations.",
    technologies: ["Flutter", "Firebase", "Figma"],
  },
];

// Timeline Item
const TimelineItem = ({ title, institution, year, description, technologies }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative pl-8 md:pl-10 mb-12 group last:mb-0"
  >
    {/* Timeline dot */}
    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-md group-hover:scale-125 transition-transform duration-300" />

    {/* Card */}
    <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md hover:border-blue-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="flex items-center text-lg font-bold text-gray-900 md:text-xl">
          <FiBriefcase className="mr-2.5 text-blue-600 flex-shrink-0" />
          {title}
        </h3>
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full w-fit">
          {year}
        </span>
      </div>

      <div className="mt-2 text-sm font-semibold text-gray-600">
        {institution}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

// Main Experience Section
const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 md:text-5xl">
            Work Experience
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-gray-600">
            My professional career path and development journey
          </p>
        </motion.div>

        <div className="relative ml-4 border-l-2 border-blue-200 md:ml-6">
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={`${exp.institution}-${index}`}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
