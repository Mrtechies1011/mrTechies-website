"use client";

import { useState } from "react";
import ServiceImmersion from "@/components/ServiceImmersion";

const SERVICES = [
  {
    id: "design",
    label: "Web Designing",
    summary: "Visual identity, UX clarity, brand trust",
  },
  {
    id: "development",
    label: "Web Development",
    summary: "Performance, scalability, clean architecture",
  },
  {
    id: "seo",
    label: "SEO Optimization",
    summary: "Visibility, intent‑driven traffic, growth",
  },
  {
    id: "app",
    label: "App Development",
    summary: "User‑centric, fast, reliable apps",
  },
  {
    id: "crm",
    label: "CRM Solutions",
    summary: "Automation, structure, operational clarity",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    summary: "Reach, conversions, sustainable funnels",
  },
  {
    id: "content",
    label: "Content & Video Editing",
    summary: "Storytelling, engagement, recall",
  },
];

export default function ServicesClient() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <>
      {/* IMMERSION MODE */}
      {activeService && (
        <ServiceImmersion
          service={activeService}
          onExit={() => setActiveService(null)}
        />
      )}

      {!activeService && (
        <main className="min-h-[calc(100vh-120px)] flex items-center justify-center">
          <section className="w-full max-w-6xl px-5 sm:px-6">

            {/* HEADER */}
            <div className="text-center mb-20 sm:mb-28">
              <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5 mt-5">
                Our Capabilities
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-blue mb-8">
                Services We Provide
              </h1>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Each service is designed as a complete system — balancing design,
                technology, and business intent. Choose what fits your goals.
              </p>
            </div>

            {/* SERVICES GRID */}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-14">
              {SERVICES.map((s) => {
                const isFocused = focus === s.id;
                const isDimmed = focus && focus !== s.id;

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveService(s.id)}
                    onMouseEnter={() => setFocus(s.id)}
                    onMouseLeave={() => setFocus(null)}
                    className={`
                      group relative
                      p-8 sm:p-10 md:p-12
                      rounded-3xl
                      border
                      backdrop-blur-md
                      bg-white/70
                      text-left
                      cursor-pointer
                      group-hover:text-brand-blue
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isFocused
                          ? "scale-[1.07] shadow-2xl bg-brand-blue"
                          : ""
                      }
                      ${isDimmed ? "opacity-40" : "opacity-100"}
                    `}
                    
                  >
                    {/* TITLE */}
                    <h3 className="
                      text-xl sm:text-2xl
                      font-semibold
                      mb-3 sm:mb-4
                      transition-colors duration-700
                      text-gray-900
                      group-hover:text-brand-blue
                      
                    ">
                      {s.label}
                    </h3>

                    {/* SUMMARY */}
                    <p className="
                      text-sm sm:text-base
                      leading-relaxed
                      max-w-sm
                      transition-colors duration-700
                      text-gray-600
                      group-hover:text-brand-dark/80
                    ">
                      {s.summary}
                    </p>

                    {/* CTA */}
                    <div className={`
                      mt-6
                      text-sm font-medium
                      transition-all duration-700
                      text-brand-blue
                      group-hover:text-brand-orange

                      md:absolute md:bottom-10 md:right-10
                      ${
                        isFocused
                          ? "md:opacity-100 md:translate-x-0"
                          : "md:opacity-0 md:translate-x-3"
                      }
                    `}>
                      Explore →
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FOOT NOTE */}
            <div className="text-center mt-24 text-sm text-gray-400">
              Tap a service to explore it in depth
            </div>
          </section>
          
        </main>
      )}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                "@type": "Question",
                name: "What web development services does MrTechies offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                    "MrTechies offers web design, web development, SEO optimization, app development, digital marketing, CRM solutions, and content creation services.",
                },
                },
                {
                "@type": "Question",
                name: "Which cities does MrTechies serve?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                    "MrTechies serves Hyderabad, Vizag, Vijayawada, Telangana, Andhra Pradesh, and clients across India.",
                },
                },
                {
                "@type": "Question",
                name: "Is SEO included in web development?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                    "Yes, all websites built by MrTechies follow SEO‑first architecture including performance, structure, and technical optimization.",
                },
                },
            ],
            }),
        }}
        /> 
    </>
  );
}
