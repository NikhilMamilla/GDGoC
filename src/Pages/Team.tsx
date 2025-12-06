import React from "react";
import HeadingNText from "../Components/HeadingNText";
import TeamCard from "../Components/TeamCard";
import "../index.css";

export default function Team() {

  const team2026 = [
    { name: "Nikhil", role: "Organizer", img: "nikhil.png", linkedin: "https://www.linkedin.com/in/sowmya-gadila", github: "https://github.com/GadilaSowmya", phone: "6305055156" },
    { name: "Gadila Sowmya", role: "Co-Organizer", img: "sowmya.png", linkedin: "https://www.linkedin.com/in/sowmya-gadila", github: "https://github.com/GadilaSowmya", phone: "6305055156" },
    { name: "SreeMouna Gopireddy", role: "Facilitator", img: "mouna1.png", linkedin: "https://www.linkedin.com/in/sreemouna-gopireddy", github: "https://github.com/sreemouna", phone: "7799300313" },
    { name: "Poduri Sesha Sai Sathwik", role: "Technical Lead", img: "sathwik.png", linkedin: "https://www.linkedin.com/in/sathwik180/", github: "https://github.com/Sai-Sathwik2718", phone: "8977176804" },
    { name: "Beere Adbhutha", role: "Technical Co-Lead", img: "adbhutha.png", linkedin: "https://www.linkedin.com/in/adbhutha", github: "https://github.com/Adbhutha10", phone: "9866796510" },
    { name: "Saishesh Kesari", role: "Technical Associate", img: "shesh.png", linkedin: "https://www.linkedin.com/in/saishesh-kesari-13915a293", github: "https://github.com/Saishesh-16", phone: "8374820746" },
    { name: "Nallagutla Kiran Kumar Reddy", role: "Logistics & Operations Lead", img: "kiran.png", linkedin: "https://www.linkedin.com/in/nallagutla-kiran-kumar-reddy-1aa3b6293/", github: "https://github.com/kirankumar2403", phone: "7816030968" },
    { name: "Boddupally Moksha", role: "Logistics & Operations Co-Lead", img: "Moksha.png", linkedin: "https://www.linkedin.com/in/boddupally-moksha-7b86b82b5/", github: "https://github.com/BoddupallyMoksha", phone: "7569071330" },
    { name: "Somepalli Gopi Sai Mahesh", role: "Event Management Lead", img: "mahesh.png", linkedin: "https://www.linkedin.com/in/somepalli-gopi-sai-mahesh-557167293", github: "https://github.com/mahesh1110", phone: "7032623679" },
    { name: "Vallepu Sai Soumya", role: "Event Management Co-Lead", img: "sowmyae.png", linkedin: "https://www.linkedin.com/in/sai-soumya-vallepu-180486372", github: "https://github.com/SaiSoumya15", phone: "8317602792" },
    { name: "Madhusudhan Kosari", role: "Design Co-Lead", img: "madhu1.png", linkedin: "https://www.linkedin.com/in/madhusudhan-kosari-b28540282", github: "https://github.com/MadhusudhanKosari", phone: "9440007619" },
    { name: "Ediga Sai Murari Goud", role: "Marketing & Outreach Lead", img: "murari.png", linkedin: "https://www.linkedin.com/in/ediga-sai-murari-goud-a46499293", github: "https://github.com/Saimurarigoud", phone: "6300502920" },
    { name: "Enukonda Siri Chandana", role: "Marketing & Outreach Co-Lead", img: "siri.png", linkedin: "https://www.linkedin.com/in/siri-chandana-enukonda-23b256293/", github: "https://github.com/Siri-1105", phone: "9550257947" },
    { name: "Dubasi Mukundh", role: "PR Lead", img: "mukundh.png", linkedin: "https://www.linkedin.com/in/mukundh-dubasi-7a7158293/", github: "https://github.com/Mukundh15", phone: "7386199296" },
    { name: "Dannaram Videeksha", role: "PR Co-Lead", img: "videeksha.png", linkedin: "https://www.linkedin.com/in/dvideeksha", github: "https://github.com/Videeksha22", phone: "9014442885" },
    { name: "Challagolla Sravya Chowdary", role: "Content & Social Media Lead", img: "sravya1.png", linkedin: "https://www.linkedin.com/in/sravya-chowdary0505", github: "https://github.com/sravya5235", phone: "9490122471" },
    { name: "Rishith Reddy Bolledla", role: "Content & Social Media Co-Lead", img: "Rishith.png", linkedin: "https://www.linkedin.com/in/rishith-reddy-bolledla/", github: "https://github.com/Rishith1705", phone: "9866657145" },
    { name: "Chanagari Nandini", role: "Videography & Editing Lead", img: "nandhini.png", linkedin: "https://www.linkedin.com/in/chanagari-nandini-95a309304/", github: "https://github.com/23211A0552", phone: "7799008029" },

  ];

  const firstRow = team2026.slice(0, 3);
  const remainingRows = team2026.slice(3);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background + Mask omitted for clarity */}

      <div className="relative z-20 flex flex-col items-center justify-center py-16">

        <HeadingNText title="GDG Team 2026" />

        {/* ⭐ FIRST ROW (exactly 3 cards) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {firstRow.map((m, i) => (
            <TeamCard key={i} {...m} />
          ))}
        </div>

        {/* ⭐ NEXT ROWS (4 per row) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {remainingRows.map((m, i) => (
            <TeamCard key={i + 3} {...m} />
          ))}
        </div>

      </div>
    </div>
  );
}
