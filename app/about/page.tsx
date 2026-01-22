import { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "About MrTechies | Web Development & SEO Company in Hyderabad",
  description:
    "Learn about MrTechies, a trusted web design and web development agency based in Hyderabad, serving businesses across Telangana and Andhra Pradesh including Vizag and Vijayawada.",
  keywords: [
    "About MrTechies",
    "Web Development Company in Hyderabad",
    "Web Design Agency Hyderabad",
    "SEO Company in Hyderabad",
    "Web Developers in Telangana",
    "Web Development in Andhra Pradesh",
    "Web development Services in Visakhapatnam",
    "Best Web development Services in Visakhapatnam Andhra Pradesh",
    "Vizag Web Development Company",
    "Vijayawada Web Designers",
  ],
  openGraph: {
    title: "About MrTechies | Web Development & SEO Agency",
    description:
      "MrTechies is a Hyderabad-based web development and SEO agency serving Telangana and Andhra Pradesh.",
    url: "https://mrtechies.com/about",
    siteName: "MrTechies",
    type: "website",
  },
  alternates: {
    canonical: "https://mrtechies.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MrTechies",
            url: "https://mrtechies.com",
            logo: "https://mrtechies.com/logo.png",
            description:
              "MrTechies is a professional web design, web development, and SEO agency based in Hyderabad, serving Telangana and Andhra Pradesh.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
            areaServed: [
              "Hyderabad",
              "Telangana",
              "Andhra Pradesh",
              "Visakhapatnam",
              "Vijayawada",
            ],
            sameAs: [
              "https://www.instagram.com/mrtechies",
              "https://www.linkedin.com/company/mrtechies",
              "https://www.facebook.com/mrtechies",
              "https://twitter.com/mrtechies",
            ],
          }),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="mb-28 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-semibold text-brand-blue mb-8">
          About MrTechies
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          MrTechies is a Hyderabad‑based web design and web development agency
          helping businesses across Telangana and Andhra Pradesh build modern,
          high‑performance, and SEO‑friendly digital experiences.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/mrtechies"
            aria-label="MrTechies Instagram"
            className="text-gray-500 hover:text-brand-blue transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/mrtechies"
            aria-label="MrTechies LinkedIn"
            className="text-gray-500 hover:text-brand-blue transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.facebook.com/mrtechies"
            aria-label="MrTechies Facebook"
            className="text-gray-500 hover:text-brand-blue transition"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://twitter.com/mrtechies"
            aria-label="MrTechies Twitter"
            className="text-gray-500 hover:text-brand-blue transition"
          >
            <Twitter size={22} />
          </a>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="mb-28 max-w-4xl">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          MrTechies was founded with a simple belief — businesses deserve websites
          that don’t just look good, but work hard for their growth. We partner
          with startups, small businesses, and growing brands to create digital
          platforms that deliver real business value.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Our team blends modern technologies like Next.js and React with
          SEO‑first strategies to build fast, scalable, and future‑ready
          websites. Every project is approached with clarity, care, and long‑term
          thinking.
        </p>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="mb-28 max-w-4xl">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6">
          What We Do
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          We provide complete digital solutions designed to help businesses build
          a strong online presence and compete confidently in a digital‑first
          world.
        </p>

        <div className="space-y-4 text-gray-600">
          <p>• Custom website design focused on usability and brand identity</p>
          <p>• High‑performance web development using modern frameworks</p>
          <p>• SEO optimization for long‑term search visibility</p>
          <p>• Mobile and web application development</p>
          <p>• Digital marketing, content creation, and video editing</p>
          <p>• CRM solutions and business automation systems</p>
        </div>
      </section>

      {/* ================= WHERE WE SERVE ================= */}
      <section className="mb-28 max-w-4xl">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6">
          Where We Work
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          While MrTechies is based in Hyderabad, our work extends across Telangana
          and Andhra Pradesh. We collaborate seamlessly with clients through a
          flexible, remote‑friendly workflow.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          In Telangana, we support businesses in Hyderabad and surrounding
          regions with web design, web development, SEO, and digital marketing
          tailored to local market needs.
        </p>

        <p className="text-gray-600 leading-relaxed">
          In Andhra Pradesh, we work with clients in Visakhapatnam (Vizag),
          Vijayawada, and nearby cities, helping them build scalable and
          professional digital platforms.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mb-28 max-w-4xl">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6">
          Why Choose MrTechies
        </h2>

        <div className="space-y-4 text-gray-600">
          <p>• Business‑focused solutions aligned with your goals</p>
          <p>• SEO‑ready architecture and performance‑optimized builds</p>
          <p>• Transparent pricing with no hidden surprises</p>
          <p>• Clear communication and structured execution</p>
          <p>• Reliable support even after launch</p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-brand-blue rounded-3xl py-20 px-10 text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Let’s Build Something Meaningful Together
        </h2>

        <p className="text-lg mb-10 opacity-90 max-w-3xl mx-auto">
          Whether you’re launching a new idea or improving an existing business,
          MrTechies is here to help you create a digital presence you can be proud of.
        </p>

        <a
          href="/contact"
          className="inline-block bg-brand-orange px-10 py-4 rounded-lg font-medium"
        >
          Talk to Our Team
        </a>
      </section>

    </main>
  );
}
