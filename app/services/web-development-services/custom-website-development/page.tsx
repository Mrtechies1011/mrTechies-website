import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Custom Website Development Services in Hyderabad | MrTechies",
  description: "Premier custom website development services in Hyderabad. We build high-performance websites in Telangana and responsive web applications across Andhra Pradesh.",
  keywords: [
    "custom website development services in hyderabad", 
    "high performance websites telangana", 
    "responsive web development andhra pradesh",
    "website development company hyderabad",
    "nextjs developers hyderabad"
  ],
  alternates: { canonical: "https://mrtechies.com/services/web-development-services/custom-website-development" },
};

export default function CustomWebsiteDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* H1 Heading containing top-tier keywords */}
        <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6 leading-tight">
          Custom Website Development Services in Hyderabad
        </h1>
        
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Generic templates throttle business growth and look identical to your competitors. As an elite **website development company in Hyderabad**, we engineer hyper-fast digital storefrontes using Next.js and React, built exclusively to maximize your brand’s regional authority.
        </p>

        {/* Feature Split Cards: Short, punchy, and conversion-focused */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-orange-500 mb-3">
              High-Performance Frontend
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We systematically eliminate bloated code to deliver flawless Core Web Vitals and lightning-fast load times across Telangana’s network corridors.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-sky-800 mb-3">
              Responsive Regional Frameworks
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every interface scales fluidly on mobile and desktop platforms, keeping users engaged from Visakhapatnam to Vijayawada and beyond.
            </p>
          </div>
        </div>

        {/* SEO Technical Callout */}
        <div className="border-l-4 border-orange-500 pl-6 my-10 italic text-gray-700 font-medium">
          &quot;Engineered with clean code architectures that guarantee high layout performance and immediate indexing edges on regional Google search engines.&quot;
        </div>

        {/* Dynamic CTA */}
        <div className="mt-12">
          <Link 
            href="/contact" 
            className="bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold inline-block hover:bg-sky-800 transition-colors shadow-xs"
          >
            Discuss Your Project Structure &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}