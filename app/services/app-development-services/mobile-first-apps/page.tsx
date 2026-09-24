import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile-First App Development | iOS & Android Solutions",
  description: "Native and cross-platform mobile development focused on touch-optimized performance, offline-first sync, and high-velocity mobile app development services.",
  keywords: ["mobile app development services", "cross-platform mobile apps", "native performance", "ios and android development"],
};

export default function MobileFirstAppsPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Module: Mobile Ecosystem</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-sky-950">
            Responsive <span className="text-orange-600">Mobile Experiences</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We build professional <strong className="text-sky-900">mobile app development services</strong> for the modern user. Focusing on low-latency interactions and offline-first data sync, we ensure your brand delivers peak performance anywhere.
          </p>
        </div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-950 mb-6">Engineered for Touch & Mobility</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our development philosophy centers on creating <strong className="text-sky-800">cross-platform mobile apps</strong> that feel indistinguishable from native builds. By optimizing hardware acceleration, we guarantee a premium experience on both iOS and Android.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether your enterprise requires consumer-facing apps or internal productivity tools, our mobile-first approach prioritizes user retention and consistent performance.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Native Performance", desc: "Utilizing Flutter and React Native to ensure 60fps animations and smooth gesture navigation." },
              { title: "Offline Sync", desc: "Intelligent local caching so your application remains functional in low-connectivity zones." },
              { title: "Touch-Optimized UI", desc: "Precision interface design tailored for ergonomics and modern device interaction." },
              { title: "Scalable Architecture", desc: "Future-proof codebases designed to evolve with your business requirements." }
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
          <Link href="/app-development-services/web-applications" className="text-sm font-semibold text-gray-600 hover:text-sky-900">
            &larr; Prev: Web Apps
          </Link>
          <Link href="/app-development-services/internal-tools" className="px-6 py-2 bg-sky-900 text-white rounded-lg font-bold hover:bg-sky-950">
            Next: Internal Tools &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}