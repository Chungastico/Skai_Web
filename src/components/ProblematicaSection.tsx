'use client'

import { useIdioma } from '../context/IdiomaContext'
import Image from 'next/image'

export default function ProblematicaSection() {
  const { idioma } = useIdioma()

  return (
    <section
      className="relative w-full bg-white px-6 md:px-20 flex flex-col justify-center items-center md:h-[640px] overflow-hidden"
    >
      {/* Imagen de fondo SOLO para desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-right-bottom bg-contain z-0"
        style={{
          backgroundImage: "url('/images/problem-image.png')",
        }}
      />

      {/* Contenedor principal con padding-top solo en móvil */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full relative z-10 pt-10 md:pt-0">
        {/* Texto */}
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-skai-darkgray leading-tight mb-6">
            {idioma === 'es'
              ? <>Un mundo <br /> ahogado en basura</>
              : <>A world <br /> drowning in waste</>}
          </h2>

          <p className="text-base sm:text-lg text-skai-darkgray mb-6">
            {idioma === 'es'
              ? 'Cada año, millones de toneladas de desechos terminan en vertederos y océanos debido a una mala clasificación. El reciclaje manual es lento y poco eficiente. La IA y la robótica pueden cambiar esta realidad.'
              : 'Every year, millions of tons of waste end up in landfills and oceans due to poor sorting. Manual recycling is slow and inefficient. AI and robotics can change that.'}
          </p>

          <p className="text-sm text-skai-darkgray mb-4">
            {idioma === 'es'
              ? '¿Te imaginas un mundo donde la basura desaparezca?'
              : 'Can you imagine a world where trash disappears?'}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#solucion"
              className="bg-skai-green text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-skai-darkgreen transition"
            >
              {idioma === 'es' ? 'DESCÚBRELO' : 'DISCOVER IT'}
            </a>
            <a
              href="#funcionamiento"
              className="bg-skai-lightgray text-skai-darkgray font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              {idioma === 'es' ? '¿CÓMO FUNCIONA?' : 'HOW DOES IT WORK?'}
            </a>
          </div>
        </div>

        {/* Espacio fantasma para mantener estructura en desktop */}
        <div className="hidden md:block w-full md:w-2/5 h-full" />
      </div>

      {/* 🔧 IMAGEN PARA MÓVIL — AJUSTADA */}
      <div className="block md:hidden w-screen mt-10 relative overflow-hidden">
        <Image
          src="/images/problem-image.png"
          alt="Problema de basura"
          width={800}
          height={400}
          className="w-full h-auto object-cover object-right"
          priority
        />
      </div>
    </section>
  )
}
