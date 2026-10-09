import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight, FiImage } from "react-icons/fi";

// Project assets
import kasCambodia from "../assets/kascambodia.png";
import realEstate from "../assets/real-estate.png";
import kasAdvertising from "../assets/kas-advertising.png";

const projectsData = [
  {
    id: 3,
    title: "Kas Advertise",
    category: "Full Stack",
    description: "Comprehensive digital advertising management system for launching campaigns, tracking ad reach, and analyzing audience metrics.",
    image: kasAdvertising,
    liveUrl: "https://www.kasadvertisting.com",
  },
  {
    id: 1,
    title: "Kas Cambodia",
    category: "Full Stack",
    description: "An official corporate platform delivering digital solutions, web design, and branding services across Cambodia.",
    image: kasCambodia,
    liveUrl: "https://www.kascambodia.com/",
  },
  {
    id: 2,
    title: "UX/UI Real Estate",
    category: "UX/UI",
    description: "Modern real estate application UI/UX design featuring property discovery, interactive listings, and intuitive booking flows.",
    image: realEstate,
    liveUrl: "",
  },
];

function Portfolio() {
  const filteredProjects = projectsData;

  return (
    <section
      id="projects"
      className="relative py-20 bg-white overflow-hidden"
    >
      <div className="container relative px-5 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Here are some of my key projects:
          </p>
        </motion.div>

        {/* Projects Grid with Smooth Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200/80 transition-all duration-500 aspect-[16/11] bg-slate-900"
            >
              {/* Project Image or Empty Icon Placeholder */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-400 group-hover:bg-slate-800/90 transition-colors duration-500">
                  <FiImage className="w-16 h-16 stroke-[1.2] text-slate-500 transition-transform duration-500 group-hover:scale-110" />
                  <span className="mt-3 text-xs font-medium text-slate-400 tracking-wider uppercase">
                    No Image
                  </span>
                </div>
              )}

              {/* Overlay: accessible on mobile, dynamic hover reveal on desktop */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 md:from-slate-950/85 md:via-slate-950/25 md:to-transparent md:group-hover:from-slate-950/95 md:group-hover:via-slate-900/60 md:group-hover:to-slate-950/30 transition-all duration-300">
                {/* Top: Category badge and Live View Button */}
                <div className="flex items-center justify-end gap-2 w-full">
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs md:text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:-translate-y-2 md:group-hover:translate-y-0"
                      aria-label={`Live view of ${project.title}`}
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      <span>Live View</span>
                    </motion.a>
                  ) : null}
                </div>

                {/* Bottom Left: Title + Description */}
                <div className="text-left w-full">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>

                  {project.description && (
                    <div className="overflow-hidden max-h-24 opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed drop-shadow">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / See All Projects (hidden if less than 4 projects) */}
        {filteredProjects.length >= 4 && (
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
              <span>See All</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
