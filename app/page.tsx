import { Metadata } from "next";
import Link from "next/link";
import HeroClient from "@/components/HeroClient";
import {
  Rocket,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Store,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

/* ===================== SEO META ===================== */

export const metadata: Metadata = {
  title:siteConfig.title,
  description:
    "MrTechies is a Low-Cost and Best web development and SEO company in Hyderabad serving Telangana & Andhra Pradesh. We build high‑performance websites, SEO‑ready platforms, and growth‑focused digital solutions.",
  keywords: [
    "Web Development Company in Hyderabad",
    "Web Design Company in Hyderabad",
    "SEO Company in Hyderabad",
    "Web Development in Vizag",
    "Web Design in Vijayawada",
    "SEO Services in Andhra Pradesh",
    "Next.js Web Development India",
    "Affordable Web Developers Hyderabad",
    "Digital Marketing Company Telangana",
  ],
  openGraph: {
    title:
      "MrTechies | High‑Performance Web Development & SEO Company in India",
    description:
      "Serving Hyderabad, Vizag, Vijayawada & across Telangana and Andhra Pradesh with modern web development, SEO, and digital growth solutions.",
    url: "https://mrtechies.com",
    siteName: "MrTechies",
    type: "website",
  },
  alternates: {
    canonical: "https://mrtechies.com",
  },
};
const INDUSTRIES = [
  {
    label: "Startups",
    icon: Rocket,
  },
  {
    label: "Real Estate",
    icon: Building2,
  },
  {
    label: "Healthcare",
    icon: HeartPulse,
  },
  {
    label: "Education",
    icon: GraduationCap,
  },
  {
    label: "E‑commerce",
    icon: ShoppingBag,
  },
  {
    label: "Local Businesses",
    icon: Store,
  },
];

export default function Home() {
  return (
    <main aria-label="MrTechies Home Page">
      {/* ================= HERO (CLIENT) ================= */}
      <HeroClient />

      {/* ================= TRUST ================= */}
      <section className="pt-0 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {[
              ["100+", "Projects Delivered"],
              ["5+", "Years Experience"],
              ["SEO‑First", "Development"],
              ["Pan‑India", "Service Coverage"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-semibold text-brand-blue">
                  {value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-22">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-blue mb-4">
              Our Professional Services
            </h2>
            <p className="text-gray-600 text-lg">
              End‑to‑end digital solutions designed for visibility, performance,
              and long‑term business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              ["Web Designing", "User‑centric, conversion‑focused design systems"],
              ["Web Development", "Fast, scalable, SEO‑ready architectures"],
              ["SEO Optimization", "Search visibility that compounds over time"],
              ["App Development", "Reliable web & mobile applications"],
              ["Digital Marketing", "Performance‑driven growth campaigns"],
              ["Content & Video", "Stories that build trust and recall"],
              ["CRM Solutions", "Automation & operational clarity"],
            ].map(([title, desc]) => (
              <div
              
                key={title}
                className="bg-white p-8 rounded-2xl border hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-brand-blue mb-3">
                <Link href='/services'>
                  {title}
                  </Link>
                </h3>
                <p className="text-gray-600"><Link href='/services'>{desc}</Link></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= INDUSTRIES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-blue mb-4">
              Industries We Work With
            </h2>
            <p className="text-gray-600 text-lg">
              We design and build digital solutions tailored for real‑world business
              challenges across multiple industries.
            </p>
            <p className="text-brand-blue"><Link href='/how-to-choose-best-web-designing-company-hyderabad'>How to Choose Best Web Designing Services Hyderabad?</Link></p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="
                  group
                  bg-white
                  border
                  rounded-2xl
                  px-6 py-10
                  text-center
                  cursor-pointer
                  transition-all duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:shadow-xl
                  hover:-translate-y-1
                "
              >
                {/* ICON */}
                <Icon
                  size={28}
                  className="
                    mx-auto mb-4
                    text-gray-400
                    transition-colors duration-500
                    group-hover:text-brand-orange
                  "
                />

                {/* LABEL */}
                <p
                  className="
                    text-sm font-medium
                    text-gray-700
                    transition-colors duration-500
                    group-hover:text-brand-blue
                  "
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
        <section className="py-18 relative">
          <div className="max-w-7xl mx-auto px-6 relative">

            <div className="max-w-3xl mb-24">
              <h2 className="text-3xl sm:text-4xl font-semibold text-brand-blue mb-4">
                Our Proven Process
              </h2>
              <p className="text-gray-600 text-lg">
                A structured, transparent workflow designed for clarity and results.
              </p>
            </div>

            {/* Connecting Line (Desktop only) */}
            <div className="hidden lg:block process-line" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {[
                ["01", "Discover", "Understand goals, users & competition"],
                ["02", "Design", "UX‑focused structure & brand clarity"],
                ["03", "Develop", "Fast, scalable & SEO‑ready builds"],
                ["04", "Launch", "Deploy, monitor & continuously improve"],
              ].map(([step, title, desc]) => (
                <div
                  key={step}
                  className="
                    bg-white
                    border
                    rounded-2xl
                    p-8
                    text-center
                    transition-all duration-500
                    hover:shadow-xl
                    hover:-translate-y-1
                  "
                >
                  <span className="text-sm font-semibold text-brand-orange">
                    STEP {step}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-blue mt-4 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-22">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-brand-blue mb-6">
            Serving Businesses Across Telangana & Andhra Pradesh
          </h2>
          <p className="text-xl font-semibold text-brand-blue mb-6"><Link href='/web-designing-services-hyderabad'>Web Designing Services in Hyderabad</Link></p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            MrTechies provides web development, web design, SEO, and digital marketing
            services in Hyderabad, Visakhapatnam (Vizag), Vijayawada, and across
            Telangana and Andhra Pradesh through a flexible remote‑first model.
          </p>
        </div>
      </section>
      {/* ================= WHY MRTECHIES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-brand-blue mb-6 text-center">
                Why Businesses Choose MrTechies
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                We don’t sell websites. We build digital systems that generate trust,
                traffic, and long‑term growth.
              </p>

              <ul className="space-y-4 text-gray-600">
                <li>✔ SEO‑ready architecture by default</li>
                <li>✔ Business‑first UX & conversion strategy</li>
                <li>✔ Transparent pricing & honest timelines</li>
                <li>✔ Long‑term support after launch</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                ["Fast", "Performance‑Optimized Builds"],
                ["Scalable", "Future‑Ready Architecture"],
                ["Secure", "Modern Best Practices"],
                ["Reliable", "Ongoing Support"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="
                    bg-white
                    border
                    rounded-2xl
                    p-6
                    transition-all duration-500
                    hover:shadow-xl
                  "
                >
                  <h3 className="font-semibold text-brand-blue mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* ================= FINAL CTA ================= */}
      <section className="bg-brand-blue py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let’s Build Something That Performs
          </h2>
          <p className="text-lg opacity-90 mb-10">
            From Hyderabad to Vizag and Vijayawada — we help businesses grow with
            reliable, scalable, and SEO‑ready digital solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange px-8 py-4 rounded-xl font-medium"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MrTechies",
            url: "https://mrtechies.com",
            logo: "https://mrtechies.com/techies.png",
            areaServed: [
              "Hyderabad",
              "Telangana",
              "Visakhapatnam",
              "Vijayawada",
              "Andhra Pradesh",
            ],
            sameAs: [],
          }),
        }}
      />
    </main>
  );
}
