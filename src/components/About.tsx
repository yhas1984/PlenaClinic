export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary tracking-widest uppercase font-medium mb-3">
              Sobre Nosotros
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Excelencia en Medicina Estética
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              En <strong className="text-text-dark">Plena Clinic</strong> nos dedicamos a realzar tu belleza natural con los más altos estándares de calidad y seguridad. Nuestro equipo de profesionales altamente calificados combina experiencia, tecnología de vanguardia y un enfoque personalizado para cada paciente.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
               Ubicados en Calle 72 con Av 1A, Maracaibo, Edo. Zulia, somos referentes en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica en la región. Tu satisfacción y bienestar son nuestra prioridad.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  +500
                </p>
                <p className="text-text-muted">Pacientes Satisfechos</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  10+
                </p>
                <p className="text-text-muted">Años de Experiencia</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  3
                </p>
                <p className="text-text-muted">Especialidades</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  100%
                </p>
                <p className="text-text-muted">Compromiso</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.504M12 3a8.997 8.997 0 00-7.843 4.504m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.996m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Plena Clinic
                </p>
                <p className="text-text-muted">Maracaibo, Venezuela</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
