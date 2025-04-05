'use client'

import { useState } from 'react'

export default function SkaiEnAccion() {
  const [idioma, setIdioma] = useState<'es' | 'en'>('es')

  const videos = {
    es: 'https://www.youtube.com/embed/570f_C323HM',
    en: 'https://www.youtube.com/embed/J5Yo8HO12B8',
  }

  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Imagen decorativa a la derecha */}
      <img
        src="/images/skai-accent-right.png"
        alt="Decoración SKAI"
        className="absolute right-0 top-0 h-full w-1/5 object-cover pointer-events-none"
      />

      <div className="w-4/5 mx-auto relative z-10 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-skai-darkgray">Mira a SKAI en acción</h2>

          {/* Selector de idioma */}
          <select
            value={idioma}
            onChange={(e) => setIdioma(e.target.value as 'es' | 'en')}
            className="mt-4 md:mt-0 border border-skai-darkgray text-skai-darkgray font-semibold px-4 py-2 rounded"
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>

        <p className="text-lg text-skai-darkgray mb-12">
          SKAI no es solo una idea, es una revolución en el reciclaje. Descubre cómo nuestra IA
          clasifica residuos en tiempo real y optimiza la gestión de desechos
        </p>

        {/* Video dinámico */}
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src={videos[idioma]}
            title={`SKAI video (${idioma === 'es' ? 'Español' : 'Inglés'})`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
