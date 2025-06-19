"use client";

import { useIdioma } from "../context/IdiomaContext";
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

const teamMembers = [
  {
    name: "Gabriel Campos",
    role_es: "Coordinador de Sistemas Robóticos",
    role_en: "Robotics Systems Coordinator",
    image: "/images/Gabriel.png",
    social: {
      instagram: "https://www.instagram.com/ga_campos672/",
      github: "https://github.com/Chungastico",
      linkedin: "https://www.linkedin.com/in/gabriel-campos-salamanca-050579337/",
    },
  },
  {
    name: "Karla Pleitez",
    role_es: "Asistente de soporte técnico y comunicación digital",
    role_en: "Technical support and digital communication assistant",
    image: "/images/Karla.png",
    social: {
      instagram: "https://www.instagram.com/karlapleitezz/",
      tiktok: "https://www.tiktok.com/@karla.outloud",
    },
  },
  {
    name: "Josué Pineda",
    role_es: "Desarrollador de IA y Software Embebido",
    role_en: "AI and Embedded Software Developer",
    image: "/images/Josue.png",
    social: {
      instagram: "https://www.instagram.com/danisaurxs/",
    },
  },
];

export default function TeamSection() {
  const { idioma } = useIdioma();

  return (
    <section className="py-20 px-6 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-skai-darkgray text-center mb-4">
          {idioma === "es" ? "Conoce a nuestro equipo" : "Meet our team"}
        </h2>

        <p className="text-skai-darkgray text-center max-w-3xl mx-auto mb-12">
          {idioma === "es"
            ? "Detrás de SKAI hay un equipo apasionado de estudiantes de El Salvador, que estudian Inteligencia Artificial y Robótica. Impulsados por la innovación, la tecnología y el impacto ambiental, cada integrante aporta habilidades únicas y una gran dedicación para hacer realidad este proyecto."
            : "Behind SKAI is a passionate team of students from El Salvador who study Artificial Intelligence and Robotics. Driven by innovation, technology, and environmental impact, each member brings unique skills and strong dedication to make this project a reality."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center w-72"
            >
              {/* Imagen con solo hover para escalar */}
              <div className="relative w-48 h-48 mb-4 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-skai-darkgray">
                {member.name}
              </h3>

              <p className="text-sm text-skai-darkgray">
                {idioma === "es" ? member.role_es : member.role_en}
              </p>

              {/* Íconos sociales */}
              <div className="flex gap-4 mt-4 text-skai-darkgray text-xl">
                {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.social.tiktok && (
                  <a href={member.social.tiktok} target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
