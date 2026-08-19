export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-black/30 z-10" />

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Imagen base (siempre presente; respaldo y para prefers-reduced-motion) */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
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
          <source src="/instagram/plena_clinic/reel_DbUPdWNqslf_camara_multiplaza.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 mb-5 text-gold-dark font-medium uppercase tracking-[0.2em] text-sm">
            <span className="h-px w-8 bg-gold-dark" />
            Clínica Estética en Maracaibo
          </p>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tu Belleza, Nuestra Pasión
          </h1>
          <p className="text-lg text-white/85 max-w-xl mb-8">
            Especialistas en cirugía plástica, medicina estética y terapia de
            oxigenación hiperbárica. Resultados naturales con la más alta calidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/584244794577?text=Hola%20Plena%20Clinic%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25d366] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.67-.52h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 3.9 5.95 9.44 8.34 1.32.57 1.83.46 2.16.44.66-.07 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.08-.15-.3-.24-.6-.39z"/><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.18-2.9.83.87-2.83-.2-.3A8 8 0 1 1 12 20z"/></svg>
              Agendar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center rounded-full border border-white/60 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
