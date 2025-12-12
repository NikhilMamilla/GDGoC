import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`w-full border-t transition-colors ${theme === 'dark'
      ? 'bg-black text-white border-[#4cdef5]/20'
      : 'bg-[#F0F4F8] text-gray-900 border-gray-300'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col gap-y-6 items-center justify-center text-center 
                        md:flex-row md:items-center md:justify-between md:text-left">

          {/* Logo */}
          <div className="flex items-center gap-3 justify-center">
            <img src="logo1.jpg" alt="GDG Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Revamped, sans-serif' }}>
              GDGoC BVRIT
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base">
            <Link to="/" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
              }`}>Home</Link>
            <Link to="/about" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
              }`}>About</Link>
            <Link to="/team" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
              }`}>Team</Link>
            <Link to="/events" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
              }`}>Events</Link>
            <Link to="/contact-us" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
              }`}>Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/gdg-bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/gdgc.bvritn"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/gdgoc-bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <a
              href="tel:+917842070463"
              className={`flex items-center gap-2 transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaPhone className="w-4 h-4" />
              +91 78420 70463
            </a>
            <a
              href="mailto:gdgoc@bvrit.ac.in"
              className={`flex items-center gap-2 transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaEnvelope className="w-4 h-4" />
              gdgoc@bvrit.ac.in
            </a>
          </div>

        </div>

        <div className={`mt-6 pt-4 border-t text-center text-sm ${theme === 'dark' ? 'border-white/10 text-gray-400' : 'border-gray-300 text-gray-600'
          }`}>
          © 2026 GDG on Campus BVRIT. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;