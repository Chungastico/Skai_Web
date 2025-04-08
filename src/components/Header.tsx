'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useIdioma } from '../context/IdiomaContext'

export default function Header() {
  const pathname = usePathname()
  const { idioma, setIdioma } = useIdioma()

  const [modoOscuro, setModoOscuro] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const modoGuardado = localStorage.getItem('modoOscuro')
    if (modoGuardado) {
      const activado = modoGuardado === 'true'
      setModoOscuro(activado)
      document.documentElement.classList.toggle('dark', activado)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro.toString())
    document.documentElement.classList.toggle('dark', modoOscuro)
  }, [modoOscuro])

  const toggleIdioma = () => setIdioma(idioma === 'es' ? 'en' : 'es')
  const toggleModo = () => setModoOscuro(!modoOscuro)
  const toggleMenu = () => setMenuAbierto(!menuAbierto)
  const closeMenu = () => setMenuAbierto(false)

  // Traducciones
  const navLabels = {
    inicio: idioma === 'es' ? 'Inicio' : 'Home',
    sobre: idioma === 'es' ? 'Sobre SKAI' : 'About SKAI',
    equipo: idioma === 'es' ? 'Equipo' : 'Team',
    contacto: idioma === 'es' ? 'Contáctanos' : 'Contact Us',
  }

  return (
    <header className="bg-skai-green px-6 py-4 shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/LogoSKAIBlanco.png"
            alt="Logo SKAI"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex gap-6 text-white font-semibold text-sm uppercase">
          <Link href="/" className={`hover:text-skai-yellow transition ${pathname === '/' ? 'border-b-2 border-skai-yellow pb-1' : ''}`}>
            {navLabels.inicio}
          </Link>
          <Link href="/sobre_skai" className={`hover:text-skai-yellow transition ${pathname === '/sobre_skai' ? 'border-b-2 border-skai-yellow pb-1' : ''}`}>
            {navLabels.sobre}
          </Link>
          <Link href="/equipo" className={`hover:text-skai-yellow transition ${pathname === '/equipo' ? 'border-b-2 border-skai-yellow pb-1' : ''}`}>
            {navLabels.equipo}
          </Link>
          <Link href="/contacto" className={`hover:text-skai-yellow transition ${pathname === '/contacto' ? 'border-b-2 border-skai-yellow pb-1' : ''}`}>
            {navLabels.contacto}
          </Link>
        </nav>

        {/* Controles de idioma y modo */}
        <div className="flex gap-4 items-center text-white text-xl">
          <button onClick={toggleIdioma} className="hover:text-skai-yellow transition">
            {idioma === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>
          <button onClick={toggleModo} className="hover:text-skai-yellow transition">
            {modoOscuro ? <FaMoon /> : <FaSun />}
          </button>

          {/* Botón hamburguesa */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuAbierto ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Overlay oscuro detrás del menú */}
      {menuAbierto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menú lateral móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-skai-green text-white text-sm font-semibold flex flex-col gap-6 px-6 py-10 transform transition-transform duration-300 ease-in-out z-50 ${
          menuAbierto ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <Link href="/" onClick={closeMenu} className={pathname === '/' ? 'text-skai-yellow' : ''}>
          {navLabels.inicio}
        </Link>
        <Link href="/sobre_skai" onClick={closeMenu} className={pathname === '/sobre_skai' ? 'text-skai-yellow' : ''}>
          {navLabels.sobre}
        </Link>
        <Link href="/equipo" onClick={closeMenu} className={pathname === '/equipo' ? 'text-skai-yellow' : ''}>
          {navLabels.equipo}
        </Link>
        <Link href="/contacto" onClick={closeMenu} className={pathname === '/contacto' ? 'text-skai-yellow' : ''}>
          {navLabels.contacto}
        </Link>
      </div>
    </header>
  )
}
