import React from "react";
import HeadingNText from "../Components/HeadingNText";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-black 
        [background-size:40px_40px]
        [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),
        linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 -z-10 bg-black 
        [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,black)]"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center py-16 px-6">

        <HeadingNText title="Contact Us" />

        <p className="text-neutral-300 text-center max-w-2xl mb-10">
          Whether you're interested in joining GDG On Campus, collaborating with us,
          or simply want to say hello — we'd love to hear from you!
        </p>

        {/* Section: Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* LinkedIn */}
          <div className="bg-[#101010] border border-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-[1.03] transition-all">
            <FaLinkedin className="text-3xl text-blue-400 mb-3" />
            <p className="text-neutral-300">Connect with us on LinkedIn</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-400 hover:text-blue-300"
            >
              linkedin.com/gdg
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-[#101010] border border-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-[1.03] transition-all">
            <FaGithub className="text-3xl text-gray-300 mb-3" />
            <p className="text-neutral-300">Explore our open-source projects</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-300 hover:text-white"
            >
              github.com/gdg
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#101010] border border-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-[1.03] transition-all">
            <FaPhone className="text-3xl text-green-400 mb-3" />
            <p className="text-neutral-300">Call Us</p>
            <a href="tel:+919999999999" className="mt-2 text-green-400 hover:text-green-300">
              +91 99999 99999
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#101010] border border-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-[1.03] transition-all">
            <FaEnvelope className="text-3xl text-red-400 mb-3" />
            <p className="text-neutral-300">Email Us</p>
            <a
              href="mailto:gdg@college.edu"
              className="mt-2 text-red-400 hover:text-red-300"
            >
              gdg@college.edu
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="w-full max-w-3xl bg-[#101010] border border-white/10 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-blue-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-blue-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-blue-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#4285F4] via-[#0F9D58] to-[#DB4437] 
              text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
