import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

// Experience Data
const experienceData = [
  {
    title: "Software Developer",
    institution: "Poscar Digital Co,.LTD.",
    year: "3 months - 2024",
    description:
      "Volunteered in a team to build a full-stack mobile app using Flutter, Firebase, and Figma with a focus on research and database analysis.",
  },
  {
    title: "IT Projectionist",
    institution: "Legend Cinemas",
    year: "2021 - 2022",
    description:
      "Maintained digital projectors, supported technical operations, tested audio/visual systems, and coordinated with suppliers for movie screenings.",
  },
];

// Timeline Item
const TimelineItem = ({ title, institution, year, description, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative pl-10 mb-16 group"
  >
    {/* Timeline dot */}
    <div className="absolute left-0 w-4 h-4 transition-transform bg-blue-600 rounded-full shadow-lg group-hover:scale-110 top-2" />

    {/* Connecting line */}
    {!isLast && (
      <span className="absolute w-1 h-full left-1 top-6 bg-gradient-to-b from-blue-400 to-blue-100" />
    )}

    {/* Card */}
    <div className="p-6 transition-shadow bg-white border border-blue-100 shadow-md rounded-2xl hover:shadow-xl">
      <h3 className="flex items-center text-lg font-semibold text-gray-800 md:text-xl">
        <FiBriefcase className="mr-2 text-blue-600" />
        {title}
      </h3>
      <div className="mt-1 text-sm font-medium text-gray-600 md:text-base">
        {institution} • <span className="text-blue-500">{year}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
        {description}
      </p>
    </div>
  </motion.div>
);

// Main Experience Section
const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="px-6 py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-4xl font-bold text-center text-gray-900"
        >
          Work Experience
        </motion.h2>

        <div className="relative ml-4 border-l-2 border-blue-200 md:ml-6">
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={index}
              {...exp}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
