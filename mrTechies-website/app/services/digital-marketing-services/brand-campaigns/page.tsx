import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Enterprise Brand Campaigns & Identity Scaling | MrTechies",
  description: "Secure dominant top-of-mind market recall and build multi-city market pipelines with strategic omnichannel brand campaigns and enterprise identity scaling.",
  keywords: [
    "brand campaign strategy",
    "omnichannel brand awareness",
    "enterprise brand identity scale",
    "digital marketing services company",
    "digital marketing services list",
    "corporate positioning campaigns",
    "market domination strategy"
  ],
  alternates: {
    canonical: "https://mrtechies.com/digital-marketing-services/brand-campaigns",
  },
};

export default function BrandCampaignsPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50/50 py-28 border-b">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Pillar 03 // Market Position & Authority
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 text-slate-900 leading-tight">
            Scale <span className="text-sky-700">Market Domination</span> With Brand Campaigns
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Establish long-term operational clarity. As a leading <strong className="text-slate-900">digital marketing services company</strong>, we design <strong className="text-slate-900">omnichannel brand awareness</strong> frameworks that compound authority, making your enterprise the primary choice in your sector.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md inline-block transition-colors">
              Build Your Market Authority
            </Link>
            <Link href="#architecture" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold inline-block transition-colors">
              Our Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* ================= THE POSITIONING GAP SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Why Direct-Response Alone Stalls Enterprise Scale
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Relying entirely on short-term ads traps companies in a cost squeeze. Without a foundational <strong className="text-slate-900">corporate positioning campaign</strong> to build credibility, cold user bases view your product as a commodity, driving down long-term profit margins.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-2xl bg-white shadow-xs">
              <span className="text-2xl font-bold text-sky-700">Zero</span>
              <h4 className="font-bold text-slate-900 mt-2">Friction Authority</h4>
              <p className="text-sm text-gray-600 mt-1">High brand equity builds organic trust, allowing your sales team to close deals rapidly without endless price arguments.</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-xs">
              <span className="text-2xl font-bold text-sky-700">Lower</span>
              <h4 className="font-bold text-slate-900 mt-2">Blended CACs</h4>
              <p className="text-sm text-gray-600 mt-1">When users seek out your company title due to a strong <strong className="text-slate-900">market domination strategy</strong>, your paid traffic costs slide downward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGY COLUMNS SECTION ================= */}
      <section id="architecture" className="bg-slate-50 border-y py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Omnichannel Visibility Pillars</h2>
            <p className="text-gray-600 mt-3">We utilize <strong className="text-sky-700">enterprise brand identity scaling</strong> to form a unified corporate impression.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Video & Audio</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Deploying high-production narrative assets across streaming channels to generate sensory-driven <strong className="text-slate-900">brand campaign strategy</strong> recall.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Executive Placement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Positioning corporate decision-makers as authorities using thought leadership and analytical content setups built for enterprise-level distribution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-City Programmatic</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Running targeted display campaigns across industry journals to keep top-of-mind dominance active across regional tech frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE INTERLINKS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">Expand Your Service Reach</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/digital-marketing-services/google-ads" className="block group">
            <div className="h-full p-8 rounded-2xl border-2 border-transparent bg-slate-50 hover:border-orange-200 transition-all">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Pillar 01</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Intent Traffic & Google Ads &rarr;</h4>
              <p className="text-sm text-gray-600">Ensure you capture users the moment they search for your services after your brand campaigns build demand.</p>
            </div>
          </Link>
          <Link href="/services/digital-marketing-services/growth-funnels" className="block group">
            <div className="h-full p-8 rounded-2xl border-2 border-transparent bg-slate-50 hover:border-teal-200 transition-all">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 block">Pillar 04</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">Conversion Funnel Design &rarr;</h4>
              <p className="text-sm text-gray-600">Route your newfound brand traffic into optimized, custom-coded landing pages designed for high-conversion leads.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-slate-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Claim Undisputed Industry Authority.</h2>
          <p className="mb-10 text-slate-300 max-w-xl mx-auto">
            Let&apos;s build a custom identity positioning plan to capture regional markets and turn your corporate asset into an industry icon.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold transition-colors inline-block shadow-md">
            Schedule a Positioning Consult
          </Link>
        </div>
      </section>

    </main>
  );
}