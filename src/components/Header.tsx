'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-skai-green px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <Image
          src="/images/LogoSKAIBlanco.png"
          alt="Logo SKAI"
          width={100}
          height={40}
          className="object-contain"
        />
      </div>
      <nav className="flex gap-6 text-white font-semibold text-sm uppercase">
        <Link href="#inicio" className="hover:text-skai-yellow transition">Inicio</Link>
        <Link href="#sobre" className="hover:text-skai-yellow transition">Sobre SKAI</Link>
        <Link href="#equipo" className="hover:text-skai-yellow transition">Equipo</Link>
        <Link href="#contacto" className="hover:text-skai-yellow transition">Contáctanos</Link>
      </nav>
    </header>
  )
}
