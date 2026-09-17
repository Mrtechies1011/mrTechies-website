import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Google Ads Management Services | High-Intent PPC | MrTechies",
  description: "Maximize conversion volume with high-intent search campaigns and aggressive negative keyword scrubbing to eliminate wasted ad spend.",
  keywords: [
    "google ads management services",
    "ppc services india",
    "high-intent search campaigns",
    "pay per click advertising company",
    "performance marketing agency",
    "ad spend optimization"
  ],
  alternates: {
    canonical: "https://mrtechies.com/digital-marketing-services/google-ads",
  },
};

export default function GoogleAdsServicesPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50/50 py-28 border-b">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Pillar 01 // Intent Traffic & Acquisition
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 text-slate-900 leading-tight">
            Elite <span className="text-sky-700">Google Ads Management</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Stop losing budget to broad, irrelevant searches. As a top <strong className="text-slate-900">pay per click advertising company</strong>, we build architectures focused on <strong className="text-slate-900">commercial intent</strong>, ensuring maximum <strong className="text-slate-900">ad spend optimization</strong>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md inline-block transition-colors">
              Optimize Your Ad Spend
            </Link>
            <Link href="#architecture" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold inline-block transition-colors">
              Our PPC Framework
            </Link>
          </div>
        </div>
      </section>

      {/* ================= THE WASTE PROBLEM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Where Standard PPC Accounts Break ROAS
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most accounts bleed money by relying on automated recommendations. These prioritize click volume over intent. As a specialized <strong className="text-slate-900">performance marketing agency</strong>, we ensure your budget is matched only against purchase-ready decisions.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-sky-700 bg-sky-50/30 rounded-r-xl shadow-sm">
              <h4 className="font-bold text-slate-900">Unscrubbed Search Queries</h4>
              <p className="text-sm text-gray-600 mt-1">Failing to block casual research-based terms triggers high traffic with zero pipeline conversion.</p>
            </div>
            <div className="p-6 border-l-4 border-sky-700 bg-sky-50/30 rounded-r-xl shadow-sm">
              <h4 className="font-bold text-slate-900">Generic Ad Relevance</h4>
              <p className="text-sm text-gray-600 mt-1">Weak headlines lower your Quality Score, forcing you to pay a premium for keywords your competitors win for less.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NETWORK SPECIFICS ================= */}
      <section id="architecture" className="bg-slate-50 border-y py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Multi-Channel PPC Framework</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all hover:border-sky-200 hover:shadow-lg">
              <div className="w-10 h-10 mb-4 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center font-bold">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Intent-Driven Search</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hyper-focused keyword matching targeting active <strong className="text-sky-700">high-intent search campaigns</strong>. We position your solution exactly when buyers are ready to convert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all hover:border-sky-200 hover:shadow-lg">
              <div className="w-10 h-10 mb-4 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center font-bold">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance & Shopping</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Structuring dynamic assets across YouTube and Maps to drive conversion flow, consistent with the best <strong className="text-sky-700">ppc services in India</strong>.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all hover:border-sky-200 hover:shadow-lg">
              <div className="w-10 h-10 mb-4 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center font-bold">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Retargeting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nurture previous site visitors with sequential messaging tailored precisely to the products they reviewed on your platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE INTERLINKS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">Scale Your Growth</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/digital-marketing-services/brand-campaigns" className="block group">
            <div className="h-full p-8 rounded-2xl border-2 border-transparent bg-slate-50 hover:border-sky-200 transition-all">
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">Enterprise Brand Campaigns &rarr;</h4>
              <p className="text-sm text-gray-600">Build market recall so your search ads convert at a higher rate when users finally search for your name.</p>
            </div>
          </Link>
          <Link href="/services/digital-marketing-services/growth-funnels" className="block group">
            <div className="h-full p-8 rounded-2xl border-2 border-transparent bg-slate-50 hover:border-orange-200 transition-all">
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Conversion Funnel Design &rarr;</h4>
              <p className="text-sm text-gray-600">Don&apos;t send paid traffic to a generic site. Use custom-coded landing pages to maximize your PPC ROI.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Scale Your Market Search Volume</h2>
          <p className="mb-10 text-slate-300 max-w-xl mx-auto">
            Let&apos;s audit your live accounts, strip out wasteful targets, and start scaling conversion lines that grow your commercial baseline.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold transition-colors inline-block shadow-md">
            Claim Your PPC Audit
          </Link>
        </div>
      </section>

    </main>
  );
}