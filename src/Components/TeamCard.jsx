import React from "react";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function TeamCard({ name, role, img, linkedin, github, phone }) {
  return (
    <div className="relative group">
      {/* Animated Gradient Border */}
      <div className="
        absolute -inset-0.5 rounded-2xl opacity-60 
        bg-gradient-to-r from-[#4f4f4f] via-[#7a7a7a] to-[#4f4f4f]
        blur-xl group-hover:opacity-100 transition-all duration-500
      "></div>

      {/* Card Container */}
      <div
        className="
          relative rounded-2xl p-6 
          bg-black/40 backdrop-blur-2xl
          border border-white/10 
          shadow-[0_0_30px_rgba(0,0,0,0.5)]
          group-hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
          transition-all duration-500 ease-out
        "
      >
        {/* Spotlight Glow */}
        <div className="
          absolute inset-x-0 -top-6 mx-auto w-40 h-40 
          bg-white/5 rounded-full blur-2xl
        "></div>

        {/* Profile Image */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src={img}
            alt={name}
            className="
              w-full h-full object-cover 
              transition-transform duration-500 
              group-hover:scale-110
            "
          />
        </div>

        {/* Name */}
        <h3 className="mt-5 text-xl font-semibold text-white text-center tracking-wide">
          {name}
        </h3>

        {/* Role */}
        <p className="text-sm text-center text-neutral-400">{role}</p>

        {/* Phone */}
        {phone && (
          <div className="flex justify-center gap-2 mt-3 text-neutral-400 text-sm">
            <FaPhone className="text-neutral-500" />
            <a href={`tel:${phone}`} className="hover:text-white transition">
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
              className="
                text-neutral-400 text-2xl 
                hover:text-white transition-all duration-300
                hover:scale-110
              "
            >
              <FaLinkedin />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-neutral-400 text-2xl 
                hover:text-white transition-all duration-300
                hover:scale-110
              "
            >
              <FaGithub />
            </a>
          )}
        </div>

        {/* Bottom Divider */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </div>
  );
}
