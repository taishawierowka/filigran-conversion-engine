import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-beauty.jpg";
import cejasImg from "@/assets/service-cejas.jpg";
import pestanasImg from "@/assets/service-pestanas.jpg";
import labiosImg from "@/assets/service-labios.jpg";
import skincareImg from "@/assets/service-skincare.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import sedeSanIsidro from "@/assets/sede-san-isidro.png.asset.json";
import sedeMiraflores from "@/assets/sede-miraflores.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filigran Beauty Center — Micropigmentación, Cejas, Pestañas y Más en Lima" },
      {
        name: "description",
        content:
          "Realza tu belleza natural con tratamientos premium en Filigran Beauty Center: micropigmentación de cejas y labios, lifting de pestañas, skincare y nail bar. Agenda por WhatsApp.",
      },
      { property: "og:title", content: "Filigran Beauty Center — Belleza con detalle" },
      {
        property: "og:description",
        content:
          "Tratamientos diseñados para realzar la esencia única de tu belleza. Atención personalizada en Lima.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const WA_PHONE = "51960339209";
const wa = () =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Hola, quiero mas informacion")}`;

const services = [
  {
    title: "Micropigmentación de Cejas",
    desc: "Cejas perfectas 24/7 con técnica pelo a pelo y pigmentos premium.",
    img: cejasImg,
    msg: "Hola Filigran 👋, vengo de Instagram y quiero información sobre Micropigmentación de Cejas.",
  },
  {
    title: "Lifting & Tinte de Pestañas",
    desc: "Mirada elevada y definida sin extensiones, por hasta 8 semanas.",
    img: pestanasImg,
    msg: "Hola Filigran 👋, quisiera agendar Lifting de Pestañas.",
  },
  {
    title: "Micropigmentación de Labios",
    desc: "Color natural, simetría perfecta y un acabado luminoso y duradero.",
    img: labiosImg,
    msg: "Hola Filigran 👋, me interesa la Micropigmentación de Labios.",
  },
  {
    title: "Skincare & Limpieza Facial",
    desc: "Protocolos personalizados para una piel luminosa y saludable.",
    img: skincareImg,
    msg: "Hola Filigran 👋, quisiera información sobre Limpieza Facial.",
  },
  {
    title: "Nail Bar",
    desc: "Manicure y pedicure premium en un espacio relajante y elegante.",
    img: nailsImg,
    msg: "Hola Filigran 👋, quiero reservar en el Nail Bar.",
  },
  {
    title: "Paquetes",
    desc: "Diseñamos un plan a medida para realzar tu belleza natural.",
    img: salonImg,
    msg: "Hola Filigran 👋, quisiera un plan personalizado de tratamientos.",
  },
];

const testimonios = [
  {
    name: "Camila R.",
    text: "Mis cejas quedaron naturales y simétricas. La atención es impecable, te explican todo antes y durante. Volveré sin duda.",
    role: "Micropigmentación de cejas",
  },
  {
    name: "Lucía M.",
    text: "El lifting de pestañas me cambió la mirada. Espacio súper limpio y elegante. Vale cada sol.",
    role: "Lifting de pestañas",
  },
  {
    name: "Andrea P.",
    text: "Encontré mi beauty center de cabecera. Profesionales, puntuales y resultados de verdad premium.",
    role: "Skincare + Nail Bar",
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre Microblading, Nanoblading y Microshading?",
    a: "Microblading: técnica pelo a pelo con acabado natural, ideal para cejas con vello grueso y piel normal a grasa. Su duración aproximada es de 8 a 12 meses.\n\nNanoblading: trazos ultra finos y precisos que imitan el vello natural. Recomendado para vello delgado y todo tipo de piel. Duración estimada de 6 a 10 meses. No se realiza sobre cejas con trabajos previos.\n\nMicroshading: combinación de efecto pelo a pelo y sombreado suave para un acabado más definido. Ideal para piel sensible o con poros visibles. Su duración puede variar entre 12 y 18 meses.",
  },
  {
    q: "¿La micropigmentación es dolorosa?",
    a: "Aplicamos anestesia tópica profesional antes y durante el procedimiento para garantizar mayor confort. En la mayoría de los casos, la sensación se percibe como una leve incomodidad y no como dolor.",
  },
  {
    q: "¿Qué incluye la segunda sesión de micropigmentación?",
    a: "Todas nuestras micropigmentaciones incluyen una segunda sesión de retoque sin costo, realizada aproximadamente a los 30 días. Esta etapa es fundamental para perfeccionar el resultado, reforzar la pigmentación y garantizar un acabado óptimo y duradero.",
  },
  {
    q: "¿Filigran ofrece servicio de uñas?",
    a: "Actualmente no contamos con servicio de uñas. Hoy nos enfocamos exclusivamente en micropigmentación y tratamientos estéticos especializados.",
  },
  {
    q: "¿Se aceptan devoluciones?",
    a: "Las reservas abonadas mediante Yape o transferencia Interbank pueden solicitar devolución siempre que la cancelación se realice con más de 24 horas de anticipación.\n\nLos pagos realizados a través de link de pago Niubiz no cuentan con devolución debido a la restricción SUNAT.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Locations />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" className="flex items-baseline gap-2 text-cream">
          <span className="font-serif text-2xl tracking-[0.25em]">FILIGRAN</span>
          <span className="hidden text-[10px] tracking-[0.3em] opacity-70 sm:inline">
            BEAUTY CENTER
          </span>
        </a>
        <a
          href={wa()}
          target="_blank"
          rel="noopener"
          className="hidden rounded-full bg-cream/95 px-5 py-2 text-xs font-medium tracking-widest text-cocoa transition hover:bg-cream sm:inline-flex"
        >
          AGENDAR
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-cocoa text-cream">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Mujer con cejas y maquillaje natural perfecto en Filigran Beauty Center"
          width={1024}
          height={1280}
          className="h-full w-full object-cover object-[55%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/95 via-cocoa/20 to-cocoa/40" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:justify-center sm:pb-24 sm:pt-32 opacity-65">
        <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
          Filigran · Beauty Center
        </p>
        <h1 className="max-w-2xl font-serif text-[44px] leading-[1.02] sm:text-6xl md:text-7xl">
          Realzamos <em className="not-italic text-gold">tu belleza</em>.
        </h1>
        <p className="mt-6 max-w-lg text-base text-cream/85 sm:text-lg">
          Perfección estética para inspirar tu confianza y descubrir la mejor expresión de tu belleza natural.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={wa()}
            target="_blank"
            rel="noopener"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-4 text-base font-medium text-white shadow-lg shadow-whatsapp/30 transition hover:bg-whatsapp-dark sm:px-7"
          >
            <WaIcon className="h-5 w-5" />
            Agendar por WhatsApp
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#servicios"
            className="inline-flex h-14 items-center justify-center rounded-full border border-cream/30 px-4 text-sm tracking-wider text-cream/90 transition hover:border-cream/70 sm:px-7"
          >
            VER SERVICIOS
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-cream/70">
          <span className="flex items-center gap-2">
            <Stars /> 4.7/5 en Google
          </span>
          <span>+3 años de experiencia</span>
          <span>2 locales en Lima</span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Pigmentos certificados",
    "Bioseguridad nivel clínico",
    "Especialistas certificadas",
  ];
  return (
    <div className="border-y border-border bg-muted/60">
      <div className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-5 py-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((i) => (
          <span key={i} className="whitespace-nowrap">· {i}</span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">Servicios</p>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Realza tu belleza y vive la mejor experiencia
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada protocolo combina técnica, productos premium y una experiencia
            cálida pensada para que salgas radiante.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={wa()}
              target="_blank"
              rel="noopener"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cocoa">
                  Consultar por WhatsApp
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const pillars = [
    {
      t: "Resultados naturales",
      d: "Diseño facial personalizado: nunca dos rostros iguales, nunca dos protocolos iguales.",
    },
    {
      t: "Especialistas certificadas",
      d: "Equipo formado en las mejores academias de Latinoamérica.",
    },
    {
      t: "Productos premium",
      d: "Pigmentos y cosmética profesional certificados por DIGEMID.",
    },
    {
      t: "Experiencia cálida",
      d: "Un espacio elegante, íntimo y pensado para que te sientas en casa.",
    },
  ];
  return (
    <section className="bg-cocoa px-5 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">
              ¿Por qué Filigran?
            </p>
            <h2 className="text-4xl text-cream sm:text-5xl">
              Lo que nos hace <em className="text-gold not-italic">diferentes</em>.
            </h2>
          </div>
          <p className="text-cream/75">
            Más que un beauty center: una experiencia premium donde cada
            detalle —desde el primer mensaje hasta el último retoque— está
            pensado para ti.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.t} className="bg-cocoa p-7">
              <div className="mb-4 font-serif text-2xl text-gold">0{i + 1}</div>
              <h3 className="text-xl text-cream">{p.t}</h3>
              <p className="mt-2 text-sm text-cream/70">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold">
          <span>✦</span>
          <span>+10.000 clientas felices</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">
              Resultados reales
            </p>
            <h2 className="text-4xl sm:text-5xl">Antes & después.</h2>
          </div>
          <a
            href={wa()}
            target="_blank"
            rel="noopener"
            className="text-sm text-cocoa underline underline-offset-4"
          >
            Tu cambio puede comenzar hoy →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[cejasImg, pestanasImg, labiosImg].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Resultado de tratamiento ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-cocoa/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">
                Caso real · 2026
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Escríbenos",
      d: "Cuéntanos qué buscas por WhatsApp. Te asesoramos sin compromiso.",
    },
    {
      n: "02",
      t: "Diseñamos tu cita",
      d: "Agendamos día, hora y local. Recibes recomendaciones previas.",
    },
    {
      n: "03",
      t: "Disfrútalo",
      d: "Vives la experiencia Filigran y sales con el resultado que soñaste.",
    },
  ];
  return (
    <section className="bg-secondary px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">Cómo funciona</p>
        <h2 className="mb-12 text-4xl sm:text-5xl">Reservar es muy simple.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-cocoa/20 pt-6">
              <div className="font-serif text-5xl text-gold">{s.n}</div>
              <h3 className="mt-3 text-2xl">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">Testimonios</p>
            <h2 className="text-4xl sm:text-5xl">Hablan nuestras clientas.</h2>
          </div>
          <div className="hidden text-right sm:block">
            <div className="flex items-center justify-end gap-2">
              <Stars className="text-gold" /> <span className="font-medium">4.9</span>
            </div>
            <p className="text-xs text-muted-foreground">+80 reseñas verificadas</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonios.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card p-7 ring-1 ring-border">
              <Stars className="text-gold" />
              <blockquote className="mt-4 font-serif text-xl leading-snug">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const locs = [
    { n: "Filigran San Isidro · Sede 1", a: "Calle Los Laureles 519, Segundo Piso · San Isidro", h: "Lun–Vie · 9:00–20:00 · Sáb 9:00–19:00", img: sedeSanIsidro.url, alt: "Recepción de Filigran sede San Isidro" },
    { n: "Filigran Miraflores · Sede 2", a: "Calle Berlín 608, Segundo Piso · Miraflores", h: "Lun–Vie · 9:00–20:00 · Sáb 9:00–19:00", img: sedeMiraflores.url, alt: "Fachada del edificio SoHo Life — sede Filigran Miraflores" },
  ];
  return (
    <section className="bg-cocoa px-5 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">Locales</p>
          <h2 className="text-4xl text-cream sm:text-5xl">Elegí tu espacio Filigran y viví la experiencia.</h2>
          <p className="mt-4 text-cream/75">
            Elige el local que te quede más cerca. Atención con cita previa
            para garantizar tu experiencia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {locs.map((l) => (
            <div key={l.n} className="overflow-hidden rounded-2xl bg-cocoa ring-1 ring-cream/15">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={l.img}
                  alt={l.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl text-cream">{l.n}</h3>
                  <a
                    href={wa()}
                    target="_blank"
                    rel="noopener"
                    className="text-xs uppercase tracking-[0.25em] text-gold"
                  >
                    Reservar →
                  </a>
                </div>
                <p className="mt-2 text-sm text-cream/70">{l.a}</p>
                <p className="mt-1 text-xs text-cream/50">{l.h}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FAQ() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">Dudas frecuentes</p>
          <h2 className="text-4xl sm:text-5xl">Tranquila, tenemos respuestas.</h2>
          <a
            href={wa()}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-block text-sm text-cocoa underline underline-offset-4"
          >
            ¿Otra pregunta? Escríbenos por WhatsApp →
          </a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="font-serif text-xl">{f.q}</span>
                <span className="text-2xl text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-cocoa to-[oklch(0.28_0.025_50)] px-7 py-16 text-center text-cream sm:py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold">Tu cita te espera</p>
        <h2 className="mx-auto max-w-2xl text-4xl text-cream sm:text-5xl">
          Reserva en menos de <em className="not-italic text-gold">5 minutos</em>.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-cream/75">
          Te respondemos al instante por WhatsApp. Sin formularios, sin
          esperas. Solo escríbenos y coordinamos.
        </p>
        <a
          href={wa()}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-8 text-base font-medium text-white shadow-lg shadow-whatsapp/30 transition hover:bg-whatsapp-dark"
        >
          <WaIcon className="h-5 w-5" />
          Reservar por WhatsApp
        </a>
        <p className="mt-4 text-xs text-cream/50">
          Lun–Vie 9:00–20:00 · Sáb 9:00–19:00
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 px-5 py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-serif text-lg tracking-[0.25em] text-cocoa">FILIGRAN</span>
        <p>© {new Date().getFullYear()} Filigran Beauty Center · Lima, Perú</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/filigranbc/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition hover:text-cocoa"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@filigranbc?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground transition hover:text-cocoa"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.26 0 .5.04.74.1v-3.5a6.33 6.33 0 0 0-.74-.05A6.38 6.38 0 0 0 2 15.38 6.38 6.38 0 0 0 8.38 21.76c3.42 0 6.2-2.69 6.36-6.07V8.73a8.15 8.15 0 0 0 4.85 1.61V6.69z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/people/Filigran-Beauty-Center/100075780114868/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground transition hover:text-cocoa"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener"
      aria-label="Chatear por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 transition-all duration-500 hover:bg-whatsapp-dark sm:bottom-7 sm:right-7 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
      <WaIcon className="relative h-8 w-8" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-cocoa">
        1
      </span>
    </a>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-gold ${className}`} aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.8L0 32l8.5-2.2c2.3 1.3 4.9 1.9 7.5 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.4 20.6 2.7 18.3 2.7 16 2.7 8.7 8.7 2.7 16 2.7S29.3 8.7 29.3 16 23.3 28.8 16 28.8zm7.3-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6 0 2.1 1.5 4.2 1.7 4.5.2.3 3 4.5 7.2 6.3 1 .4 1.8.7 2.4.9.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.2-.7.2-1.4.2-1.5-.1-.2-.4-.3-.8-.5z" />
    </svg>
  );
}
