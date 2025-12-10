import HeadingNText from "../Components/HeadingNText";

export default function Events() {
  const upcomingEvents = [
    {
      title: "GDG InnovateX Hackathon – Powered by Hack2Skill",
      date: "Last Date: December 20, 2025",
      venue: "Hybrid Mode",
      img: "hack2.png",
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

  const pastEvents = [
    {
      title: "AI Workshop – Launch of GDG On Campus BVRIT",
      date: "October 10, 2025",
      venue: "Chemical Seminar Hall",
      img: "/images/events/aiworkshop.jpg",
      description:
        "The first-ever GDG On Campus event by BVRIT. Speakers Ashutosh Bhakare & Rachana Bhakare delivered an amazing hands-on AI session.",
      time: "02:00 PM – 03:30 PM",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 
        [background-size:40px_40px] 
        [background-image:
          linear-gradient(to_right,#1a1a1a_1px,transparent_1px),
          linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)
        ]" />

      {/* Radial Mask */}
      <div className="absolute inset-0 -z-10 bg-black 
        [mask-image:radial-gradient(700px_400px_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center py-16 px-6">

        <HeadingNText title="Upcoming Events" />

        {/* UPCOMING EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full mt-12">
          {upcomingEvents.map((ev, idx) => (
            <div
              key={idx}
              className="group bg-[#0f0f0f]/70 border border-white/10 rounded-2xl p-5 
              backdrop-blur-xl relative overflow-hidden 
              hover:border-white/40 hover:shadow-[0_0_30px_#0af] transition-all duration-300"
            >
              {/* Gradient Border Accent */}
              <div className="absolute inset-0 rounded-2xl opacity-30 
                  bg-gradient-to-br from-cyan-500 to-blue-700 -z-10 blur-2xl group-hover:opacity-60 transition-all"></div>

              {/* IMAGE */}
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* STATUS BADGE */}
              <span
                className={`text-xs px-3 py-1 font-bold rounded-full ${
                  ev.status === "ONGOING"
                    ? "bg-yellow-400 text-black"
                    : "bg-green-400 text-black"
                }`}
              >
                {ev.status}
              </span>

              <h3 className="text-xl font-semibold mt-3">{ev.title}</h3>

              <p className="text-neutral-400 text-sm mt-1">📅 {ev.date}</p>
              <p className="text-neutral-400 text-sm">📍 {ev.venue}</p>

              <p className="text-neutral-300 text-sm mt-4">{ev.description}</p>

              {/* Register button */}
              {ev.register && (
                <a
                  href={ev.register}
                  target="_blank"
                  className="inline-block mt-5 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 
                    text-black font-bold hover:scale-105 transition"
                >
                  Register Now 🚀
                </a>
              )}
            </div>
          ))}
        </div>

        {/* PAST EVENTS */}
        <div className="w-full flex flex-col items-center mt-24">

          <HeadingNText title="Past Events" />

          <div
            className="max-w-5xl w-full bg-[#121212] border border-white/10 
            rounded-2xl overflow-hidden shadow-xl mt-10
            p-6 md:p-10 text-center"
          >
            
            {/* Big Banner */}
            <div className="w-full h-80 rounded-xl overflow-hidden mb-8">
              <img 
                src="pe2.jpg" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <span className="text-xs px-4 py-1 bg-gray-400/80 text-black font-semibold rounded-full">
              COMPLETED EVENT
            </span>

            <h2 className="text-3xl font-bold mt-4">
              AI Workshop – Launch of GDG On Campus BVRIT
            </h2>

            <p className="text-neutral-400 mt-2 text-lg">
              📅 October 10, 2025 &nbsp;&nbsp; | &nbsp;&nbsp; 📍 Chemical Seminar Hall
            </p>
            <p className="text-neutral-400 text-lg">⏰ 02:00 PM – 03:30 PM</p>

            <p className="text-neutral-300 mt-6 leading-relaxed max-w-3xl mx-auto text-lg">
              The first-ever GDG On Campus event by BVRIT! 🎉  
              Speakers <b>Ashutosh Bhakare</b> & <b>Rachana Bhakare</b> delivered a powerful 
              hands-on AI workshop introducing cutting-edge ML and real-world AI applications.
            </p>

            {/* PHOTO GALLERY */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
              <img src="pe1.jpg" className="rounded-lg object-cover h-36 w-full" />
              <img src="pe2.jpg" className="rounded-lg object-cover h-36 w-full" />
              <img src="pe3.jpg" className="rounded-lg object-cover h-36 w-full" />
              <img src="pe4.jpg" className="rounded-lg object-cover h-36 w-full" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
