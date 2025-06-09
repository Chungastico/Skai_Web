'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useIdioma } from "../context/IdiomaContext";

export default function FuncionamientoSection() {
  const { idioma } = useIdioma();
  const [indice, setIndice] = useState(0);

  // Textos por idioma
  const pasos = {
    es: [
      {
        titulo: "Detección",
        descripcion: "La cámara captura la imagen del residuo",
        imagen: "/images/paso1.png",
      },
      {
        titulo: "Clasificación",
        descripcion: "La IA determina el tipo de residuo",
        imagen: "/images/paso2.png",
      },
      {
        titulo: "Envío de datos",
        descripcion: "El sistema transmite los datos al microcontrolador",
        imagen: "/images/paso3.png",
      },
      {
        titulo: "Acción del sistema",
        descripcion: "El contenedor gira y se abre automáticamente",
        imagen: "/images/paso4.png",
      },
    ],
    en: [
      {
        titulo: "Detection",
        descripcion: "The camera captures the image of the waste",
        imagen: "/images/paso1.png",
      },
      {
        titulo: "Classification",
        descripcion: "The AI determines the type of waste",
        imagen: "/images/paso2English.png", // imagen especial en inglés
      },
      {
        titulo: "Data Transmission",
        descripcion: "The system sends the data to the microcontroller",
        imagen: "/images/paso3.png",
      },
      {
        titulo: "System Action",
        descripcion: "The bin rotates and opens automatically",
        imagen: "/images/paso4.png",
      },
    ],
  }

  const contenido = pasos[idioma]

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % contenido.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [contenido.length]);

  const cambiarPaso = (nuevoIndice: number) => setIndice(nuevoIndice);

  return (
    <section
      className="w-full bg-white bg-[url('/images/bg-funciona.png')] bg-repeat py-16 px-4 md:px-20"
      id="funcionamiento"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-skai-darkgray mb-10">
          {idioma === 'es' ? '¿Cómo funciona?' : 'How does it work?'}
        </h2>

        {/* Contenido del paso */}
        <div className="bg-white border rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 aspect-video">
              <Image
                src={contenido[indice].imagen}
                alt={contenido[indice].titulo}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-skai-darkgray">
                {contenido[indice].titulo}
              </h3>
              <p className="text-skai-darkgray text-base md:text-lg">
                {contenido[indice].descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {contenido.map((paso, i) => (
            <button
              key={i}
              onClick={() => cambiarPaso(i)}
              className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition ${
                i === indice
                  ? "bg-skai-green text-white"
                  : "bg-skai-darkgray text-white hover:bg-skai-yellow hover:text-skai-darkgray"
              }`}
            >
              {i + 1}. {paso.titulo.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
