import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Web Application Development | Enterprise Platforms",
  description: "Scalable web platforms engineered for peak performance. We build custom web application development solutions that streamline business operations.",
  keywords: ["web application development", "scalable web platforms", "custom software engineering", "enterprise web apps"],
};

export default function WebApplicationsPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Module: Web Infrastructure</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-sky-950">
            High-Performance <span className="text-orange-600">Web Platforms</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We engineer robust <strong className="text-sky-900">web application development</strong> solutions designed for speed and scale. From complex data-driven platforms to interactive customer portals, our builds eliminate digital friction.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-950 mb-6">Engineered for Scalability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Modern businesses require more than standard websites. Our <strong className="text-sky-800">custom software engineering</strong> approach focuses on creating stable, high-velocity environments that adapt as your enterprise grows.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We leverage modern stacks to ensure your platforms remain secure, responsive, and ready for high-concurrency traffic.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "React Architecture", desc: "Leveraging modern frontend frameworks for near-instant interaction and seamless user experiences." },
              { title: "Cloud Backend", desc: "Secure, serverless-ready architectures that grow effortlessly with your user base." },
              { title: "API Orchestration", desc: "Custom-built connectors to synchronize your existing tech stack and third-party services." },
              { title: "Performance Tuning", desc: "Continuous optimization to ensure sub-second load times and high availability." }
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
          <Link href="/app-development-services" className="text-sm font-semibold text-gray-600 hover:text-sky-900">
            &larr; Back to Services
          </Link>
          <Link href="/app-development-services/mobile-first-apps" className="px-6 py-2 bg-sky-900 text-white rounded-lg font-bold hover:bg-sky-950">
            Next: Mobile-First Apps &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}