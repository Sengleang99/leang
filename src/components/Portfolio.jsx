import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiFlutter, SiFirebase, SiFigma, SiReact, SiNodedotjs, SiPhp, SiMysql } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Project images
import ProjectImage from "../assets/f8c12fd0ad6f7c09576ffef2de8b33d5.png";
import Data_Analytic_Image from "../assets/image.png";
import folio from "../assets/Screenshot 2024-09-05 170105.png";
import portal from "../assets/portal.png";
import zando from "../assets/Screenshot 2024-09-05 171654.png";
import pos from "../assets/Screenshot 2024-09-05 180526.png";
import photo from "../assets/photo.png";
import news from "../assets/news.png";

const techIcons = {
  react: <SiReact className="text-blue-500" />,
  node: <SiNodedotjs className="text-green-500" />,
  flutter: <SiFlutter className="text-blue-400" />,
  firebase: <SiFirebase className="text-yellow-500" />,
  figma: <SiFigma className="text-pink-500" />,
  php: <SiPhp className="text-purple-500" />,
  mysql: <SiMysql className="text-blue-600" />
};

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const projects = [
    { 
      id: 1, 
      title: 'Fullstack POS System', 
      image: pos, 
      url: '#',
      github: '#',
      tech: ['react', 'node', 'mysql']
    },
    { 
      id: 2, 
      title: 'Student Portal', 
      image: portal, 
      url: '#',
      github: '#',
      tech: ['php', 'mysql']
    },
    { 
      id: 3, 
      title: 'New website', 
      image: news, 
      url: '#',
      github: '#',
      tech: ['php', 'mysql']
    },    
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-5 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 md:text-5xl">
            My Portfolio
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Explore my latest projects. Click to view live demos and case studies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="overflow-hidden transition-shadow duration-500 bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl"
              >
                <div className="relative overflow-hidden group rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full transition-transform duration-500 h-52 rounded-t-2xl group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end p-5 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100 rounded-t-2xl">
                    <div className="flex space-x-3">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-white rounded-full hover:bg-blue-100"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="text-gray-800" />
                      </a>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 transition-colors bg-white rounded-full hover:bg-blue-100"
                          aria-label="GitHub Repository"
                        >
                          <FiGithub className="text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 cursor-pointer hover:text-blue-600">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      {project.title}
                    </a>
                  </h3>
                  
                  {project.tech.length > 0 && (
                    <div className="flex mt-3 space-x-3 text-3xl text-gray-700">
                      {project.tech.map((tech) => (
                        <span key={tech} title={tech}>
                          {techIcons[tech]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
