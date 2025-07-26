import { motion } from "framer-motion";
import { FiExternalLink, FiBriefcase } from "react-icons/fi";

const ResumeCard = ({ title, institution, year, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden transition-all border border-transparent shadow-md cursor-pointer rounded-3xl bg-gradient-to-tr from-white to-blue-50 hover:shadow-xl hover:border-blue-300 duration-400"
    >
      <div className="p-8 sm:p-10">
        <div className="flex items-center mb-4 space-x-4">
          <FiBriefcase className="flex-shrink-0 text-blue-500 w-7 h-7" />
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        </div>

        <div className="flex items-center mb-6 space-x-2 text-gray-600 sm:space-x-3">
          <FiExternalLink className="w-5 h-5 text-blue-400" />
          <span className="text-lg font-medium">{institution}</span>
          <span className="mx-2 text-gray-400">•</span>
          <time className="font-semibold text-blue-600">{year}</time>
        </div>

        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">{description}</p>

        {/* Animated underline on hover */}
        <span
          className="absolute bottom-6 left-8 w-0 h-1 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-[calc(100%-4rem)]"
          style={{ pointerEvents: "none" }}
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
    year: "1 year - 2021 to 2022",
    description:
      "Maintained digital projectors, supported technical operations for daily screenings, tested sound and visual systems, and coordinated with suppliers to ensure high-quality movie experiences.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="container px-6 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl"
        >
          Work Experience
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
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
