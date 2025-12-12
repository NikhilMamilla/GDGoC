"use client";
import React from "react";
import HeadingNText from "../Components/HeadingNText";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  // -------- HANDLE CONTACT FORM SUBMIT --------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (e.target as any)[0].value;
    const email = (e.target as any)[1].value;
    const message = (e.target as any)[2].value;

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Server Error. Try again later.");
    }
  };

  return (
    <div className={`relative w-full min-h-screen overflow-hidden transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#F7F3E9] text-gray-900'
      }`}>

      {/* Background Grid */}
      <div
        className={`absolute inset-0 -z-10 [background-size:40px_40px] ${theme === 'dark'
          ? 'bg-black [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]'
          : 'bg-[#F7F3E9] [background-image:linear-gradient(to_right,#e8e4d9_1px,transparent_1px),linear-gradient(to_bottom,#e8e4d9_1px,transparent_1px)]'
          }`}
      />

      {/* Radial Mask */}
      <div
        className={`absolute inset-0 -z-10 ${theme === 'dark'
          ? 'bg-black [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,black)]'
          : 'bg-[#F7F3E9] [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,#F7F3E9)]'
          }`}
      />

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center py-16 px-6">

        <HeadingNText title="Contact Us">
          <p className={`text-center max-w-2xl mb-10 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'
            }`}>
            Have questions, suggestions, or want to collaborate?<br />
            We'd love to hear from you!
          </p>
        </HeadingNText>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">

          {/* LEFT — CONTACT FORM */}
          <div className={`border rounded-xl p-8 shadow-lg transition-colors ${theme === 'dark'
            ? 'bg-[#101010] border-white/10'
            : 'bg-white border-gray-200'
            }`}>
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Send Us a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className={`w-full p-3 rounded-lg border outline-none transition-colors ${theme === 'dark'
                  ? 'bg-black border-white/20 text-white focus:border-blue-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className={`w-full p-3 rounded-lg border outline-none transition-colors ${theme === 'dark'
                  ? 'bg-black border-white/20 text-white focus:border-blue-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className={`w-full p-3 rounded-lg border outline-none transition-colors ${theme === 'dark'
                  ? 'bg-black border-white/20 text-white focus:border-blue-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
              ></textarea>

              <div className="flex justify-center">
                <HoverBorderGradient
                  as="button"
                  className={`px-10 py-3 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
                    }`}
                >
                  Send Message
                </HoverBorderGradient>
              </div>
            </form>
          </div>

          {/* RIGHT — SOCIAL CARDS */}
          <div className="flex flex-col gap-6">

            {/* Row 1: Instagram & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gdgc.bvritn"
                target="_blank"
                rel="noopener noreferrer"
                className={`border rounded-xl p-6 shadow-md flex items-center gap-4 hover:scale-[1.03] transition-all ${theme === 'dark'
                  ? 'bg-[#101010] border-white/10 hover:shadow-lg'
                  : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
              >
                <FaInstagram className="text-4xl text-pink-400" />
                <div>
                  <h3 className="text-lg font-semibold">Instagram</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                    @gdgc.bvritn
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/gdg-bvrit"
                target="_blank"
                rel="noopener noreferrer"
                className={`border rounded-xl p-6 shadow-md flex items-center gap-4 hover:scale-[1.03] transition-all ${theme === 'dark'
                  ? 'bg-[#101010] border-white/10 hover:shadow-lg'
                  : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
              >
                <FaLinkedin className="text-4xl text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                    GDG BVRIT
                  </p>
                </div>
              </a>
            </div>

            {/* Row 2: GitHub & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/gdgoc-bvrit"
                target="_blank"
                rel="noopener noreferrer"
                className={`border rounded-xl p-6 shadow-md flex items-center gap-4 hover:scale-[1.03] transition-all ${theme === 'dark'
                  ? 'bg-[#101010] border-white/10 hover:shadow-lg'
                  : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
              >
                <FaGithub className={`text-4xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                <div>
                  <h3 className="text-lg font-semibold">GitHub</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                    gdgoc-bvrit
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:gdgoc@bvrit.ac.in"
                className={`border rounded-xl p-6 shadow-md flex items-center gap-4 hover:scale-[1.03] transition-all ${theme === 'dark'
                  ? 'bg-[#101010] border-white/10 hover:shadow-lg'
                  : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
              >
                <div className="text-3xl text-red-400">📩</div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                    gdgoc@bvrit.ac.in
                  </p>
                </div>
              </a>
            </div>

            {/* Contact Developers Section */}
            <div className="mt-4">
              <h3 className={`text-xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                Contact Developers
              </h3>

              <div className="flex flex-col gap-4">
                {/* Developer 1 - Nikhil Mamilla */}
                <div
                  className={`border rounded-xl p-6 shadow-md ${theme === 'dark'
                      ? 'bg-[#101010] border-white/10'
                      : 'bg-white border-gray-200'
                    }`}
                >
                  <h4 className="text-lg font-semibold mb-2">Nikhil Mamilla</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                    📞 +91 78420 70463
                  </p>
                </div>

                {/* Developer 2 - Dubbasi Mukundh */}
                <div
                  className={`border rounded-xl p-6 shadow-md ${theme === 'dark'
                      ? 'bg-[#101010] border-white/10'
                      : 'bg-white border-gray-200'
                    }`}
                >
                  <h4 className="text-lg font-semibold mb-2">Dubbasi Mukundh</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                    📞 +91 73861 99296
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Gradient transition to footer - positioned at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent pointer-events-none ${theme === 'dark' ? 'to-black' : 'to-[#F0F4F8]'
        }`}></div>
    </div>
  );
}
