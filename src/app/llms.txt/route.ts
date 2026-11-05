import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

const SITE = "https://www.plenaclinic.com";

const BODY = `# Plena Clinic

> Centro médico estético en Maracaibo (Zulia, Venezuela): cirugía plástica, medicina estética y terapia de oxigenación hiperbárica.

## Qué es
Plena Clinic es una clínica de estética médica y cirugía plástica en Maracaibo. Su director médico es el Dr. Toufic Ghattas. Ofrece tres líneas de servicio y dispone de cámara de oxigenación hiperbárica propia.

## Hechos clave
- Ubicación: Calle 72 entre Av 15A y 16, Maracaibo 4005, Zulia, Venezuela.
- Teléfono y WhatsApp: +58 424-4794577.
- Correo: plenaclinicve@gmail.com.
- Horario: lunes a sábado, 08:00 a 17:30.
- Servicios: cirugía plástica; medicina estética; oxigenación hiperbárica.
- Cámara hiperbárica: oxígeno puro a presión superior a la atmosférica; se usa para favorecer la oxigenación de los tejidos, acelerar la cicatrización y apoyar la recuperación postquirúrgica.
- Cómo pedir cita: por WhatsApp o con el formulario de la web.
- Instagram: https://www.instagram.com/plena.clinic

## Preguntas frecuentes
- ¿Dónde está Plena Clinic? En Calle 72 entre Av 15A y 16, Maracaibo, Zulia.
- ¿Qué servicios ofrece? Cirugía plástica, medicina estética y oxigenación hiperbárica.
- ¿Qué es la cámara hiperbárica? Una terapia con oxígeno puro a presión para mejorar oxigenación y recuperación.
- ¿Cómo pido una cita? Por WhatsApp al +58 424-4794577 o desde el formulario de la web.
- ¿Cuál es el horario? Lunes a sábado, de 08:00 a 17:30.

## Enlaces
- Web: ${SITE}/
- WhatsApp: https://wa.me/584244794577
- Instagram: https://www.instagram.com/plena.clinic
`;

export async function GET() {
  return new NextResponse(BODY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
