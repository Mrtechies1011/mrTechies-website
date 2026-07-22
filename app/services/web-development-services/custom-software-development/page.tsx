import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Custom Software Application Developers in Andhra Pradesh & Telangana",
  description: "Top-rated custom software application developers in Andhra Pradesh & Telangana. We build enterprise B2B business dashboards, secure internal portals, and ERP integrations.",
  keywords: [
    "custom software application developers andhra pradesh", 
    "enterprise software development hyderabad", 
    "b2b business dashboards telangana",
    "software development company telangana",
    "custom software development services hyderabad"
  ],
  alternates: { canonical: "https://mrtechies.com/services/web-development-services/custom-software-development" },
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* H1 Headings with high-intent keywords */}
        <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6 leading-tight">
          Custom Software Application Developers in Andhra Pradesh & Telangana
        </h1>
        
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Accelerate your operational efficiency with resilient, built-from-scratch digital systems. As a leading **software development company in Telangana**, we transform messy legacy spreadsheets into secure, high-availability workflows customized exclusively for your enterprise.
        </p>

        {/* Feature Grid: Fast, punchy, and scannable for clients */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-orange-500 mb-3">
              B2B Business Dashboards
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consolidate multi-city operations across Hyderabad, Warangal, and Visakhapatnam into crisp, real-time data analytics pipelines.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-sky-800 mb-3">
              Secure ERP & CRM Bridges
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our engineering team builds deep API integrations that link cleanly with SAP, Salesforce, or custom logistics software without risking data breaches.
            </p>
          </div>
        </div>

        {/* Value Proposition Strip */}
        <div className="border-l-4 border-orange-500 pl-6 my-10 italic text-gray-700 font-medium">
          "Engineered with clean, fully-documented code stacks that slash enterprise maintenance costs and scale automatically as your user base expands."
        </div>

        {/* Direct Action Call to Action */}
        <div className="mt-12">
          <Link 
            href="/contact" 
            className="bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold inline-block hover:bg-sky-800 transition-colors shadow-xs"
          >
            Request Application Architecture Consultation &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}