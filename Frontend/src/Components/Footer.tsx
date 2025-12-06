import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="w-full bg-black text-white border-t border-[#4cdef5]/20">
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
            <Link to="/" className="text-gray-300 hover:text-[#4cdef5] transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-[#4cdef5] transition">About</Link>
            <Link to="/team" className="text-gray-300 hover:text-[#4cdef5] transition">Team</Link>
            <Link to="/events" className="text-gray-300 hover:text-[#4cdef5] transition">Events</Link>
            <Link to="/contact-us" className="text-gray-300 hover:text-[#4cdef5] transition">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/gdg-bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#4cdef5] transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/gdgc.bvritn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#4cdef5] transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/gdgoc-bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#4cdef5] transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <a
              href="tel:+917842070463"
              className="flex items-center gap-2 text-gray-300 hover:text-[#4cdef5] transition"
            >
              <FaPhone className="w-4 h-4" />
              +91 78420 70463
            </a>
            <a
              href="mailto:gdgoc@bvrit.ac.in"
              className="flex items-center gap-2 text-gray-300 hover:text-[#4cdef5] transition"
            >
              <FaEnvelope className="w-4 h-4" />
              gdgoc@bvrit.ac.in
            </a>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          © 2026 GDG on Campus BVRIT. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;