import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Services in Hyderabad & Bangalore | Regional Lead Capture",
  description: "Dominate geographical intent queries with professional local seo services. Capture organic map pack authority across regional tech and retail spaces.",
  keywords: ["local seo services", "seo services in hyderabad", "seo services in bangalore", "seo services near me"],
};

export default function LocalSEOPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-sky-50 py-28 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-sky-900 font-bold uppercase tracking-wider text-sm">Geographical Search Domination</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Hyper-Targeted <span className="text-sky-800">Local SEO Services</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Capture ready-to-buy consumers down to exact pin codes. Our tailored <strong className="text-sky-900">local SEO services</strong> unlock peak placement visibility, transforming regional proximity signals into high-converting revenue streams for those searching for <strong className="text-sky-900">SEO services near me</strong>.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/contact" className="bg-sky-800 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-sky-900 transition-all">
              Dominate My Local Market
            </Link>
          </div>
        </div>
      </section>

      {/* ================= GEOGRAPHIC REGIONS GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-sky-900">Engineered Regional Visibility Footprint</h2>
          <p className="text-gray-600 mt-2">
            Precision proximity engineering ensuring your brand properties lead geographic maps and localized search results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "SEO Services in Hyderabad",
              description: "Capturing the tech enterprise layers across HITEC City and Gachibowli with professional SEO services in Hyderabad that drive local growth.",
              icon: (
                <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
            },
            {
              title: "SEO Services in Bangalore",
              description: "Establishing ultimate local search parameters for SaaS brands and startups with specialized SEO services in Bangalore.",
              icon: (
                <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: "Map Pack Optimization",
              description: "Unlocking prominent visibility metrics via our local SEO services, ensuring you rank higher for relevant search terms.",
              icon: (
                <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-xl hover:border-sky-800 group text-center"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-sky-50 mb-6 group-hover:bg-orange-50 transition-colors">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-sky-900 mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INBOUND FOOTER CROSSLINK ================= */}
      <section className="bg-slate-50 border-t py-12 text-center">
        <p className="text-sm text-gray-600">
          Running an inventory-heavy digital retail shop instead? Check out our dedicated <Link href="/seo-services/content-seo" className="text-sky-800 font-semibold underline hover:text-sky-900">Enterprise Ecommerce SEO Services</Link>.
        </p>
      </section>

    </main>
  );
}