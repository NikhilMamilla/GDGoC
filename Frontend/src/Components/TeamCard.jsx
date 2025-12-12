import React from "react";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function TeamCard({ name, role, img, linkedin, github, phone }) {
  const { theme } = useTheme();

  return (
    <div className="relative group">

      {/* Card Container */}
      <div
        className={`
          relative rounded-2xl p-6 
          backdrop-blur-2xl
          border 
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]
          transition-all duration-500 ease-out
          ${theme === 'dark'
            ? 'bg-[#1F2937]/90 border-white/10'
            : 'bg-white/90 border-gray-200'
          }
        `}
      >
        {/* Spotlight Glow */}
        <div
          className={`
          absolute inset-x-0 -top-6 mx-auto w-40 h-40 
          rounded-full blur-2xl
          ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-400/10'}
        `}
        ></div>

        {/* Profile Image */}
        <div className={`w-full h-64 rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'shadow-black/50' : ''
          }`}>
          <img
            src={img}
            alt={name}
            className="
              w-full h-full object-cover
              filter grayscale group-hover:grayscale-0
              transition-all duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* Name */}
        <h3 className={`mt-5 text-xl font-semibold text-center tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
          {name}
        </h3>

        {/* Role */}
        <p className={`text-sm text-center ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
          }`}>{role}</p>

        {/* Phone */}
        {phone && (
          <div className={`flex justify-center gap-2 mt-3 text-sm ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'
            }`}>
            <FaPhone className={theme === 'dark' ? 'text-neutral-400' : 'text-gray-500'} />
            <a href={`tel:${phone}`} className={`transition ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-500'
              }`}>
              {phone}
            </a>
          </div>
        )}

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-5">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-2xl 
                transition-all duration-300
                hover:scale-110
                ${theme === 'dark'
                  ? 'text-neutral-400 hover:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              <FaLinkedin />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-2xl 
                transition-all duration-300
                hover:scale-110
                ${theme === 'dark'
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
                }
              `}
            >
              <FaGithub />
            </a>
          )}
        </div>

        {/* Bottom Divider */}
        <div className={`mt-6 h-px w-full bg-gradient-to-r from-transparent to-transparent ${theme === 'dark' ? 'via-neutral-700' : 'via-gray-200'
          }`}></div>
      </div>
    </div>
  );
}
