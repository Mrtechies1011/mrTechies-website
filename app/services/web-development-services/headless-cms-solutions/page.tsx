import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Headless CMS Solutions & Decoupled Architecture | MrTechies",
  description: "Enterprise headless CMS development in Telangana. Hire full-stack developers in Hyderabad for high-performance decoupled web architecture solutions.",
  keywords: [
    "full stack developers hyderabad", 
    "headless cms development telangana", 
    "decoupled web architecture solutions",
    "headless cms solutions hyderabad",
    "api first web development company"
  ],
  alternates: { canonical: "https://mrtechies.com/services/web-development-services/headless-cms-solutions" },
};

export default function HeadlessCmsPage() {
  return (
    <main className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* H1 Heading optimized with high-intent core keywords */}
        <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6 leading-tight">
          Headless CMS Solutions & Decoupled Architecture
        </h1>
        
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Break free from restrictive, monolithic website templates. Backed by our top-tier **full stack developers in Hyderabad**, we build API-first **decoupled web architecture solutions** that separate your content from your presentation layer to deliver fast omni-channel digital setups.
        </p>

        {/* Client-Focused 2-Column Split Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-orange-500 mb-3">
              Omni-Channel API Delivery
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Publish content once and stream it instantly across web applications, native iOS/Android mobile apps, and smart corporate panels simultaneously.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-sky-800 mb-3">
              Complete Content Independence
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Equip your regional marketing and marketing teams with crisp, intuitive visual dashboards without changing database or frontend application code.
            </p>
          </div>
        </div>

        {/* SEO Stability & Security Callout */}
        <div className="border-l-4 border-orange-500 pl-6 my-10 italic text-gray-700 font-medium">
         &ldquo;Decoupled web logic completely hides your raw database layers from standard frontend presentation pages, making your enterprise architecture secure against common web exploits.&rdquo;
        </div>

        {/* Action Call to Action */}
        <div className="mt-12">
          <Link 
            href="/contact" 
            className="bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold inline-block hover:bg-sky-800 transition-colors shadow-xs"
          >
            Consult a Headless Architect &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}