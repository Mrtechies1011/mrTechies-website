"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Layout,
  Palette,
  ShoppingCart,
  User,
  Code2,
  Server,
  Database,
  Search,
  BarChart3,
  Smartphone,
  Settings,
  Users,
  Megaphone,
  Video,
  PenTool,
  TrendingUp
} from "lucide-react";

type ServiceTypeCard = {
  title: string;
  desc: string;
  image: string;
  icon: any;
};

const DATA: Record<
  string,
  {
    title: string;
    why: string;
    whatCards: ServiceTypeCard[];
    tech: string[];
  }
> = {
  design: {
    title: "Web Designing",
    why: "Design is not decoration. It’s how users trust your brand.",
    whatCards: [
      {
        title: "Corporate Websites",
        desc: "Professional websites that establish credibility and trust.",
        image: "/services/design-corporate.jpg",
        icon: Layout,
      },
      {
        title: "Startup Landing Pages",
        desc: "High‑conversion landing pages built for growth.",
        image: "/services/design-landing.jpg",
        icon: Palette,
      },
      {
        title: "E‑commerce UI",
        desc: "User‑friendly shopping experiences that convert visitors.",
        image: "/services/design-ecom.jpg",
        icon: ShoppingCart,
      },
      {
        title: "Personal & Portfolio Brands",
        desc: "Clean, modern designs for individuals and creators.",
        image: "/services/design-portfolio.png",
        icon: User,
      },
    ],
    tech: ["Figma", "UX Psychology", "Responsive Systems"],
  },

  development: {
    title: "Web Development",
    why: "Performance and structure decide how far your product can grow.",
    whatCards: [
      {
        title: "High-Performance Websites",
        desc: "Fast, SEO‑ready websites with modern architecture.",
        image: "/services/dev-next.jpg",
        icon: Code2,
      },
      {
        title: "Custom Web Applications",
        desc: "Tailored applications built around your business logic.",
        image: "/services/dev-custom.png",
        icon: Server,
      },
      {
        title: "E‑commerce Platforms",
        desc: "Scalable online stores for long‑term growth.",
        image: "/services/dev-ecom.jpg",
        icon: ShoppingCart,
      },
      {
        title: "Headless CMS Systems",
        desc: "Flexible content management with full control.",
        image: "/services/dev-cms.jpg",
        icon: Database,
      },
    ],
    tech: ["Next.js", "React", "APIs", "Scalable Architecture"],
  },

  seo: {
    title: "SEO Optimization",
    why: "Visibility compounds. Good SEO keeps working while you sleep.",
    whatCards: [
      {
        title: "Technical SEO",
        desc: "Performance, indexing, and crawl optimization.",
        image: "/services/seo-technical.png",
        icon: Search,
      },
      {
        title: "On‑Page SEO",
        desc: "Keyword‑aligned, search‑friendly content structure.",
        image: "/services/seo-onpage.png",
        icon: BarChart3,
      },
      {
        title: "Local SEO",
        desc: "Rank higher in Hyderabad and surrounding cities.",
        image: "/services/seo-local.png",
        icon: Users,
      },
      {
        title: "Content SEO",
        desc: "Content that attracts traffic and converts users.",
        image: "/services/seo-content.png",
        icon: PenTool,
      },
    ],
    tech: ["Core Web Vitals", "Schema", "Search Strategy"],
  },

  app: {
    title: "App Development",
    why: "Apps must feel effortless to earn daily usage.",
    whatCards: [
      {
        title: "Web Applications",
        desc: "High‑performance apps built for real users.",
        image: "/services/app-web.avif",
        icon: Code2,
      },
      {
        title: "Mobile‑First Apps",
        desc: "Smooth experiences across modern devices.",
        image: "/services/app-mobile.png",
        icon: Smartphone,
      },
      {
        title: "Admin Dashboards",
        desc: "Internal tools for managing operations and data.",
        image: "/services/app-admin.webp",
        icon: Settings,
      },
      {
        title: "Internal Tools",
        desc: "Custom systems designed around workflows.",
        image: "/services/app-internal.jpg",
        icon: Server,
      },
    ],
    tech: ["React", "Modern UX", "Scalable Systems"],
  },

  crm: {
    title: "CRM Solutions",
    why: "Growth needs structure, not chaos.",
    whatCards: [
      {
        title: "Lead Management",
        desc: "Track and organize leads efficiently.",
        image: "/services/crm-lead.jpg",
        icon: Users,
      },
      {
        title: "Sales Pipelines",
        desc: "Clear visibility into your sales process.",
        image: "/services/crm-sales.webp",
        icon: BarChart3,
      },
      {
        title: "Customer Dashboards",
        desc: "Insights and analytics in one place.",
        image: "/services/crm-dashboard.jpg",
        icon: Database,
      },
      {
        title: "Automation Systems",
        desc: "Reduce manual work with smart automation.",
        image: "/services/crm-automation.avif",
        icon: Settings,
      },
    ],
    tech: ["Custom Logic", "Business Automation"],
  },

  marketing: {
    title: "Digital Marketing",
    why: "Marketing without intent is just noise.",
    whatCards: [
      {
        title: "Google Ads",
        desc: "High‑intent traffic with measurable ROI.",
        image: "/services/digital-google.webp",
        icon: Search,
      },
      {
        title: "Social Media Marketing",
        desc: "Build audience and engagement consistently.",
        image: "/services/digital-SMM.webp",
        icon: Megaphone,
      },
      {
        title: "Brand Campaigns",
        desc: "Long‑term positioning and awareness.",
        image: "/services/digital-brand.jpg",
        icon: Layout,
      },
      {
        title: "Growth Funnels",
        desc: "Turn visitors into loyal customers.",
        image: "/services/digital-growth.png",
        icon: TrendingUp,
      },
    ],
    tech: ["Performance Strategy", "Data‑Driven Ads"],
  },

  content: {
    title: "Content & Video Editing",
    why: "Stories are remembered longer than features.",
    whatCards: [
      {
        title: "Short‑Form Reels",
        desc: "High‑engagement videos for social platforms.",
        image: "/services/content-short.jpg",
        icon: Video,
      },
      {
        title: "Promotional Videos",
        desc: "Professional brand and product videos.",
        image: "/services/content-promotional.jpg",
        icon: Video,
      },
      {
        title: "Brand Content",
        desc: "Consistent visuals that reflect your identity.",
        image: "/services/content-brand.jpg",
        icon: Palette,
      },
      {
        title: "Editing & Motion",
        desc: "Clean edits with smooth motion design.",
        image: "/services/content-editing.jpg",
        icon: PenTool,
      },
    ],
    tech: ["Storytelling", "Visual Consistency"],
  },
};

export default function ServiceScene({ service }: { service: string }) {
  const [step, setStep] = useState(0);
  const data = DATA[service];

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1200);
    const t3 = setTimeout(() => setStep(3), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!data) return null;

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      {/* TITLE */}
      <h2 className="text-5xl font-semibold text-brand-blue text-center mb-8 animate-fade">
        {data.title}
      </h2>

      {/* WHY */}
      {step >= 1 && (
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 animate-fade delay-1">
          {data.why}
        </p>
      )}

      {/* WHAT → CARDS */}
      {step >= 2 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 animate-fade delay-2">
          {data.whatCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/80 rounded-2xl overflow-hidden backdrop-blur-md border hover:shadow-xl transition"
            >
              <div className="relative h-50">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <card.icon className="mx-auto mb-4 text-brand-blue" size={28} />
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TECH */}
      {step >= 3 && (
        <div className="flex flex-wrap justify-center gap-4 animate-fade delay-3">
          {data.tech.map((t) => (
            <span
              key={t}
              className="px-6 py-2 rounded-full border text-sm text-gray-500 shadow-xl"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
