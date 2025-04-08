import Image from "next/image";

export default function SolucionSection() {
  return (
    <section className="w-full bg-skai-green py-16 px-6 md:px-20 min-h-[640px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-12 w-full h-full">
        
        {/* Cuadros desfasados */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 max-w-[400px]">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full max-w-[180px]">
              <Image
                src="/images/Solucion1.jpg"
                alt="Mensaje 1"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
            <div className="relative aspect-square w-full max-w-[180px]">
              <Image
                src="/images/Solucion3.jpg"
                alt="Mensaje 3"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>

          {/* Columna derecha con más margen superior */}
          <div className="flex flex-col gap-4 mt-14">
            <div className="relative aspect-square w-full max-w-[180px]">
              <Image
                src="/images/Solucion2.jpg"
                alt="Mensaje 2"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
            <div className="relative aspect-square w-full max-w-[180px]">
              <Image
                src="/images/Solucion4.jpg"
                alt="Mensaje 4"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left self-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SKAI: IA al Servicio del <br className="hidden md:block" /> Medio Ambiente
          </h2>
          <p className="text-lg leading-relaxed">
            Imagina una máquina que pueda diferenciar plástico, metal y papel en segundos. SKAI utiliza inteligencia artificial y sensores avanzados para automatizar la clasificación de residuos, mejorando la eficiencia y reduciendo la contaminación.
          </p>
        </div>

      </div>
    </section>
  );
}
