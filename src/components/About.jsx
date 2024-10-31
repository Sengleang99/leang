import React from "react";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";

function About() {
  const { ref: titleRef, inView: isTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: paragraphRef, inView: isParagraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: skillsRef, inView: isSkillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 text-gray-800 bg-white" id="about">
      <div className="container flex flex-col items-center justify-center h-full px-8 mx-auto md:px-16 lg:px-24">
        <h2
          className={`mb-12 text-4xl font-extrabold tracking-tight text-center ${
            isTitleInView ? "opacity-100" : "opacity-0"
          }`}
          ref={titleRef}
          style={{ transition: "opacity 0.5s ease-out" }}
        >
          About Me
        </h2>
        <div className="flex flex-col items-center md:items-center">
          <div className="w-full md:w-2/3">
            <p
              className={`mb-8 text-xl font-light text-center text-gray-700 lg:mb-16 sm:text-xl ${
                isParagraphInView ? "opacity-100" : "opacity-0"
              } ${isParagraphInView ? "translate-y-0" : "translate-y-5"}`}
              ref={paragraphRef}
              style={{
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
            >
              I am a passionate Web & App Developer with a strong focus on
              building modern, responsive web and app applications. With a solid
              foundation in both front-end and back-end technologies, I strive
              to create seamless and efficient user experiences.
            </p>
            <div className="space-y-8">
              <h2
                className={`text-4xl font-bold text-gray-800 shadow-md ${
                  isSkillsInView ? "opacity-100" : "opacity-0"
                } ${isSkillsInView ? "translate-y-0" : "translate-y-5"}`}
                ref={skillsRef}
                style={{
                  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                }}
              >
                Skills
              </h2>
              <SkillProgress skill="React Js" level="70%" />
              <SkillProgress skill="PHP & Laravel" level="75%" />
              <SkillProgress skill="SQL & Mysql" level="70%" />
              <SkillProgress skill="Flutter" level="55%" />
              <SkillProgress skill="UX UI" level="65%" />
            </div>
            <div className="mt-12">
              {/* Education Section */}
              <h1 className="text-2xl font-extrabold text-gray-800 shadow-md sm:text-3xl md:text-4xl">
                Education
              </h1>
              <div className="mt-6 space-y-6">
                <ResumeCard
                  title="High School Degree"
                  institution="Hunsen Srah Bonteay High School"
                  year="2018 - 2019"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ResumeCard
                  title="Software Engineering"
                  institution="Beltei International University"
                  year="2024 - In Progress"
                  description="Specialized in Web Development, Data Structures, and Database Management."
                />
              </div>

              {/* Experience Section */}
              <h1 className="mt-12 text-2xl font-extrabold text-gray-800 shadow-md sm:text-3xl md:text-4xl">
                Experience
              </h1>
              <div className="mt-6 space-y-6">
                <ResumeCard
                  title="Software Developer"
                  institution="Poscar Digital Co,.LTD."
                  year="3 months - 2024"
                  description="Valunteer Build project full stack mobile appliction with team. Use tool flutter firebase figma(UX UI). Work hard researching document and analyze table database."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillProgress({ skill, level }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      className="flex items-center"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <span className="w-3/12 text-left text-gray-700">{skill}</span>
      <div className="relative w-9/12 h-2.5 bg-gray-300 rounded-full overflow-hidden shadow-md">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500"
          style={{ width: level, transition: "width 0.5s ease-out" }}
        ></div>
      </div>
    </div>
  );
}

function ResumeCard({ title, institution, year, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className="text-sm font-light text-gray-600">{year}</span>
      </div>
      <p className="mt-2 text-gray-600">{institution}</p>
      <p className="mt-4 text-gray-700 font-light">{description}</p>
    </div>
  );
}

export default About;
