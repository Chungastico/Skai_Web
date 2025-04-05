export default function WhySkai() {
    return (
      <section className="bg-skai-green py-16 px-4 text-white text-center">
        <h2 className="text-4xl font-bold mb-12">¿POR QUÉ SKAI?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ecológico */}
          <div className="bg-white rounded-2xl p-8 text-skai-darkgray">
            <img
              src="/icons/eco-icon.png"
              alt="Ecológico"
              className="mx-auto w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Ecológico</h3>
            <p>Reduce el impacto ambiental con clasificación inteligente.</p>
          </div>
  
          {/* Eficiente */}
          <div className="bg-white rounded-2xl p-8 text-skai-darkgray">
            <img
              src="/icons/efficient-icon.png"
              alt="Eficiente"
              className="mx-auto w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Eficiente</h3>
            <p>Optimiza el reciclaje con tecnología avanzada.</p>
          </div>
  
          {/* Escalable */}
          <div className="bg-white rounded-2xl p-8 text-skai-darkgray">
            <img
              src="/icons/scalable-icon.png"
              alt="Escalable"
              className="mx-auto w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Escalable</h3>
            <p>Ideal para hogares, empresas y ciudades inteligentes.</p>
          </div>
        </div>
      </section>
    )
  }
  