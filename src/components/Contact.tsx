"use client";

import { useState } from "react";

const services = [
  "Cirugía Plástica",
  "Medicina Estética",
  "Oxigenación Hiperbárica",
  "Otra consulta",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, me gustaría agendar una cita.%0ANombre: ${encodeURIComponent(
      form.name
    )}%0ATeléfono: ${encodeURIComponent(form.phone)}%0AServicio: ${encodeURIComponent(
      form.service
    )}%0AFecha: ${encodeURIComponent(form.date || "Sin fecha definida")}`;
    window.open(`https://wa.me/584146421700?text=${message}`, "_blank");
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-bg-cream px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition";

  return (
    <section id="contacto" className="py-24 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
            <p className="text-gold-text tracking-widest uppercase font-medium mb-3">
              Contáctanos
            </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Estamos Para Ti
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Agenda tu cita o consulta con nosotros. Estamos listos para atenderte y brindarte la mejor atención.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <a
            href="https://wa.me/584146421700?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 animate-on-scroll"
          >
            <div className="w-16 h-16 bg-whatsapp/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-whatsapp/20 transition-colors">
              <svg className="w-8 h-8 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-dark mb-2">WhatsApp</h3>
            <p className="text-text-muted">+58 414-6421700</p>
          </a>

          <a
            href="mailto:plenaclinicve@gmail.com"
            className="group bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 animate-on-scroll"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-dark mb-2">Email</h3>
            <p className="text-text-muted text-sm">plenaclinicve@gmail.com</p>
          </a>

          <a
            href="https://www.instagram.com/plena.clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 animate-on-scroll"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors">
              <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-dark mb-2">Instagram</h3>
            <p className="text-text-muted">@plena.clinic</p>
          </a>

          <div className="group bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 animate-on-scroll">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-dark mb-2">Ubicación</h3>
            <p className="text-text-muted">Calle 72 con Av 1A<br />Maracaibo, Edo. Zulia</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 animate-on-scroll">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-dark mb-2">Horarios</h3>
            <p className="text-text-muted">Lun - Sáb<br />8:30 AM - 6:30 PM</p>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-text-dark mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Agenda tu Cita
              </h3>
              <p className="text-text-muted mb-8">
                Completa tus datos y te contactaremos por WhatsApp para confirmar.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1.5">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+58 412-0000000"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-1.5">
                      Servicio
                    </label>
                    <select
                      id="service"
                      className={inputClass}
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text-dark mb-1.5">
                      Fecha preferida
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={inputClass}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-gold/20"
                >
                  Solicitar Cita por WhatsApp
                </button>
                <p className="text-xs text-text-muted text-center">
                  Al enviar se abrirá WhatsApp con tu solicitud lista para enviar.
                </p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll delay-1">
            <div className="relative bg-white rounded-3xl p-3 shadow-xl border border-gray-100 h-full">
              <div className="absolute -top-4 left-8 z-10 bg-gold text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Plena Clinic - Maracaibo
              </div>
              <div className="rounded-2xl overflow-hidden relative h-full min-h-[450px]">
                <iframe
                  src="https://www.google.com/maps?q=Calle+72+con+Av+1A,+Maracaibo,+Zulia,+Venezuela&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "saturate(0.7) brightness(1.05) contrast(0.95)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Plena Clinic"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-4 bg-bg-cream rounded-b-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Calle 72 con Av 1A</p>
                    <p className="text-text-muted text-xs">Maracaibo, Edo. Zulia, Venezuela</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Calle+72+con+Av+1A+Maracaibo+Venezuela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  Cómo llegar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
