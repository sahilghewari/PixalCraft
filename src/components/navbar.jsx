// src/components/Navbar.jsx
import React from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';


const Navbar = () => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className={`py-2 shadow-lg shadow-blue-300/40 transition-all duration-300 bg-stone-300`}>
      <div className={`max-w-7xl mx-auto flex items-center px-4 ${isDashboard ? 'justify-between' : 'justify-between'}`}>
        
        <Link to="/" className={`text-3xl font-extrabold text-white tracking-wide drop-shadow-md transform hover:scale-105 transition-transform duration-200 ${isDashboard ? 'mx-auto' : ''}`}>
        <img src={logo} alt="Logo" className="h-6" />
        </Link>

        {!isDashboard && (
          <div className="space-x-8 hidden md:flex">
            <a href="/features" className="text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105">
              Features
            </a>
            <a href="/dashboard" className="text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105">
              Dashboard
            </a>
            <a href="/pricing" className="text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105">
              Pricing
            </a>
            <a href="/contact" className="text-xl font-semibold text-stone-900 hover:text-blue-900 transition-colors duration-200 hover:scale-105">
              Contact
            </a>
          </div>
        )}

        {/* Sign In / User button */}
        <div className={`space-x-4 ${isDashboard ? 'ml-auto' : ''}`}>
          {isSignedIn ? (
            <UserButton
              userProfileMode="navigation"
              className="bg-white text-gray-800 px-4 py-2 text-xl rounded-full shadow-lg transform transition-transform duration-200 hover:shadow-2xl hover:scale-105"
            />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-200 transform hover:shadow-2xl hover:scale-105">
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