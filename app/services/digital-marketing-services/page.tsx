import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Best Digital Marketing Services Company in Hyderabad & India | MrTechies",
  description:
    "Partner with a premier digital marketing services company specializing in enterprise-level growth, performance marketing, ROI-focused ad campaigns, and custom lead generation funnels.",
  keywords: [
    "digital marketing services",
    "digital marketing services company",
    "best digital marketing services in Hyderabad",
    "performance marketing agency",
    "ROI-focused digital marketing",
    "ecommerce digital marketing services",
    "digital marketing services for small business",
    "digital growth strategy"
  ],
  alternates: {
    canonical: "https://mrtechies.com/digital-marketing-services",
  },
};

export default function DigitalMarketingServicesMainPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Engineered Customer Acquisition</span>
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-4 mb-6 tracking-tight">
            Enterprise <span className="text-orange-600">Digital Marketing</span> for Premium Revenue
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a leading <strong className="font-semibold text-sky-900">digital marketing services company</strong>, we engineer high-performance growth frameworks. From <strong className="text-sky-900">ROI-focused paid search</strong> to behavioral funnel architectures, we scale commercial visibility that puts your brand at the top of your market.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-sky-800 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-sky-900 transition-colors">
              Request a Free Performance Marketing Audit
            </Link>
            <Link href="/digital-marketing-services/google-ads" className="border border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Explore Google Ads Optimization
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-sky-900">100%</h3>
            <p className="text-sm mt-1">Data-Backed Retargeting</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">Transparent</h3>
            <p className="text-sm mt-1">Full ROAS Tracking & Attribution</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">Engineered</h3>
            <p className="text-sm mt-1">Custom High-Speed Funnels</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">ROI Metric</h3>
            <p className="text-sm mt-1">Tracking Conversions, Not Clicks</p>
          </div>
        </div>
      </section>

      {/* ================= SUB-SERVICES GRID ================= */}
      <section className="bg-sky-50/50 py-24 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-900">Our Core Pillars of Digital Growth Optimization</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Acquisition paths compound. Our <strong className="text-sky-900">digital marketing services</strong> isolate and scale user conversion loops seamlessly.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                title: "Google Ads",
                description: "High-intent search volumes, display architectures, and strict negative scrub rules to minimize budget waste.",
                imageSrc: "/services/digital-google.webp",
                slug: "/services/digital-marketing-services/google-ads",
                icon: (
                  <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: "Social Media Marketing",
                description: "Build audience metrics and high-intent engagement structures across Meta, LinkedIn, and corporate channels.",
                imageSrc: "/services/digital-SMM.webp",
                slug: "/services/digital-marketing-services/social-media-marketing",
                icon: (
                  <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                  </svg>
                ),
              },
              {
                title: "Brand Campaigns",
                description: "Long-term visual positioning, dominant authority systems, and sustained omnichannel top-of-mind brand awareness.",
                imageSrc: "/services/digital-brand.jpg",
                slug: "/services/digital-marketing-services/brand-campaigns",
                icon: (
                  <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 0 1 8.716 6.747M12 3a9.004 9.004 0 0 0-8.716 6.747M12 9h.008v.008H12V9Zm0 3h.008v.008H12V12Zm0 3h.008v.008H12V15Z" />
                  </svg>
                ),
              },
              {
                title: "Growth Funnels",
                description: "Turn casual visitors into loyal customers using custom-coded, automated behavioral conversion loops.",
                imageSrc: "/services/digital-growth.png",
                slug: "/services/digital-marketing-services/growth-funnels",
                icon: (
                  <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((pillar) => (
              <Link
                href={pillar.slug}
                key={pillar.title}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-xl hover:border-sky-800 group text-left"
              >
                <div
                  className="h-48 w-full bg-cover bg-center bg-no-repeat bg-slate-100 relative"
                  style={{ backgroundImage: `url('${pillar.imageSrc}')` }}
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-6 flex flex-col flex-grow items-center text-center relative bg-white">
                  <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 -mt-12 relative z-10 border-2 border-white shadow-sm group-hover:bg-orange-50 transition-colors">
                    {pillar.icon}
                  </div>

                  <h3 className="text-xl font-bold text-sky-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                    {pillar.description}
                  </p>

                  <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 inline-flex items-center gap-1 mt-auto">
                    Explore Specialized Service &rarr;
                  </span>
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
              Why Unmeasured Performance Experiments Are Making Your Spend Bleed
            </h2>
            <p className="mt-4 text-gray-600">
              Modern ad networks track complex attribution patterns. Blind strategies trigger high client-acquisition costs—wasting your marketing budget.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Many businesses suffer from underlying funnel leaks. Conversion bottlenecks like sluggish single-page checkout frames, poor data-pixel configurations, and disconnected ad-copy workflows trap your active commercial traffic long before forms are submitted.
            </p>
            <p>
              Another critical failure point is ignoring direct shopping signals. If your store lacks hyper-custom landing designs, structured remarketing paths, and multi-layered lookalike filters, web networks prioritize competing storefronts executing advanced <strong className="text-orange-600">ecommerce digital marketing services</strong> frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GEOGRAPHIC NETWORKS ================= */}
      <section className="bg-slate-50 border-y py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 text-center mb-12">
            Target Regional Campaign Footprint Optimization
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-bold text-orange-600 mb-2">Digital Marketing Services in Hyderabad</h4>
              <p className="text-gray-700 text-sm">
                Engineering high-intent pay-per-click strategies tailored for expanding tech systems, enterprise structures, and local growth operations seeking premier localized tracking metrics.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-bold text-sky-900 mb-2">Digital Marketing Services in Bangalore</h4>
              <p className="text-gray-700 text-sm">
                Deploying cross-channel social blueprints and custom landing-page architectures to position modern corporate brands cleanly ahead of intense marketplace competition.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-bold text-sky-900 mb-2">Pan-India Domination</h4>
              <p className="text-gray-700 text-sm">
                Structuring hyper-scalable <strong className="text-gray-900 font-semibold">digital marketing services in India</strong> calculated cleanly for multi-city enterprises and high-volume commercial catalogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVANCED CAPABILITIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-14">
          Full Performance Marketing Infrastructure Suite
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["Commercial Intent Engineering", "Deep search query modeling and asset auditing to pinpoint exact commercial buying targets that directly drive inbound lead metrics."],
            ["Multi-Platform Social Scaling", "Advanced demographic filters, lookalike asset testing, and clean visual tracking across Meta, LinkedIn, and corporate channels."],
            ["Automated Retargeting Systems", "Deploying sophisticated user behavior pixels to continuously nurture previous site drop-offs with high-incentive ad content."],
            ["High-Conversion Copy Structures", "Drafting psychological layout hooks and landing page sequences aligned accurately with modern user buying intentions."],
            ["Omnichannel Brand Domination", "Configuring safe, high-authority media buys across key networks to compound long-term corporate identity value."],
            ["Pipeline Value Optimization", "Analyzing multi-touch tracking pipelines to ensure raw visitor traffic transforms fluidly into form completions and closed deals."],
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
        <h2 className="text-3xl font-bold text-sky-900 text-center mb-12">
          Frequently Asked Digital Growth Questions
        </h2>

        <div className="space-y-8 text-gray-700">
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-1">What sets the best digital marketing services apart from cheap alternatives?</h4>
            <p className="text-sm">Premium performance structures repair broken pixel architectures, map high-intent lookalikes, and optimize actual pipeline metrics. Lower-cost plans rely on simple post boosting that inflates vanity metrics but leaves actual revenue growth completely unchanged.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-1">How quickly can our ad accounts expect positive conversion shifts?</h4>
            <p className="text-sm">While pixel configuration updates and clean landing-page modifications show tracking returns immediately, stabilizing scaling metrics typically requires 2 to 4 weeks of continuous machine-learning optimization.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-1">Do you build specialized layouts for ecommerce storefronts?</h4>
            <p className="text-sm">Yes. Our integrated <strong className="text-sky-900">ecommerce digital marketing services</strong> handle complex dynamic ads, clean up tracking attribution drops, and run automated abandoned-checkout recovery systems.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-sky-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Predictable Customer Growth Pipelines?
          </h2>
          <p className="mb-10 text-sky-200 max-w-2xl mx-auto">
            Let&apos;s design a custom acquisition lifecycle strategy to balance your ad spend parameters, map clean attribution lines, and scale your inbound regional customer inquiries.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-semibold text-gray-900 transition-colors">
            Start Your Free Growth Discovery Session
          </Link>
        </div>
      </section>

    </main>
  );
}