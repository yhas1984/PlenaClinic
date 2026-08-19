import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
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
               Ubicados en Calle 72 entre Av 15A y 16, Maracaibo, Edo. Zulia, somos referentes en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica en la región. Tu satisfacción y bienestar son nuestra prioridad.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll delay-1">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  3
                </p>
                <p className="text-text-muted">Especialidades Médicas</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll delay-2">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  13+
                </p>
                <p className="text-text-muted">Años Cirujano Plástico</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll delay-3">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  ⌾
                </p>
                <p className="text-text-muted">Cámara Hiperbárica</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll delay-4">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  ♥
                </p>
                <p className="text-text-muted">Atención Personalizada</p>
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll delay-2">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
              <Image
                src="/sobre-nosotros.webp"
                alt="Sobre Nosotros - Plena Clinic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
