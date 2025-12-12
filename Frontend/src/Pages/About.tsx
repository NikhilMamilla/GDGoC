import React from "react";
import "../index.css";
import HeadingNText from "../Components/HeadingNText";
import { useTheme } from "../context/ThemeContext";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";

export default function About() {
  const { theme } = useTheme();

  return (
    <div className={`relative w-full min-h-screen min-h-[100dvh] transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#F7F3E9] text-gray-900'
      }`} style={{ scrollBehavior: "smooth" }}>

      <div className="relative z-20">

        {/* Mission Section */}
        <section className="flex flex-col items-center justify-center py-12 sm:min-h-screen sm:justify-center">
          <div className="flex flex-col justify-center items-center w-full pt-4 sm:pt-8">

            <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <HeadingNText title="Our Mission">
                <span className={`block leading-loose tracking-wide text-lg font-medium ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-900'
                  }`}>
                  Google Developer Groups on Campus (GDGOC) at BVRIT is a vibrant student tech community dedicated to helping learners explore Google technologies, grow their skills, and build impactful solutions. Our mission is to empower students through hands-on learning, collaboration, and real-world project development, shaping the next generation of developers and innovators.
                </span>
              </HeadingNText>
            </div>

            {/* Two Cards */}
            <div className="w-full pt-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

              {/* What we do */}
              <div className={`backdrop-blur-md border rounded-xl p-4 sm:p-8 shadow-lg transition-colors ${theme === 'dark' ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'
                }`}>
                <h3 className={`text-xl sm:text-2xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-neutral-100' : 'text-gray-900'
                  }`}>What We Do</h3>
                <p className={`text-center sm:text-left mb-4 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
                  }`}>
                  GDG On Campus provides opportunities for students to explore Google technologies,
                  participate in developer programs, and build meaningful projects with community support.
                </p>
                <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
                  }`}>
                  <li>Hands-on workshops on Flutter, Firebase, TensorFlow & Google Cloud</li>
                  <li>Google Study Jams & peer-to-peer learning sessions</li>
                  <li>Hackathons, design sprints & community meetups</li>
                  <li>Participation in the global Google Solution Challenge</li>
                </ul>
              </div>

              {/* Our Values */}
              <div className={`backdrop-blur-md border rounded-xl p-4 sm:p-8 shadow-lg transition-colors ${theme === 'dark' ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'
                }`}>
                <h3 className={`text-xl sm:text-2xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-neutral-100' : 'text-gray-900'
                  }`}>Why Join Us</h3>

                <div className="relative w-full flex min-h-[220px]">

                  {/* Line */}
                  <div className={`absolute left-0 top-0 h-full w-1 border-l-2 opacity-50 ${theme === 'dark' ? 'border-neutral-700' : 'border-gray-300'
                    }`} />

                  {/* Dots */}
                  <div className="absolute left-[-6px] top-6 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] bottom-6 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />

                  <ul className="space-y-6 w-full pl-6">
                    <li>
                      <span className="font-bold">Innovation & Curiosity</span>
                      <p className={`text-sm ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
                        Encouraging students to explore, experiment, and build creative solutions.
                      </p>
                    </li>

                    <li>
                      <span className="font-bold">Community Learning</span>
                      <p className={`text-sm ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
                        A collaborative environment where knowledge is shared openly and freely.
                      </p>
                    </li>

                    <li>
                      <span className="font-bold">Impact Through Technology</span>
                      <p className={`text-sm ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
                        Empowering students to solve real-world problems using modern tools.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Guiding Lights */}
        <section className="flex flex-col items-center justify-center py-8">
          <HeadingNText title="Faculty Leads of GDGoC">
            <span className={`font-medium ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
              With the support of our faculty mentors and the global Google Developer community,
              our chapter continues to inspire students to explore, learn, innovate, and lead with impact.
            </span>
          </HeadingNText>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

            {/* Faculty 1 */}
            <div className="flex flex-col items-center group">
              <div
                className={`h-[250px] w-[200px] rounded-xl border shadow-lg overflow-hidden relative ${theme === 'dark' ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'
                  }`}
              >
                <img
                  src="./madhu_babu.jpg"
                  alt="Dr. Ch. Madhu Babu"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-lg font-semibold">Dr. Ch. Madhu Babu</div>
                <div className="text-sm text-blue-400">Head of Dept. CSE</div>
              </div>
            </div>

            {/* Faculty 2 */}
            <div className="flex flex-col items-center group">
              <div
                className={`h-[250px] w-[200px] rounded-xl border shadow-lg overflow-hidden relative ${theme === 'dark' ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'
                  }`}
              >
                <img
                  src="./pallavi.jpg"
                  alt="Dr. L. Pallavi"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-lg font-semibold">Dr. L. Pallavi</div>
                <div className="text-sm text-blue-400">Assoc. Head of Dept. CSE</div>
              </div>
            </div>

            {/* Faculty 3 */}
            <div className="flex flex-col items-center group">
              <div
                className={`h-[250px] w-[200px] rounded-xl border shadow-lg overflow-hidden relative ${theme === 'dark' ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'
                  }`}
              >
                <img
                  src="/jagadeesh.webp"
                  alt="Jagadeesh"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-lg font-semibold">Mr. Jagadeesh</div>
                <div className="text-sm text-blue-400">Faculty Coordinator</div>
              </div>
            </div>

            {/* Faculty 4 */}
            <div className="flex flex-col items-center group">
              <div
                className={`h-[250px] w-[200px] rounded-xl border shadow-lg overflow-hidden relative ${theme === 'dark' ? 'bg-[#0e0e0e] border-white/10' : 'bg-white border-gray-200'
                  }`}
              >
                <img
                  src="/srinu.webp"
                  alt="Srinuvasarao"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-lg font-semibold">Mr. Srinuvasarao</div>
                <div className="text-sm text-blue-400">Faculty Coordinator</div>
              </div>
            </div>

          </div>
        </section>

        {/* Technologies We Explore */}
        <section className="py-16 w-full flex flex-col items-center overflow-hidden">
          <HeadingNText title="Technologies We Explore">
            <span className={`font-medium ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
              We dive deep into the latest Google technologies to build scalable and impactful applications.
            </span>
          </HeadingNText>

          <div className="mt-10 w-full max-w-6xl px-4">
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .logos {
                overflow: hidden;
                padding: 20px 0;
                background: transparent;
                white-space: nowrap;
                position: relative;
              }
              .logos:before, .logos:after {
                position: absolute;
                top: 0;
                width: 60px;
                height: 100%;
                content: "";
                z-index: 2;
                pointer-events: none;
              }
              .logos:before {
                left: 0;
                background: linear-gradient(to right, ${theme === 'dark' ? '#000000' : '#F7F3E9'}, transparent);
              }
              .logos:after {
                right: 0;
                background: linear-gradient(to left, ${theme === 'dark' ? '#000000' : '#F7F3E9'}, transparent);
              }
              .logos-slide {
                display: inline-block;
                animation: scroll 30s linear infinite;
              }
              .logos:hover .logos-slide {
                animation-play-state: paused;
              }
              .logo {
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 110px;
                width: 140px;
                margin: 0 16px;
                background: ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'};
                border: 1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
                border-radius: 12px;
                padding: 12px;
                transition: all 0.3s ease;
                vertical-align: middle;
                backdrop-filter: blur(5px);
              }
              .logo:hover {
                transform: translateY(-5px);
                background: ${theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
                border-color: ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
                box-shadow: 0 10px 25px rgba(66, 133, 244, 0.2);
              }
              .logo img {
                height: 45px;
                width: 45px;
                object-fit: contain;
                display: block;
                margin-bottom: 10px;
                filter: drop-shadow(0 0 4px rgba(${theme === 'dark' ? '255,255,255' : '0,0,0'},0.2));
              }
              .logo span {
                color: ${theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'};
                font-size: 0.85rem;
                font-weight: 500;
                letter-spacing: 0.5px;
              }
            `}</style>

            <div className="logos">
              <div className="logos-slide">
                {(() => {
                  const technologies = [
                    { name: 'Android', logoSrc: 'https://cdn.simpleicons.org/android/3DDC84' },
                    { name: 'Flutter', logoSrc: 'https://cdn.simpleicons.org/flutter/02569B' },
                    { name: 'Firebase', logoSrc: 'https://cdn.simpleicons.org/firebase/FFCA28' },
                    { name: 'Google Cloud', logoSrc: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
                    { name: 'TensorFlow', logoSrc: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
                    { name: 'Angular', logoSrc: 'https://cdn.simpleicons.org/angular/DD0031' },
                    { name: 'React', logoSrc: 'https://cdn.simpleicons.org/react/61DAFB' },
                    { name: 'Python', logoSrc: 'https://cdn.simpleicons.org/python/3776AB' },
                    { name: 'Figma', logoSrc: 'https://cdn.simpleicons.org/figma/F24E1E' },
                    { name: 'Kotlin', logoSrc: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
                  ];

                  return [...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                      {technologies.map((tech, index) => (
                        <div key={`${i}-${index}`} className="logo" title={tech.name}>
                          <img
                            src={tech.logoSrc}
                            alt={tech.name}
                          />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </React.Fragment>
                  ));
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className={`py-20 w-full flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gradient-to-t from-blue-900/20 to-transparent' : 'bg-gradient-to-t from-blue-50 to-transparent'
          }`}>
          <div className="text-center px-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
              Join our community to connect with like-minded developers, access exclusive resources, and take your skills to the next level.
            </p>
            <div className="flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={() => window.open('https://gdg.community.dev/gdg-on-campus-b-v-raju-institute-of-technology-narsapur-india/', '_blank')}
                className={`px-8 py-4 font-bold cursor-pointer ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
                  }`}
              >
                Join GDGOC BVRIT
              </HoverBorderGradient>
            </div>
          </div>
        </section>

      </div>

      {/* Gradient transition to footer - positioned at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent pointer-events-none ${theme === 'dark' ? 'to-black' : 'to-[#F0F4F8]'
        }`}></div>
    </div>
  );
}
