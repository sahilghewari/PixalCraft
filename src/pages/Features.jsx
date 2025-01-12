import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from '../assets/hero.jpg'; 
import logo from '../assets/logo1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';



const Features = () => {
  const carouselSettings = {
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
          slidesToShow: 2,
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


  const features = [
    {
      icon: '✏️',
      title: 'Drag-and-Drop Builder',
      description: 'Craft beautiful designs effortlessly with our advanced drag-and-drop interface. No coding skills required!'
    },
    {
      icon: '📚',
      title: 'Extensive Template Library',
      description: 'Access a vast collection of customizable templates tailored to different industries and needs.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Preview',
      description: 'See your changes instantly with our real-time preview feature, making editing a breeze.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Ensure your website looks stunning on any device with automatic responsive design tools.'
    },
    {
      icon: '🎨',
      title: 'Advanced Customization',
      description: 'Fine-tune every detail with intuitive options for fonts, colors, and layouts.'
    },
    {
      icon: '🤝',
      title: 'Collaboration Tools',
      description: 'Work seamlessly with your team by sharing projects and collaborating in real-time.'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Boost your site’s visibility with built-in SEO tools and best practices.'
    },
    {
      icon: '🚀',
      title: 'One-Click Publishing',
      description: 'Publish your site instantly with a single click. No technical steps required.'
    },
    {
      icon: '🔗',
      title: 'Integrations Galore',
      description: 'Connect with analytics, e-commerce platforms, and marketing tools effortlessly.'
    }
  ];
  
  const testimonials = [
    {
      feedback: 'Pixel Craft transformed how I design websites. It’s so easy and intuitive!',
      name: 'Alex Johnson'
    },
    {
      feedback: 'The drag-and-drop builder is a game-changer. I built my portfolio in hours!',
      name: 'Sophia Lee'
    },
    {
      feedback: 'Amazing templates and customization options. Highly recommend Pixel Craft!',
      name: 'Michael Brown'
    }
  ];
  
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
            <img src={logo} alt="Logo" className="w-64 h-auto mb-8" />
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-gray-900">
              Our Features
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mt-7 font-medium text-center text-gray-700">
              Discover the powerful features of our platform
            </p>
          </motion.div>
        </section>

        <section className="py-16">
        <h2 className="text-center text-3xl font-bold text-stone-700 mb-8">Why Choose PixelCraft?</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              className="bg-stone-200 p-8 rounded-2xl shadow-2xl flex flex-col justify-between h-[400px] w-[300px] text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-stone-700 text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-stone-700 mb-4">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

        <section className="py-20 bg-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className=" font-jersey text-3xl font-extrabold text-gray-900 sm:text-4xl">
                More Features
              </h2>
              <p className="font-jersey mt-4 text-lg text-gray-700">
                Explore additional features that make our platform the best choice for creating your website.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                <div className="transform hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mt-8">Custom Domains</h3>
                  <p className="mt-4 text-gray-700">
                    Use your own domain name for a professional look.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                <div className="transform hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mt-8">Analytics</h3>
                  <p className="mt-4 text-gray-700">
                    Track your website's performance with built-in analytics.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                <div className="transform hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mt-8">E-commerce</h3>
                  <p className="mt-4 text-gray-700">
                    Set up an online store and start selling products.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                <div className="transform hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mt-8">Blogging</h3>
                  <p className="mt-4 text-gray-700">
                    Create and manage a blog to engage with your audience.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                <div className="transform hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mt-8">24/7 Support</h3>
                  <p className="mt-4 text-gray-700">
                    Get help whenever you need it with our 24/7 support.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
              >
                <div className="transform hover:rotate-y-6 hover:rotate-x-6 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mt-8">Security</h3>
                  <p className="mt-4 text-gray-700">
                    Keep your website secure with our advanced security features.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
};

export default Features;
