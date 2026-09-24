import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Performance Social Media Marketing Services | MrTechies",
  description: "Disrupt feeds and capture high-intent visual leads with data-driven paid social media campaigns across Meta, Instagram, and LinkedIn.",
  keywords: [
    "social media marketing services",
    "paid social advertising",
    "meta ad campaigns",
    "linkedin lead generation",
    "b2b social media strategy",
    "digital marketing services for small business"
  ],
  alternates: {
    canonical: "https://mrtechies.com/digital-marketing-services/social-media-marketing",
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50/50 py-28 border-b">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Pillar 02 // Audience Growth & Paid Attribution
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 text-slate-900 leading-tight">
            Elite <span className="text-sky-700">Paid Social Advertising</span> Services
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Stop losing budget to basic post boosts. As a premier <strong className="text-slate-900">social media marketing services</strong> provider, we construct multi-layered lookalike filters and execute scientific creative split-testing across Meta, Instagram, and LinkedIn to generate predictable business inquiries.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md inline-block transition-colors">
              Launch High-Converting Ads
            </Link>
            <Link href="#framework" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold inline-block transition-colors">
              Our Ad Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PITFALLS / PAIN SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              The Mistakes Keeping Your Social ROAS Flat
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most brands fail because they run campaigns like digital billboards. Modern algorithms demand a strict balance between creative variety and meticulous technical data integration to deliver the best <strong className="text-slate-900">digital marketing services for small business</strong>.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-sky-700 bg-sky-50/30 rounded-r-xl shadow-sm">
              <h4 className="font-bold text-slate-900">Creative Exhaustion</h4>
              <p className="text-sm text-gray-600 mt-1">Running the same asset for months causes fatigue, raising your CPMs and destroying conversion rates.</p>
            </div>
            <div className="p-6 border-l-4 border-sky-700 bg-sky-50/30 rounded-r-xl shadow-sm">
              <h4 className="font-bold text-slate-900">Broken Pixel Architectures</h4>
              <p className="text-sm text-gray-600 mt-1">Relying on standard browser tracking strips away attribution. Without server-side tracking, your campaigns fly blind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHANNELS FRAMEWORK SECTION ================= */}
      <section id="framework" className="bg-slate-50 border-y py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Platform-Specific Strategy</h2>
            <p className="text-gray-600 mt-3">We engineer channel blueprints aligned perfectly with audience behaviors.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all hover:border-sky-200 hover:shadow-lg">
              <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">M</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Meta & Instagram Scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizing Broad Targeting and dynamic catalog assets. Engineered for high-impact <strong className="text-sky-700">meta ad campaigns</strong> that drive direct consumer acquisition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all hover:border-sky-200 hover:shadow-lg">
              <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">L</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">LinkedIn Enterprise Lead Gen</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Laser-focused ABM. Our <strong className="text-sky-700">linkedin lead generation</strong> and <strong className="text-sky-700">b2b social media strategy</strong> hook decision-makers with thought-leadership formats.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all hover:border-sky-200 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">R</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Behavioral Retargeting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Re-engage past landing page drop-offs and high-intent viewers with sequential, incentive-driven ad creative to maximize your funnel returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Stop Guessing. Build Predictable Lead Pipelines.</h2>
          <p className="mb-10 text-slate-300 max-w-xl mx-auto">
            Let&apos;s evaluate your current data assets, build structured attribution lines, and start generating high-intent buyers across digital network structures.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold transition-colors inline-block shadow-md">
            Schedule an Account Audit Session
          </Link>
        </div>
      </section>

    </main>
  );
}