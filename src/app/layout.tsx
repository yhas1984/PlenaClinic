import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
  title: "Plena Clinic - Cirugía Plástica y Medicina Estética en Maracaibo",
  description:
    "Clínica estética en Maracaibo, Edo. Zulia. Especialistas en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica. Tu belleza, nuestra pasión.",
  keywords:
    "cirugía plástica, medicina estética, oxigenación hiperbárica, clínica estética, Maracaibo, Venezuela",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Plena Clinic - Cirugía Plástica y Medicina Estética",
    description:
      "Tu belleza, nuestra pasión. Especialistas en cirugía plástica, medicina estética y terapia de oxigenación hiperbárica en Maracaibo.",
    type: "website",
    locale: "es_VE",
    images: ["/icon-512x512.png"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
