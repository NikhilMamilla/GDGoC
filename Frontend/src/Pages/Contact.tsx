"use client";
import React from "react";
import HeadingNText from "../Components/HeadingNText";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";

export default function Contact() {

  // -------- HANDLE CONTACT FORM SUBMIT --------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Server Error. Try again later.");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 bg-black 
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),
          linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"
      />

      {/* Radial Mask */}
      <div
        className="absolute inset-0 -z-10 bg-black 
          [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,black)]"
      />

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center py-16 px-6">
        
        <HeadingNText title="Contact Us" />

        <p className="text-neutral-300 text-center max-w-2xl mb-10">
          Have questions, suggestions, or want to collaborate?<br />
          We’d love to hear from you!
        </p>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">

          {/* LEFT — CONTACT FORM */}
          <div className="bg-[#101010] border border-white/10 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-blue-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-blue-400 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-blue-400 outline-none"
              ></textarea>

              {/* NEW GDG HOVER BORDER BUTTON (NOW SUBMIT WORKS!) */}
              <div className="flex justify-center">
                <HoverBorderGradient as="button" type="submit" className="px-10 py-3">
                  Send Message
                </HoverBorderGradient>
              </div>
            </form>
          </div>

          {/* RIGHT — SOCIAL CARDS */}
          <div className="flex flex-col gap-6">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gdgc.bvritn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#101010] border border-white/10 rounded-xl p-6 shadow-lg
                flex items-center gap-4 hover:scale-[1.03] transition-all"
            >
              <FaInstagram className="text-4xl text-pink-400" />
              <div>
                <h3 className="text-lg font-semibold">Instagram</h3>
                <p className="text-neutral-400 text-sm">@gdgc.bvritn</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/gdg-bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#101010] border border-white/10 rounded-xl p-6 shadow-lg
                flex items-center gap-4 hover:scale-[1.03] transition-all"
            >
              <FaLinkedin className="text-4xl text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="text-neutral-400 text-sm">GDG BVRIT</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/gdgoc-bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#101010] border border-white/10 rounded-xl p-6 shadow-lg
                flex items-center gap-4 hover:scale-[1.03] transition-all"
            >
              <FaGithub className="text-4xl text-gray-300" />
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <p className="text-neutral-400 text-sm">github.com/gdgoc-bvrit</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:gdgoc@bvrit.ac.in"
              className="bg-[#101010] border border-white/10 rounded-xl p-6 shadow-lg
                flex items-center gap-4 hover:scale-[1.03] transition-all"
            >
              <div className="text-3xl text-red-400">📩</div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-neutral-400 text-sm">gdgoc@bvrit.ac.in</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
