import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "On-Page SEO Services | Semantic Context & Intent Optimization",
  description: "Transform your website copy into a ranking powerhouse. High-intent semantic mapping backed by premium target keyword engineering.",
  keywords: ["seo services", "best seo services", "affordable seo services", "on page seo optimization", "seo services company"],
};

export default function OnPageSEOPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-sky-50 py-28 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-sky-800 font-bold uppercase tracking-wider text-sm">Algorithmic Alignment</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Data-Driven <span className="text-orange-600">On-Page SEO</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Keyword stuffing is dead. As a leading <strong className="text-sky-900">SEO services company</strong>, we believe modern engines analyze semantic context over raw repetition. We perform rigorous <strong className="text-sky-900">on-page SEO optimization</strong> on every structural element of your domain—from content matching to strategic internal links—to convert search impressions into scalable target inquiries.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition-all">
              Optimize My On-Page Architecture
            </Link>
            <Link href="/seo-services/technical-seo" className="border border-sky-800 text-sky-800 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all">
              Resolve Code Flaws First
            </Link>
          </div>
        </div>
      </section>

      {/* ================= RELEVANCE GRID SECTION ================= */}
      {/* ================= RELEVANCE GRID SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-sky-900">Deploying the Best SEO Services for Maximum Relevance</h2>
          <p className="text-gray-600 mt-4">
            When you choose the <strong className="text-sky-900">best SEO services</strong>, you gain access to systematic fine-tuning of your asset payload. We utilize <strong className="text-sky-900">affordable SEO services</strong> practices that capture primary positions while bulletproofing your domain against unexpected algorithmic updates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Intent Mapping",
              description: "Aligning page headers, structural metadata, and bodies directly to commercial transactional inquiries through expert on-page SEO optimization.",
              icon: (
                <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              ),
            },
            {
              title: "Internal Linking",
              description: "Building precise contextual anchor pathways that logically distribute domain equity—a key pillar of our SEO services company strategy.",
              icon: (
                <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5l3-3m-3-3.828l3.828-3.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5l-3-3" />
                </svg>
              ),
            },
            {
              title: "UX Optimization",
              description: "Configuring content formats to drastically lower bounce metrics, ensuring your site remains a top-tier choice for the best SEO services.",
              icon: (
                <svg className="w-8 h-8 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0l-4-4a4 4 0 015.656-5.656l4 4a4 4 0 010 5.656z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01" />
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

    </main>
  );
}