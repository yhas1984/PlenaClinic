const testimonials = [
  {
    name: "María G.",
    service: "Cirugía Plástica",
    text: "Excelente experiencia desde la consulta hasta la recuperación. El equipo médico es increíblemente profesional y los resultados superaron mis expectativas.",
    rating: 5,
  },
  {
    name: "Ana R.",
    service: "Medicina Estética",
    text: "Los tratamientos de medicina estética son de primera calidad. Me siento más segura y los resultados son muy naturales. Totalmente recomendada.",
    rating: 5,
  },
  {
    name: "Laura M.",
    service: "Oxigenación Hiperbárica",
    text: "La terapia de oxigenación me ayudó muchísimo en mi recuperación post-quirúrgica. El personal es muy atento y las instalaciones son de primer nivel.",
    rating: 5,
  },
  {
    name: "Carolina P.",
    service: "Medicina Estética",
    text: "Llevo varios tratamientos y cada vez quedo más satisfecha. La atención personalizada marca la diferencia. Plena Clinic es mi clínica de confianza.",
    rating: 5,
  },
  {
    name: "Patricia L.",
    service: "Cirugía Plástica",
    text: "Desde el primer momento me sentí en buenas manos. El seguimiento post-operatorio fue impecable y los resultados hablan por sí solos.",
    rating: 5,
  },
  {
    name: "Gabriela S.",
    service: "Medicina Estética",
    text: "Profesionalismo y dedicación en cada visita. Los resultados son naturales y siempre me explican todo con detalle. La mejor decisión que tomé.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary tracking-widest uppercase font-medium mb-3">
            Testimonios
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros pacientes es nuestro mayor orgullo. Conoce sus experiencias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-bg-cream rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all animate-on-scroll delay-${(i % 4) + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-text-dark text-sm">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
