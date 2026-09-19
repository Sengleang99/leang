import { motion } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare } from "react-icons/fi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white"
    >
      <div className="container px-5 mx-auto max-w-7xl ">
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
          className="max-w-3xl p-6 sm:p-8 md:p-10 mx-auto bg-white border border-gray-200/80 shadow-sm rounded-2xl"
        >
          <motion.form variants={containerVariants} className="space-y-6">
            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiMail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full py-3.5 pl-10 pr-4 text-gray-700 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full py-3.5 pl-10 pr-4 text-gray-700 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-4 py-3.5 text-gray-700 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="flex items-center justify-center w-full px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 md:w-auto shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
