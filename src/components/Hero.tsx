export default function Hero() {
    return (
      <section
        className="relative w-full"
        style={{
          height: '650px',
          backgroundImage: "url('/images/Hero-Section.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-10 left-10 z-10 w-1/2 text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-skai-darkgray mb-4">
            Transformando el reciclaje con inteligencia artificial
          </h1>
          <a
            href="#contacto"
            className="inline-block bg-white hover:bg-skai-yellow text-skai-darkgray font-bold py-3 px-6 rounded-full transition duration-300"
          >
            ÚNETE AL CAMBIO
          </a>
        </div>
      </section>
    );
  }
  