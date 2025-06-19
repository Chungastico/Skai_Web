'use client'

import { useIdioma } from '../context/IdiomaContext'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const { idioma } = useIdioma()

  return (
    <footer className="bg-skai-green text-white py-6 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Izquierda: texto */}
        <p className="text-sm font-semibold text-center md:text-lefttextsecondary">
          {idioma === 'es'
            ? '© 2025 SV Dynamics. Todos los derechos reservados.'
            : '© 2025 SV Dynamics. All rights reserved.'}
        </p>

        {/* Centro: logos de patrocinadores */}
        <div className="flex items-center gap-6">
          <img
            src="/icons/UFG.png"
            alt="UFG"
            className="h-16 w-auto object-contain"
          />

          <img
            src="/icons/Germina.png"
            alt="Germina"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Derecha: Instagram */}
        <div className="flex items-center gap-4 text-white dark:text-skai-textdark text-lg">
          <a
            href="https://www.instagram.com/skai_sv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-skai-yellow dark:hover:text-skai-yellowdark transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}
