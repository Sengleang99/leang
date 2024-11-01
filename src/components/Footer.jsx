import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (optional)
      once: false, // Whether animation should happen only once
    });
  }, []);
  
  const { ref: linksRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: socialRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: contactRef } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <footer data-aos="fade-up" data-aos-delay="200" className="py-8 text-black bg-slate-50">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Footer Links */}
          <div 
            className="w-full mb-6 text-center md:mb-0 md:w-auto md:text-left" 
            ref={linksRef}
          >
            <h2 className="mb-4 text-xl font-bold">Quick Links</h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
            <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div
            className="w-full mb-6 text-center md:mb-0 md:w-auto"
            ref={socialRef}
          >
            <h2 className="mb-4 text-xl font-bold tracking-tight">Follow Me</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://web.facebook.com/yan.sengleang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition duration-300 transform hover:text-blue-700 hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/_sengleang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition duration-300 transform hover:text-blue-700 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/yan-sengleang-614a94277/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition duration-300 transform hover:text-blue-700 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Sengleang99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition duration-300 transform hover:text-blue-700 hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div
          className="mt-8 font-light text-center text-gray-500 dark:text-gray-400"
          ref={contactRef}
        >
          <p>&copy; {new Date().getFullYear()} Sengleang. All rights reserved.</p>
          <p className="mt-2">Email: <a href="mailto:sengleangyan@gmail.com" className="hover:underline">sengleangyan@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
