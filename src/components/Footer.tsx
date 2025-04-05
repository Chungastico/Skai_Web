import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-skai-green text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Izquierda: texto */}
        <p className="text-sm font-semibold text-center md:text-left">
          © 2025 SV Dynamics. Todos los derechos reservados.
        </p>

        {/* Centro: logos de patrocinadores */}
        <div className="flex items-center gap-6">
          <img src="/images/logo-ufg.png" alt="UFG" className="h-8 object-contain" />
          <img src="/images/logo-fedecredito.png" alt="Fedecrédito" className="h-8 object-contain" />
          <img src="/images/logo-germina.png" alt="Germina" className="h-8 object-contain" />
        </div>

        {/* Derecha: redes sociales */}
        <div className="flex items-center gap-4 text-white text-lg">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-skai-yellow transition" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-skai-yellow transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-skai-yellow transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}
