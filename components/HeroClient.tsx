"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_ROTATIONS = [
  { service: "Web Development", city: "Hyderabad" },
  { service: "Web Designing", city: "Hyderabad" },
  { service: "SEO Optimization", city: "Hyderabad" },
  { service: "Web Development", city: "Vizag" },
  { service: "Web Designing", city: "Vijayawada" },
  { service: "Digital Marketing", city: "Telangana" },
  { service: "SEO Services", city: "Andhra Pradesh" },
];

export default function HeroClient() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % HERO_ROTATIONS.length),
      isMobile ? 4200 : 2600
    );
    return () => clearInterval(interval);
  }, []);

  const active = HERO_ROTATIONS[index];

  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/services/bg.webp')",
      }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* TRUST LINE */}
        <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
          Trusted Digital Growth Partner in South India
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-blue leading-tight max-w-3xl mx-auto transition-all duration-700">
          {active.service} Services in{" "}
          <span className="text-brand-orange">{active.city}</span>
        </h1>

        {/* SUB TEXT */}
        <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          We build high-performance websites, SEO systems, and digital marketing
          strategies that help businesses generate traffic, leads, and long-term growth.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">

          <Link
            href="/contact"
            className="bg-brand-orange hover:bg-orange-600 transition-all text-white px-8 py-4 rounded-2xl font-semibold shadow-lg w-full sm:w-auto"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/services"
            className="border border-gray-300 hover:border-brand-blue transition-all px-8 py-4 rounded-2xl font-semibold text-brand-blue w-full sm:w-auto"
          >
            Explore Services
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdptuzktYlRqbB1q6ZwF76d9lHJWD1PYaaC0MZ-Xe0P03lXGA/viewform"
            target="_blank"
            className="text-brand-orange font-semibold underline underline-offset-4"
          >
            Internship Program →
          </Link>

        </div>

      </div>
    </section>
  );
}