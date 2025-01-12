import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from '../assets/hero.jpg';
import logo from '../assets/logo1.png';
import Footer from '../components/Footer';

const Home = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="font-jersey bg-gray-100 min-h-screen text-gray-900 overflow-hidden">
      <ParallaxProvider>
        <section
          className="flex flex-col items-center justify-center h-screen text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto pb-40 flex flex-col items-center"
          >
            
            
            <h1 className="font-jersey text-6xl mb-8 mt-20 font-bold text-center text-gray-900">
              Welcome to 
            </h1>            <img src={logo} alt="Logo" className="w-90 h-auto mb-8" />

            <p className="font-jersey text-xl md:text-3xl lg:text-4xl mt-7 font-medium text-center text-gray-700">
              Your Ultimate Frontend Design Studio
            </p>
            <p className="font-jersey text-lg md:text-2xl lg:text-3xl mt-4 font-light text-center text-gray-600">
              Crafting beautiful and responsive web designs with precision and creativity.
            </p>
          </motion.div>
        </section>
      </ParallaxProvider>

      <section className="py-20 bg-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-jersey text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose PixelCraft?
            </h2>
            <p className="font-jersey mt-4 text-lg text-gray-700">
              At PixelCraft, we specialize in creating stunning and functional frontend designs that elevate your brand and engage your audience.
            </p>
          </div>

          <div className="mt-10">
            <Slider {...settings}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4"
              >
                <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <h3 className="text-xl font-bold text-gray-900">Timely Delivery</h3>
                  <p className="mt-4 text-gray-700">
                    We ensure that your projects are delivered on time, every time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4"
              >
                <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
                  <p className="mt-4 text-gray-700">
                    Our team of experts is dedicated to delivering the best frontend solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4"
              >
                <div className="bg-stone-200 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <h3 className="text-xl font-bold text-gray-900">Innovative Solutions</h3>
                  <p className="mt-4 text-gray-700">
                    We provide innovative solutions that meet your unique needs.
                  </p>
                </div>
              </motion.div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              We offer a wide range of frontend design services to meet your needs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-stone-400 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl hover:blur-none"
            >
              <h3 className="text-xl font-bold text-gray-900 mt-8">Responsive Design</h3>
              <p className="mt-4 text-gray-700">
                Creating designs that look great on any device.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-stone-400 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl hover:blur-none"
            >
              <h3 className="text-xl font-bold text-gray-900 mt-8">UI/UX Design</h3>
              <p className="mt-4 text-gray-700">
                Crafting user interfaces that are both beautiful and functional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-stone-400 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl hover:blur-none"
            >
              <h3 className="text-xl font-bold text-gray-900 mt-8">Web Development</h3>
              <p className="mt-4 text-gray-700">
                Building robust and scalable web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-stone-400 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl hover:blur-none"
            >
              <h3 className="text-xl font-bold text-gray-900 mt-8">E-commerce Solutions</h3>
              <p className="mt-4 text-gray-700">
                Developing e-commerce platforms that drive sales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-stone-400 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl hover:blur-none"
            >
              <h3 className="text-xl font-bold text-gray-900 mt-8">SEO Optimization</h3>
              <p className="mt-4 text-gray-700">
                Enhancing your website's visibility on search engines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-stone-400 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl hover:blur-none"
            >
              <h3 className="text-xl font-bold text-gray-900 mt-8">Maintenance & Support</h3>
              <p className="mt-4 text-gray-700">
                Providing ongoing support and maintenance for your website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;