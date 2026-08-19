import Image from "next/image";

// Fotos reales verificadas de @plena.clinic (descargadas del feed).
// Solo se incluyen las que muestran la clínica/tratamientos — se descartaron carteles de texto y selfies.
const gallery = [
  {
    src: "/instagram/plena_clinic/772602614.jpg",
    alt: "Especialista en bata blanca en la cámara de oxigenación hiperbárica de Plena Clinic",
    label: "Oxigenación Hiperbárica",
  },
  {
    src: "/instagram/plena_clinic/753306125.jpg",
    alt: "Dr. Toufic Ghattas en el consultorio de Plena Clinic",
    label: "Nuestro Equipo",
  },
  {
    src: "/instagram/plena_clinic/756814500.jpg",
    alt: "Equipo de la cámara hiperbárica y especialista de Plena Clinic",
    label: "Tecnología de Punta",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary tracking-widest uppercase font-medium mb-3">
            Galería
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Conoce Plena Clinic
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Nuestras instalaciones y tecnología al servicio de tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-square animate-on-scroll"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
