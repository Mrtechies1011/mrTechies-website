import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  Link2,
  MonitorSmartphone,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   CONSTANTS
========================================================= */

const BASE_URL = "https://mrtechies.com";
const PAGE_URL = `${BASE_URL}/services/web-development-services`;

const LAST_UPDATED_ISO = "2026-09-24";
const LAST_UPDATED_LABEL = "24 September 2026";

/* =========================================================
   BUTTONS
========================================================= */

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-4 font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Web Development Services in Hyderabad | MrTechies",

  description:
    "Custom web development services in Hyderabad for business websites, web applications, ecommerce platforms and scalable digital products. Built with modern, SEO-ready technology.",

  keywords: [
    "web development services in Hyderabad",
    "web development company in Hyderabad",
    "website development company in Hyderabad",
    "website development services Hyderabad",
    "custom web development Hyderabad",
    "full stack web development Hyderabad",
    "custom web application development",
    "ecommerce web development Hyderabad",
    "Next.js development company Hyderabad",
    "React development company Hyderabad",
    "business website development",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "Web Development Services in Hyderabad | MrTechies",
    description:
      "Custom websites, web applications, ecommerce platforms and scalable digital solutions developed by MrTechies.",
    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/og/web-development-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Web Development Services in Hyderabad by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Hyderabad | MrTechies",
    description:
      "Custom web development, web applications, ecommerce platforms and scalable digital solutions by MrTechies.",
    images: [`${BASE_URL}/og/web-development-services.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Web Development",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   DATA
========================================================= */

const jumpLinks = [
  { href: "#solutions", label: "Development solutions" },
  { href: "#problems", label: "Problems we solve" },
  { href: "#technology", label: "Technology" },
  { href: "#process", label: "Process" },
  { href: "#timeline", label: "Timeline & cost" },
  { href: "#seo", label: "SEO & performance" },
  { href: "#faq", label: "FAQ" },
];

const developmentSolutions = [
  {
    title: "Business Website Development",
    description:
      "Fast, responsive business websites built around your services, customers, brand and long-term growth requirements.",
    imageSrc: "/services/dev-next.jpg",
    slug: "/services/web-development-services/custom-website-development",
    icon: Building2,
    audience:
      "Small businesses, professional services, startups and growing companies",
  },
  {
    title: "Custom Web Application Development",
    description:
      "Purpose-built web applications for dashboards, workflows, portals, SaaS products and business-specific processes.",
    imageSrc: "/services/dev-cms.jpg",
    slug: "/services/web-development-services/custom-software-development",
    icon: Code2,
    audience:
      "Startups, SaaS businesses and companies with custom operational requirements",
  },
  {
    title: "E-commerce Development",
    description:
      "Scalable online stores designed around product discovery, mobile shopping, integrations and conversion-focused customer journeys.",
    imageSrc: "/services/dev-ecom.jpg",
    slug: "/services/web-development-services/ecommerce-development",
    icon: ShoppingCart,
    audience:
      "Retailers, D2C brands, manufacturers and businesses selling online",
  },
  {
    title: "Headless CMS Development",
    description:
      "Flexible content systems that separate content management from the frontend for greater control over performance and future growth.",
    imageSrc: "/services/dev-cms.jpg",
    slug: "/services/web-development-services/headless-cms-solutions",
    icon: Layers3,
    audience:
      "Content-heavy businesses, publishers, brands and modern digital products",
  },
];

const audiences = [
  {
    icon: Rocket,
    title: "New businesses",
    text:
      "You need a professional website that can establish credibility and support customer enquiries from the beginning.",
  },
  {
    icon: Building2,
    title: "Growing companies",
    text:
      "Your current website no longer represents your services, brand, functionality or business scale.",
  },
  {
    icon: Workflow,
    title: "Businesses with manual workflows",
    text:
      "You need a web application, portal or dashboard to replace repetitive processes and connect business systems.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce brands",
    text:
      "You need a faster and clearer online shopping experience that works across mobile and desktop devices.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional service firms",
    text:
      "Your website needs to communicate expertise, explain services clearly and generate qualified enquiries.",
  },
  {
    icon: Target,
    title: "Startups and SaaS teams",
    text:
      "You need a scalable frontend and application architecture that can evolve as the product grows.",
  },
];

const developmentProblems = [
  {
    problem: "Our current website is slow",
    detail:
      "Heavy scripts, oversized assets or inefficient implementation can create a poor experience for visitors.",
    fix:
      "We plan the frontend, assets and implementation around performance instead of adding speed fixes at the end.",
  },
  {
    problem: "Our website is difficult to maintain",
    detail:
      "A site can become difficult to update when its codebase grows without reusable components or clear architecture.",
    fix:
      "We use structured components and maintainable implementation patterns appropriate to the project.",
  },
  {
    problem: "We need functionality beyond a normal website",
    detail:
      "Your business may need dashboards, customer portals, APIs, integrations, workflows or custom application logic.",
    fix:
      "We can design and develop custom web applications around your actual business process.",
  },
  {
    problem: "Our website is not mobile-friendly",
    detail:
      "A layout that works on desktop may still create difficult navigation, forms and interactions on mobile.",
    fix:
      "Responsive behaviour is considered throughout development rather than treated as a final adjustment.",
  },
  {
    problem: "Our website is difficult to grow",
    detail:
      "Adding new services, content, integrations or features can become expensive when the original architecture is restrictive.",
    fix:
      "We plan the information architecture and code structure with future expansion in mind.",
  },
  {
    problem: "SEO was added after development",
    detail:
      "Technical decisions can make search optimisation harder when URLs, headings, rendering and internal links were not considered early.",
    fix:
      "We build search-friendly technical foundations alongside the website instead of treating SEO as an afterthought.",
  },
];

const technologyPrinciples = [
  {
    icon: Code2,
    title: "Modern frontend development",
    description:
      "Modern frameworks and component-based development can create fast, maintainable and scalable interfaces.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive architecture",
    description:
      "Layouts, navigation, interactions and content are designed to work across desktop, tablet and mobile screens.",
  },
  {
    icon: ServerCog,
    title: "API and backend integration",
    description:
      "Where required, web applications can connect with APIs, databases, CRM systems, payment systems and other business tools.",
  },
  {
    icon: Gauge,
    title: "Performance-conscious implementation",
    description:
      "Images, scripts, rendering behaviour and frontend architecture are considered with real user performance in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Security-aware development",
    description:
      "Authentication, forms, integrations and application architecture are approached with appropriate security considerations.",
  },
  {
    icon: Layers3,
    title: "Scalable component systems",
    description:
      "Reusable components and consistent patterns make future pages and features easier to implement and maintain.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "REST APIs",
  "Headless CMS",
  "Database integrations",
];

const developmentProcess = [
  {
    title: "Business and technical discovery",
    description:
      "We understand the business objective, target users, existing technology, required functionality and expected outcome.",
  },
  {
    title: "Information architecture",
    description:
      "We define the pages, navigation, content hierarchy, user journeys and technical structure before development expands.",
  },
  {
    title: "UI and UX direction",
    description:
      "The interface is planned around clarity, responsiveness, accessibility, conversion points and the intended customer journey.",
  },
  {
    title: "Frontend development",
    description:
      "Approved layouts are converted into responsive components with appropriate frontend architecture.",
  },
  {
    title: "Backend and integrations",
    description:
      "Where required, application logic, APIs, databases, authentication and third-party integrations are implemented.",
  },
  {
    title: "SEO and technical checks",
    description:
      "We review metadata, headings, URLs, internal links, responsive behaviour, crawlability and performance considerations.",
  },
  {
    title: "Testing and refinement",
    description:
      "The website or application is reviewed across devices and important user flows before launch.",
  },
  {
    title: "Launch and continued growth",
    description:
      "After launch, the project can continue into SEO, content, analytics, marketing, maintenance and feature development.",
  },
];

const timelines = [
  {
    type: "Business website",
    time: "Typically 1–3 weeks",
  },
  {
    type: "Custom website",
    time: "Typically 2–5+ weeks",
  },
  {
    type: "E-commerce website",
    time: "Typically 3–8+ weeks",
  },
  {
    type: "Custom web application",
    time: "Scope dependent",
  },
];

const costFactors = [
  "Number of pages and unique layouts",
  "Custom UI/UX requirements",
  "Frontend and backend functionality",
  "Database and API requirements",
  "Payment or third-party integrations",
  "Authentication and user roles",
  "E-commerce catalogue and checkout complexity",
  "Content migration and data migration",
  "SEO and content requirements",
  "Testing and deployment requirements",
];

const seoFoundation = [
  {
    icon: Search,
    title: "Search-friendly architecture",
    description:
      "Important services and content receive clear URLs, page hierarchy and crawlable internal relationships.",
  },
  {
    icon: Link2,
    title: "Internal linking",
    description:
      "Relevant service pages, supporting pages and blog content can be connected through contextual internal links.",
  },
  {
    icon: Gauge,
    title: "Performance foundations",
    description:
      "Development decisions consider image loading, scripts, rendering and other factors that influence user experience.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile-first experience",
    description:
      "The website is designed and tested for users accessing your business from mobile devices as well as desktops.",
  },
  {
    icon: Sparkles,
    title: "Useful content structure",
    description:
      "Headings, sections and page copy are organised around real customer questions instead of repeated keywords.",
  },
  {
    icon: ShieldCheck,
    title: "Technical quality",
    description:
      "Canonical URLs, crawlability, metadata and other technical foundations can be reviewed as part of the project scope.",
  },
];

const seoChecklist = [
  "Descriptive page URLs",
  "Logical heading hierarchy",
  "Internal links between relevant pages",
  "Search-friendly page titles",
  "Useful meta descriptions",
  "Responsive implementation",
  "Image optimisation",
  "Canonical configuration",
  "Sitemap compatibility",
  "Crawlability review",
];

const expectations = [
  {
    title: "Clear project scope",
    text:
      "We define what is being developed before additional features expand the project.",
  },
  {
    title: "Realistic timeline",
    text:
      "The launch timeline depends on functionality, content, integrations and approval speed.",
  },
  {
    title: "Defined technology",
    text:
      "The technology approach is selected according to project requirements rather than using a stack simply because it is popular.",
  },
  {
    title: "SEO foundations",
    text:
      "Technical SEO can be included as part of development, while ongoing competitive SEO remains a separate growth activity.",
  },
  {
    title: "Post-launch support",
    text:
      "After launch, the project can continue into maintenance, SEO, content, analytics or additional feature development.",
  },
];

const serviceAreas = [
  "Hyderabad",
  "Telangana",
  "Andhra Pradesh",
  "India",
];

const relatedServices = [
  {
    href: "/services/web-designing-services",
    icon: MonitorSmartphone,
    title: "Web Designing",
    text:
      "Create the UX, visual system and page structure before or alongside development.",
    cta: "Explore web design",
  },
  {
    href: "/services/seo-services",
    icon: Search,
    title: "SEO Services",
    text:
      "Continue beyond the technical foundation with content, technical optimisation and organic growth.",
    cta: "Explore SEO",
  },
  {
    href: "/services/digital-marketing-services",
    icon: TrendingUp,
    title: "Digital Marketing",
    text:
      "Connect your website with campaigns, social media, content and customer acquisition.",
    cta: "Explore marketing",
  },
];

const faqs = [
  {
    question:
      "What web development services does MrTechies provide in Hyderabad?",
    answer:
      "MrTechies provides business website development, custom web application development, ecommerce development, headless CMS development, responsive frontend development, API integrations and technical website development support.",
  },
  {
    question: "How much does web development cost in Hyderabad?",
    answer:
      "Web development cost depends on the number of pages, design requirements, functionality, integrations, backend requirements, ecommerce complexity, content migration, SEO requirements and project timeline. A simple business website generally requires less development work than a custom web application or complex ecommerce platform.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on project scope. A focused business website may take a few weeks, while ecommerce websites and custom web applications can require several weeks or longer. The final timeline should be confirmed after the required pages, functionality, integrations and content are understood.",
  },
  {
    question: "Which technologies does MrTechies use for web development?",
    answer:
      "Depending on the project, MrTechies works with technologies including Next.js, React, TypeScript, Node.js, Tailwind CSS, APIs, headless CMS solutions and database integrations.",
  },
  {
    question: "Can you build a custom web application?",
    answer:
      "Yes. Custom web applications can be developed for dashboards, portals, SaaS products, internal workflows, customer systems, API-connected applications and other business-specific requirements.",
  },
  {
    question: "Do you provide ecommerce website development?",
    answer:
      "Yes. Ecommerce development can include product catalogues, responsive storefronts, customer journeys, checkout functionality, payment integrations and other requirements depending on the project scope.",
  },
  {
    question: "Is SEO included with web development?",
    answer:
      "Technical SEO foundations can be included within the development scope, such as search-friendly architecture, headings, metadata preparation, internal linking, responsive implementation and crawlability considerations. Ongoing SEO campaigns, content production and competitive optimisation are separate services.",
  },
  {
    question: "Can you redesign or rebuild my existing website?",
    answer:
      "Yes. We can assess whether your existing website needs a visual redesign, technical improvements or a complete rebuild. A rebuild is considered when the current technology or architecture creates significant limitations.",
  },
  {
    question: "Do you develop websites for businesses outside Hyderabad?",
    answer:
      "Yes. MrTechies works with businesses in Hyderabad and other locations in India. Projects can be managed remotely through structured communication, reviews and online collaboration.",
  },
  {
    question: "Can my website be expanded later?",
    answer:
      "A properly planned architecture can make future expansion easier. New service pages, content, integrations and features can be added according to the technology and structure selected for the project.",
  },
];

/* =========================================================
   SMALL SHARED COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-14 max-w-3xl text-center"
          : "max-w-xl"
      }
    >
      {eyebrow && (
        <p className="text-sm font-semibold text-brand-orange">{eyebrow}</p>
      )}

      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-blue"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function CheckItem({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <li
      className={`flex items-start gap-3 text-sm leading-6 ${
        tone === "dark" ? "text-gray-300" : "text-gray-700"
      }`}
    >
      <Check size={17} className="mt-1 shrink-0 text-brand-orange" />
      {children}
    </li>
  );
}

/* =========================================================
   STRUCTURED DATA
========================================================= */

function StructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web Development Services",
        item: PAGE_URL,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "MrTechies",
      url: BASE_URL,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    url: PAGE_URL,
    description:
      "Custom web development services including business websites, web applications, ecommerce development and scalable digital solutions.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function WebDevelopmentServicesPage() {
  return (
    <main className="overflow-hidden bg-white pb-20 text-gray-800 md:pb-0">
      <StructuredData />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-36">
          {/* BREADCRUMB */}

          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-sm text-gray-400"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-brand-orange"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-brand-orange"
                >
                  Services
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li aria-current="page" className="text-gray-200">
                Web Development
              </li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Custom Web Development
              </p>

              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Web development services in Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                MrTechies develops responsive websites, ecommerce platforms and
                custom web applications for businesses that need more than a
                basic website.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                From frontend architecture and API integrations to technical SEO
                foundations and responsive performance, we build digital
                products around your business requirements.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Get a free consultation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/web-designing-services"
                  className={btnGhost}
                >
                  Explore web design
                </Link>
              </div>

              <ul className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Zap size={18} className="text-brand-orange" />
                  Performance-focused
                </li>

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Code2 size={18} className="text-brand-orange" />
                  Modern development
                </li>

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Search size={18} className="text-brand-orange" />
                  SEO-ready foundation
                </li>
              </ul>
            </div>

            {/* HERO VISUAL */}

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-sm">
                <div className="rounded-2xl bg-white p-6 text-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-28 rounded bg-brand-blue" />

                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-gray-200" />
                      <span className="h-3 w-3 rounded-full bg-gray-200" />
                      <span className="h-3 w-3 rounded-full bg-gray-200" />
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-gray-50 p-5">
                    <div className="h-4 w-3/4 rounded bg-brand-blue" />
                    <div className="mt-3 h-3 w-full rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-5/6 rounded bg-gray-200" />

                    <div className="mt-6 flex gap-3">
                      <div className="h-10 w-28 rounded-lg bg-brand-orange" />
                      <div className="h-10 w-24 rounded-lg border border-gray-300" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-gray-200 p-4"
                      >
                        <div className="h-7 w-7 rounded-lg bg-orange-100" />
                        <div className="mt-4 h-2 w-3/4 rounded bg-gray-300" />
                        <div className="mt-2 h-2 w-full rounded bg-gray-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <Code2 className="text-brand-orange" size={22} />
                  <p className="mt-3 text-sm font-semibold">
                    Custom architecture
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <Gauge className="text-brand-orange" size={22} />
                  <p className="mt-3 text-sm font-semibold">
                    Performance aware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JUMP NAV
      ====================================================== */}

      <nav
        aria-label="On this page"
        className="border-b border-gray-100 bg-white"
      >
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 sm:px-6">
          {jumpLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className={`block rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-brand-orange hover:text-brand-orange ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* =====================================================
          QUICK ANSWER
      ====================================================== */}

      <section
        aria-labelledby="quick-answer"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="rounded-2xl border-l-4 border-brand-orange bg-orange-50 p-7 md:p-10">
            <h2
              id="quick-answer"
              className="text-2xl font-bold leading-tight text-brand-blue md:text-3xl"
            >
              What does a professional web development service include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Professional web development can include frontend development,
              responsive implementation, backend functionality, APIs,
              integrations, databases, ecommerce features, performance
              optimisation and technical SEO foundations.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              The exact development approach depends on what the business needs
              the website or application to accomplish. At MrTechies, the
              technology and architecture are planned around the project rather
              than forcing every business into the same template.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED_ISO}>
                {LAST_UPDATED_LABEL}
              </time>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE WORK WITH
      ====================================================== */}

      <section
        aria-labelledby="audience-heading"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="audience-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                Who can benefit from custom web development?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                You do not need to choose the technology before contacting us.
                Start with the business problem, required functionality and
                outcome you want from the website or application.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {audiences.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <Icon size={22} className="text-brand-orange" />

                  <h3 className="mt-4 text-lg font-bold text-brand-blue">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT SOLUTIONS
      ====================================================== */}

      <section
        id="solutions"
        aria-labelledby="solutions-heading"
        className="scroll-mt-24 border-y border-gray-100 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Development solutions"
            title="Different business goals need different web development approaches"
            description="A business website, ecommerce platform and custom web application should not all be developed from the same structure."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {developmentSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.title}
                  href={solution.slug}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl ${focusRing}`}
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <Image
                      src={solution.imageSrc}
                      alt={`${solution.title} by MrTechies`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <Icon size={22} className="text-brand-orange" />

                    <h3 className="mt-4 text-xl font-bold text-brand-blue transition group-hover:text-brand-orange">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {solution.description}
                    </p>

                    <p className="mt-5 border-t border-gray-100 pt-5 text-xs leading-5 text-gray-500">
                      <strong className="text-gray-700">
                        Best for:
                      </strong>{" "}
                      {solution.audience}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-orange">
                      Explore solution
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEMS
      ====================================================== */}

      <section
        id="problems"
        aria-labelledby="problems-heading"
        className="scroll-mt-24 bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            title="What problems can professional web development solve?"
            description="Many development projects start with a business or technical problem rather than simply wanting a new design."
          />

          <h3 id="problems-heading" className="sr-only">
            Common web development problems and solutions
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="hidden grid-cols-2 border-b border-gray-200 bg-gray-50 px-8 py-4 text-sm font-semibold text-gray-500 md:grid">
              <span>Problem</span>
              <span>Development approach</span>
            </div>

            <ul className="divide-y divide-gray-100">
              {developmentProblems.map((item) => (
                <li
                  key={item.problem}
                  className="grid gap-4 px-6 py-7 md:grid-cols-2 md:gap-10 md:px-8"
                >
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue">
                      {item.problem}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.detail}
                    </p>
                  </div>

                  <p className="flex gap-3 text-sm leading-7 text-gray-800 md:pt-1">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-brand-orange"
                    />

                    {item.fix}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section
        id="technology"
        aria-labelledby="technology-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Technology"
            title="Technology should support the project, not define it"
            description="The right technology depends on the website, application, users, integrations, content and future requirements."
          />

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {technologyPrinciples.map(
              ({ icon: Icon, title, description }) => (
                <article key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-brand-blue">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="mt-16 rounded-2xl bg-gray-50 p-8">
            <h3 className="text-2xl font-bold text-brand-blue">
              Technologies we work with
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Technology selection depends on project requirements, but our
              development work can include the following technologies and
              approaches.
            </p>

            <ul className="mt-7 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/web-designing-services"
              className={`inline-flex items-center gap-2 font-semibold text-brand-orange ${focusRing}`}
            >
              Explore our web designing services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        id="process"
        aria-labelledby="process-heading"
        className="scroll-mt-24 bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold text-brand-orange">
                Development process
              </p>

              <h2
                id="process-heading"
                className="mt-3 text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                From business requirement to production-ready website
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A structured development process helps reduce unnecessary
                rework and keeps business, UX, technology and SEO requirements
                connected.
              </p>
            </div>

            <ol className="relative border-l-2 border-orange-200 pl-8">
              {developmentProcess.map((step, index) => (
                <li
                  key={step.title}
                  className="relative pb-10 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white ring-4 ring-gray-50"
                  >
                    {index + 1}
                  </span>

                  <h3 className="text-xl font-bold text-brand-blue">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE + COST
      ====================================================== */}

      <section
        id="timeline"
        aria-labelledby="timeline-heading"
        className="scroll-mt-24 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="How long does web development take and what affects the cost?"
            description="Timeline and pricing depend on the actual scope. Understanding the variables makes project planning much clearer."
          />

          <h3 id="timeline-heading" className="sr-only">
            Web development timeline and cost factors
          </h3>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="border-b border-gray-100 p-7">
                <Clock3 size={26} className="text-brand-orange" />

                <h3 className="mt-4 text-2xl font-bold text-brand-blue">
                  Typical project windows
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Indicative ranges. Actual delivery depends on requirements,
                  content, integrations and approvals.
                </p>
              </div>

              <dl className="divide-y divide-gray-100">
                {timelines.map(({ type, time }) => (
                  <div
                    key={type}
                    className="flex items-center justify-between gap-4 p-6"
                  >
                    <dt className="font-medium text-gray-700">
                      {type}
                    </dt>

                    <dd className="text-right font-bold text-brand-orange">
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="bg-orange-50 p-6 text-sm leading-6 text-gray-700">
                <strong className="text-brand-blue">
                  Need a specific launch date?
                </strong>{" "}
                Share the target date and required features before development
                begins so the scope can be planned realistically.
              </div>
            </div>

            <div className="rounded-2xl bg-brand-blue p-7 text-white md:p-9">
              <TrendingUp size={26} className="text-brand-orange" />

              <h3 className="mt-4 text-2xl font-bold">
                What affects web development cost?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                A professional quote should reflect your actual project scope
                rather than a generic price copied across every business.
              </p>

              <ul className="mt-6 space-y-4">
                {costFactors.map((item) => (
                  <CheckItem key={item} tone="dark">
                    {item}
                  </CheckItem>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 ${btnPrimary} w-full sm:w-auto`}
              >
                Get a scoped quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO + PERFORMANCE
      ====================================================== */}

      <section
        id="seo"
        aria-labelledby="seo-heading"
        className="relative scroll-mt-24 overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute -right-36 top-0 h-[480px] w-[480px] rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="seo-heading"
                className="text-3xl font-bold leading-tight md:text-5xl"
              >
                SEO and performance considered during development
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Development decisions can influence how easily a website is
                crawled, understood and used. We therefore consider technical
                SEO and user experience while building the website.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                This does not mean repeating keywords throughout the page.
                Useful architecture, clear content, internal links, responsive
                implementation and technical quality provide a stronger
                foundation for future organic growth.
              </p>

              <Link
                href="/services/seo-services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore complete SEO services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {seoFoundation.map(
                ({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <Icon size={24} className="text-brand-orange" />

                    <h3 className="mt-4 text-lg font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-xl font-bold">
              Technical SEO checklist
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-300">
              Depending on the agreed project scope, important technical
              foundations can be reviewed before launch.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {seoChecklist.map((item) => (
                <CheckItem key={item} tone="dark">
                  {item}
                </CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPECTATIONS
      ====================================================== */}

      <section
        aria-labelledby="expectations-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <h2
                id="expectations-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-4xl"
              >
                What should you clarify before starting a web development
                project?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Good development starts with clear expectations. Before
                implementation begins, the business should understand the
                scope, technology, timeline and ongoing requirements.
              </p>
            </div>

            <div className="space-y-7">
              {expectations.map(({ title, text }) => (
                <div key={title} className="flex gap-4">
                  <BadgeCheck
                    size={22}
                    className="mt-1 shrink-0 text-brand-orange"
                  />

                  <div>
                    <h3 className="font-bold text-brand-blue">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL RELEVANCE
      ====================================================== */}

      <section
        aria-labelledby="local-heading"
        className="bg-gray-50 py-20"
      >
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          <Globe2
            size={30}
            className="mx-auto text-brand-orange"
          />

          <h2
            id="local-heading"
            className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl"
          >
            Web development for businesses in Hyderabad and across India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            MrTechies provides web development services from Hyderabad and can
            work with businesses in other locations through structured remote
            collaboration.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES
      ====================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Explore more"
            title="Connect development with design, SEO and digital growth"
            description="A website can become much more effective when design, development, SEO and marketing work together."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map(
              ({ href, icon: Icon, title, text, cta }) => (
                <Link
                  key={title}
                  href={href}
                  className={`group rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl ${focusRing}`}
                >
                  <Icon size={25} className="text-brand-orange" />

                  <h3 className="mt-5 text-xl font-bold text-brand-blue">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">
                    {cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="scroll-mt-24 bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading
            title="Frequently asked questions about web development"
            description="Answers to common questions about web development services, technology, timelines, cost and SEO."
          />

          <h2 id="faq-heading" className="sr-only">
            Web development frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-brand-blue marker:hidden">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Start your project
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Need a website or web application built around your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tell us what you are trying to build, what your current website
            needs to improve and what functionality you require. We can then
            discuss the appropriate development approach.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Get a free consultation
              <ArrowRight size={18} />
            </Link>

            <Link href="/services" className={btnGhost}>
              Explore all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}