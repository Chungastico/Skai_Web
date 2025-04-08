'use client'

import { useIdioma } from '../context/IdiomaContext'

export default function Hero() {
  const { idioma } = useIdioma()

  return (
    <section
      className="relative w-full"
      style={{
        height: '650px',
        backgroundImage: "url('/images/Hero-Section.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-10 left-4 md:left-10 z-10 w-[90%] md:w-1/2 text-left px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-skai-darkgray mb-4 leading-tight">
          {idioma === 'es'
            ? 'Transformando el reciclaje con inteligencia artificial'
            : 'Transforming recycling with artificial intelligence'}
        </h1>
        <a
          href="/contacto"
          className="inline-block text-sm sm:text-base md:text-lg bg-white hover:bg-skai-yellow text-skai-darkgray font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300"
        >
          {idioma === 'es' ? 'ÚNETE AL CAMBIO' : 'JOIN THE CHANGE'}
        </a>
      </div>
    </section>
  )
}
