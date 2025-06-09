"use client";

import { useIdioma } from "../context/IdiomaContext";

export default function ContactForm() {
  const { idioma } = useIdioma();

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-20">
      <div className="max-w-6xl w-full rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row bg-white">
        
        {/* Columna izquierda */}
        <div className="md:w-1/2 bg-skai-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-skai-darkgray mb-4">
            {idioma === "es" ? "Contáctanos" : "Contact us"}
          </h2>
          <p className="text-skai-darkgray mb-8">
            {idioma === "es"
              ? "Si estás interesado en conocer más sobre nuestro proyecto, colaborar con nosotros o simplemente ponerte en contacto, no dudes en escribirnos. ¡Nos encantaría saber de ti!"
              : "If you’re interested in learning more about our project, collaborating with us, or simply want to get in touch, don’t hesitate to reach out. We’d love to hear from you!"}
          </p>

          {/* Contact info */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-skai-darkgray font-medium">
            <div>
              <p className="text-sm text-skai-darkgray font-bold">
                {idioma === "es" ? "Correo electrónico" : "Email"}
              </p>
              <p className="text-base">proyectosufg1@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-skai-darkgray font-bold">Instagram</p>
              <p className="text-base">@skai_sv</p>
            </div>
            <div>
              <p className="text-sm text-skai-darkgray font-bold">
                {idioma === "es" ? "Teléfono" : "Phone"}
              </p>
              <p className="text-base">+503 7704-7259</p>
            </div>
            <div>
              <p className="text-sm text-skai-darkgray font-bold">
                {idioma === "es" ? "Ubicación" : "Location"}
              </p>
              <p className="text-base">
                {idioma === "es"
                  ? "San Salvador, El Salvador"
                  : "San Salvador, El Salvador"}
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="md:w-1/2 p-10 bg-skai-darkgreen text-white">
          <h3 className="text-3xl font-bold text-white mb-6">
            {idioma === "es" ? "Escríbenos." : "Get in touch."}
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white">
                {idioma === "es" ? "Nombre" : "Name"}
              </label>
              <input
                type="text"
                placeholder={idioma === "es" ? "Ej. John Doe" : "E.g. John Doe"}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-skai-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                {idioma === "es" ? "Correo electrónico" : "Email"}
              </label>
              <input
                type="email"
                placeholder={
                  idioma === "es" ? "john@ejemplo.com" : "john@example.com"
                }
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-skai-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                {idioma === "es" ? "Teléfono" : "Phone"}
              </label>
              <input
                type="tel"
                placeholder={
                  idioma === "es" ? "+503 6720 3050" : "+503 6720 3050"
                }
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-skai-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                {idioma === "es" ? "Mensaje" : "Message"}
              </label>
              <textarea
                rows={4}
                placeholder={
                  idioma === "es"
                    ? "Escribe tu mensaje aquí..."
                    : "Write your message here..."
                }
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-skai-green focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-skai-lightgreen text-white py-2 px-4 rounded-xl hover:bg-skai-greendarkhover transition duration-200 font-semibold"
            >
              {idioma === "es" ? "Enviar mensaje" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
