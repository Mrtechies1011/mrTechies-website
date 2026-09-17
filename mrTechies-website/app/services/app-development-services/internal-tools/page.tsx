import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internal Tools & Workflow Automation | Enterprise Productivity",
  description: "Bespoke corporate tools engineered to reduce operational friction. Custom internal business tools and automated workflow solutions for scaling enterprises.",
  keywords: ["internal business tools", "workflow automation", "custom enterprise software", "operational efficiency"],
};

export default function InternalToolsPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Module: Operational Automation</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-sky-950">
            Automate <span className="text-orange-600">Corporate Workflows</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Eliminate manual spreadsheet dependencies. We build <strong className="text-sky-900">custom enterprise software</strong> and <strong className="text-sky-900">internal business tools</strong> that streamline your team&apos;s day-to-day operations.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-950 mb-6">Frictionless Operational Scale</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Modern enterprises thrive on efficiency. Our <strong className="text-sky-800">workflow automation</strong> solutions remove bottlenecks by integrating your disparate systems into one unified, secure platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We engineer secure, scalable environments that empower your staff to focus on high-value tasks while our automated systems handle the repetitive back-end logic.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Workflow Bridges", desc: "Connecting CRMs, financial ledgers, and communications into one central orchestration point." },
              { title: "RBAC Security", desc: "Built-in Role-Based Access Control to manage sensitive data across your organization." },
              { title: "Automated Reporting", desc: "Trigger-based data aggregation that updates your team without manual input." },
              { title: "Legacy System Integration", desc: "Modernizing older databases through seamless API connectors." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-sky-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER NAV ================= */}
      <section className="bg-slate-50 border-t py-12">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link href="/app-development-services/mobile-first-apps" className="text-sm font-semibold text-gray-600 hover:text-sky-900">
            &larr; Prev: Mobile Apps
          </Link>
          <Link href="/app-development-services/admin-dashboards" className="px-6 py-2 bg-sky-900 text-white rounded-lg font-bold hover:bg-sky-950">
            Next: Admin Dashboards &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}