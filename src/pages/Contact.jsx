import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import backgroundImage from '../assets/hero.jpg'; 
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="font-jersey bg-gray-100 min-h-screen text-gray-900 overflow-hidden">
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center bg-cover bg-center "          
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Parallax y={[-20, 20]}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto pb-40 flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-gray-900">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mt-7 font-medium text-center text-gray-700">
                We'd love to hear from you
              </p>
            </motion.div>
          </Parallax>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Contact Information
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                You can also reach us through the following contact details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900">Email</h3>
                <p className="mt-4 text-gray-700">info@pixelcraft.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                <p className="mt-4 text-gray-700">+1 (123) 456-7890</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900">Address</h3>
                <p className="mt-4 text-gray-700">123 PixelCraft St, Design City, DC 12345</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Footer */}
        <footer className="bg-gray-900 text-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Choose the perfect plan for your needs and start building your website today.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </footer>
      </ParallaxProvider>
    </div>
  );
};

export default ContactUs;