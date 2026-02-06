import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title:
    "Web Designing Services in Hyderabad | Best Web Design Company in Hyderabad – MrTechies",
  description:
    "MrTechies is a leading web designing company in Hyderabad offering SEO‑optimized, mobile‑friendly and high‑converting websites for businesses, startups and local brands.",
  keywords: [
    "web designing services in hyderabad",
    "best web design company in hyderabad",
    "professional web designers hyderabad",
    "website development company hyderabad",
    "seo friendly web design hyderabad",
    "business website designers hyderabad",
    "local web design company hyderabad",
  ],
  alternates: {
    canonical: "https://mrtechies.com/web-designing-services-hyderabad",
  },
  openGraph: {
    title:
      "Web Designing Services in Hyderabad | Best Web Design Company – MrTechies",
    description:
      "Looking for the best web designing services in Hyderabad? MrTechies builds fast, SEO‑ready and conversion‑focused websites for growing businesses.",
    url: "https://mrtechies.com/web-designing-services-hyderabad",
    siteName: "MrTechies",
    type: "website",
  },
};

/* ===================== PAGE ===================== */
export default function HyderabadWebDesignPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 text-brand-dark">
      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-blue mb-6 leading-tight">
          Web Designing Services in Hyderabad
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-10">
          MrTechies is a{" "}
          <strong>professional web designing company in Hyderabad</strong>{" "}
          delivering modern, SEO‑optimized and high‑performing websites that help
          businesses attract customers and grow online.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-orange text-white px-8 py-4 rounded-xl font-medium"
          >
            Get Free Consultation
          </Link>
          <a
            href="tel:+918309570802"
            className="border px-8 py-4 rounded-xl font-medium text-brand-blue"
          >
            Call Now +91‑8309570802
          </a>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {[
          ["SEO‑First", "Website Architecture"],
          ["Mobile‑First", "Responsive Design"],
          ["Fast Loading", "Core Web Vitals"],
          ["Hyderabad", "Local Experts"],
        ].map(([title, label]) => (
          <div key={title}>
            <p className="text-xl font-semibold text-brand-blue">{title}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </section>

      {/* ================= INTRO ================= */}
      <section className="mt-32 max-w-6xl mx-auto text-center">
        <p className="leading-relaxed">
          Hyderabad is a highly competitive digital market. Businesses here need
          websites that are not only visually appealing but also fast,
          SEO‑friendly and optimized for Google search results.
        </p>
        <p className="mt-4 leading-relaxed">
          At MrTechies, we specialize in building websites for Hyderabad‑based
          businesses with a strong focus on{" "}
          <strong>
            SEO, performance, user experience and lead conversion
          </strong>
          .
        </p>

        {/* INTERNAL LINK (CONTEXTUAL, SEO‑SAFE) */}
        <p className="mt-6">
          👉 Learn more about our approach in our guide on{" "}
          <Link
            href="/blog/website-cost-for-business-in-hyderabad"
            className="text-brand-blue underline"
          >
            website cost for businesses in Hyderabad
          </Link>
          .
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="mt-28">
        <h2 className="text-3xl font-semibold text-brand-blue mb-12 text-center">
          Our Web Designing Services in Hyderabad
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            [
              "Custom Website Design",
              "Tailor‑made website designs aligned with your brand identity",
            ],
            [
              "Business Websites",
              "Professional websites for startups and local businesses",
            ],
            [
              "E‑commerce Websites",
              "High‑converting online stores with modern UX & payments",
            ],
            [
              "SEO‑Friendly Development",
              "Websites structured to rank on Google search results",
            ],
            [
              "Website Redesign",
              "Modern redesigns for outdated or slow websites",
            ],
            [
              "Landing Pages",
              "Conversion‑focused landing pages for ads and campaigns",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="border rounded-2xl p-8 transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-brand-blue mb-4">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="mt-28 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6 text-center">
          Why Choose MrTechies for Web Design in Hyderabad?
        </h2>
        <ul className="space-y-4">
          <li>✔ SEO‑first website structure for higher Google rankings</li>
          <li>✔ Fast loading & Core Web Vitals optimization</li>
          <li>✔ Mobile‑friendly and responsive design</li>
          <li>✔ Affordable pricing for startups and SMEs</li>
          <li>✔ Long‑term support, updates and maintenance</li>
        </ul>
      </section>

      {/* ================= LOCAL AREAS ================= */}
      <section className="mt-28 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6">
          Serving Businesses Across Hyderabad
        </h2>
        <p className="leading-relaxed">
          We provide professional web designing services across Hyderabad
          including Hitech City, Gachibowli, Madhapur, Kukatpally, Banjara Hills,
          Jubilee Hills and nearby areas.
        </p>

        {/* INTERNAL LINK (SUPPORTING BLOG) */}
        <p className="mt-4">
          Also read:{" "}
          <Link
            href="/blog/best-website-design-for-small-businesses-hyderabad"
            className="text-brand-blue underline"
          >
            Best website design for small businesses in Hyderabad
          </Link>
        </p>
      </section>

      {/* ================= FAQ CONTENT ================= */}
      <section className="mt-28 max-w-6xl mx-auto bg-brand-blue text-white rounded-2xl px-10 py-12">
        <h2 className="text-3xl font-semibold text-brand-orange mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <p>
            <strong>How much does web design cost in Hyderabad?</strong>
            <br />
            Website pricing typically ranges from ₹15,000 to ₹60,000 depending on
            design complexity, features and SEO requirements.
          </p>

          <p>
            <strong>Is SEO included with web design?</strong>
            <br />
            Yes. All our websites are built with SEO‑friendly architecture and
            performance best practices.
          </p>

          <p>
            <strong>How long does it take to build a website?</strong>
            <br />
            Most business websites are completed within 2–4 weeks.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-32 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-brand-blue mb-6">
          Need the Best Web Designing Services in Hyderabad?
        </h2>
        <p className="mb-8">
          Partner with MrTechies to build a website that ranks on Google and
          converts visitors into customers.
        </p>
        <Link
          href="/contact"
          className="bg-brand-orange text-white px-10 py-4 rounded-xl font-medium"
        >
          Talk to Our Team
        </Link>
      </section>

      {/* ================= LOCAL BUSINESS SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MrTechies",
            url: "https://mrtechies.com/web-designing-services-hyderabad",
            telephone: "+91 8309570802",
            areaServed: {
              "@type": "City",
              name: "Hyderabad",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
            makesOffer: {
              "@type": "Service",
              name: "Web Designing Services in Hyderabad",
            },
          }),
        }}
      />

      {/* ================= FAQ PAGE SCHEMA (AEO BOOST) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does web design cost in Hyderabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Web design cost in Hyderabad typically ranges from ₹15,000 to ₹60,000 depending on design complexity, SEO requirements and features.",
                },
              },
              {
                "@type": "Question",
                name: "Is SEO included with web design services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Professional web designing services include SEO‑friendly structure, performance optimization and mobile responsiveness.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a business website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Most business websites are completed within 2 to 4 weeks depending on scope and features.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
