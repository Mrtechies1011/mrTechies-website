import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Professional Web Designing Services in Hyderabad & India | MrTechies",
  description: "Premier agency offering custom web designing services in Hyderabad, Telangana, and across India. Explore our specialized corporate, startup, e-commerce, and portfolio design interfaces.",
  keywords: [
    "web designing services in hyderabad",
    "web designing services india",
    "web designing services hyderabad",
    "best web designing services",
    "ui ux design company telangana",
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/web-designing-services",
  },
};

/* ===================== GRID DATA ARCHITECTURE ===================== */
const webDesignCategories = [
  {
    title: "Corporate Websites",
    description: "Professional websites that establish credibility and trust.",
    imageSrc: "/services/design-corporate.jpg", // Corrected local path location
    slug: "/services/web-designing-services/corporate",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Startup Landing Pages",
    description: "High-conversion landing pages built for growth.",
    imageSrc: "/services/design-landing.jpg", // Corrected local path location
    slug: "/services/web-designing-services/startups",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "E-commerce UI",
    description: "User-friendly shopping experiences that convert visitors.",
    imageSrc: "/services/design-ecom.jpg", // Corrected local path location
    slug: "/services/web-designing-services/ecommerce",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Personal & Portfolio Brands",
    description: "Clean, modern designs for individuals and creators.",
    imageSrc: "/services/design-portfolio.png", // Corrected local path location & extension
    slug: "/services/web-designing-services/portfolio",
    icon: (
      <svg className="w-6 h-6 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function WebDesigningHubPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-slate-50 via-white to-sky-50/60">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm bg-orange-50 px-4 py-2 rounded-full">
            Premium Interface Engineering
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-sky-950 mt-6 leading-tight">
           <span className="text-sky-800">Web Designing Services</span> in Hyderabad
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a leading provider of elite web designing services India looks up to, MrTechies builds pixel-perfect layout architectures. We discard templates to design personalized digital conversion funnels that boost regional corporate authority.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-sky-900 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-sky-800 transition-all">
              Claim Your Free Layout Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4-PART GATEWAY SELECTION GRID ================= */}
      <section className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-950">
              Explore Our Specialized Blueprint Variations
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Click on the specialized vertical below that matches your exact corporate framework to view its localized performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {webDesignCategories.map((category) => (
              <Link
                key={category.title}
                href={category.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col text-center"
              >
                {/* Image Window */}
                <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={category.imageSrc}
                    alt={`${category.title} web designing services hyderabad`}
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
              Why Brands Trust Our Best Web Designing Services across India
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Achieving high visibility across competitive areas demands data-validated structures. Generic agencies rely on heavy WordPress templates that drag down your visual hierarchy and destroy cellular page-load speeds.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At MrTechies, our dedicated UI/UX artists build raw layouts inside Figma before our internal engineering division takes over. This unified workflow guarantees smooth micro-interactions, responsive adaptability, and pristine rendering across every resolution.
            </p>
          </div>
          <div className="bg-sky-950 rounded-2xl p-8 text-white space-y-6">
            <h3 className="text-xl font-bold text-orange-400">The Regional Conversion Advantage</h3>
            <div className="space-y-4 text-sm text-sky-100">
              <p><strong>✓ Hyperlocal Search Alignment:</strong> Built explicitly to fulfill local keyword intent parameters safely.</p>
              <p><strong>✓ Asset Weight Reduction:</strong> SVGs and clean image assets optimized to render smoothly even under volatile networks.</p>
              <p><strong>✓ Wireframed Intent:</strong> Every button element position is planned around psychological heatmaps to boost inbound lead conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-sky-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl font-black text-orange-400">100%</span>
            <span className="text-xs text-sky-200 mt-1 block">Bespoke Frameworks</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-orange-400">SEO</span>
            <span className="text-xs text-sky-200 mt-1 block">Semantic Core Structure</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-orange-400">Figma</span>
            <span className="text-xs text-sky-200 mt-1 block">Interactive Prototyping</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-orange-400">CRO</span>
            <span className="text-xs text-sky-200 mt-1 block">Conversion Optimization</span>
          </div>
        </div>
      </section>

    </main>
  );
}