import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Editing Services | Professional Video Editors | MrTechies",
  description: "Professional video editing services for businesses, brands, and creators. Fast turnaround and premium quality edits.",
  keywords: ["video editing services", "professional video editing", "social media video editor"],
  alternates: {
    canonical: "https://www.mrtechies.com/services/video-editing-services",
  },
};

export default function VideoEditingServicesPage() {
  const subServices = [
    {
      title: "Short-Form Reels",
      description: "High-engagement videos for social platforms.",
      href: "/services/video-editing-services/short-form-reels",
      icon: "🎥",
      image: "/services/content-short.jpg", 
    },
    {
      title: "Promotional Videos",
      description: "Professional brand and product videos.",
      href: "/services/video-editing-services/promotional-videos",
      icon: "🎬",
      image: "/services/content-promotional.jpg",
    },
    {
      title: "Brand Content",
      description: "Consistent visuals that reflect your identity.",
      href: "/services/video-editing-services/brand-content",
      icon: "🎨",
      image: "/services/content-brand.jpg",
    },
    {
      title: "Editing & Motion",
      description: "Clean edits with smooth motion design.",
      href: "/services/video-editing-services/editing-motion",
      icon: "✒️",
      image: "/services/content-editing.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-orange-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-sky-900">
            Professional Video Editing Services for <span className="text-orange-600">Businesses</span> & Creators
          </h1>
          <p className="mt-6 text-md text-gray-600 max-w-2xl mx-auto">
            Turn raw clips into polished, high-retaining videos built for your platform algorithms. Rapid turnaround times with workflow structures tailored directly for scale.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="bg-sky-800 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:bg-sky-900 transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEW VISUAL CARD GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-2">Content & Video Editing</h2>
        <p className="text-center text-gray-400 italic mb-12">Stories are remembered longer than features.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subServices.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Banner Image Area */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Bottom Info Content Area */}
              <div className="p-6 text-center">
                <div className="text-sky-800 text-xl mb-2">{service.icon}</div>
                <h3 className="text-md font-bold text-sky-900 group-hover:text-orange-600 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= BRIEF FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t">
        <h2 className="text-2xl font-bold text-sky-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-sky-900 mb-1">What formats do you accept?</h4>
            <p>We work with all standard camera and phone formats including MP4, MOV, and ProRes raw clips.</p>
          </div>
          <div>
            <h4 className="font-bold text-sky-900 mb-1">What is the usual turnaround time?</h4>
            <p>Standard editing takes 2-4 business days depending completely on the final asset duration complexity.</p>
          </div>
        </div>
      </section>
    </main>
  );
}