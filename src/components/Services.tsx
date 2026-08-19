const whatsappBase = "https://wa.me/584244794577?text=";

const services = [
  {
    title: "Cirugía Plástica",
    description:
      "Procedimientos quirúrgicos de alta calidad con resultados naturales. Nuestro equipo de cirujanos plásticos certificados te brindará la atención y los resultados que mereces.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Medicina Estética",
    description:
      "Tratamientos no invasivos para rejuvenecer y realzar tu belleza natural. Botox, ácido hialurónico, bioestimuladores y más procedimientos de última generación.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Oxigenación Hiperbárica",
    description:
      "Terapia avanzada con oxígeno a presión para acelerar la recuperación post-quirúrgica, mejorar la cicatrización y potenciar tu bienestar integral.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.285 1.286 1.285 3.37 0 4.656l-.47.47a3.29 3.29 0 01-4.656 0l-.47-.47a3.29 3.29 0 010-4.657l.47-.47a3.29 3.29 0 014.656 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary tracking-widest uppercase font-medium mb-3">
            Nuestros Servicios
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tratamientos Especializados
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de belleza y bienestar con tecnología de vanguardia y profesionales altamente calificados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-bg-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-on-scroll delay-${index + 1}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3
                className="text-2xl font-bold text-text-dark mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href={`${whatsappBase}${encodeURIComponent(`Hola, me interesa información sobre ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-text font-semibold hover:gap-3 hover:text-gold-dark transition-all"
              >
                Más información
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
