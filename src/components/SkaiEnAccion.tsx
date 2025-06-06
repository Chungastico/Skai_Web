'use client'

import { useIdioma } from '../context/IdiomaContext'

export default function SkaiEnAccion() {
  const { idioma } = useIdioma()

  const videos = {
    es: 'https://www.youtube.com/embed/570f_C323HM',
    en: 'https://www.youtube.com/embed/J5Yo8HO12B8',
  }

  return (
    <section
      className="relative bg-white py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/images/skai-accent-right.png')",
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-4/5 mx-auto relative z-10 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-skai-darkgray">
            {idioma === 'es' ? 'Mira a SKAI en acción' : 'See SKAI in action'}
          </h2>
        </div>

        <p className="text-lg text-skai-darkgray mb-12 max-w-3xl mx-auto">
          {idioma === 'es'
            ? 'SKAI no es solo una idea, es una revolución en el reciclaje. Descubre cómo nuestra IA clasifica residuos en tiempo real y optimiza la gestión de desechos.'
            : 'SKAI is not just an idea — it’s a recycling revolution. Discover how our AI classifies waste in real time and optimizes waste management.'}
        </p>

        {/* Video dinámico */}
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src={videos[idioma]}
            title={`SKAI video (${idioma === 'es' ? 'Español' : 'English'})`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
