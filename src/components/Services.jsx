import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import web from "../assets/6729288061594722075-128.png";
import mobile from "../assets/8855341241539683261-128.png";
import design from "../assets/6684101501555931400-128.png";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      image: web,
      description:
        "Professional web development services with modern technologies.",
      bgColor: "bg-blue-300", // Blue background
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: mobile,
      description: "Creating responsive, user-friendly mobile applications.",
      bgColor: "bg-pink-300", // Pink background
    },
    {
      id: 3,
      title: "Design",
      image: design,
      description: "Crafting engaging and visually appealing designs.",
      bgColor: "bg-green-300", // Green background
    },
  ];

  return (
    <div className="text-gray-800 bg-white" id="services">
      <div className="max-w-screen-md px-4 py-5 mx-auto rounded-lg">
        <h2
          data-aos="zoom-in"
          className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-3xl"
        >
          Services
        </h2>
        <p
          data-aos="zoom-in"
          className="font-light text-center text-gray-500 lg:mb-12 dark:text-gray-400 sm:text-lg"
        >
          I offers specialized services to bring your ideas to life, from
          web and mobile app development to creative design solutions.
        </p>
      </div>
      <div data-aos="zoom-in" className="grid max-w-screen-lg gap-6 px-4 mx-auto sm:grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            className="flex flex-col items-center p-10 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="relative flex items-center justify-center py-5 mb-4">
              {/* Solid background circle without blur */}
              <div
                className={`absolute w-20 h-20 rounded-full ${service.bgColor}`}
              ></div>
              {/* Clear icon image on top */}
              <img
                src={service.image}
                alt={service.title}
                className="relative z-10 w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 font-light text-center text-gray-500 text-md">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
