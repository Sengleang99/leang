import { motion } from "framer-motion";
import { FiExternalLink, FiBriefcase } from "react-icons/fi";

// Resume Card with upgraded animation & styling
const ResumeCard = ({ title, institution, year, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden transition-all duration-500 bg-white border border-blue-100 shadow-lg rounded-3xl hover:shadow-2xl group"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-100 via-white to-blue-200 blur-2xl" />

      <div className="relative z-10 p-8 sm:p-10">
        <div className="flex items-center mb-4 space-x-4">
          <FiBriefcase className="text-blue-600 w-7 h-7" />
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>

        <div className="flex items-center mb-6 space-x-3 text-gray-600">
          <FiExternalLink className="w-5 h-5 text-blue-500" />
          <span className="text-lg font-medium">{institution}</span>
          <span className="text-gray-400">•</span>
          <time className="font-semibold text-blue-600">{year}</time>
        </div>

        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
          {description}
        </p>

        {/* Underline animation bar */}
        <motion.span
          layoutId="underline"
          className="block w-0 h-1 mt-6 transition-all duration-500 bg-blue-500 rounded-full group-hover:w-full"
        />
      </div>
    </motion.div>
  );
};

const experienceData = [
  {
    title: "Software Developer",
    institution: "Poscar Digital Co,.LTD.",
    year: "3 months - 2024",
    description:
      "Volunteered in a team to build a full-stack mobile app, utilizing Flutter, Firebase, and Figma, with a focus on research and database analysis.",
  },
  {
    title: "IT Projectionist",
    institution: "Legend Cinemas",
    year: "2021 - 2022",
    description:
      "Maintained digital projectors, supported technical operations for daily screenings, tested sound and visual systems, and coordinated with suppliers to ensure high-quality movie experiences.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-100"
    >
      <div className="container px-6 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl"
        >
          Work Experience
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {experienceData.map((item, index) => (
            <ResumeCard
              key={index}
              title={item.title}
              institution={item.institution}
              year={item.year}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
