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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
          Trusted Digital Partner
        </p>

        <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl font-semibold text-brand-blue leading-tight max-w-[22ch] mx-auto transition-all duration-700">
          {active.service} Services in{" "}
          <span className="text-brand-orange">{active.city}</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[34ch] mx-auto mt-6">
          High‑performance websites, SEO‑ready architecture, and digital
          solutions designed to scale businesses.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-xl font-medium active:scale-[0.98]"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium border text-brand-blue"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
