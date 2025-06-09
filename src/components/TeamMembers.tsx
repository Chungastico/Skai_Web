"use client";

import { useIdioma } from "../context/IdiomaContext";
import Image from "next/image";

// 👉 Este es el array teamMembers
const teamMembers = [
  {
    name: "Gabriel Campos",
    role_es: "Coordinador de Sistemas Robóticos",
    role_en: "Robotics Systems Coordinator",
    image: "/images/Gabriel.png", 
  },
  {
    name: "Karla Pleitez",
    role_es: "Entrenadora del Modelo de IA",
    role_en: "AI Model Trainer",
    image: "/images/Karla.png",
  },
  {
    name: "Josué Pineda",
    role_es: "Desarrollador de Software Embebido",
    role_en: "Embedded Software Developer",
    image: "/images/Josue.png",
  },
];

// 👇 Este es el componente principal que se exporta
export default function TeamSection() {
  const { idioma } = useIdioma(); 

  return (
    <section className="py-20 px-6 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Título */}
        <h2 className="text-3xl font-bold text-skai-darkgray text-center mb-4">
          {idioma === "es" ? "Conoce a nuestro equipo" : "Meet our team"}
        </h2>

        {/* Descripción */}
        <p className="text-skai-darkgray text-center max-w-3xl mx-auto mb-12">
          {idioma === "es"
            ? "Detrás de SKAI hay un equipo apasionado de estudiantes de El Salvador, que estudian Inteligencia Artificial y Robótica. Impulsados por la innovación, la tecnología y el impacto ambiental, cada integrante aporta habilidades únicas y una gran dedicación para hacer realidad este proyecto."
            : "Behind SKAI is a passionate team of students from El Salvador who study Artificial Intelligence and Robotics. Driven by innovation, technology, and environmental impact, each member brings unique skills and strong dedication to make this project a reality."}
        </p>

        {/* Tarjetas del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Imagen del miembro */}
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Nombre */}
              <h3 className="text-lg font-bold text-skai-darkgray">
                {member.name}
              </h3>

              {/* Rol traducido */}
              <p className="text-skai-darkgray text-sm text-center">
                {idioma === "es" ? member.role_es : member.role_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
