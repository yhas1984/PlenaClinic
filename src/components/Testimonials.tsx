export default function Testimonials() {
  // IMPORTANTE: sustituir estos testimonios por valoraciones REALES autorizadas
  // por cada paciente de la clínica antes de publicar. No inventar reseñas.
  const testimonials = [
    {
      name: "Nombre Paciente",
      service: "Medicina Estética",
      quote:
        "Cita de un paciente real, con su consentimiento. Reemplaza este texto de ejemplo por la valoración verificada.",
    },
    {
      name: "Nombre Paciente",
      service: "Cirugía Plástica",
      quote:
        "Cita de un paciente real, con su consentimiento. Reemplaza este texto de ejemplo por la valoración verificada.",
    },
    {
      name: "Nombre Paciente",
      service: "Oxigenación Hiperbárica",
      quote:
        "Cita de un paciente real, con su consentimiento. Reemplaza este texto de ejemplo por la valoración verificada.",
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary tracking-widest uppercase font-medium mb-3">
            Testimonios
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            La Confianza de Nuestros Pacientes
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Miles de pacientes han confiado en nosotros. Estas son sus historias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl animate-on-scroll delay-${index + 1}`}
            >
              <div className="flex gap-1 text-gold mb-5" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-text-muted leading-relaxed mb-6">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text-dark">{t.name}</p>
                  <p className="text-sm text-text-muted">{t.service}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
