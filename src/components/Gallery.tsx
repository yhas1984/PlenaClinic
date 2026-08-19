"use client";

import { useEffect, useState, useCallback } from "react";
import LazyVideo from "@/components/LazyVideo";

// Los 9 vídeos del feed de @plena.clinic (7 propios + 2 de colaboradores
// etiquetados a la clínica). Carrusel vertical con lazy-load y navegación.
const videos = [
  {
    src: "/instagram/plena_clinic/reel_Db1IKWKqWF7_oxigenacion.mp4",
    label: "Beneficios de la Oxigenación Hiperbárica",
    alt: "Beneficios de la oxigenación hiperbárica en Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbstspAKJFm_paciente.mp4",
    label: "Primera sesión",
    alt: "Paciente en su primera sesión en Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbqGZcRq91p_1semana.mp4",
    label: "Nuestra primera semana",
    alt: "Primera semana de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbUPdWNqslf_camara_multiplaza.mp4",
    label: "Cámara Hiperbárica Multiplaza",
    alt: "Cámara de oxigenación hiperbárica Multiplaza de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbYTj6xKZB2_dra_nathalie.mp4",
    label: "Terapia Hiperbárica",
    alt: "Especialista explicando la terapia de oxigenación en Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbQc_42qYQK_abriendo.mp4",
    label: "Abrimos nuestras puertas",
    alt: "Plena Clinic abre sus puertas",
  },
  {
    src: "/instagram/plena_clinic/reel_DbLaPlZKzRY_nueva_sede.mp4",
    label: "Nuestra nueva sede",
    alt: "Nueva sede de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_DbZqvHRtry5_apertura_mariolis.mp4",
    label: "Inauguración",
    alt: "Inauguración de Plena Clinic",
  },
  {
    src: "/instagram/plena_clinic/reel_Dbd8Z6eiSZB_invitacion_sujary.mp4",
    label: "Te invitamos a conocernos",
    alt: "Invitación a conocer Plena Clinic",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % videos.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + videos.length) % videos.length),
    []
  );

  // Teclado: flechas para navegar.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const current = videos[index];

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
            Nuestra trayectoria y terapia de oxigenación hiperbárica en vídeo.
          </p>
        </div>

        <div className="max-w-sm mx-auto animate-on-scroll">
          <div className="relative rounded-3xl overflow-hidden aspect-[9/16] shadow-2xl">
            <LazyVideo
              src={current.src}
              poster="/instagram/plena_clinic/gal_oxigenacion.jpg"
              alt={current.alt}
            />

            {/* Etiqueta */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-14">
              <p className="text-white font-semibold text-center">{current.label}</p>
            </div>

            {/* Flecha anterior */}
            <button
              onClick={prev}
              aria-label="Vídeo anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow hover:bg-white transition-colors"
            >
              ‹
            </button>
            {/* Flecha siguiente */}
            <button
              onClick={next}
              aria-label="Vídeo siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow hover:bg-white transition-colors"
            >
              ›
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-5">
            {videos.map((v, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={v.label}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-text-muted/40"
                }`}
              />
            ))}
          </div>

          <p className="text-center text-text-muted text-sm mt-3">
            {index + 1} / {videos.length}
          </p>
        </div>
      </div>
    </section>
  );
}
