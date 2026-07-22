import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce SEO Services & Content Architecture | Enterprise Growth",
  description: "Scale structural authority using advanced programmatic content modeling. High-intent, keyword-engineered asset pipelines built to convert.",
  keywords: ["ecommerce seo services", "seo services in india", "ai seo services", "affordable seo services"],
};

export default function ContentSEOPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 py-28 text-center text-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-orange-400 font-bold uppercase tracking-wider text-sm">Semantic Value Engineering</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            <span className="text-orange-500">Ecommerce SEO</span> & Scale Pipelines
          </h1>
          <p className="mt-6 text-lg text-sky-200 max-w-3xl mx-auto">
            From dense catalog configurations across complex ecommerce systems to specialized high-end topical maps, we design scalable content operations—often sought after as the premier <strong className="text-orange-400">ecommerce SEO services</strong> in the market—that drive automated sales conversions day and night.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition-all">
              Build an Omnichannel Topical Strategy
            </Link>
            <Link href="/seo-services" className="border border-sky-600 text-sky-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTENT METRIC & STRATEGY GRID ================= */}
      {/* ================= CONTENT METRIC & STRATEGY GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-sky-900 mb-6">Programmatic E-Commerce & AI SEO Synergy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Modern search engines prioritize pages with clear topical depth. Our specialized <strong className="text-orange-600">ecommerce SEO services</strong> build clean taxonomy systems, refine product option visibility, and use semantic models to match changing user needs, making us the top choice for <strong className="text-sky-800">SEO services in India</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining human content expertise with advanced <strong className="text-sky-800">AI SEO services</strong>, we safely scale category authority across competitive retail spaces. We offer <strong className="text-sky-800">affordable SEO services</strong> that give your brand a distinct long-term growth advantage.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Topical Depth Optimization",
                description: "Comprehensive topical coverage and dynamic intent clustering engineered to earn high authority rankings from semantic search engines.",
                icon: (
                  <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
              },
              {
                title: "E-Com Strategy Sifting",
                description: "Clean contextual taxonomy and canonical structure handling designed specifically for product catalogs with large amounts of inventory.",
                icon: (
                  <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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

        </div>
      </section>

    </main>
  );
}