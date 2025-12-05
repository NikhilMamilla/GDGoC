import React, { useEffect, useState } from "react";
import "../index.css";
import HeadingNText from "../Components/HeadingNText";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white" style={{ scrollBehavior: "smooth" }}>
      {/* Grid Background */}
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20">

        {/* Mission Section */}
        <section className="flex flex-col items-center justify-center py-12 sm:min-h-screen sm:justify-center">
          <div className="flex flex-col justify-center items-center w-full pt-4 sm:pt-8">

            <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <HeadingNText title="Our Mission">
                <span className="block">
                  Google Developer Groups on Campus (GDGOC) at BVRIT is a vibrant student tech community
                  dedicated to helping learners explore Google technologies, grow their skills, and build
                  impactful solutions.  
                  <br />
                  Our mission is to empower students through hands-on learning, collaboration, and 
                  real-world project development — shaping the next generation of developers and innovators.
                </span>
              </HeadingNText>
            </div>

            {/* Two Cards */}
            <div className="w-full pt-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* What we do */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">What We Do</h3>
                <p className="text-neutral-300 text-center sm:text-left mb-4">
                  GDG On Campus provides opportunities for students to explore Google technologies,
                  participate in developer programs, and build meaningful projects with community support.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                  <li>Hands-on workshops on Flutter, Firebase, TensorFlow & Google Cloud</li>
                  <li>Google Study Jams & peer-to-peer learning sessions</li>
                  <li>Hackathons, design sprints & community meetups</li>
                  <li>Participation in the global Google Solution Challenge</li>
                </ul>
              </div>

              {/* Our Values */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">Our Values</h3>

                <div className="relative w-full flex min-h-[220px]">

                  {/* Line */}
                  <div className="absolute left-0 top-0 h-full w-1 border-l-2 border-neutral-700 opacity-50" />

                  {/* Dots */}
                  <div className="absolute left-[-6px] top-6 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] bottom-6 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />

                  <ul className="space-y-6 w-full pl-6">
                    <li>
                      <span className="font-bold">Innovation & Curiosity</span>
                      <p className="text-neutral-300 text-sm">
                        Encouraging students to explore, experiment, and build creative solutions.
                      </p>
                    </li>

                    <li>
                      <span className="font-bold">Community Learning</span>
                      <p className="text-neutral-300 text-sm">
                        A collaborative environment where knowledge is shared openly and freely.
                      </p>
                    </li>

                    <li>
                      <span className="font-bold">Impact Through Technology</span>
                      <p className="text-neutral-300 text-sm">
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
          <HeadingNText title="Guiding Lights of GDG On Campus">
            With the support of our faculty mentors and the global Google Developer community,
            our chapter continues to inspire students to explore, learn, innovate, and lead with impact.
          </HeadingNText>

          <div className="mt-8 flex flex-col sm:flex-row gap-8">

            {/* Faculty 1 */}
            <div className="flex flex-col items-center">
                <div
                    className={`${isMobile ? "h-[280px] w-[230px]" : "h-[370px] w-[300px]"} 
                    bg-[#0e0e0e] rounded-xl border border-white/10 shadow-lg overflow-hidden`}
                >
                    <img
                    src="./madhu_babu.jpg"
                    alt="Faculty Mentor"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="mt-3 text-lg font-semibold">Dr. Ch. Madhu Babu</div>
                <div className="text-sm text-blue-400">Head of Dept. CSE</div>
            </div>

            {/* Faculty 2 */}
            <div className="flex flex-col items-center">
                <div
                    className={`${isMobile ? "h-[280px] w-[230px]" : "h-[370px] w-[300px]"} 
                    bg-[#0e0e0e] rounded-xl border border-white/10 shadow-lg overflow-hidden`}
                >
                    <img
                    src="./pallavi.jpg"
                    alt="Faculty Mentor"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="mt-3 text-lg font-semibold">Dr. L. Pallavi</div>
                <div className="text-sm text-blue-400">Associate Head of Dept. CSE</div>
            </div>

          </div>
        </section>

        {/* Events Section */}
        <section className="flex flex-col justify-center items-center px-4 py-12 sm:min-h-screen">
          <div className="w-full max-w-5xl bg-[#0e0e0e] border border-white/10 rounded-xl p-8">
            <HeadingNText title="Our Events & Activities" />
            <p className="text-neutral-300 leading-relaxed mt-2">
              GDG On Campus organizes interactive workshops, developer programs, hands-on bootcamps,
              speaker sessions, and collaborative study jams — creating a strong learning ecosystem 
              where students can explore, build, and grow.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-300 text-sm sm:text-base">
              <li>Google Cloud Study Jams & Certification Tracks</li>
              <li>Flutter & Firebase development workshops</li>
              <li>ML/AI sessions using TensorFlow</li>
              <li>Tech meetups, hackathons & design sprints</li>
              <li>Global Google Solution Challenge participation</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
