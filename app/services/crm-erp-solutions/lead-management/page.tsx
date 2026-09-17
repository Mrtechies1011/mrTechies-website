import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Best Lead Management & Simple CRM for Small Business | MrTechies",
  description: "An easy-to-use CRM for small business structures designed to track and organize leads efficiently across multi-channel origins. Build custom lead systems.",
  keywords: [
    "best CRM for small business",
    "simple CRM for small business",
    "easy to use CRM for small business",
    "custom lead management software"
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/crm-erp-solutions/lead-management",
  },
};

export default function LeadManagementPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 uppercase font-bold tracking-wider text-xs bg-orange-50 px-3 py-1 rounded-full">
            Module 01: Lead Ingestion
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-4 mb-6 tracking-tight">
            Track and Organize <span className="text-orange-600">Leads Efficiently</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Inconsistent data points cause hidden sales drops. We engineer the <strong className="text-sky-900">best CRM for small business</strong> frameworks—focusing entirely on clean layout simplicity to capture prospects from web forms, call logs, and WhatsApp instantly.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Zero Learning Curves</h4>
            <p className="text-gray-600 leading-relaxed">
              Built explicitly as an <strong className="text-sky-900">easy-to-use CRM for small business</strong> layout. We strip away bloated features to ensure your team focuses on closing, not navigating menus.
            </p>
          </div>
          
          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Native Ownership</h4>
            <p className="text-gray-600 leading-relaxed">
              A <strong className="text-sky-900">simple CRM for small business</strong> built on your own architecture means no per-user license traps or unexpected SaaS price spikes as you scale.
            </p>
          </div>

          <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50/50">
            <h4 className="font-bold text-sky-950 text-xl mb-4">Unified Logging</h4>
            <p className="text-gray-600 leading-relaxed">
              Index every interaction, timestamp, and response callback cleanly in an isolated, high-performance database designed for deep sales insight.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NAV ================= */}
      <section className="border-t border-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link href="/services/crm-erp-solutions" className="text-sm font-semibold text-gray-500 hover:text-sky-950">
            &larr; Main Systems Hub
          </Link>
          <Link href="/services/crm-erp-solutions/sales-pipelines" className="text-orange-600 font-bold hover:underline">
            Next: Sales Pipelines Architecture &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}