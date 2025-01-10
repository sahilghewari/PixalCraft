import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import backgroundImage from '../assets/hero.jpg'; 

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="bg-gray-100 min-h-screen font-serif text-gray-900 overflow-hidden">
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center bg-cover bg-center bg-stone-300"
                  style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Parallax y={[-20, 20]}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto pb-40 flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-gray-900">
                Simple, Transparent Pricing for Everyone
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mt-7 font-medium text-center text-gray-700">
                Choose the perfect plan for your needs
              </p>
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </motion.div>
          </Parallax>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-stone-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Pricing Plans
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Select a plan that works for you
              </p>
              <div className="mt-6">
                <button
                  onClick={toggleBillingCycle}
                  className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  {billingCycle === 'monthly' ? 'Switch to Yearly Billing' : 'Switch to Monthly Billing'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">Free</h3>
                <p className="mt-4 text-gray-700">
                  {billingCycle === 'monthly' ? '$0/month' : '$0/year'}
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>Basic Features</li>
                  <li>Limited Templates</li>
                  <li>Community Support</li>
                </ul>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Choose Plan
                </button>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                <p className="mt-4 text-gray-700">
                  {billingCycle === 'monthly' ? '$10/month' : '$100/year'}
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>All Free Features</li>
                  <li>More Templates</li>
                  <li>Email Support</li>
                </ul>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Choose Plan
                </button>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="mt-4 text-gray-700">
                  {billingCycle === 'monthly' ? '$30/month' : '$300/year'}
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>All Basic Features</li>
                  <li>Advanced Templates</li>
                  <li>Priority Support</li>
                </ul>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Choose Plan
                </button>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                <p className="mt-4 text-gray-700">Contact Us</p>
                <ul className="mt-4 text-gray-700">
                  <li>All Pro Features</li>
                  <li>Custom Solutions</li>
                  <li>Dedicated Support</li>
                </ul>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Get Quote
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-stone-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Compare Plans
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                See what features are included in each plan
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Free
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Basic
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Pro
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200">Drag & Drop</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200">Live Preview</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">❌</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200">Templates</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">❌</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">❌</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200">Custom Branding</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">❌</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">❌</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Hear from our satisfied customers
              </p>
            </div>

            <div className="relative">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p className="text-gray-700">
                        "This platform has transformed the way I create websites. It's so easy to use and the results are amazing!"
                      </p>
                      <p className="mt-4 text-gray-900 font-semibold">- John Doe</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p className="text-gray-700">
                        "I love the drag-and-drop editor. It makes designing websites a breeze!"
                      </p>
                      <p className="mt-4 text-gray-900 font-semibold">- Jane Smith</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p className="text-gray-700">
                        "The customer support is fantastic. They helped me every step of the way."
                      </p>
                      <p className="mt-4 text-gray-900 font-semibold">- Michael Johnson</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Find answers to common questions about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Can I upgrade or downgrade my plan?</h3>
                <p className="mt-4 text-gray-700">
                  Yes, you can upgrade or downgrade your plan at any time from your account settings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Is there a free trial available?</h3>
                <p className="mt-4 text-gray-700">
                  Yes, we offer a 14-day free trial for all our plans. You can sign up without a credit card.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-4 text-gray-700">
                  We accept all major credit cards, PayPal, and bank transfers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Can I cancel my subscription at any time?</h3>
                <p className="mt-4 text-gray-700">
                  Yes, you can cancel your subscription at any time from your account settings.
                </p>
              </div>
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
        <footer className="bg-gray-800 text-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About PixelCraft</h3>
              <p className="text-gray-400">
                PixelCraft is a leading frontend design studio specializing in creating beautiful and responsive web designs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#features" className="hover:text-gray-200">Features</a></li>
                <li className="mb-2"><a href="#services" className="hover:text-gray-200">Services</a></li>
                <li className="mb-2"><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                <li className="mb-2"><a href="#about" className="hover:text-gray-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                Email: info@pixelcraft.com
              </p>
              <p className="text-gray-400">
                Phone: +1 (123) 456-7890
              </p>
              <p className="text-gray-400">
                Address: 123 PixelCraft St, Design City, DC 12345
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            &copy; 2023 PixelCraft. All rights reserved.
          </div>
        </div>
      </footer>
      </ParallaxProvider>
    </div>
  );
};

export default Pricing;