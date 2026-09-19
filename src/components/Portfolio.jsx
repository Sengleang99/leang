import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

// Project assets
import kasCambodia from "../assets/kascambodia.png";
import realEstate from "../assets/real-estate.png"

const projectsData = [
  {
    id: 1,
    title: "Kas Cambodia",
    category: "Full Stack",
    image: kasCambodia,
    liveUrl: "https://www.kascambodia.com/",
  },
  {
    id: 2,
    title: "UX/UI Real Estate",
    category: "UX/UI",
    image: realEstate,
    liveUrl: "",
  }
];


function Portfolio() {
  const filteredProjects = projectsData;

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50/60 overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative px-5 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-gray-600">
            Here are some of my key projects:
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200/80 transition-all duration-500 aspect-[16/11] bg-slate-900"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay shown ONLY on hover: Live View button at top-right, Title at bottom-left */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                  {/* Top Right: Live View Button (+ GitHub code) */}
                  <div className="flex items-center justify-end gap-2 w-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 active:scale-95"
                      aria-label={`Live view of ${project.title}`}
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      <span>Live View</span>
                    </a>
                  </div>

                  {/* Bottom Left: Title of Project */}
                  <div className="text-left w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA / See All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center mt-16 text-center"
        >
          <a
            href="https://github.com/Sengleang99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="See all projects on GitHub"
          >
            <span>See All Projects</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
