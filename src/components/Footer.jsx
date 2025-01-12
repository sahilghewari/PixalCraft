import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-4">About PixelCraft</h3>
              <p className="text-gray-400">
                PixelCraft is a leading frontend design studio specializing in creating beautiful and responsive web designs.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#features" className="hover:text-gray-200">Features</a></li>
                <li className="mb-2"><a href="#services" className="hover:text-gray-200">Services</a></li>
                <li className="mb-2"><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                <li className="mb-2"><a href="#about" className="hover:text-gray-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4">Contact Us</h3>
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
  )
}

export default Footer;