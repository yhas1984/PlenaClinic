import Image from "next/image";

// Miembros con cargo real. Los que aún no tienen foto usan avatar de iniciales.
const members = [
  {
    photo: "/team/dra_nathalie_300.jpg",
    name: "Dra. Nathalie Aboultaif",
    role: "Otorrinolaringóloga",
    extra: "Maestría en Medicina Hiperbárica",
  },
  {
    initials: "JV",
    name: "Lcda. Jhoannys Vera",
    role: "Enfermera",
  },
  {
    initials: "KM",
    name: "Lcda. Karen Marín",
    role: "Mesoterapeuta",
  },
];

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-primary/10 flex items-center justify-center ring-1 ring-gold/30 mx-auto">
      <span className="text-3xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
        {initials}
      </span>
    </div>
  );
}

function MemberAvatar({ m }: { m: (typeof members)[number] }) {
  if (m.photo) {
    return (
      <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-gold/30 mx-auto shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  return <InitialsAvatar initials={m.initials!} />;
}

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

        {/* Director Médico — destacado */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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

        {/* Resto del equipo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <div
              key={m.name}
              className={`bg-bg-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-on-scroll delay-${i + 1}`}
            >
              <div className="mb-5">
                <MemberAvatar m={m} />
              </div>
              <h3
                className="text-xl font-bold text-text-dark mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.name}
              </h3>
              <p className="text-gold font-semibold mb-1">{m.role}</p>
              {m.extra && <p className="text-text-muted text-sm">{m.extra}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
