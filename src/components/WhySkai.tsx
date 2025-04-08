'use client'

import { useIdioma } from '../context/IdiomaContext'

export default function WhySkai() {
  const { idioma } = useIdioma()

  return (
    <section className="bg-skai-green py-16 px-4 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">
        {idioma === 'es' ? '¿POR QUÉ SKAI?' : 'WHY SKAI?'}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ecológico */}
        <div className="bg-white rounded-2xl p-8 text-skai-darkgray">
          <img
            src="/icons/eco-icon.png"
            alt="Ecológico"
            className="mx-auto w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            {idioma === 'es' ? 'Ecológico' : 'Eco-friendly'}
          </h3>
          <p>
            {idioma === 'es'
              ? 'Reduce el impacto ambiental con clasificación inteligente.'
              : 'Reduces environmental impact with smart sorting.'}
          </p>
        </div>

        {/* Eficiente */}
        <div className="bg-white rounded-2xl p-8 text-skai-darkgray">
          <img
            src="/icons/efficient-icon.png"
            alt="Eficiente"
            className="mx-auto w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            {idioma === 'es' ? 'Eficiente' : 'Efficient'}
          </h3>
          <p>
            {idioma === 'es'
              ? 'Optimiza el reciclaje con tecnología avanzada.'
              : 'Optimizes recycling with advanced technology.'}
          </p>
        </div>

        {/* Escalable */}
        <div className="bg-white rounded-2xl p-8 text-skai-darkgray">
          <img
            src="/icons/scalable-icon.png"
            alt="Escalable"
            className="mx-auto w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            {idioma === 'es' ? 'Escalable' : 'Scalable'}
          </h3>
          <p>
            {idioma === 'es'
              ? 'Ideal para hogares, empresas y ciudades inteligentes.'
              : 'Ideal for homes, businesses, and smart cities.'}
          </p>
        </div>
      </div>
    </section>
  )
}
