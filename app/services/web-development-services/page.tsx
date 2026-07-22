import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Web Development Services in Hyderabad, Telangana & Andhra Pradesh | MrTechies",
  description:
    "Professional web development company specializing in high-performance, secure, and scalable web solutions across Hyderabad, Telangana, and Andhra Pradesh. Build your next application with modern tech stacks.",
  keywords: [
    "web development services in hyderabad",
    "website development company telangana",
    "custom software application developers andhra pradesh",
    "best web developers in vizag vijayawada",
    "full stack developers hyderabad",
  ],
  alternates: {
    canonical: "https://mrtechies.com/services/web-development-services",
  },
};

export default function RegionalWebDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-linear-to-br from-sky-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Web Development Services in Hyderabad & <span className="text-sky-700">Telangana</span>
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a leading <span className="font-semibold text-sky-800">website development company in Telangana</span>, we engineer high-performance web applications from our Hyderabad hub. We provide robust solutions for businesses across Andhra Pradesh, utilizing modern tech stacks to ensure your infrastructure scales effortlessly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-800 transition-colors">
              Get Free Technical Consultation
            </Link>
            <Link href="/services/seo-services" className="border border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Explore SEO Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-center text-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-sky-800">100+</h3>
            <p>Platforms Deployed Regionally</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-800">Next.js / React</h3>
            <p>Modern Tech Stacks</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-800">&lt; 2s</h3>
            <p>Average Load Time</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-800">Secure</h3>
            <p>Enterprise Grade Code</p>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-4">
          Complete Full-Stack Web Development Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Our <span className="font-semibold text-sky-800">web development services in Hyderabad</span> are optimized to scale digital logic, cloud setups, and rapid frontend capabilities for diverse markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "High-Performance Websites", description: "Fast, SEO-ready sites as a top website development company in Telangana.", image: "/services/dev-next.jpg", href: "/services/web-development-services/custom-website-development" },
            { title: "Custom Web Applications", description: "Built by expert custom software application developers in Andhra Pradesh.", image: "/services/dev-cms.jpg", href: "/services/web-development-services/custom-software-development" },
            { title: "E-commerce Platforms", description: "Scalable stores designed for growth by our web development services in Hyderabad.", image: "/services/dev-ecom.jpg", href: "/services/web-development-services/ecommerce-development" },
            { title: "Headless CMS Systems", description: "Flexible content management delivered by our website development company in Telangana.", image: "/services/dev-cms.jpg", href: "/services/web-development-services/headless-cms-solutions" },
          ].map((service, index) => (
            <Link href={service.href} key={index} className="flex flex-col bg-slate-50 border border-gray-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg hover:border-sky-200 transition-all group cursor-pointer">
              <div className="h-48 w-full overflow-hidden bg-white border-b border-gray-100 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
              </div>
              <div className="flex flex-col items-center text-center p-6 pt-8 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-xs font-semibold text-orange-500 group-hover:underline mt-auto">Learn More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-8">
          Why Legacy Web Architectures Hold Back Growing Enterprises
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            As business ecosystems evolve, relying on generic templates causes bottlenecks. Companies using our <span className="font-semibold text-sky-800">web development services in Hyderabad</span> gain a competitive edge over those stuck with stagnant legacy code. 
          </p>
          <p>
            When neglecting professional <span className="font-semibold text-sky-800">custom software application developers in Andhra Pradesh</span>, technical debt accumulates. This prevents seamless integration with ERPs and logistics networks essential for multi-city business models.
          </p>
          <p>
            Performance is critical. Our <span className="font-semibold text-sky-800">website development company in Telangana</span> focuses on Core Web Vitals, ensuring your platform never suffers from the latency that drives conversion rates down.
          </p>
        </div>
      </section>

      {/* ================= LOCATIONS MAP STRIP ================= */}
      <section className="bg-white border-y py-16 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-sky-800 mb-8">Our Core Areas of Technical Deployment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-slate-50 rounded-xl border">
              <h4 className="font-bold text-orange-500 mb-2">Primary Tech Hub</h4>
              <p className="text-gray-700 text-sm"><strong>Hyderabad:</strong> Providing specialized web development services in Hyderabad and beyond.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border">
              <h4 className="font-bold text-sky-800 mb-2">Telangana Coverage</h4>
              <p className="text-gray-700 text-sm">Serving as your go-to website development company in Telangana for <strong>Warangal, Nizamabad, and Karimnagar</strong>.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border">
              <h4 className="font-bold text-sky-800 mb-2">Andhra Pradesh Coverage</h4>
              <p className="text-gray-700 text-sm">Trusted custom software application developers in Andhra Pradesh serving <strong>Visakhapatnam, Vijayawada, and Guntur</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ & CTA ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-10">Frequently Asked Technical Questions</h2>
        <div className="space-y-6 text-gray-700">
          <div className="border-b pb-4">
            <strong className="block text-sky-800 text-lg mb-1">Do you serve clients outside of Hyderabad?</strong>
            <p className="text-gray-600">Yes, as a leading website development company in Telangana, we support businesses across Andhra Pradesh and Telangana.</p>
          </div>
          <div className="border-b pb-4">
            <strong className="block text-sky-800 text-lg mb-1">Which tech stacks do you specialize in?</strong>
            <p className="text-gray-600">We utilize React, Next.js, and Node.js, standard for top-tier custom software application developers in Andhra Pradesh.</p>
          </div>
        </div>
      </section>

      <section className="bg-sky-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Let’s Build High-Performance Infrastructure</h2>
          <p className="mb-10 text-sky-100">Partner with an engineering team recognized for superior web development services in Hyderabad.</p>
          <Link href="/contact" className="bg-orange-500 px-10 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors inline-block">
            Schedule a Technical Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}