import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce UI & UX Design Company in Hyderabad | MrTechies",
  description: "High-conversion e-commerce layout and web designing services in Hyderabad. We architect user-centric retail storefront interfaces across India that maximize average order value.",
  keywords: [
    "web designing services in hyderabad",
    "best web designing services",
    "ecommerce ui ux design services",
    "ui ux design company telangana",
  ],
  alternates: { canonical: "https://mrtechies.com/services/web-designing-services/ecommerce" },
};

export default function EcommerceUIDesignPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-linear-to-br from-sky-900 via-sky-950 to-slate-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-xs bg-white/10 px-4 py-1.5 rounded-full border border-white/10">Engineered for Retail Volume</span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight max-w-4xl mx-auto">
            Web Designing Services for E-commerce
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            As a leading <span className="text-white font-semibold">UI UX design company in Telangana</span>, we eliminate checkout friction. We design custom shopping storefronts that define the <span className="text-white font-semibold">best web designing services</span> in Hyderabad and across India.
          </p>
          <div className="mt-10"><Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all inline-block">Optimize Your Store Architecture</Link></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-sky-950 leading-tight">Combating Cart Abandonment Through Psychology-Driven Layouts</h2>
            <p className="text-gray-600 leading-relaxed">Most digital storefronts lose conversion volume due to confusing user pathways. Our <span className="font-semibold text-sky-900">web designing services in Hyderabad</span> resolve these pain points by crafting bespoke configurations—focusing on advanced filtering grids and sticky purchase buttons.</p>
            <p className="text-gray-600 leading-relaxed">As the preferred partner for retailers, we provide the <span className="font-semibold text-sky-900">best web designing services</span> in India to turn casual browsers into brand evangelists.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 space-y-6">
            <h3 className="font-bold text-sky-950 text-xl">Conversion Features We Wireframe:</h3>
            <div className="flex gap-4"><div className="text-orange-500 font-bold text-lg">01</div><div><h4 className="font-bold text-sky-950">Frictionless Checkouts</h4><p className="text-gray-600 text-sm mt-1">Single-page layout steps engineered to maximize single-session transactions securely.</p></div></div>
            <div className="flex gap-4"><div className="text-orange-500 font-bold text-lg">02</div><div><h4 className="font-bold text-sky-950">Intuitive Search & Filters</h4><p className="text-gray-600 text-sm mt-1">Multi-attribute sorting interfaces that help buyers discover products inside 2 clicks.</p></div></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-950 mb-6">Technical Performance & Mobile-First Indexing</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Google prioritizes E-commerce sites that achieve high Core Web Vitals. Our design handovers are built on a &quot;Mobile-First&quot; philosophy, ensuring that your layout renders perfectly across low-bandwidth handheld devices in India, significantly improving your SEO standing and organic traffic reach.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-extrabold text-sky-950 text-center mb-14">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-slate-200 rounded-xl"><h4 className="font-bold text-sky-950 mb-2">Do you provide custom UI design?</h4><p className="text-gray-600 text-sm">Yes, we specialize in bespoke Figma wireframes and high-fidelity prototypes built specifically for your brand identity.</p></div>
          <div className="p-6 border border-slate-200 rounded-xl"><h4 className="font-bold text-sky-950 mb-2">How do you improve conversion?</h4><p className="text-gray-600 text-sm">We use data-backed UI patterns and CRO-focused heatmaps to ensure every button placement drives action.</p></div>
        </div>
      </section>

      <section className="bg-orange-500 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Capture Missing Sales Margins?</h2>
          <p className="text-orange-100 mb-8">Let&apos;s build an authoritative shopping environment tailored to rank beautifully and scale seamlessly.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-sky-950 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-sky-900 transition-colors">Request Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}