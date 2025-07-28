import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import real logos from react-icons
import {
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const techSkills = [
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, level: 80 },
  { name: "React.js", icon: <SiReact className="text-cyan-500" />, level: 80 },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 85 },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" />, level: 80 },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: 75 },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 80 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 78 },
];

function Technology() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50"
      id="skill"
    >
      <div className="container relative z-10 px-5 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-down">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 md:text-5xl">
            Tech Stack
          </h2>
          <p
            className="mt-4 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technologies I work with daily
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techSkills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="zoom-in-up"
              data-aos-delay={100 + index * 80}
              className="flex flex-col items-center p-6 transition-transform duration-300 transform bg-white border border-transparent shadow-lg rounded-2xl hover:-translate-y-1 group hover:border-blue-200"
            >
              <span className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h3>

              {/* Animated Meter */}
              <div className="w-full mt-4">
                <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-skill"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
                <span className="block mt-1 text-xs font-medium text-right text-gray-500">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Blobs for decoration */}
      <div className="absolute w-40 h-40 bg-blue-400 rounded-full -top-10 -left-10 opacity-10 blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 bg-indigo-500 rounded-full w-52 h-52 opacity-10 blur-3xl animate-float"></div>
    </section>
  );
}

export default Technology;
