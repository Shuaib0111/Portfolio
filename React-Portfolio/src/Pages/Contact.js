import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  return (
    <main className="px-4 pt-12 pb-24 max-w-6xl mx-auto">
      {/* Heading */}
      <section className="text-center mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-3 flex items-center justify-center gap-2">
          <MdContactMail className="text-4xl text-black dark:text-white" />
          Contact Me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base md:text-lg">
          I'd love to hear from you. Whether it's a project, question, or just a hello — let’s talk!
        </p>
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6"
        >
          {/* Intro */}
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Hi! This is Mohd Shuaib Anwar — you can call me MSA.
            </h2>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Please feel free to contact me.
            </h3>
            <p className="text-base">
              I'm a passionate web developer focused on building fast, accessible, and user-friendly web experiences. If you're looking to collaborate or just want to chat about tech, I'm always open to conversations!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-100">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:mohdshuaib77689@gmail.com"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                mohdshuaib77689@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-100">
              <FaPhoneAlt className="text-xl" />
              <a
                href="tel:+919876543210"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                +91 9876543210
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-100">
              <FaMapMarkerAlt className="text-xl" />
              <span>Salkhemau, Mohan, Unnao, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6">
            <a
              href="https://github.com/Shuaib0111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-shuaib-anwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700 transition duration-300 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          action="https://formsubmit.co/mohdshuaib77689@gmail.com"
          method="POST"
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-6 text-white bg-gradient-to-r from-black to-gray-800 rounded-md text-sm font-semibold hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </main>
  );
}

export default Contact;
