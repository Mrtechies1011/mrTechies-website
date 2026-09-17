"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  href: string;
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
        href: "/services/web-designing-services/corporate",
      },
      {
        title: "Startup Landing Pages",
        desc: "High‑conversion landing pages built for growth.",
        image: "/services/design-landing.jpg",
        icon: Palette,
        href: "/services/web-designing-services/startups",
      },
      {
        title: "E‑commerce UI",
        desc: "User‑friendly shopping experiences that convert visitors.",
        image: "/services/design-ecom.jpg",
        icon: ShoppingCart,
        href: "/services/web-designing-services/ecommerce",
      },
      {
        title: "Personal & Portfolio Brands",
        desc: "Clean, modern designs for individuals and creators.",
        image: "/services/design-portfolio.png",
        icon: User,
        href: "/services/web-designing-services/portfolio",
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
        href: "/services/web-development",
      },
      {
        title: "Custom Web Applications",
        desc: "Tailored applications built around your business logic.",
        image: "/services/dev-custom.png",
        icon: Server,
        href: "/services/web-development",
      },
      {
        title: "E‑commerce Platforms",
        desc: "Scalable online stores for long‑term growth.",
        image: "/services/dev-ecom.jpg",
        icon: ShoppingCart,
        href: "/services/web-development",
      },
      {
        title: "Headless CMS Systems",
        desc: "Flexible content management with full control.",
        image: "/services/dev-cms.jpg",
        icon: Database,
        href: "/services/web-development",
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
        href: "/services/seo-optimization",
      },
      {
        title: "On‑Page SEO",
        desc: "Keyword‑aligned, search‑friendly content structure.",
        image: "/services/seo-onpage.png",
        icon: BarChart3,
        href: "/services/seo-optimization",
      },
      {
        title: "Local SEO",
        desc: "Rank higher in Hyderabad and surrounding cities.",
        image: "/services/seo-local.png",
        icon: Users,
        href: "/services/seo-optimization",
      },
      {
        title: "Content SEO",
        desc: "Content that attracts traffic and converts users.",
        image: "/services/seo-content.png",
        icon: PenTool,
        href: "/services/seo-optimization",
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
        href: "/services/app-development",
      },
      {
        title: "Mobile‑First Apps",
        desc: "Smooth experiences across modern devices.",
        image: "/services/app-mobile.png",
        icon: Smartphone,
        href: "/services/app-development",
      },
      {
        title: "Admin Dashboards",
        desc: "Internal tools for managing operations and data.",
        image: "/services/app-admin.webp",
        icon: Settings,
        href: "/services/app-development",
      },
      {
        title: "Internal Tools",
        desc: "Custom systems designed around workflows.",
        image: "/services/app-internal.jpg",
        icon: Server,
        href: "/services/app-development",
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
        href: "/services/crm-solutions",
      },
      {
        title: "Sales Pipelines",
        desc: "Clear visibility into your sales process.",
        image: "/services/crm-sales.webp",
        icon: BarChart3,
        href: "/services/crm-solutions",
      },
      {
        title: "Customer Dashboards",
        desc: "Insights and analytics in one place.",
        image: "/services/crm-dashboard.jpg",
        icon: Database,
        href: "/services/crm-solutions",
      },
      {
        title: "Automation Systems",
        desc: "Reduce manual work with smart automation.",
        image: "/services/crm-automation.avif",
        icon: Settings,
        href: "/services/crm-solutions",
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
        href: "/services/digital-marketing",
      },
      {
        title: "Social Media Marketing",
        desc: "Build audience and engagement consistently.",
        image: "/services/digital-SMM.webp",
        icon: Megaphone,
        href: "/services/digital-marketing",
      },
      {
        title: "Brand Campaigns",
        desc: "Long‑term positioning and awareness.",
        image: "/services/digital-brand.jpg",
        icon: Layout,
        href: "/services/digital-marketing",
      },
      {
        title: "Growth Funnels",
        desc: "Turn visitors into loyal customers.",
        image: "/services/digital-growth.png",
        icon: TrendingUp,
        href: "/services/digital-marketing",
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
        href: "/services/content-video-editing",
      },
      {
        title: "Promotional Videos",
        desc: "Professional brand and product videos.",
        image: "/services/content-promotional.jpg",
        icon: Video,
        href: "/services/content-video-editing",
      },
      {
        title: "Brand Content",
        desc: "Consistent visuals that reflect your identity.",
        image: "/services/content-brand.jpg",
        icon: Palette,
        href: "/services/content-video-editing",
      },
      {
        title: "Editing & Motion",
        desc: "Clean edits with smooth motion design.",
        image: "/services/content-editing.jpg",
        icon: PenTool,
        href: "/services/content-video-editing",
      },
    ],
    tech: ["Storytelling", "Visual Consistency"],
  },
};

export default function ServiceScene({ service }: { service: string }) {
  const [step, setStep] = useState(0);
  const data = DATA[service];

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 600);
    const t3 = setTimeout(() => setStep(3), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!data) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-sky-950 text-center mb-6 tracking-tight transition-all duration-500">
        {data.title}
      </h2>

      {/* WHY */}
      {step >= 1 && (
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed transition-all duration-500">
          {data.why}
        </p>
      )}

      {/* PHOTO CARD CONFIGURATION */}
      {step >= 2 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-500">
          {data.whatCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative h-96 flex flex-col justify-end p-6 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 ease-out border border-slate-100 hover:-translate-y-1.5"
            >
              {/* IMAGE AS BACKGROUND */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-w-7xl) 25vw"
                />
                {/* DARK SEMANTIC TEXTURE OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black/85 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* FLOATING INTERACTIVE HERO ELEMENTS */}
              <div className="relative z-10 w-full text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 mx-auto sm:mx-0 transition-colors duration-500 group-hover:bg-orange-500 group-hover:border-transparent">
                  <card.icon className="text-white" size={22} />
                </div>
                <h3 className="font-bold text-white text-xl mb-2 tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-200/90 leading-relaxed transition-colors duration-300 group-hover:text-white line-clamp-3">
                  {card.desc}
                </p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-orange-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
                  Explore Hub →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* TECH TAGS */}
      {step >= 3 && (
        <div className="flex flex-wrap justify-center gap-3 transition-all duration-500">
          {data.tech.map((t) => (
            <span
              key={t}
              className="px-5 py-2 rounded-full border border-slate-200 bg-slate-50/50 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}