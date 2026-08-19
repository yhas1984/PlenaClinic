import LazyVideo from "@/components/LazyVideo";

// Vídeos del feed de @plena.clinic (7 propios + 2 de colaboradores).
// Nota: reel_DbUPdWNqslf (Cámara Multiplaza) NO se incluye aquí porque ya
// está en el hero — evitamos duplicarlo.
// Se muestran en una hilera horizontal con desplazamiento automático continuo.
const videos = [
  {
    src: "/instagram/plena_clinic/reel_Db1IKWKqWF7_oxigenacion.mp4",
    poster: "/instagram/plena_clinic/poster_reel_Db1IKWKqWF7_oxigenacion.jpg",
    alt: "Beneficios de la oxigenación hiperbárica en Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbstspAKJFm_paciente.mp4",
    poster: "/instagram/plena_clinic/poster_reel_DbstspAKJFm_paciente.jpg",
    alt: "Paciente en su primera sesión en Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbqGZcRq91p_1semana.mp4",
    poster: "/instagram/plena_clinic/poster_reel_DbqGZcRq91p_1semana.jpg",
    alt: "Primera semana de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbYTj6xKZB2_dra_nathalie.mp4",
    poster: "/instagram/plena_clinic/poster_reel_DbYTj6xKZB2_dra_nathalie.jpg",
    alt: "Especialista explicando la terapia de oxigenación en Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbQc_42qYQK_abriendo.mp4",
    poster: "/instagram/plena_clinic/poster_reel_DbQc_42qYQK_abriendo.jpg",
    alt: "Plena Clinic abre sus puertas",
  },
  {
    src: "/instagram/plena_clinic/reel_DbLaPlZKzRY_nueva_sede.mp4",
    poster: "/instagram/plena_clinic/poster_reel_DbLaPlZKzRY_nueva_sede.jpg",
    alt: "Nueva sede de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbZqvHRtry5_apertura_mariolis.mp4",
    poster: "/instagram/plena_clinic/poster_reel_DbZqvHRtry5_apertura_mariolis.jpg",
    alt: "Inauguración de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_Dbd8Z6eiSZB_invitacion_sujary.mp4",
    poster: "/instagram/plena_clinic/poster_reel_Dbd8Z6eiSZB_invitacion_sujary.jpg",
    alt: "Invitación a conocer Plena Clinic",
  },
];

// Duplicamos la lista para lograr un bucle continuo sin cortes.
const doubled = [...videos, ...videos];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-bg-section overflow-hidden">
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
            Nuestra trayectoria y terapia de oxigenación hiperbárica en vídeo.
          </p>
        </div>
      </div>

      {/* Hilera horizontal con desplazamiento automático continuo */}
      <div className="relative">
        <div className="gallery-marquee">
          {doubled.map((v, i) => (
            <div
              key={i}
              className="gallery-item group relative shrink-0 rounded-2xl overflow-hidden"
              aria-hidden={i >= videos.length}
            >
              <LazyVideo src={v.src} poster={v.poster} alt={v.alt} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        {/* Desvanecido lateral para integración limpia */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-bg-section to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-bg-section to-transparent" />
      </div>
    </section>
  );
}
