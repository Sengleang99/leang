import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const educationData = [
  {
    degree: "Associate of Software Engineering",
    institution: "Beltei International University",
    period: "2022 - 2024",
    description:
      "Comprehensive curriculum covering software development life cycles, modern full-stack web applications, database design, and algorithmic problem-solving.",
    highlights: [
      "Software Engineering & Architecture",
      "Web & Mobile Development",
      "Database Management Systems (SQL)",
      "Data Structures & Algorithms",
    ],
  },
];

function Education() {
  return (
    <section id="education" className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 md:text-5xl">
            Education
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-gray-600">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Degree & School Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100/80 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 text-sm sm:text-base font-semibold text-blue-600">
                      <FaUniversity className="w-4 h-4 text-blue-500" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Period Badge */}
                <span className="inline-block px-4 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full w-fit self-start sm:self-auto shadow-xs">
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
                {item.description}
              </p>

              {/* Highlights / Skills Learned */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    Key Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                      >
                        <FiCheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
