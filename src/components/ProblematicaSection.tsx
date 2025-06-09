'use client'

import { useIdioma } from '../context/IdiomaContext'

export default function ProblematicaSection() {
  const { idioma } = useIdioma()

  return (
    <section
      className="relative w-full bg-white px-6 md:px-20 h-[640px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/problem-image.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full h-full z-10 relative">
        
        {/* Texto */}
        <div className="w-full md:w-3/5">
          <h2 className="text-4xl md:text-5xl font-bold text-skai-darkgray leading-tight mb-6">
            {idioma === 'es'
              ? <>Un mundo <br /> ahogado en basura</>
              : <>A world <br /> drowning in waste</>}
          </h2>
          <p className="text-lg text-skai-darkgray mb-6">
            {idioma === 'es'
              ? 'Cada año, millones de toneladas de desechos terminan en vertederos y océanos debido a una mala clasificación. El reciclaje manual es lento y poco eficiente. La IA y la robótica pueden cambiar esta realidad.'
              : 'Every year, millions of tons of waste end up in landfills and oceans due to poor sorting. Manual recycling is slow and inefficient. AI and robotics can change that.'}
          </p>
          <p className="text-sm text-skai-darkgray mb-4">
            {idioma === 'es'
              ? '¿Te imaginas un mundo donde la basura desaparezca?'
              : 'Can you imagine a world where trash disappears?'}
          </p>
          <div className="flex gap-4">
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

        {/* Placeholder visual para conservar estructura en responsive */}
        <div className="w-full md:w-2/5 h-full" />
      </div>
    </section>
  )
}
