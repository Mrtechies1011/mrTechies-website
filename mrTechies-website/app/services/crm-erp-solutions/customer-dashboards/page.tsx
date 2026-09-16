import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Custom Customer Dashboards vs Zoho CRM for Small Business | MrTechies",
  description: "Consolidate communication streams cleanly. Discover why bespoke reporting systems beat pre-built configurations like Zoho CRM for small business.",
  keywords: [
    "zoho crm for small business",
    "best mobile crm for small business",
    "best email crm for small business",
    "custom customer dashboards",
    "bespoke crm analytics"
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/crm-erp-solutions/customer-dashboards",
  },
};

export default function CustomerDashboardsPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 uppercase font-bold tracking-wider text-xs bg-orange-50 px-3 py-1 rounded-full">
            Module 03: Unified Analytics
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-4 mb-6 tracking-tight">
            Advanced <span className="text-orange-600">Customer Dashboards</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            While off-the-shelf software like <strong className="text-sky-900">CRM for small business</strong> often limits your data visibility, we engineer <strong className="text-sky-900">custom customer dashboards</strong> that centralize your multi-city operations onto a single, high-performance private infrastructure.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Omnichannel Communications</h4>
            <p className="text-gray-600 leading-relaxed">
              By connecting mail protocols directly to your core server, we deploy the <strong className="text-sky-900">best email CRM for small business</strong> scaling metrics—removing messy third-party message aggregators and ensuring total data sovereignty.
            </p>
          </div>
          
          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Cross-Device Synchronization</h4>
            <p className="text-gray-600 leading-relaxed">
              Equip your field personnel with the <strong className="text-sky-900">best mobile CRM for small business</strong> experience. Our highly responsive reporting viewports ensure fluid live-sync rendering on any site and across all mobile device resolutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NAV ================= */}
      <section className="border-t border-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link href="/services/crm-erp-solutions/sales-pipelines" className="text-sm text-gray-500 font-semibold hover:text-sky-950">
            &larr; Prev: Sales Pipelines
          </Link>
          <Link href="/services/crm-erp-solutions" className="text-sm font-bold text-sky-950 hover:text-orange-500">
            Core Framework Hub
          </Link>
          <Link href="/services/crm-erp-solutions/automation-systems" className="text-orange-600 font-bold hover:underline">
            Next: Smart Automation &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}