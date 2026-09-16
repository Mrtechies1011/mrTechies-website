import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Sales & Opportunity Management CRM for Small Business | MrTechies",
  description: "Achieve deep pipeline visibility with our specialized sales CRM for small business configurations. Prevent dropped revenue opportunities with bespoke pipeline tracking.",
  keywords: [
    "best sales CRM for small business",
    "sales CRM for small business",
    "opportunity management CRM for small business",
    "custom pipeline management"
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/crm-erp-solutions/sales-pipelines",
  },
};

export default function SalesPipelinesPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 uppercase font-bold tracking-wider text-xs bg-orange-50 px-3 py-1 rounded-full">
            Module 02: Pipeline Architecture
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-4 mb-6 tracking-tight">
            Clear Visibility Into Your <span className="text-orange-600">Sales Process</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Stop losing revenue to untracked follow-ups and broken handoffs. We build the <strong className="text-sky-900">best sales CRM for small business</strong> teams—engineered to replace chaotic message threads with structured, data-backed deal tracking.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Targeted Sales CRM</h4>
            <p className="text-gray-600 leading-relaxed">
              Ditch rigid SaaS templates. We map out your exact negotiation phases, customized estimation steps, and localized payment milestones within your custom <strong className="text-sky-900">sales CRM for small business</strong> configuration.
            </p>
          </div>
          
          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Opportunity Management</h4>
            <p className="text-gray-600 leading-relaxed">
              Spot stalled deals immediately. Our <strong className="text-sky-900">opportunity management CRM for small business</strong> tracks lead aging parameters dynamically, helping you plug conversion leaks before they cost you revenue.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NAV ================= */}
      <section className="border-t border-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link href="/services/crm-erp-solutions/lead-management" className="text-sm font-semibold text-gray-500 hover:text-sky-950">
            &larr; Prev: Lead Ingestion
          </Link>
          <Link href="/services/crm-erp-solutions" className="text-sm font-bold text-sky-950 hover:text-orange-500">
            Core Framework Hub
          </Link>
          <Link href="/services/crm-erp-solutions/customer-dashboards" className="text-orange-600 font-bold hover:underline">
            Next: Unified Analytics &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}