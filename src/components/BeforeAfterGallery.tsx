"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    service: "Rinomodelación",
    before: "/render.jpeg",
    after: "/render.jpeg",
  },
  {
    id: 2,
    service: "Blefaroplastia",
    before: "/render.jpeg",
    after: "/render.jpeg",
  },
  {
    id: 3,
    service: "Liposucción",
    before: "/render.jpeg",
    after: "/render.jpeg",
  },
  {
    id: 4,
    service: "Aumento de Labios",
    before: "/render.jpeg",
    after: "/render.jpeg",
  },
  {
    id: 5,
    service: "Relleno Facial",
    before: "/render.jpeg",
    after: "/render.jpeg",
  },
  {
    id: 6,
    service: "Botox",
    before: "/render.jpeg",
    after: "/render.jpeg",
  },
];

export default function BeforeAfterGallery() {
  const [activeItems, setActiveItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setActiveItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary tracking-widest uppercase font-medium mb-3">
            Resultados
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Antes y Después
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Resultados reales de nuestros pacientes. Haz clic en cada imagen para ver el antes y después.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100 animate-on-scroll delay-${(i % 4) + 1}`}
            >
              <div
                className="relative aspect-[4/3] cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <Image
                  src={activeItems[item.id] ? item.after : item.before}
                  alt={`${item.service} - ${activeItems[item.id] ? "Después" : "Antes"}`}
                  fill
                  className="object-cover transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{item.service}</p>
                      <p className="text-white/70 text-sm">
                        {activeItems[item.id] ? "Después" : "Antes"}
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                      {activeItems[item.id] ? "Ver Antes" : "Ver Después"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-text-muted text-sm italic">
            * Los resultados pueden variar según cada paciente. Las imágenes son de referencia.
          </p>
        </div>
      </div>
    </section>
  );
}
