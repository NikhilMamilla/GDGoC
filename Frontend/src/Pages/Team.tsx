import HeadingNText from "../Components/HeadingNText";
import TeamCard from "../Components/TeamCard";
import "../index.css";
import { useTheme } from "../context/ThemeContext";

export default function Team() {
  const { theme } = useTheme();

  const team2026 = [
    { name: "Nikhil Mamilla", role: "Organizer", img: "nikhil.png", linkedin: "www.linkedin.com/in/nikhil-mamilla-823922289", github: "https://github.com/NikhilMamilla", phone: "7842070463" },
    { name: "Gadila Sowmya", role: "Co-Organizer", img: "SowmyaG.jpeg", linkedin: "https://www.linkedin.com/in/sowmya-gadila", github: "https://github.com/GadilaSowmya", phone: "6305055156" },
    { name: "SreeMouna Gopireddy", role: "Facilitator", img: "mouna.jpg", linkedin: "https://www.linkedin.com/in/sreemouna-gopireddy", github: "https://github.com/sreemouna", phone: "7799300313" },
    { name: "Chanagari Nandini", role: "Videography & Editing Lead", img: "nandini.jpeg", linkedin: "https://www.linkedin.com/in/chanagari-nandini-95a309304/", github: "https://github.com/23211A0552", phone: "7799008029" },
    { name: "Poduri Sesha Sai Sathwik", role: "Technical Lead", img: "sathwik.jpeg", linkedin: "https://www.linkedin.com/in/sathwik180/", github: "https://github.com/Sai-Sathwik2718", phone: "8977176804" },
    { name: "Beere Adbhutha", role: "Technical Co-Lead", img: "adbhutha.png", linkedin: "https://www.linkedin.com/in/adbhutha", github: "https://github.com/Adbhutha10", phone: "9866796510" },
    { name: "Saishesh Kesari", role: "Technical Associate", img: "saishesh.jpeg", linkedin: "https://www.linkedin.com/in/saishesh-kesari-13915a293", github: "https://github.com/Saishesh-16", phone: "8374820746" },
    { name: "Kiran Kumar Reddy", role: "Logistics & Operations Lead", img: "kiran.jpeg", linkedin: "https://www.linkedin.com/in/nallagutla-kiran-kumar-reddy-1aa3b6293/", github: "https://github.com/kirankumar2403", phone: "7816030968" },
    { name: "Boddupally Moksha", role: "Logistics & Operations Co-Lead", img: "moksha.jpeg", linkedin: "https://www.linkedin.com/in/boddupally-moksha-7b86b82b5/", github: "https://github.com/BoddupallyMoksha", phone: "7569071330" },
    { name: "Somepalli Gopi Sai Mahesh", role: "Event Management Lead", img: "Mahesh.jpeg", linkedin: "https://www.linkedin.com/in/somepalli-gopi-sai-mahesh-557167293", github: "https://github.com/mahesh1110", phone: "7032623679" },
    { name: "Vallepu Sai Soumya", role: "Event Management Co-Lead", img: "SowmyaE.jpeg", linkedin: "https://www.linkedin.com/in/sai-soumya-vallepu-180486372", github: "https://github.com/SaiSoumya15", phone: "8317602792" },
    { name: "Muchu Deepak", role: "Event Management Associate", img: "deepak.jpg", linkedin: "https://www.linkedin.com/in/deepak-yadav-591161293", github: "https://github.com/deepakyadav79", phone: "9989455751" },
    { name: "Kasani Hansika Goud", role: "Design Lead", img: "hansi.jpeg", linkedin: "https://www.linkedin.com/in/kasani-hansika-3b0973289/", github: "https://github.com/Hansika65?tab=overview&from=2025-12-01&to=2025-12-05", phone: "9381867924" },
    { name: "Madhusudhan Kosari", role: "Design Co-Lead", img: "madhu.jpeg", linkedin: "https://www.linkedin.com/in/madhusudhan-kosari-b28540282", github: "https://github.com/MadhusudhanKosari", phone: "9440007619" },
    { name: "Ediga Sai Murari Goud", role: "Marketing & Outreach Lead", img: "murari.jpeg", linkedin: "https://www.linkedin.com/in/ediga-sai-murari-goud-a46499293", github: "https://github.com/Saimurarigoud", phone: "6300502920" },
    { name: "Enukonda Siri Chandana", role: "Marketing & Outreach Co-Lead", img: "siri.jpeg", linkedin: "https://www.linkedin.com/in/siri-chandana-enukonda-23b256293/", github: "https://github.com/Siri-1105", phone: "9550257947" },
    { name: "Dubasi Mukundh", role: "PR Lead", img: "mukundh.jpeg", linkedin: "https://www.linkedin.com/in/mukundh-dubasi-7a7158293/", github: "https://github.com/Mukundh15", phone: "7386199296" },
    { name: "Dannaram Videeksha", role: "PR Co-Lead", img: "videeksha.jpg", linkedin: "https://www.linkedin.com/in/dvideeksha", github: "https://github.com/Videeksha22", phone: "9014442885" },
    { name: "Sravya Chowdary", role: "Content & Social Media Lead", img: "sravya.jpeg", linkedin: "https://www.linkedin.com/in/sravya-chowdary0505", github: "https://github.com/sravya5235", phone: "9490122471" },
    { name: "Rishith Reddy Bolledla", role: "Content & Social Media Co-Lead", img: "deputy.jpg", linkedin: "https://www.linkedin.com/in/rishith-reddy-bolledla/", github: "https://github.com/Rishith1705", phone: "9866657145" },
  ];

  const remainingRows = team2026;

  return (
    <div className={`relative w-full min-h-screen min-h-[100dvh] overflow-hidden transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#F7F3E9] text-gray-900'
      }`}>

      <div className="relative z-20 flex flex-col items-center justify-center py-16">

        <HeadingNText title="GDG Team 2026" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {remainingRows.map((m, i) => (
            <TeamCard key={i} {...m} />
          ))}
        </div>
      </div>

      {/* Gradient transition to footer - positioned at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent pointer-events-none ${theme === 'dark' ? 'to-black' : 'to-[#F0F4F8]'
        }`}></div>
    </div>
  );
}
