import React from "react";
import pro from "../components/pro.jpeg";

const members = [
  {
    name: "Member 1",
    role: "Web Developer",
    description: "Skilled in creating beautiful, responsive, and user-friendly websites.",
    image: pro
  },
  {
    name: "Member 2",
    role: "Designer",
    description: "Expert in UI/UX design with a passion for creating intuitive user experiences.",
    image: pro
  },
  {
    name: "Member 3",
    role: "Project Manager",
    description: "Experienced in managing projects efficiently and effectively.",
    image: pro
  },
  {
    name: "Member 4",
    role: "Backend Developer",
    description: "Specializes in server-side development and database management.",
    image: pro
  },
  {
    name: "Member 5",
    role: "QA Engineer",
    description: "Ensures the highest quality of web applications through rigorous testing.",
    image: pro
  }
];

const MemberCard = ({ name, role, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 text-center">
    <img src={image} alt={name} className="rounded-full mx-auto w-32 h-32 mb-4" />
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-600">{role}</p>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">DM Desk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
