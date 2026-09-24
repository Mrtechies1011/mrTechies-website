import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboards & Data Visualization | Enterprise Intelligence",
  description: "Real-time analytics and data management suites for internal enterprise visibility. Custom admin dashboard development for complex operations.",
  keywords: ["admin dashboard development", "enterprise data visualization", "custom software development", "data management"],
};

export default function AdminDashboardsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          {/* Label */}
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
            Module: Central Intelligence
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-sky-950">
            Admin Dashboard <span className="text-orange-600">Development</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform raw data into actionable intelligence. We engineer custom data visualization suites that provide total operational clarity and real-time oversight.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-sky-950 mb-6">Engineered for Decision Makers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Modern operations require more than static spreadsheets. By leveraging bespoke <strong className="text-sky-800">custom software development</strong>, we create interfaces that bridge the gap between technical backends and management teams.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our <strong className="text-orange-600">enterprise data visualization</strong> platforms are engineered to handle massive datasets, providing sub-second query performance even when tracking global operations in real-time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Real-Time Telemetry", desc: "Live charting and event tracking with instant updates." },
              { title: "Export Pipelines", desc: "Aggregated reporting tools for deep data insights." },
              { title: "Role-Based Visibility", desc: "Granular access controls for specific operational KPIs." },
              { title: "Predictive Logic", desc: "Anomaly detection and automated error alerts." }
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
          <Link href="/app-development-services/internal-tools" className="text-sm font-semibold text-gray-600 hover:text-sky-900">
            &larr; Prev: Internal Tools
          </Link>
          <Link href="/app-development-services" className="px-6 py-2 bg-sky-900 text-white rounded-lg font-bold hover:bg-sky-950">
            App Services Hub
          </Link>
        </div>
      </section>

    </main>
  );
}