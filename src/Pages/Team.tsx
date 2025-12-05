import React from "react";
import HeadingNText from "../Components/HeadingNText";
import TeamCard from "../Components/TeamCard";
import "../index.css";

export default function Team() {
  const team2026 = [
    { name: "John Doe", role: "GDG Lead", img: "/images/team1.jpg",linkedin: "https://linkedin.com/in/johndoe",github: "https://github.com/johndoe",phone: "+91 98765 43210" },
    { name: "Jane Smith", role: "Technical Lead", img: "/images/team2.jpg",linkedin: "https://linkedin.com/in/johndoe",github: "https://github.com/johndoe",phone: "+91 98765 43210" },
    { name: "D.Mukundh", role: "PR Lead", img: "./mukundh.jpg",linkedin: "https://www.linkedin.com/in/mukundh-dubasi-7a7158293/",github: "https://github.com/Mukundh15",phone: "+91 73861 99296" },
    { name: "Alex Johnson", role: "Design Lead", img: "/images/team3.jpg",linkedin: "https://linkedin.com/in/johndoe",github: "https://github.com/johndoe",phone: "+91 98765 43210" },
    { name: "Priya Sharma", role: "Operations Lead", img: "/images/team4.jpg",linkedin: "https://linkedin.com/in/johndoe",github: "https://github.com/johndoe",phone: "+91 98765 43210" },
    { name: "Rahul Verma", role: "Cloud Facilitator", img: "/images/team5.jpg",linkedin: "https://linkedin.com/in/johndoe",github: "https://github.com/johndoe",phone: "+91 98765 43210" },
    { name: "Sneha Reddy", role: "PR & Community Manager", img: "/images/team6.jpg",linkedin: "https://linkedin.com/in/johndoe",github: "https://github.com/johndoe",phone: "+91 98765 43210" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 
        [background-size:40px_40px] 
        [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),
        linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />

      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 -z-10 
        bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center py-16">

        <HeadingNText title="GDG Team 2026" />

        {/* Team Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {team2026.map((member, index) => (
                <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                img={member.img}
                linkedin={member.linkedin}
                github={member.github}
                phone={member.phone}
                />
            ))}
        </div>

      </div>
    </div>
  );
}
