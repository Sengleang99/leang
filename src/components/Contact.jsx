import { motion } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare, FiUser } from "react-icons/fi";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-b from-blue-50/60 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container px-5 mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Feel free to reach out!
          </p>

        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl p-5 sm:p-8 md:p-10 mx-auto bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-500/5 hover:border-blue-200/60 transition-all duration-300"
        >
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <FiUser className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="w-full py-3 sm:py-3.5 pl-11 pr-4 text-gray-800 transition-all duration-200 border border-gray-200/80 rounded-xl bg-gray-50/60 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-base sm:text-sm"
                  placeholder="Your name"
                  required
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <FiMail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full py-3 sm:py-3.5 pl-11 pr-4 text-gray-800 transition-all duration-200 border border-gray-200/80 rounded-xl bg-gray-50/60 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-base sm:text-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Subject
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <FiMessageSquare className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="subject"
                  className="w-full py-3 sm:py-3.5 pl-11 pr-4 text-gray-800 transition-all duration-200 border border-gray-200/80 rounded-xl bg-gray-50/60 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-base sm:text-sm"
                  placeholder="Project inquiry / Opportunity"
                  required
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 sm:py-3.5 text-gray-800 transition-all duration-200 border border-gray-200/80 rounded-xl bg-gray-50/60 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none text-base sm:text-sm resize-none"
                placeholder="Hi Sengleang, I would like to discuss..."
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="group flex items-center justify-center w-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 cursor-pointer"
              >
                <FiSend className="mr-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                <span>Send Message</span>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
