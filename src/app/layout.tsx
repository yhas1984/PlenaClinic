import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plenaclinic.com"),
  title: "Plena Clinic - Cirugía Plástica y Medicina Estética en Maracaibo",
  description:
    "Clínica estética en Maracaibo, Edo. Zulia. Especialistas en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica. Tu belleza, nuestra pasión.",
  keywords:
    "cirugía plástica, medicina estética, oxigenación hiperbárica, cámara hiperbárica, clínica estética, estética Maracaibo, cirujano plástico Zulia, Venezuela",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  icons: {
    icon: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Plena Clinic - Cirugía Plástica y Medicina Estética",
    description:
      "Tu belleza, nuestra pasión. Especialistas en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica en Maracaibo.",
    type: "website",
    locale: "es_VE",
    url: "/",
    siteName: "Plena Clinic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plena Clinic - Cirugía Plástica y Medicina Estética en Maracaibo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plena Clinic - Cirugía Plástica y Medicina Estética",
    description:
      "Tu belleza, nuestra pasión. Especialistas en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica en Maracaibo.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Plena Clinic",
              description:
                "Clínica estética en Maracaibo especializada en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica.",
              url: "https://www.plenaclinic.com",
              telephone: "+584244794577",
              email: "plenaclinicve@gmail.com",
              image: "https://www.plenaclinic.com/og-image.png",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 72 entre Av 15A y 16",
                addressLocality: "Maracaibo",
                addressRegion: "Zulia",
                addressCountry: "VE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.6685868,
                longitude: -71.6222579,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:30",
                closes: "18:30",
              },
              sameAs: [
                "https://www.instagram.com/plena.clinic",
                "https://wa.me/584244794577",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Plena Clinic",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Cirugía Plástica",
                      description:
                        "Procedimientos quirúrgicos de alta calidad con resultados naturales.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Medicina Estética",
                      description:
                        "Tratamientos no invasivos: Botox, ácido hialurónico, bioestimuladores.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalTherapy",
                      name: "Oxigenación Hiperbárica",
                      description:
                        "Terapia con oxígeno a presión para acelerar la recuperación y el bienestar.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Toufic Ghattas",
              image: "https://www.plenaclinic.com/DrToufic.webp",
              medicalSpecialty: "PlasticSurgery",
              description:
                "Médico Cirujano, Director Médico de Plena Clinic, especializado en cirugía plástica, estética y reconstructiva en Maracaibo, Venezuela.",
              url: "https://www.plenaclinic.com/#equipo",
              telephone: "+584244794577",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Maracaibo",
                addressRegion: "Zulia",
                addressCountry: "VE",
              },
              worksFor: {
                "@type": "MedicalClinic",
                name: "Plena Clinic",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es una cámara de oxigenación hiperbárica?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una terapia que consiste en respirar oxígeno puro dentro de una cámara a presión superior a la atmosférica. Favorece la oxigenación de los tejidos, acelera la cicatrización y potencia la recuperación post-quirúrgica y el bienestar general.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo solicito una cita en Plena Clinic?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes escribirnos por WhatsApp o completar el formulario de la sección de contacto. Te atenderemos para responder tus dudas y agendar tu consulta según la disponibilidad.",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
