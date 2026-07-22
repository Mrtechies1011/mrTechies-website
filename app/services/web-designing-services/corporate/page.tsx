import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Corporate Website Design Company in Hyderabad & India | MrTechies",
  description: "Elite corporate web designing services in Hyderabad for enterprise brands. We build premium, high-security, custom layouts designed to maximize market authority across India.",
  keywords: [
    "corporate website design andhra pradesh",
    "best graphics and web designers hyderabad",
    "ui ux design company telangana",
    "web designing services hyderabad",
    "best web designing services",
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/web-designing-services/corporate",
  },
};

export default function CorporateWebDesignPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-slate-900 via-sky-950 to-slate-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-xs bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs">
            Enterprise Class Architecture
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight max-w-4xl mx-auto">
            Corporate Web Design & Best Web Designing Services
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            As a leading <span className="text-white font-semibold">UI UX design company in Telangana</span>, we transform your digital identity into a high-credibility corporate asset. We engineer tailored interface layouts that project market dominance and ensure global scalability.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-colors">
              Schedule an Enterprise Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BRAND PROBLEMS WE SOLVE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-sky-950 leading-tight">
              Eliminating the Fragmentation in Enterprise Visual Systems
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Established firms cannot afford the architectural vulnerabilities of generic templates. When a corporation uses unoptimized frameworks, it communicates a lack of digital sophistication to high-value B2B clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our <span className="font-semibold text-sky-900">web designing services in Hyderabad</span> resolve this layout disconnect. By partnering with the <span className="font-semibold text-sky-900">best graphics and web designers in Hyderabad</span>, we deliver lightning-fast loading benchmarks that reflect your organization&apos;s true market valuation.
            </p>
          </div>
          <div className="lg:col-span-5 bg-sky-50 border border-sky-100 p-8 rounded-2xl">
            <h3 className="font-bold text-sky-950 text-xl mb-4">Enterprise Benchmarks Include:</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Multi-Language Compatibility:</strong> Fluid interfaces engineered for worldwide deployment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Rigid Accessibility (WCAG):</strong> Designing semantic, inclusive web layouts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Stakeholder Funnel Layouts:</strong> Clear routing for investors, customers, and talent.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* ... [Remaining sections remain unchanged] ... */}
    </main>
  );
}