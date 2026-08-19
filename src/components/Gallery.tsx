import LazyVideo from "@/components/LazyVideo";

// El feed de @plena.clinic es 100% reels/vídeos. La galería muestra los clips
// reales con lazy-load (solo cargan/reproducen al estar visibles) + poster nítido.
const gallery = [
  {
    src: "/instagram/plena_clinic/reel_DbUPdWNqslf_camara_multiplaza.mp4",
    poster: "/instagram/plena_clinic/gal_oxigenacion.jpg",
    alt: "Cámara hiperbárica de oxigenación de Plena Clinic",
    label: "Oxigenación Hiperbárica",
  },
  {
    src: "/instagram/plena_clinic/reel_DbLaPlZKzRY_nueva_sede.mp4",
    poster: "/instagram/plena_clinic/gal_equipo.jpg",
    alt: "Plena Clinic — nueva sede y equipo",
    label: "Nuestro Espacio",
  },
  {
    src: "/instagram/plena_clinic/reel_DbYTj6xKZB2_dra_nathalie.mp4",
    poster: "/instagram/plena_clinic/gal_tecnologia.jpg",
    alt: "Especialista explicando la terapia de oxigenación en Plena Clinic",
    label: "Terapia Hiperbárica",
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
            Nuestras instalaciones y terapia de oxigenación hiperbárica en vídeo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-video md:aspect-[9/16] animate-on-scroll"
            >
              <LazyVideo src={item.src} poster={item.poster} alt={item.alt} />
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
