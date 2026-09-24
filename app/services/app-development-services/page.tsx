import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
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
  Palette,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
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
const PAGE_URL = `${BASE_URL}/services/app-development-services`;

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
  title: "Mobile App Development Services in Hyderabad | MrTechies",

  description:
    "Mobile app development services in Hyderabad for custom business apps, Android and iOS applications, web apps, dashboards and scalable digital products. Built for performance, usability and growth.",

  keywords: [
    "mobile app development services in Hyderabad",
    "mobile app development company in Hyderabad",
    "app development company in Hyderabad",
    "custom mobile app development Hyderabad",
    "mobile application development Hyderabad",
    "Android app development Hyderabad",
    "iOS app development Hyderabad",
    "cross platform app development Hyderabad",
    "custom app development services Hyderabad",
    "business app development Hyderabad",
    "web application development Hyderabad",
    "app development cost Hyderabad",
    "mobile app developers Hyderabad",
    "app development services Hyderabad",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title: "Mobile App Development Services in Hyderabad | MrTechies",
    description:
      "Custom mobile apps, web applications, dashboards and business software developed by MrTechies for businesses in Hyderabad and across India.",
    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/og/app-development-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services in Hyderabad by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services in Hyderabad | MrTechies",
    description:
      "Custom mobile app development, web applications, dashboards and scalable business applications by MrTechies.",
    images: [`${BASE_URL}/og/app-development-services.jpg`],
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

  category: "Mobile App Development",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   DATA
========================================================= */

const jumpLinks = [
  { href: "#solutions", label: "App solutions" },
  { href: "#problems", label: "Problems we solve" },
  { href: "#technology", label: "Technology" },
  { href: "#process", label: "Process" },
  { href: "#timeline", label: "Timeline & cost" },
  { href: "#performance", label: "Performance" },
  { href: "#faq", label: "FAQ" },
];

const appSolutions = [
  {
    title: "Web Applications",
    description:
      "Fast, responsive web applications for customer portals, SaaS products, business platforms and browser-based digital experiences.",
    imageSrc: "/services/app-web.avif",
    slug: "/services/app-development-services/web-applications",
    icon: Code2,
    audience:
      "Startups, SaaS companies, service businesses and organizations needing browser-based applications",
  },
  {
    title: "Mobile-First Apps",
    description:
      "Mobile-focused application experiences designed around usability, responsive interfaces and the needs of users on modern devices.",
    imageSrc: "/services/app-mobile.png",
    slug: "/services/app-development-services/mobile-first-apps",
    icon: Smartphone,
    audience:
      "Businesses that need mobile customer experiences and application functionality",
  },
  {
    title: "Admin Dashboards",
    description:
      "Custom dashboards that make business data, users, operations, reports and workflows easier to manage from one interface.",
    imageSrc: "/services/app-admin.webp",
    slug: "/services/app-development-services/admin-dashboards",
    icon: BarChart3,
    audience:
      "Businesses, teams and organizations managing operations, users and business data",
  },
  {
    title: "Internal Business Tools",
    description:
      "Custom systems built around internal workflows, approvals, data management, reporting and repetitive business processes.",
    imageSrc: "/services/app-internal.jpg",
    slug: "/services/app-development-services/internal-tools",
    icon: Workflow,
    audience:
      "Growing businesses that need to replace manual processes with custom software",
  },
];

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    text:
      "Build an MVP, customer platform or scalable application around your product idea and business requirements.",
  },
  {
    icon: Building2,
    title: "Growing businesses",
    text:
      "Replace disconnected tools and manual processes with a centralized application designed around your operations.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce businesses",
    text:
      "Create customer-facing application experiences around products, orders, accounts and online shopping journeys.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Service businesses",
    text:
      "Develop booking systems, customer portals, business dashboards and other applications that improve customer workflows.",
  },
  {
    icon: Users,
    title: "Internal teams",
    text:
      "Create custom employee tools for approvals, reporting, task management, data entry and operational workflows.",
  },
  {
    icon: Target,
    title: "SaaS businesses",
    text:
      "Develop scalable application interfaces and supporting systems for subscription-based digital products.",
  },
];

const developmentProblems = [
  {
    problem: "Our business still depends on manual processes",
    detail:
      "Repeated data entry, spreadsheets, messages and disconnected systems can make everyday operations difficult to manage.",
    fix:
      "A custom application can bring important workflows, information and actions into a structured digital system.",
  },
  {
    problem: "We need more than a normal website",
    detail:
      "Some businesses require logins, dashboards, customer accounts, workflows, APIs or application-specific functionality.",
    fix:
      "We design and develop web or mobile application experiences around the actual functionality your business requires.",
  },
  {
    problem: "Our existing application is difficult to maintain",
    detail:
      "Unstructured code, inconsistent components and outdated implementation can make changes slower and more expensive.",
    fix:
      "We use structured development patterns and reusable components appropriate to the project's technology and scale.",
  },
  {
    problem: "Customers need a better mobile experience",
    detail:
      "A website may not always provide the most convenient experience for customers who repeatedly access your services.",
    fix:
      "We can design mobile-first experiences around the actions customers need to complete most frequently.",
  },
  {
    problem: "Business data is spread across different systems",
    detail:
      "Teams may use multiple tools for customers, operations, reporting and communication without a unified view.",
    fix:
      "Custom applications can integrate APIs and business systems to create more connected workflows.",
  },
  {
    problem: "We need an application that can grow",
    detail:
      "An initial MVP may eventually require additional users, features, integrations and business functionality.",
    fix:
      "The architecture can be planned with future functionality, maintainability and scalability in mind.",
  },
];

const technologyPrinciples = [
  {
    icon: Smartphone,
    title: "Mobile-first experiences",
    description:
      "Interfaces are planned around touch interactions, screen sizes, navigation and the real needs of mobile users.",
  },
  {
    icon: Code2,
    title: "Modern frontend development",
    description:
      "Component-based development can create consistent, maintainable and responsive application interfaces.",
  },
  {
    icon: ServerCog,
    title: "API and backend integration",
    description:
      "Applications can connect with APIs, databases, payment systems, CRM platforms and other business services.",
  },
  {
    icon: Gauge,
    title: "Performance-conscious development",
    description:
      "Application architecture, assets, rendering and network behaviour are considered with real-world performance in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Security-aware architecture",
    description:
      "Authentication, authorization, forms, APIs and application data are approached with appropriate security considerations.",
  },
  {
    icon: Layers3,
    title: "Scalable components",
    description:
      "Reusable components and structured architecture make it easier to expand an application as requirements change.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "REST APIs",
  "Database integrations",
  "Headless CMS",
];

const developmentProcess = [
  {
    title: "Business and product discovery",
    description:
      "We understand your users, business objective, application requirements, existing systems and expected outcome.",
  },
  {
    title: "Feature and workflow planning",
    description:
      "Important features, user roles, workflows, screens, integrations and application requirements are mapped before development.",
  },
  {
    title: "UI and UX direction",
    description:
      "The interface is planned around usability, responsive behaviour, accessibility, customer journeys and important actions.",
  },
  {
    title: "Frontend development",
    description:
      "Approved interfaces are converted into responsive, reusable components using an appropriate frontend architecture.",
  },
  {
    title: "Backend and API development",
    description:
      "Where required, APIs, databases, authentication, business logic and third-party integrations are implemented.",
  },
  {
    title: "Testing and refinement",
    description:
      "Important application flows are tested across supported devices, screen sizes and user scenarios before launch.",
  },
  {
    title: "Deployment and launch",
    description:
      "The application is prepared for production deployment with the required configuration, integrations and technical checks.",
  },
  {
    title: "Post-launch growth",
    description:
      "After launch, the application can continue into maintenance, analytics, SEO, marketing, feature development and improvements.",
  },
];

const timelines = [
  {
    type: "Focused business application",
    time: "Typically 2–5+ weeks",
  },
  {
    type: "Mobile-first application",
    time: "Typically 4–8+ weeks",
  },
  {
    type: "Admin dashboard",
    time: "Typically 3–6+ weeks",
  },
  {
    type: "Custom application",
    time: "Scope dependent",
  },
];

const costFactors = [
  "Number of screens and application flows",
  "UI/UX design requirements",
  "Frontend functionality",
  "Backend and database requirements",
  "API and third-party integrations",
  "Authentication and user roles",
  "Payment or subscription functionality",
  "Admin dashboard requirements",
  "Data migration requirements",
  "Testing and deployment requirements",
];

const performanceFoundation = [
  {
    icon: Gauge,
    title: "Fast application experience",
    description:
      "Frontend architecture, assets and rendering behaviour are considered to reduce unnecessary performance overhead.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive interfaces",
    description:
      "Application screens are designed to remain usable across mobile, tablet and desktop environments where required.",
  },
  {
    icon: Link2,
    title: "Connected application flows",
    description:
      "Important user journeys are structured so users can move between related actions and information efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable architecture",
    description:
      "The application structure is planned around maintainability, integrations and future development requirements.",
  },
  {
    icon: Sparkles,
    title: "Usability-focused design",
    description:
      "Clear navigation, understandable actions and useful feedback help users complete important tasks.",
  },
  {
    icon: ServerCog,
    title: "API-ready systems",
    description:
      "Applications can be connected with external services and business systems where the project requires integration.",
  },
];

const applicationChecklist = [
  "Responsive application interfaces",
  "Clear navigation and user flows",
  "Authentication and user roles",
  "API integration",
  "Database integration",
  "Admin dashboards",
  "Payment integrations",
  "Form and validation handling",
  "Performance considerations",
  "Production deployment",
];

const expectations = [
  {
    title: "Clearly defined functionality",
    text:
      "The application scope should identify important screens, features, users, workflows and integrations before development expands.",
  },
  {
    title: "Realistic timeline",
    text:
      "Application timelines depend on functionality, design, integrations, content, testing and approval cycles.",
  },
  {
    title: "Appropriate technology",
    text:
      "The technology stack should be selected according to the application's requirements rather than simply following a trend.",
  },
  {
    title: "Scalable architecture",
    text:
      "If future features are expected, the initial architecture should leave room for appropriate expansion.",
  },
  {
    title: "Post-launch support",
    text:
      "Applications often continue to require maintenance, monitoring, improvements, integrations and new features after launch.",
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
    href: "/services/web-development-services",
    icon: Code2,
    title: "Web Development",
    text:
      "Build business websites, ecommerce platforms and custom web applications around your requirements.",
    cta: "Explore web development",
  },
  {
    href: "/services/web-designing-services",
    icon: Palette,
    title: "Web Designing",
    text:
      "Plan visual design, UX, responsive layouts and customer journeys before or alongside development.",
    cta: "Explore web design",
  },
  {
    href: "/services/seo-services",
    icon: Search,
    title: "SEO Services",
    text:
      "Continue beyond development with technical optimisation, content strategy and organic search growth.",
    cta: "Explore SEO",
  },
];

const faqs = [
  {
    question:
      "What mobile app development services does MrTechies provide in Hyderabad?",
    answer:
      "MrTechies provides custom application development for mobile-first experiences, web applications, admin dashboards, internal business tools, API-connected applications and other custom digital products depending on project requirements.",
  },
  {
    question: "How much does mobile app development cost in Hyderabad?",
    answer:
      "App development cost depends on the number of screens, UI and UX requirements, application functionality, backend requirements, APIs, database requirements, authentication, payments, integrations, testing and deployment. A simple application generally requires less development work than a complex platform with multiple user roles and integrations.",
  },
  {
    question: "How long does it take to develop a mobile application?",
    answer:
      "The timeline depends on application scope. A focused MVP or business application may take several weeks, while applications with complex workflows, integrations, payments or multiple user roles can require longer development cycles.",
  },
  {
    question: "Which technologies does MrTechies use for app development?",
    answer:
      "Depending on the project, MrTechies works with technologies including React, Next.js, TypeScript, Node.js, Tailwind CSS, REST APIs, database integrations and other technologies appropriate to the application requirements.",
  },
  {
    question: "Can you build a custom business application?",
    answer:
      "Yes. Custom applications can be developed for internal workflows, dashboards, customer portals, SaaS products, booking systems, business management systems, API-connected applications and other business-specific requirements.",
  },
  {
    question: "Do you develop Android and iOS applications?",
    answer:
      "Mobile application requirements are evaluated based on the target users, devices, features and project scope. The appropriate mobile or cross-platform development approach can then be selected for the application.",
  },
  {
    question: "Can you develop an admin dashboard?",
    answer:
      "Yes. Admin dashboards can be developed to manage users, content, products, orders, reports, workflows, application data and other business operations.",
  },
  {
    question: "Can an application connect with APIs and other systems?",
    answer:
      "Yes. Applications can integrate with REST APIs, payment systems, CRM platforms, databases, communication tools and other third-party services when required by the project.",
  },
  {
    question: "Can you improve or rebuild an existing application?",
    answer:
      "Yes. An existing application can be assessed for UI improvements, performance issues, architecture limitations, feature additions or a complete rebuild depending on the condition of the current system.",
  },
  {
    question: "Do you provide app development services outside Hyderabad?",
    answer:
      "Yes. MrTechies works with businesses in Hyderabad and other locations across India. Projects can be managed remotely through structured communication, reviews and online collaboration.",
  },
];

/* =========================================================
   SHARED COMPONENTS
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
        name: "App Development Services",
        item: PAGE_URL,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MrTechies",
    url: BASE_URL,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development Services",
    serviceType: "Mobile App Development",
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
      "Custom mobile app development, web applications, admin dashboards and business application development services for businesses in Hyderabad and across India.",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "App Development Services by MrTechies",
    itemListElement: appSolutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: solution.title,
      url: `${BASE_URL}${solution.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AppDevelopmentServicesPage() {
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
                App Development
              </li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Custom App Development
              </p>

              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Mobile app development services in Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                MrTechies develops custom mobile-first applications, web
                applications, dashboards and business systems for companies
                that need more than a standard website.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                From product discovery and UX planning to frontend development,
                APIs, databases and deployment, we build application
                experiences around real business requirements.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Discuss your app project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/web-development-services"
                  className={btnGhost}
                >
                  Explore web development
                </Link>
              </div>

              <ul className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Zap size={18} className="text-brand-orange" />
                  Performance-focused
                </li>

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Smartphone size={18} className="text-brand-orange" />
                  Mobile-first
                </li>

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <ServerCog size={18} className="text-brand-orange" />
                  API-ready
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

                  <div className="mt-8 grid grid-cols-[80px_1fr] gap-4">
                    <div className="rounded-xl bg-gray-50 p-3">
                      <div className="space-y-3">
                        <div className="h-3 rounded bg-brand-blue" />
                        <div className="h-3 rounded bg-gray-200" />
                        <div className="h-3 rounded bg-gray-200" />
                        <div className="h-3 rounded bg-gray-200" />
                      </div>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-5">
                      <div className="h-4 w-3/4 rounded bg-brand-blue" />
                      <div className="mt-3 h-3 w-full rounded bg-gray-200" />
                      <div className="mt-2 h-3 w-5/6 rounded bg-gray-200" />

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-lg bg-orange-50" />
                        <div className="h-20 rounded-lg bg-blue-50" />
                      </div>
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
                  <Smartphone className="text-brand-orange" size={22} />

                  <p className="mt-3 text-sm font-semibold">
                    Mobile-first experience
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
              What does a professional app development service include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Professional application development can include product
              planning, UI and UX design, frontend development, backend
              functionality, APIs, databases, authentication, dashboards,
              integrations, testing, deployment and ongoing improvements.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              The exact development approach depends on the users, business
              process, required functionality and technology environment. At
              MrTechies, we plan the application around the project instead of
              forcing every business into the same application structure.
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
                Who can benefit from custom app development?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                You do not need to decide the technology before starting.
                Begin with the business problem, users, workflows and
                functionality you need from the application.
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
          APP SOLUTIONS
      ====================================================== */}

      <section
        id="solutions"
        aria-labelledby="solutions-heading"
        className="scroll-mt-24 border-y border-gray-100 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="App development solutions"
            title="Different business requirements need different application approaches"
            description="A customer-facing mobile experience, admin dashboard and internal business system should not all be developed using the same structure."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {appSolutions.map((solution) => {
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
                      alt={`${solution.title} app development by MrTechies`}
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
            title="What problems can custom app development solve?"
            description="Many application projects begin with a business process or customer problem rather than simply wanting another piece of software."
          />

          <h3 id="problems-heading" className="sr-only">
            Common application development problems and solutions
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
            title="Technology should support the application, not define it"
            description="The right technology depends on users, application functionality, integrations, performance requirements and future growth."
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
              application development work can include the following
              technologies and approaches.
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
              href="/services/web-development-services"
              className={`inline-flex items-center gap-2 font-semibold text-brand-orange ${focusRing}`}
            >
              Explore our web development services
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
                App development process
              </p>

              <h2
                id="process-heading"
                className="mt-3 text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                From business requirement to production-ready application
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A structured development process helps keep product
                requirements, UX, technology, testing and deployment connected
                from the beginning.
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
            title="How long does app development take and what affects the cost?"
            description="Application timelines and pricing depend on the actual scope. Understanding the major variables makes project planning more transparent."
          />

          <h3 id="timeline-heading" className="sr-only">
            App development timeline and cost factors
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
                  design, integrations, testing and approvals.
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
                begins so the project can be scoped realistically.
              </div>
            </div>

            <div className="rounded-2xl bg-brand-blue p-7 text-white md:p-9">
              <TrendingUp size={26} className="text-brand-orange" />

              <h3 className="mt-4 text-2xl font-bold">
                What affects app development cost?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                A professional quote should reflect the applications actual
                scope rather than using one generic price for every project.
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
                Get a project quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
      ====================================================== */}

      <section
        id="performance"
        aria-labelledby="performance-heading"
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
                id="performance-heading"
                className="text-3xl font-bold leading-tight md:text-5xl"
              >
                Performance, usability and scalability considered during
                development
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Application performance is influenced by architecture,
                frontend implementation, assets, APIs, databases and the way
                users move through the product.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We therefore consider performance and usability while building
                the application rather than waiting until the end of the
                project to identify important technical issues.
              </p>

              <Link
                href="/services/web-development-services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore complete web development
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {performanceFoundation.map(
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
              Application development checklist
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-300">
              Depending on the agreed project scope, important application
              foundations can be reviewed before production deployment.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {applicationChecklist.map((item) => (
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
                What should you clarify before starting an app development
                project?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Good application development starts with clear expectations.
                Before implementation begins, the business should understand
                the functionality, users, technology, timeline and ongoing
                requirements.
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
            App development services for businesses in Hyderabad and across
            India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            MrTechies provides custom application development from Hyderabad
            and can work with businesses in other locations through structured
            remote collaboration.
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
            title="Connect app development with web design, development and SEO"
            description="Digital products become more effective when UX, development, technical foundations and organic growth work together."
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
            title="Frequently asked questions about app development"
            description="Answers to common questions about mobile app development services, technology, timelines, cost, applications and integrations."
          />

          <h2 id="faq-heading" className="sr-only">
            App development frequently asked questions
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
            Start your application
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Need a custom application built around your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tell us what you want to build, who will use it, what your current
            system needs to improve and what functionality you require. We can
            then discuss the appropriate development approach.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Discuss your project
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