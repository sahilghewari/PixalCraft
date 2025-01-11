import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import backgroundImage from '../assets/hero.jpg';
import logo from '../assets/logo1.png';
import cardBackground1 from '../assets/hero.jpg'; // Add your card background images
import cardBackground2 from '../assets/hero.jpg';
import cardBackground3 from '../assets/hero.jpg';

const Features = () => {
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
      icon: '🚀',
      title: 'No Coding Required',
      description: 'Create beautiful websites without writing a single line of code.',
      background: cardBackground1,
    },
    {
      icon: '👀',
      title: 'Live Preview',
      description: 'Preview your website in real-time as you make changes.',
      background: cardBackground2,
    },
    {
      icon: '📑',
      title: 'Templates',
      description: 'Choose from a variety of professionally designed templates.',
      background: cardBackground3,
    },
    {
      icon: '🖱️',
      title: 'Drag & Drop',
      description: 'Easily customize your website with our drag-and-drop editor.',
      background: cardBackground1,
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Ensure your website looks great on all devices.',
      background: cardBackground2,
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility on search engines.',
      background: cardBackground3,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-serif text-gray-900 overflow-hidden">
      <ParallaxProvider>
        
        {/* Why Choose PixelCraft Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-stone-400 sm:text-4xl">
                Why Choose PixelCraft?
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Our platform offers a range of features to help you create stunning websites without any coding knowledge.
              </p>
            </div>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-stone-200 p-8 rounded-2xl shadow-2xl flex flex-col justify-between h-[400px] w-[300px] text-center transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${feature.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="text-stone-700 text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-stone-700 mb-4">{feature.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>

            
          </div>
        </section>

        {/* More Features Section */}
        <section className="py-20 bg-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                More Features
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Explore additional features that make our platform the best choice for creating your website.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
                  style={{ backgroundImage: `url(${feature.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="text-stone-700 text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-stone-700 mb-4">{feature.title}</h3>
                  <p className="text-stone-600 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

           
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
};

export default Features;