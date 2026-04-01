import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-nobg.png"
                alt="Plena Clinic"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Plena Clinic
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu belleza, nuestra pasión. Clínica estética especializada en Maracaibo, Venezuela.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://wa.me/584146421700" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +58 414-6421700
                </a>
              </li>
              <li>
                <a href="mailto:plenaclinicve@gmail.com" className="hover:text-primary transition-colors">
                  plenaclinicve@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/plena.clinic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @plena.clinic
                </a>
              </li>
              <li>Calle 72 con Av 1A, Maracaibo, Edo. Zulia</li>
              <li className="pt-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Lun - Sáb: 8:30 AM - 6:30 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Plena Clinic. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
