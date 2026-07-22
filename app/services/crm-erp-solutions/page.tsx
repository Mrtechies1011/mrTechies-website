import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Best CRM & ERP Software for Small Business India | MrTechies",
  description: "Enterprise software company specializing in custom ERP systems, cloud CRM development, and business process automation across Hyderabad, Telangana, and Andhra Pradesh.",
  keywords: [
    "best crm for small business",
    "crm for small business india",
    "sales crm for small business",
    "best crm for small business india",
    "crm development services in hyderabad",
  ],
  alternates: {
    canonical: "https://mrtechies.com/crm-erp-solutions",
  },
};

/* ===================== GRID DATA ARCHITECTURE ===================== */
const crmModules = [
  {
    title: "Lead Management",
    description: "Track and organize leads efficiently.",
    imageSrc: "/services/crm-lead.jpg", 
    slug: "/services/crm-erp-solutions/lead-management",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Sales Pipelines",
    description: "Clear visibility into your sales process.",
    imageSrc: "/services/crm-sales.webp", 
    slug: "/services/crm-erp-solutions/sales-pipelines",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
  {
    title: "Customer Dashboards",
    description: "Insights and analytics in one place.",
    imageSrc: "/services/crm-dashboard.jpg", 
    slug: "/services/crm-erp-solutions/customer-dashboards",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Automation Systems",
    description: "Reduce manual work with smart automation.",
    imageSrc: "/services/crm-automation.avif", 
    slug: "/services/crm-erp-solutions/automation-systems",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function CRMPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-slate-50 via-white to-sky-50/60">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm bg-orange-50 px-4 py-2 rounded-full">
            High-Availability Enterprise Engineering
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-6 leading-tight">
            Custom CRM & ERP Software in <span className="text-sky-800">Hyderabad</span> & India
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From our enterprise engineering hub in Hyderabad, we design, build, and deploy high-security database software matching your exact operational logic. Unify your workflows cleanly across Telangana and Andhra Pradesh without per-user licensing traps.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-sky-900 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-sky-800 transition-all">
              Book Architecture Session
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4-PART GATEWAY SELECTION GRID (From image_dd8940.jpg) ================= */}
      <section className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-950">
              Growth needs structure, not chaos.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Click on a specialized application block below to review its system specifications, data rules, and interface routing logic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crmModules.map((category) => (
              <Link
                key={category.title}
                href={category.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col text-center"
              >
                {/* Image Window */}
                <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={category.imageSrc}
                    alt={`${category.title} crm software company telangana`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 25vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col items-center">
                  <div className="mb-4 p-2 bg-sky-50 rounded-lg group-hover:bg-orange-50 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sky-950 group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUE ADD CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-950 leading-tight">
              Why Teams Choose Us for the Best CRM for Small Business in India
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Relying on off-the-shelf software models forces you to modify your real-world workflows to fit rigid database containers. As operations expand across nodes like Visakhapatnam, Vijayawada, and Warangal, fragmented applications create critical visibility barriers.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At MrTechies, we deploy completely clean relational structures built on secure database engines. We manage historical record parsing, clean legacy spreadsheet migrations safely, and unify accounting metrics onto highly scalable cloud layers.
            </p>
          </div>
          <div className="bg-sky-950 rounded-2xl p-8 text-white space-y-6">
            <h3 className="text-xl font-bold text-orange-400">The Proprietary Code Advantage</h3>
            <div className="space-y-4 text-sm text-sky-100">
              <p><strong>✓ Zero Scaling Fees:</strong> Add unlimited personnel and cross-warehouse points without hitting subscription license traps.</p>
              <p><strong>✓ Enterprise Security Controls:</strong> AES-256 data protection at rest, strict transit security layers, and granular RBAC structures.</p>
              <p><strong>✓ API-First System Bridges:</strong> Connect seamlessly with biometric clocks, external logistics streams, and custom financial ledgers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-sky-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl font-black text-orange-400">AWS/Azure</span>
            <span className="text-xs text-sky-200 mt-1 block">Secure Cloud Native Hosting</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-orange-400">RBAC</span>
            <span className="text-xs text-sky-200 mt-1 block">Role-Based Access Control</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-orange-400">Real-Time</span>
            <span className="text-xs text-sky-200 mt-1 block">Instant Multi-City Syncing</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-orange-400">0%</span>
            <span className="text-xs text-sky-200 mt-1 block">Recurring License Penalties</span>
          </div>
        </div>
      </section>

      {/* ... previous code sections (Trust Strip, Value Add, etc.) ... */}

      {/* ================= INJECT CODE HERE ================= */}
      <section className="bg-slate-50 border-t border-slate-200/60 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-sky-950 mb-4 tracking-tight">
            Unify Your Full Operational Software Stack
          </h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-8">
            Configure and scale specialized cloud instances to remove communication silos across every department node.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold">
            <Link href="/services/crm-erp-solutions/lead-management" className="text-orange-600 hover:text-sky-950 underline decoration-orange-300 hover:decoration-sky-950 transition-colors">
              Lead Management Module
            </Link>
            <Link href="/services/crm-erp-solutions/sales-pipelines" className="text-orange-600 hover:text-sky-950 underline decoration-orange-300 hover:decoration-sky-950 transition-colors">
              Sales Pipelines System
            </Link>
            <Link href="/services/crm-erp-solutions/customer-dashboards" className="text-orange-600 hover:text-sky-950 underline decoration-orange-300 hover:decoration-sky-950 transition-colors">
              Bespoke Client Dashboards
            </Link>
            <Link href="/services/crm-erp-solutions/automation-systems" className="text-orange-600 hover:text-sky-950 underline decoration-orange-300 hover:decoration-sky-950 transition-colors">
              Smart Process Automation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}