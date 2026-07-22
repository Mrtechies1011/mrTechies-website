import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "E-commerce Platform Development Company Hyderabad | MrTechies",
  description: "Advanced e-commerce store development services in Hyderabad. We engineer secure, scalable online storefronts across Telangana, Vizag, and Vijayawada.",
  keywords: [
    "ecommerce store development hyderabad", 
    "best web developers in vizag vijayawada", 
    "scalable online storefronts telangana",
    "ecommerce platform development company hyderabad",
    "headless ecommerce developers india"
  ],
  alternates: { canonical: "https://mrtechies.com/services/web-development-services/ecommerce-development" },
};

export default function EcommerceDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* H1 Heading strategically targeted for primary search terms */}
        <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6 leading-tight">
          E-commerce Platform Development in Hyderabad
        </h1>
        
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Slow loading times kill retail sales. At MrTechies, a premium **e-commerce platform development company in Hyderabad**, we swap out slow, monolithic setups for lightning-fast, API-first checkouts designed to process thousands of simultaneous regional transactions.
        </p>

        {/* Client-Focused 2-Column Split Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-orange-500 mb-3">
              Frictionless Checkout Systems
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Maximize conversion rates with ultra-optimized checkout loops, automated cart recovery triggers, and high-speed page transition logic.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-sky-800 mb-3">
              Regional Delivery Ecosystems
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deep API bridges built for seamless Indian payment networks and automated shipping trackers keeping clients updated across AP and Telangana.
            </p>
          </div>
        </div>

        {/* SEO Trust and Scalability Callout */}
        <div className="border-l-4 border-orange-500 pl-6 my-10 italic text-gray-700 font-medium">
          &ldquo;We construct secure, elastic database environments that actively prevent drop-offs and server crashes during heavy holiday flash sales.&rdquo;
        </div>

        {/* High-Intent Conversion CTA */}
        <div className="mt-12">
          <Link 
            href="/contact" 
            className="bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold inline-block hover:bg-sky-800 transition-colors shadow-xs"
          >
            Launch Your Scalable Online Store &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}