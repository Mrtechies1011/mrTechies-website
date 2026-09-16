import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Startup Landing Page Design Services in Hyderabad | MrTechies",
  description: "High-conversion SaaS and startup landing page web designing services in Hyderabad. We build custom, pixel-perfect layouts engineered to validate your product and convert investors across India.",
  keywords: [
    "best web designing services",
    "web designing services hyderabad",
    "ui ux design company telangana",
    "startup landing page design services",
    "best web design company in hyderabad",
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/web-designing-services/startups",
  },
};

export default function StartupLandingPagesPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-orange-50/50 via-white to-sky-50 py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-sky-800 font-bold uppercase tracking-widest text-xs bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            Engineered for Product-Market Fit
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-6 leading-tight max-w-4xl mx-auto">
            Web Designing Services for Startups
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a premier <span className="font-semibold text-sky-900">UI UX design company in Telangana</span>, we stop the loss of customer acquisition metrics caused by slow templates. We design custom SaaS landing pages that define the <span className="font-semibold text-sky-900">best web designing services</span> in the region.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 inline-block">
              Launch Your Growth Interface
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PERSUASIVE CONTENT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-sky-950 leading-tight">
              Why Generic Themes Fail Your Startup
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When launching a product, your digital presentation requires precise storytelling. Using cheap, stock templates tells early adopters that your product lacks the refinement of a professional startup.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our <span className="font-semibold text-sky-900">web designing services in Hyderabad</span> utilize psychological conversion engineering. As the <span className="font-semibold text-sky-900">best web design company in Hyderabad</span>, we map out hero sections and feature breakdowns optimized for high-value lead conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
              <div className="text-orange-500 font-bold text-lg mb-2">Investor-Ready</div>
              <p className="text-gray-600 text-sm">Premium UI that shows VC funds and angel investors your startup operates at a global tier.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
              <div className="text-sky-800 font-bold text-lg mb-2">Zero Code Bloat</div>
              <p className="text-gray-600 text-sm">Clean Figma layouts that convert into lightweight frameworks loading under 1.2 seconds.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
              <div className="text-sky-800 font-bold text-lg mb-2">Validated UX</div>
              <p className="text-gray-600 text-sm">Structured paths designed specifically to decrease bounce rates and drive meaningful sign-ups.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
              <div className="text-orange-500 font-bold text-lg mb-2">Conversion Focus</div>
              <p className="text-gray-600 text-sm">Targeted designs built for the best performance among top web designing services in India.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ... [Remaining sections can follow this same pattern] ... */}
    </main>
  );
}