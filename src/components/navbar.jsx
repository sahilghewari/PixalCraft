// src/components/Navbar.jsx
import React from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className={`p-4 shadow-lg shadow-blue-300/40 transition-all duration-300 ${isDashboard ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-600 via-gray-700 to-black'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md transform hover:scale-105 transition-transform duration-200">
          PixelCraft
        </Link>

        {!isDashboard ? (
          <div className="space-x-8 hidden md:flex">
            <a href="#features" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Features
            </a>
            <a href="/dashboard" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Dashboard
            </a>
            <a href="#pricing" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Pricing
            </a>
            <a href="#contact" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Contact
            </a>
          </div>
        ) : (
          <div className="space-x-8 hidden md:flex">
            <Link to="/settings" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Settings
            </Link>
            <Link to="/analytics" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Analytics
            </Link>
            <Link to="/help" className="text-xl font-semibold text-white hover:text-blue-100 transition-colors duration-200 hover:scale-105">
              Help
            </Link>
          </div>
        )}

        {/* Sign In / User button */}
        <div className="space-x-4">
          {isSignedIn ? (
            <UserButton
              userProfileMode="navigation"
              className="bg-white text-gray-800 px-6 py-3 text-xl rounded-full shadow-lg transform transition-transform duration-200 hover:shadow-2xl hover:scale-105"
            />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 transform hover:shadow-2xl hover:scale-105">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
