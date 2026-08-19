export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] flex items-center bg-bg-cream overflow-hidden"
    >
      {/* Toque decorativo sutil de fondo */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="max-w-xl animate-on-scroll">
            <p className="inline-flex items-center gap-2 mb-4 text-gold-dark font-medium uppercase tracking-[0.2em] text-xs sm:text-sm">
              <span className="h-px w-8 bg-gold-dark" />
              Clínica Estética en Maracaibo
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-text-dark mb-5 leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tu Belleza, <span className="text-primary">Nuestra Pasión</span>
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-md mb-8 leading-relaxed">
              Especialistas en cirugía plástica, medicina estética y terapia de
              oxigenación hiperbárica. Resultados naturales con la más alta calidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/584244794577?text=Hola%20Plena%20Clinic%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25d366] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-green-500/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.67-.52h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 3.9 5.95 9.44 8.34 1.32.57 1.83.46 2.16.44.66-.07 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.08-.15-.3-.24-.6-.39z"/><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.18-2.9.83.87-2.83-.2-.3A8 8 0 1 1 12 20z"/></svg>
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center rounded-full border border-primary/40 text-primary px-6 py-3 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Vídeo en tarjeta vertical elegante */}
          <div className="relative animate-on-scroll delay-1 justify-self-center w-full max-w-[300px] lg:max-w-[340px]">
            <div className="relative rounded-3xl overflow-hidden aspect-[9/16] shadow-2xl shadow-primary/20 ring-1 ring-white/60">
              {/* Poster / respaldo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hyperbaric-hero.webp')" }}
                aria-hidden="true"
              />
              <video
                className="absolute inset-0 h-full w-full object-cover hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/instagram/plena_clinic/reel_DbUPdWNqslf_camara_multiplaza.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Marco dorado inferior decorativo */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
            </div>
            {/* Etiqueta flotante */}
            <div className="absolute -right-3 -bottom-3 rounded-2xl bg-white/90 backdrop-blur px-5 py-3 shadow-lg ring-1 ring-white/60">
              <p className="text-xs text-text-muted mb-0.5">Oxigenación</p>
              <p className="text-sm font-semibold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Hiperbárica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
