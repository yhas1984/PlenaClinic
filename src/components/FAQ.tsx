import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary tracking-widest uppercase font-medium mb-3">
            Preguntas Frecuentes
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Resolvemos tus Dudas
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de tu visita a Plena Clinic.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group bg-bg-cream rounded-xl border border-gray-100 px-6 py-4 animate-on-scroll"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-text-dark text-lg">
                {item.q}
                <svg
                  className="w-5 h-5 text-gold shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-text-muted leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
