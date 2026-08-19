import Image from "next/image";

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-gold-text tracking-widest uppercase font-medium mb-3">
            Nuestro Equipo
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Profesionales de Confianza
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Un equipo médico comprometido con tu bienestar, seguridad y resultados naturales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl animate-on-scroll">
            <Image
              src="/DrToufic.webp"
              alt="Dr. Toufic Ghattas - Cirujano Plástico"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="animate-on-scroll delay-1">
            <p className="text-gold-text tracking-widest uppercase font-medium mb-3">
              Director Médico
            </p>
            <h3
              className="text-3xl sm:text-4xl font-bold text-text-dark mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dr. Toufic Ghattas
            </h3>
            <p className="text-gold font-semibold mb-6 text-lg">Cirujano Plástico</p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Cirujano plástico con 13 años de experiencia en cirugía plástica, estética y
              reconstructiva. Su enfoque combina técnica quirúrgica de precisión con un
              trato humano y personalizado, priorizando siempre la seguridad y los
              resultados naturales de cada paciente.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Evaluación médica integral personalizada",
                "Técnicas quirúrgicas de última generación",
                "Seguimiento completo post-operatorio",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-dark">
                  <svg
                    className="w-5 h-5 text-gold shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/584244794577?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20el%20Dr.%20Toufic%20Ghattas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-gold/20"
            >
              Agendar Consulta
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
