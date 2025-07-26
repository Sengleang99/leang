import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMessageSquare } from 'react-icons/fi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container px-5 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 md:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl p-8 mx-auto bg-white shadow-sm rounded-xl md:p-10"
        >
          <motion.form
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiMail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full py-3 pl-10 pr-4 text-gray-700 transition-all duration-300 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email address"
                  required
                />
              </div>
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiMessageSquare className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="subject"
                  className="w-full py-3 pl-10 pr-4 text-gray-700 transition-all duration-300 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What's this about?"
                  required
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 text-gray-700 transition-all duration-300 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 md:w-auto hover:shadow-md"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-12 sm:grid-cols-2 md:grid-cols-3"
        >
          <div className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-blue-600 rounded-full bg-blue-50">
              <FiMail className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">sengleang@example.com</p>
          </div>

          <div className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-blue-600 rounded-full bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-800">Phone</h3>
            <p className="text-gray-600">+855 123456789</p>
          </div>

          <div className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-blue-600 rounded-full bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-800">Location</h3>
            <p className="text-gray-600">Phnom Penh, Cambodia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;