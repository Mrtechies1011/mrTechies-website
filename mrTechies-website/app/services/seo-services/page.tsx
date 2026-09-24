import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Best SEO Services Company in Hyderabad & India | MrTechies",
  description:
    "Partner with a premier SEO services company specializing in technical audits, ecommerce SEO services, AI optimization, and local search growth across India.",
  keywords: [
    "seo services",
    "seo services company",
    "seo services in hyderabad",
    "local seo services",
    "ecommerce seo services",
    "best seo services",
    "affordable seo services",
  ],
  alternates: {
    canonical: "https://mrtechies.com/seo-services",
  },
};

export default function SEOServicesMainPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Engineered Search Visibility</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3">
            <span className="text-sky-900">Enterprise SEO Services</span> for Premium Revenue
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a data-driven <strong className="font-semibold text-sky-900">SEO services company</strong>, we engineer high-performance growth. When you need the <strong className="font-semibold text-sky-900">best SEO services</strong> to dominate rankings, we provide advanced technical optimizations and AI tools to ensure your business remains at the top of Google.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/seo-services/technical-seo" className="bg-sky-800 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-sky-900 transition-colors">
              Request a Free Technical SEO Audit
            </Link>
            <Link href="/seo-services/local-seo" className="border border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Explore Local SEO Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-sky-900">100%</h3>
            <p className="text-sm mt-1">White-Hat SEO Services</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">Data-Driven</h3>
            <p className="text-sm mt-1">Metrics-Led SEO Strategy</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">Top 3</h3>
            <p className="text-sm mt-1">Target Keyword Ranking</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">ROI Focused</h3>
            <p className="text-sm mt-1">Top-Rated SEO Services</p>
          </div>
        </div>
      </section>

      {/* ================= SUB-SERVICES GRID ================= */}
      <section className="bg-sky-50/50 py-24 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-900">Our Core Pillars of SEO Optimization</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Visibility compounds. Our <strong className="text-sky-900">best SEO services</strong> keep working seamlessly while you sleep.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { title: "Technical SEO", description: "Performance and indexation optimization from a leading SEO services company.", imageSrc: "/services/seo-technical.png", slug: "/services/seo-services/technical-seo" },
              { title: "On-Page SEO", description: "Metadata and semantic context structuring via expert SEO services.", imageSrc: "/services/seo-onpage.png", slug: "/services/seo-services/on-page-seo" },
              { title: "Local SEO", description: "Rank higher in map packs with our specialized local SEO services.", imageSrc: "/services/seo-local.png", slug: "/services/seo-services/local-seo" },
              { title: "Content SEO", description: "High-intent content structures managed by our SEO services company.", imageSrc: "/services/seo-content.png", slug: "/services/seo-services/content-seo" },
            ].map((pillar) => (
              <Link href={pillar.slug} key={pillar.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-xl hover:border-sky-800 group text-left">
                <div className="h-48 w-full bg-cover bg-center bg-no-repeat bg-slate-100" style={{ backgroundImage: `url('${pillar.imageSrc}')` }} />
                <div className="p-6 flex flex-col flex-grow items-center text-center relative bg-white">
                  <h3 className="text-xl font-bold text-sky-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{pillar.description}</p>
                  <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 mt-auto">Explore SEO Services &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-sky-900 leading-tight">
              Why Outdated SEO Services Are Making Your Site Invisible
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed">
            <p>
                Modern search engines drop low-quality, unnatural keyword setups instantly. If your current <strong className="text-sky-900">SEO services company</strong> isn&apos;t focusing on crawl efficiency, you are wasting your marketing budget.
            </p>
            <p>
              Ignorance of transactional intent variations is a common failure. If your platform lacks precise structured data and localized geo anchors, competitors using the <strong className="text-sky-900">best SEO services</strong> will inevitably outrank you. We provide <Link href="/seo-services/content-seo" className="text-orange-600 font-semibold underline">ecommerce SEO services</Link> that turn traffic into sales.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GEOGRAPHIC NETWORKS ================= */}
      <section className="bg-slate-50 border-y py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 text-center mb-12">Targeted Search Footprint Optimization</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-bold text-orange-600 mb-2">SEO Services in Hyderabad</h4>
              <p className="text-gray-700 text-sm">Engineering high-intent campaigns for B2B tech ecosystems using our top-rated local SEO services.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-bold text-sky-900 mb-2">SEO Services in Bangalore</h4>
              <p className="text-gray-700 text-sm">Deploying programmatic content models and technical restructuring from our premier SEO services company.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-bold text-sky-900 mb-2">Pan-India Domination</h4>
              <p className="text-gray-700 text-sm">Providing scalable <strong className="text-gray-900 font-semibold">SEO services in India</strong> for multi-city enterprises and large-scale catalog configurations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVANCED CAPABILITIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-14">Full Optimization Infrastructure Suite</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["High-Intent Keyword Engineering", "In-depth audits to claim commercial terms that drive phone conversions through expert SEO services."],
            ["Multi-Location Local SEO", "Advanced Google Business Profile scaling and citation architectures via our local SEO services."],
            ["AI SEO Services Integration", "Deploying advanced algorithms to match changing programmatic user updates."],
            ["On-Page Semantic Strategy", "Restructuring content to align with algorithmic filters, a core feature of our SEO services company."],
            ["Authority & Backlink Placement", "Acquiring safe, white-hat contextual links to compound trust metrics."],
            ["Conversion Rate Engineering", "Analyzing tracking data to guarantee traffic transforms into leads through the best SEO services."],
          ].map(([title, desc]) => (
            <div key={title} className="p-8 border rounded-2xl transition-all hover:border-orange-500 bg-white">
              <h3 className="text-xl font-bold text-orange-600 mb-3">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t">
        <h2 className="text-3xl font-bold text-sky-900 text-center mb-12">Frequently Asked Search Marketing Questions</h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-1">What sets the best SEO services apart from cheap alternatives?</h4>
            <p className="text-sm">Premium workflows fix core architecture code debt. Shortcut strategies rely on keyword stuffing that triggers heavy penalties from search engines.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-1">How long does it take to see results?</h4>
            <p className="text-sm">While structural site adjustments provide immediate crawl updates, competitive keyword growth typically takes 3 to 6 months of steady optimization from our SEO services company.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-1">Do you specialize in enterprise-level ecommerce setups?</h4>
            <p className="text-sm">Yes. Our customized <Link href="/seo-services/content-seo" className="text-sky-800 underline">ecommerce SEO services</Link> are designed to handle complex category patterns and indexing bugs.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-sky-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure the Highest Placements on Google?</h2>
          <p className="mb-10 text-sky-200 max-w-2xl mx-auto">
            Let&apos;s design a custom optimization strategy with our <strong className="text-white">SEO services company</strong> to scale your inbound inquiries.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-semibold text-gray-900 transition-colors">
            Start Your Free Search Discovery Session
          </Link>
        </div>
      </section>
    </main>
  );
}