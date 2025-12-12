import HeadingNText from "../Components/HeadingNText";
import { useTheme } from "../context/ThemeContext";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";

export default function Events() {
  const { theme } = useTheme();

  const upcomingEvents = [
    {
      title: "GDG InnovateX Hackathon – Powered by Hack2Skill",
      date: "Last Date: December 20, 2025",
      venue: "Hybrid Mode",
      img: "hack.jpg",
      description:
        "The first ever GDG On Campus BVRIT Hackathon! Students build real-world innovation using Google Technologies, AI tools, and SDG-focused ideas.",
      status: "ONGOING",
      register:
        "https://vision.hack2skill.com/event/GDGoC-25-BVRITN-InnovateX?utm_source=hack2skill&utm_medium=homepage",
    },
    {
      title: "Google Technologies Session – Firebase, Flutter, ML Kit",
      date: "Coming Soon",
      venue: "BVRIT Campus",
      img: "up1.png",
      description:
        "A power-packed session on modern Google developer tools—Firebase Authentication, Firestore, Flutter UI toolkit, ML Kit smart features, and Google Maps Platform integration.",
      status: "UPCOMING",
    },
  ];

  return (
    <div className={`relative w-full min-h-screen overflow-hidden transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#F7F3E9] text-gray-900'
      }`}>

      {/* Background Grid */}
      <div className={`absolute inset-0 -z-10 [background-size:40px_40px] ${theme === 'dark'
        ? '[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]'
        : '[background-image:linear-gradient(to_right,#e8e4d9_1px,transparent_1px),linear-gradient(to_bottom,#e8e4d9_1px,transparent_1px)]'
        }`} />

      {/* Radial Mask */}
      <div className={`absolute inset-0 -z-10 ${theme === 'dark'
        ? 'bg-black [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,black)]'
        : 'bg-[#F7F3E9] [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,#F7F3E9)]'
        }`} />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center py-16 px-6">

        <HeadingNText title="Upcoming Events" />

        {/* UPCOMING EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full mt-12">
          {upcomingEvents.map((ev, idx) => (
            <div
              key={idx}
              className={`group border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 ${theme === 'dark'
                ? 'bg-[#0f0f0f] border-white/10 hover:border-white/30 hover:shadow-xl'
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
            >
              {/* IMAGE */}
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* STATUS BADGE */}
              <span
                className={`text-xs px-3 py-1 font-bold rounded-full ${ev.status === "ONGOING"
                  ? "bg-yellow-400 text-black"
                  : "bg-green-400 text-black"
                  }`}
              >
                {ev.status}
              </span>

              <h3 className="text-xl font-semibold mt-3">{ev.title}</h3>

              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                📅 {ev.date}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                📍 {ev.venue}
              </p>

              <p className={`text-sm mt-4 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}`}>
                {ev.description}
              </p>

              {/* Register button */}
              {ev.register && (
                <div className="flex justify-center mt-5">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    onClick={() => window.open(ev.register, '_blank')}
                    className={`px-6 py-2.5 font-semibold cursor-pointer ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
                      }`}
                  >
                    Register Now 🚀
                  </HoverBorderGradient>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* PAST EVENTS */}
        <div className="w-full flex flex-col items-center mt-24">

          <HeadingNText title="Past Events" />

          <div
            className={`max-w-5xl w-full border rounded-2xl overflow-hidden shadow-lg mt-10 p-6 md:p-10 text-center transition-colors ${theme === 'dark'
              ? 'bg-[#121212] border-white/10'
              : 'bg-white border-gray-200'
              }`}
          >

            {/* Big Banner */}
            <div className="w-full h-80 rounded-xl overflow-hidden mb-8">
              <img
                src="pe5.jpeg"
                alt="Past Event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <span className="text-xs px-4 py-1 bg-gray-400/80 text-black font-semibold rounded-full">
              COMPLETED EVENT
            </span>

            <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Workshop – Launch of GDG On Campus BVRIT
            </h2>

            <p className={`mt-2 text-lg ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
              📅 October 10, 2025 &nbsp;&nbsp; | &nbsp;&nbsp; 📍 Chemical Seminar Hall
            </p>
            <p className={`text-lg ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
              ⏰ 02:00 PM – 03:30 PM
            </p>

            <p className={`mt-6 leading-relaxed max-w-3xl mx-auto text-lg ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
              }`}>
              The first-ever GDG On Campus event by BVRIT! 🎉
              Speakers <b>Ashutosh Bhakare</b> & <b>Rachana Bhakare</b> delivered a powerful
              hands-on AI workshop introducing cutting-edge ML and real-world AI applications.
            </p>

            {/* PHOTO GALLERY */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
              <img src="pe1.jpg" alt="Event 1" className="rounded-lg object-cover h-36 w-full" />
              <img src="pe2.jpeg" alt="Event 2" className="rounded-lg object-cover h-36 w-full" />
              <img src="pe3.jpg" alt="Event 3" className="rounded-lg object-cover h-36 w-full" />
              <img src="pe4.jpg" alt="Event 4" className="rounded-lg object-cover h-36 w-full" />
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
