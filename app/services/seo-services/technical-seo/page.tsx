import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical SEO Services Company | Core Web Vitals Optimization",
  description: "Eliminate indexing bottlenecks and maximize search visibility with advanced technical SEO services. From log analysis to custom AI SEO integration.",
  keywords: ["technical seo services", "ai seo services", "seo services company", "technical seo audit"],
};

export default function TechnicalSEOPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 py-28 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Deep Infrastructure Engineering</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            <span className="text-sky-900">Technical SEO Services</span> for Scaling Domains
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Before content can rank, your architecture must be flawless. Our <strong className="text-sky-900">technical SEO services</strong> strip away server response lag, resolve complex parsing bottlenecks, and deploy advanced schemas to guarantee search engine crawlers dynamically surface your highest-value URLs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-sky-800 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-sky-900 transition-all">
              Run a Deep Technical SEO Audit
            </Link>
            <Link href="/seo-services" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
              Back to Core Pillars Overview
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CORE FEATURES SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-sky-900">The Technical Blueprint Suite</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            We systematically break down your code performance to maximize search discovery budgets using our <strong className="text-sky-900">technical SEO services</strong> alongside our semantic <Link href="/seo-services/on-page-seo" className="text-orange-600 font-semibold underline hover:text-orange-700">on-page SEO strategies</Link>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Core Web Vitals",
              description: "Dynamic layout adjustment optimizing LCP, INP, and CLS scores for fluid real-user response speeds.",
              imageSrc: "/services/seo-technical.png",
              icon: (
                <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              title: "SSR & Hydration",
              description: "Advanced JavaScript bundle shaving and server-side rendering balance to eliminate main-thread blocking time.",
              imageSrc: "/services/seo-on-page.png",
              icon: (
                <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              ),
            },
            {
              title: "Crawl Mapping",
              description: "Programmatic XML map structures, dynamic index directives, and strict robots instruction controls.",
              imageSrc: "/services/seo-local.png",
              icon: (
                <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              ),
            },
            {
              title: "Nested Schemas",
              description: "Next-generation JSON-LD context tags mapping out clear, rich graph relationships to search models.",
              imageSrc: "/services/seo-content.jpg",
              icon: (
                <svg className="w-6 h-6 text-sky-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-xl hover:border-sky-800 group text-left"
            >
              <div 
                className="h-40 w-full bg-cover bg-center bg-no-repeat bg-slate-100 relative"
                style={{ backgroundImage: `url('${item.imageSrc}')` }}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-6 flex flex-col flex-grow items-center text-center relative bg-white">
                <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 -mt-12 relative z-10 border-2 border-white shadow-sm group-hover:bg-orange-50 transition-colors">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-bold text-sky-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPLANATION SECTION ================= */}
      <section className="bg-slate-50 border-y py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-900 mb-6">Why Technical Debt Keeps Your Website Invisible</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even the most well-written content fails under the weight of an unoptimized codebase. Slow Time-to-First-Byte (TTFB), misconfigured SSR pipelines, and layout shifts degrade user retention while heavily draining your assigned search crawl budget.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By shifting to programmatic site health workflows and introducing modern <strong className="text-sky-900">AI SEO services</strong>, our professional <Link href="/seo-services" className="text-orange-600 font-semibold underline hover:text-orange-700">SEO services company</Link> eliminates deep-seated indexing barriers, providing search bots a pristine path to crawl, evaluate, and index your brand assets instantly.
            </p>
          </div>
          
          <div className="p-8 bg-white border rounded-2xl shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-sky-900">Optimization Commitments</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-orange-500 font-bold text-lg">01</div>
                <div>
                  <h4 className="font-bold text-gray-900">Zero Crawl Waste</h4>
                  <p className="text-sm text-gray-600">Pruning duplicate runtime variations and orphan nodes to keep indexing pipelines efficient during every <strong className="text-sky-900">technical SEO audit</strong>.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-500 font-bold text-lg">02</div>
                <div>
                  <h4 className="font-bold text-gray-900">Edge Rendering Acceleration</h4>
                  <p className="text-sm text-gray-600">Moving logic distribution models closer to end clients to consistently register sub-second global responses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}