import Image from "next/image";

export default function ProblematicaSection() {
  return (
    <section className="relative w-full bg-white px-6 md:px-20 h-[640px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full h-full z-10 relative">
        
        {/* Texto */}
        <div className="w-full md:w-3/5">
          <h2 className="text-4xl md:text-5xl font-bold text-skai-darkgray leading-tight mb-6">
            Un mundo <br /> ahogado en basura
          </h2>
          <p className="text-lg text-skai-darkgray mb-6">
            Cada año, millones de toneladas de desechos terminan en vertederos y océanos debido a una mala clasificación. El reciclaje manual es lento y poco eficiente. La IA y la robótica pueden cambiar esta realidad.
          </p>
          <p className="text-sm text-skai-darkgray mb-4">
            ¿Te imaginas un mundo donde la basura desaparezca?
          </p>
          <div className="flex gap-4">
            <button className="bg-skai-green text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-skai-darkgreen transition">
              DESCÚBRELO
            </button>
            <button className="bg-skai-lightgray text-skai-darkgray font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition">
              ¿CÓMO FUNCIONA?
            </button>
          </div>
        </div>

        {/* Div vacío del lado derecho (2/5) */}
        <div className="w-full md:w-2/5 h-full" />

      </div>

      {/* Imagen flotante al fondo */}
      <div className="absolute bottom-0 right-0 w-[40%] h-full pointer-events-none">
        <Image
          src="/images/problem-image.png"
          alt="Ilustración de basura"
          fill
          className="object-contain object-right-bottom"
          priority
        />
      </div>
    </section>
  );
}
