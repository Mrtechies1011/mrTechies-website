import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  Link2,
  LockKeyhole,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  ServerCog,
  Settings2,
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
const PAGE_URL = `${BASE_URL}/services/crm-erp-solutions`;

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
  title:
    "CRM & ERP Software Development Company in Hyderabad | MrTechies",

  description:
    "MrTechies provides custom CRM and ERP software development in Hyderabad for lead management, sales pipelines, business automation, dashboards, integrations and scalable business systems.",

  keywords: [
    "CRM and ERP software development company in Hyderabad",
    "CRM development company in Hyderabad",
    "CRM software development Hyderabad",
    "CRM development services Hyderabad",
    "custom CRM software Hyderabad",
    "custom CRM development Hyderabad",
    "ERP software development company Hyderabad",
    "custom ERP software development Hyderabad",
    "CRM ERP solutions Hyderabad",
    "CRM ERP software Hyderabad",
    "business automation software Hyderabad",
    "custom business software development Hyderabad",
    "CRM software for small business India",
    "ERP solutions for small business India",
    "CRM software development company India",
    "ERP software development company India",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
    },
  },

  openGraph: {
    title:
      "CRM & ERP Software Development Company in Hyderabad | MrTechies",

    description:
      "Custom CRM and ERP software development for lead management, sales pipelines, business automation, dashboards, integrations and growing businesses.",

    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: `${BASE_URL}/og/crm-erp-solutions.jpg`,
        width: 1200,
        height: 630,
        alt:
          "CRM and ERP Software Development Company in Hyderabad by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "CRM & ERP Software Development Company in Hyderabad | MrTechies",

    description:
      "Custom CRM, ERP, dashboards, workflow automation and business software development by MrTechies.",

    images: [`${BASE_URL}/og/crm-erp-solutions.jpg`],
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

  category: "CRM & ERP Software Development",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   JUMP LINKS
========================================================= */

const jumpLinks = [
  { href: "#solutions", label: "CRM & ERP solutions" },
  { href: "#problems", label: "Problems we solve" },
  { href: "#features", label: "Features" },
  { href: "#technology", label: "Technology" },
  { href: "#process", label: "Development process" },
  { href: "#timeline", label: "Timeline & cost" },
  { href: "#faq", label: "FAQ" },
];

/* =========================================================
   CRM / ERP SOLUTIONS
========================================================= */

const crmSolutions = [
  {
    title: "Lead Management",
    description:
      "Capture, organize and track leads from websites, campaigns, forms and other sources in one structured system.",

    imageSrc: "/services/crm-lead.jpg",

    slug: "/services/crm-erp-solutions/lead-management",

    icon: Users,

    audience:
      "Sales teams, service businesses, agencies, startups and growing organizations",
  },

  {
    title: "Sales Pipelines",
    description:
      "Create clear sales stages, follow-ups, opportunities and reporting so teams can manage the customer journey more effectively.",

    imageSrc: "/services/crm-sales.webp",

    slug: "/services/crm-erp-solutions/sales-pipelines",

    icon: TrendingUp,

    audience:
      "Businesses managing enquiries, opportunities, quotations and sales teams",
  },

  {
    title: "Customer Dashboards",
    description:
      "Bring customer information, reports, KPIs and operational insights together through role-based dashboards.",

    imageSrc: "/services/crm-dashboard.jpg",

    slug: "/services/crm-erp-solutions/customer-dashboards",

    icon: BarChart3,

    audience:
      "Managers, business owners and teams requiring centralized business visibility",
  },

  {
    title: "Automation Systems",
    description:
      "Reduce repetitive work with automated workflows, notifications, approvals, follow-ups and connected business processes.",

    imageSrc: "/services/crm-automation.avif",

    slug: "/services/crm-erp-solutions/automation-systems",

    icon: Workflow,

    audience:
      "Growing businesses replacing repetitive manual processes with software",
  },
];

/* =========================================================
   BUSINESS TYPES
========================================================= */

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    text:
      "Build a focused CRM, business platform or internal system around your initial product and operational requirements.",
  },

  {
    icon: Building2,
    title: "Growing businesses",
    text:
      "Replace disconnected spreadsheets and business tools with a centralized system that can support expanding operations.",
  },

  {
    icon: ShoppingCart,
    title: "E-commerce businesses",
    text:
      "Connect customer information, orders, support workflows, sales activity and operational data across your business.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Service businesses",
    text:
      "Manage leads, customers, appointments, follow-ups, quotations, team activity and reporting from one system.",
  },

  {
    icon: Users,
    title: "Sales teams",
    text:
      "Give sales teams structured pipelines, lead assignments, follow-up workflows, customer history and reporting.",
  },

  {
    icon: Target,
    title: "Multi-department organizations",
    text:
      "Connect departments and workflows through custom ERP-style systems, dashboards and role-based access.",
  },
];

/* =========================================================
   PROBLEMS
========================================================= */

const developmentProblems = [
  {
    problem: "Customer information is spread across different tools",

    detail:
      "Customer records may exist across spreadsheets, email, WhatsApp conversations, forms and separate business applications.",

    fix:
      "A CRM can centralize customer records, interactions, follow-ups and important sales information.",
  },

  {
    problem: "Sales teams lose track of leads and follow-ups",

    detail:
      "Without structured stages and ownership, enquiries can remain unattended or become difficult to track.",

    fix:
      "Lead assignment, sales pipelines, reminders and follow-up workflows can create a more organized sales process.",
  },

  {
    problem: "Business operations depend on spreadsheets",

    detail:
      "Spreadsheets can become difficult to maintain when multiple people, branches and departments depend on the same information.",

    fix:
      "Custom business software can replace repetitive spreadsheet workflows with centralized records and controlled processes.",
  },

  {
    problem: "Different departments use disconnected systems",

    detail:
      "Sales, accounts, operations, inventory and management may work with different sources of information.",

    fix:
      "ERP-style systems can connect important business functions through shared data, workflows and integrations.",
  },

  {
    problem: "Managers cannot see business activity clearly",

    detail:
      "Important sales, customer and operational information may require manual reporting before management can understand it.",

    fix:
      "Dashboards and reporting systems can organize important business information into useful operational views.",
  },

  {
    problem: "Existing CRM or ERP software does not fit the workflow",

    detail:
      "Standard software may provide many features while still requiring teams to work around their actual processes.",

    fix:
      "Custom development or structured customization can align the system with the required fields, workflows, roles and integrations.",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const crmFeatures = [
  {
    icon: Users,
    title: "Lead and customer management",

    description:
      "Manage leads, contacts, customer profiles, communication history and important relationship information in one structured system.",
  },

  {
    icon: TrendingUp,
    title: "Sales pipeline management",

    description:
      "Create sales stages, opportunity tracking, ownership, follow-ups and pipeline reporting around your business process.",
  },

  {
    icon: Workflow,
    title: "Workflow automation",

    description:
      "Automate repetitive actions such as notifications, approvals, assignments, reminders and internal workflow steps.",
  },

  {
    icon: BarChart3,
    title: "Business dashboards",

    description:
      "Create dashboards and reports around sales activity, operations, customers, performance indicators and other business data.",
  },

  {
    icon: Link2,
    title: "API and third-party integrations",

    description:
      "Connect CRM or ERP systems with websites, payment services, communication tools, accounting software and other business platforms.",
  },

  {
    icon: ShieldCheck,
    title: "Role-based access",

    description:
      "Structure application access around users, departments, responsibilities and the information each role needs.",
  },

  {
    icon: Database,
    title: "Database-driven systems",

    description:
      "Organize application data using structured database architecture appropriate to the system's functionality and scale.",
  },

  {
    icon: MessageSquare,
    title: "Communication workflows",

    description:
      "Connect customer communication and notification workflows where the project requires email, messaging or other communication services.",
  },
];

/* =========================================================
   TECHNOLOGY PRINCIPLES
========================================================= */

const technologyPrinciples = [
  {
    icon: Database,

    title: "Structured data architecture",

    description:
      "CRM and ERP systems depend on organized customer, transaction, operational and workflow data. Database design is planned around the application's requirements.",
  },

  {
    icon: Code2,

    title: "Modern application development",

    description:
      "Component-based frontend development can create consistent, maintainable interfaces for dashboards, portals and business applications.",
  },

  {
    icon: ServerCog,

    title: "API and backend integration",

    description:
      "Applications can connect with websites, payment systems, accounting platforms, communication tools and other business services through APIs.",
  },

  {
    icon: ShieldCheck,

    title: "Security-aware architecture",

    description:
      "Authentication, authorization, user roles, APIs and business data are considered as part of the application's technical architecture.",
  },

  {
    icon: Gauge,

    title: "Performance-conscious systems",

    description:
      "Database queries, frontend rendering, API requests and application architecture are considered with real-world performance in mind.",
  },

  {
    icon: Layers3,

    title: "Scalable application structure",

    description:
      "Reusable components and structured architecture can make it easier to add modules, users, workflows and integrations as requirements evolve.",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "Database integrations",
  "Cloud deployment",
];

/* =========================================================
   PROCESS
========================================================= */

const developmentProcess = [
  {
    title: "Business workflow discovery",

    description:
      "We understand your departments, users, customers, existing tools, business processes and the problems the new system needs to address.",
  },

  {
    title: "Requirements and module planning",

    description:
      "Important CRM or ERP modules, user roles, workflows, dashboards, data requirements and integrations are mapped before development begins.",
  },

  {
    title: "System architecture and data planning",

    description:
      "The application structure, database requirements, API relationships, permissions and technical foundations are planned around the agreed scope.",
  },

  {
    title: "UI and UX development",

    description:
      "Dashboards, forms, navigation, tables and application screens are designed around usability and the tasks different users need to complete.",
  },

  {
    title: "Frontend and backend development",

    description:
      "The approved system is developed with the required interfaces, business logic, APIs, database connections and application functionality.",
  },

  {
    title: "Integrations and automation",

    description:
      "Required third-party services, notifications, payment systems, communication tools and business integrations are connected.",
  },

  {
    title: "Testing and refinement",

    description:
      "Important workflows, permissions, forms, reports, integrations and application behaviour are tested before production deployment.",
  },

  {
    title: "Deployment and ongoing improvements",

    description:
      "The system is prepared for production and can continue through maintenance, monitoring, new modules, integrations and workflow improvements.",
  },
];

/* =========================================================
   TIMELINES
========================================================= */

const timelines = [
  {
    type: "CRM customization",
    time: "Scope dependent",
  },

  {
    type: "Focused CRM system",
    time: "Typically 3–6+ weeks",
  },

  {
    type: "CRM with integrations",
    time: "Typically 5–10+ weeks",
  },

  {
    type: "Custom ERP / business platform",
    time: "Phased development",
  },
];

/* =========================================================
   COST FACTORS
========================================================= */

const costFactors = [
  "Number of CRM or ERP modules",
  "Number of users and roles",
  "UI and UX requirements",
  "Database architecture",
  "Lead and customer management requirements",
  "Sales pipeline functionality",
  "Workflow automation",
  "Dashboard and reporting requirements",
  "API and third-party integrations",
  "Data migration requirements",
  "Authentication and permissions",
  "Testing and deployment requirements",
];

/* =========================================================
   PERFORMANCE / SYSTEM FOUNDATION
========================================================= */

const systemFoundation = [
  {
    icon: Gauge,

    title: "Efficient application experience",

    description:
      "Frontend components, API requests, database operations and application flows are considered together to reduce unnecessary performance overhead.",
  },

  {
    icon: MonitorSmartphone,

    title: "Responsive dashboards",

    description:
      "Business systems can be designed for desktop-first operations while remaining usable across supported tablet and mobile environments.",
  },

  {
    icon: LockKeyhole,

    title: "Controlled access",

    description:
      "User roles and permissions can be structured according to departments, responsibilities and required system access.",
  },

  {
    icon: RefreshCw,

    title: "Connected workflows",

    description:
      "Related business actions can be connected through workflows, integrations, notifications and shared application data.",
  },

  {
    icon: Database,

    title: "Organized business data",

    description:
      "Customer, sales and operational information can be structured so teams can work from a more consistent source of business data.",
  },

  {
    icon: Settings2,

    title: "Adaptable architecture",

    description:
      "A structured application can provide room for additional modules, integrations and workflow improvements as business requirements change.",
  },
];

/* =========================================================
   CHECKLIST
========================================================= */

const applicationChecklist = [
  "Lead management",
  "Customer management",
  "Sales pipeline",
  "User roles and permissions",
  "Dashboard and reporting",
  "Workflow automation",
  "API integrations",
  "Database integration",
  "Communication integrations",
  "Data migration",
  "Responsive application interface",
  "Production deployment",
];

/* =========================================================
   EXPECTATIONS
========================================================= */

const expectations = [
  {
    title: "Clearly defined workflows",

    text:
      "Before development starts, identify how leads, customers, employees, departments and business processes currently move through your organization.",
  },

  {
    title: "Defined users and permissions",

    text:
      "Different users may need different levels of access. Defining roles early helps create a clearer system architecture.",
  },

  {
    title: "Realistic project scope",

    text:
      "CRM and ERP systems can become large quickly. Prioritizing important modules can make the first development phase easier to manage.",
  },

  {
    title: "Integration requirements",

    text:
      "Identify the external systems that need to exchange data with the CRM or ERP before development begins.",
  },

  {
    title: "Post-launch support",

    text:
      "Business software commonly evolves after launch through new reports, modules, integrations, users and workflow improvements.",
  },
];

/* =========================================================
   SERVICE AREAS
========================================================= */

const serviceAreas = [
  "Hyderabad",
  "Telangana",
  "Andhra Pradesh",
  "India",
];

/* =========================================================
   RELATED SERVICES
========================================================= */

const relatedServices = [
  {
    href: "/services/web-development-services",

    icon: Code2,

    title: "Web Development",

    text:
      "Build business websites, customer portals, ecommerce platforms and custom web applications that connect with your business systems.",

    cta: "Explore web development",
  },

  {
    href: "/services/app-development-services",

    icon: Smartphone,

    title: "App Development",

    text:
      "Extend your business system into mobile-first applications, customer apps, dashboards and other application experiences.",

    cta: "Explore app development",
  },

  {
    href: "/services/seo-services",

    icon: Search,

    title: "SEO Services",

    text:
      "Improve organic visibility for your website with technical SEO, content strategy, keyword targeting and ongoing search optimization.",

    cta: "Explore SEO",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question:
      "What CRM and ERP software development services does MrTechies provide?",

    answer:
      "MrTechies provides custom CRM and ERP software development for lead management, customer management, sales pipelines, dashboards, workflow automation, business operations, API integrations and other custom business software requirements.",
  },

  {
    question:
      "What is the difference between CRM and ERP software?",

    answer:
      "CRM software primarily focuses on customer relationships, leads, sales activity, communication and customer-related workflows. ERP software generally connects broader business operations such as finance, inventory, procurement, HR, operations and reporting. Some businesses require CRM functionality, while others may benefit from a broader integrated business system.",
  },

  {
    question:
      "How much does custom CRM software development cost in Hyderabad?",

    answer:
      "The cost depends on the number of modules, users, workflows, integrations, dashboards, database requirements, authentication, data migration, testing and deployment. A focused CRM project generally requires less development work than a large multi-department business platform.",
  },

  {
    question:
      "How long does it take to develop custom CRM or ERP software?",

    answer:
      "The timeline depends on project scope. A focused CRM may take several weeks, while systems with multiple modules, integrations, departments, complex workflows and data migration can require phased development over a longer period.",
  },

  {
    question:
      "Can you build a CRM for a small business?",

    answer:
      "Yes. A small business CRM can focus on the functionality that matters most, such as lead capture, customer records, sales pipelines, follow-ups, tasks, reporting and basic automation without requiring every enterprise feature.",
  },

  {
    question:
      "Can you integrate CRM software with a website and other business tools?",

    answer:
      "Yes. Depending on the project, CRM systems can connect with websites, forms, REST APIs, payment services, communication platforms, accounting software, databases and other third-party systems.",
  },

  {
    question:
      "Can you migrate our existing spreadsheet or customer data into a CRM?",

    answer:
      "Data migration can be included when the source data is suitable for migration. The process normally involves reviewing the existing data, mapping fields, cleaning or transforming records and importing them into the new system.",
  },

  {
    question:
      "Can you customize an existing CRM instead of building one from scratch?",

    answer:
      "Yes. The appropriate approach depends on the existing CRM, required functionality and business workflow. In some projects, customization or integration can be more practical than developing a completely new system.",
  },

  {
    question:
      "Can an ERP system manage multiple departments or branches?",

    answer:
      "A custom ERP-style system can be designed around multiple departments, branches, users, permissions, workflows and reporting requirements when those capabilities are included in the agreed project scope.",
  },

  {
    question:
      "Do you provide CRM and ERP software development services outside Hyderabad?",

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
        <p className="text-sm font-semibold text-brand-orange">
          {eyebrow}
        </p>
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
      <Check
        size={17}
        className="mt-1 shrink-0 text-brand-orange"
      />

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
        name: "CRM & ERP Solutions",
        item: PAGE_URL,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "MrTechies",

    url: BASE_URL,

    logo: `${BASE_URL}/techies.png`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: "CRM & ERP Software Development Services",

    serviceType: "CRM and ERP Software Development",

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
        "@type": "State",
        name: "Andhra Pradesh",
      },

      {
        "@type": "Country",
        name: "India",
      },
    ],

    url: PAGE_URL,

    description:
      "Custom CRM and ERP software development services for lead management, sales pipelines, business automation, dashboards, integrations and business operations.",
  };

  const itemListSchema = {
    "@context": "https://schema.org",

    "@type": "ItemList",

    name: "CRM & ERP Solutions by MrTechies",

    itemListElement: crmSolutions.map((solution, index) => ({
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

export default function CRMERPSolutionsPage() {
  return (
    <main className="overflow-hidden bg-white pb-20 text-gray-800 md:pb-0">
      <StructuredData />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand-blue to-slate-900 text-white"
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

              <li
                aria-current="page"
                className="text-gray-200"
              >
                CRM & ERP Solutions
              </li>

            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Custom CRM & ERP Software
              </p>

              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                CRM & ERP software development Services in Hyderabad 
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                MrTechies develops custom CRM, ERP and business software
                solutions for companies that need structured workflows,
                centralized data, better reporting and connected operations.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                From lead management and sales pipelines to dashboards,
                automation, integrations and business databases, we build
                software around your actual requirements instead of forcing
                every business into the same system.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className={btnPrimary}
                >
                  Discuss your CRM or ERP project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#solutions"
                  className={btnGhost}
                >
                  Explore solutions
                </Link>

              </div>

              <ul className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Database
                    size={18}
                    className="text-brand-orange"
                  />
                  Structured business data
                </li>

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Workflow
                    size={18}
                    className="text-brand-orange"
                  />
                  Workflow automation
                </li>

                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Link2
                    size={18}
                    className="text-brand-orange"
                  />
                  API-ready systems
                </li>

              </ul>

            </div>

            {/* HERO VISUAL */}

            <div className="relative">

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-sm">

                <div className="rounded-2xl bg-white p-6 text-gray-900">

                  <div className="flex items-center justify-between">

                    <div className="h-5 w-32 rounded bg-brand-blue" />

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

                  <Users
                    className="text-brand-orange"
                    size={22}
                  />

                  <p className="mt-3 text-sm font-semibold">
                    Customer management
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                  <BarChart3
                    className="text-brand-orange"
                    size={22}
                  />

                  <p className="mt-3 text-sm font-semibold">
                    Business dashboards
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

            <li
              key={link.href}
              className="shrink-0"
            >

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
              What does CRM and ERP software development include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              CRM and ERP software development can include customer
              management, lead tracking, sales pipelines, dashboards,
              workflow automation, user roles, databases, APIs,
              third-party integrations, reporting and business operations.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              The right system depends on your business process. Some
              businesses need a focused CRM, while others need a broader
              ERP-style platform connecting multiple departments and
              operational workflows.
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
                Who can benefit from custom CRM and ERP software?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                The best starting point is not the software name. It is the
                business problem, users, workflows and information your
                organization needs to manage.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {audiences.map(
                ({ icon: Icon, title, text }) => (

                  <article
                    key={title}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >

                    <Icon
                      size={22}
                      className="text-brand-orange"
                    />

                    <h3 className="mt-4 text-lg font-bold text-brand-blue">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {text}
                    </p>

                  </article>

                ),
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CRM / ERP SOLUTIONS
      ====================================================== */}

      <section
        id="solutions"
        aria-labelledby="solutions-heading"
        className="scroll-mt-24 border-y border-gray-100 bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="CRM & ERP solutions"
            title="Business software built around the workflows you need to manage"
            description="A lead management system, sales pipeline, dashboard and automation platform each solve different operational requirements."
          />

          <h2
            id="solutions-heading"
            className="sr-only"
          >
            CRM and ERP software solutions
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {crmSolutions.map((solution) => {

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
                      alt={`${solution.title} CRM and ERP software by MrTechies`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                  </div>

                  <div className="flex flex-1 flex-col p-6">

                    <Icon
                      size={22}
                      className="text-brand-orange"
                    />

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
            title="What problems can CRM and ERP software solve?"
            description="Many business software projects start with operational problems such as disconnected data, manual work, lost follow-ups or limited reporting."
          />

          <h2
            id="problems-heading"
            className="sr-only"
          >
            Common CRM and ERP problems and solutions
          </h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

            <div className="hidden grid-cols-2 border-b border-gray-200 bg-gray-50 px-8 py-4 text-sm font-semibold text-gray-500 md:grid">

              <span>Business problem</span>

              <span>Software approach</span>

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
          FEATURES
      ====================================================== */}

      <section
        id="features"
        aria-labelledby="features-heading"
        className="scroll-mt-24 bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="Core functionality"
            title="CRM and ERP features can be structured around your business"
            description="Choose the modules and workflows that match your operational requirements instead of adding unnecessary functionality."
          />

          <h2
            id="features-heading"
            className="sr-only"
          >
            CRM and ERP software features
          </h2>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">

            {crmFeatures.map(
              ({ icon: Icon, title, description }) => (

                <article
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white">

                    <Icon size={21} />

                  </div>

                  <h3 className="mt-5 text-lg font-bold text-brand-blue">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {description}
                  </p>

                </article>

              ),
            )}

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
            title="Technology should support the business system, not become the business system"
            description="CRM and ERP technology choices should reflect the application's users, workflows, data, integrations, performance requirements and future growth."
          />

          <h2
            id="technology-heading"
            className="sr-only"
          >
            CRM and ERP development technology
          </h2>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

            {technologyPrinciples.map(
              ({ icon: Icon, title, description }) => (

                <article
                  key={title}
                  className="flex gap-4"
                >

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
              Technology selection depends on project requirements, but CRM,
              ERP and business application projects can include the following
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
                CRM & ERP development process
              </p>

              <h2
                id="process-heading"
                className="mt-3 text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                From business workflow to production-ready software
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A structured development process keeps business requirements,
                data architecture, user experience, integrations, testing and
                deployment connected throughout the project.
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
            title="How long does CRM or ERP development take and what affects the cost?"
            description="The timeline and cost depend on the actual functionality, modules, integrations, users and data requirements. A single generic price does not accurately represent every business system."
          />

          <h2
            id="timeline-heading"
            className="sr-only"
          >
            CRM and ERP development timeline and cost factors
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

              <div className="border-b border-gray-100 p-7">

                <Clock3
                  size={26}
                  className="text-brand-orange"
                />

                <h3 className="mt-4 text-2xl font-bold text-brand-blue">
                  Typical project windows
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Indicative ranges only. Actual delivery depends on scope,
                  integrations, data migration, testing and approval cycles.
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
                  Need a specific delivery target?
                </strong>{" "}

                Share your required modules, users and integrations so the
                project can be scoped around the actual system requirements.

              </div>

            </div>

            <div className="rounded-2xl bg-brand-blue p-7 text-white md:p-9">

              <TrendingUp
                size={26}
                className="text-brand-orange"
              />

              <h3 className="mt-4 text-2xl font-bold">
                What affects CRM and ERP development cost?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                A professional quote should reflect the applications actual
                scope instead of applying one generic price to every project.
              </p>

              <ul className="mt-6 space-y-4">

                {costFactors.map((item) => (

                  <CheckItem
                    key={item}
                    tone="dark"
                  >
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
          SYSTEM FOUNDATION
      ====================================================== */}

      <section
        aria-labelledby="system-heading"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white"
      >

        <div
          aria-hidden="true"
          className="absolute -right-36 top-0 h-[480px] w-[480px] rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <h2
                id="system-heading"
                className="text-3xl font-bold leading-tight md:text-5xl"
              >
                Build a business system that remains usable as requirements change
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                CRM and ERP performance depends on more than the interface.
                Data architecture, APIs, database operations, permissions and
                application workflows all contribute to the overall system.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We consider these foundations during development so the
                application can support the agreed functionality and provide
                a structured base for future improvements.
              </p>

              <Link
                href="/services/web-development-services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore web development
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {systemFoundation.map(
                ({ icon: Icon, title, description }) => (

                  <article
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >

                    <Icon
                      size={24}
                      className="text-brand-orange"
                    />

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
              CRM & ERP development checklist
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-300">
              Depending on the agreed project scope, these application
              foundations can be reviewed before production deployment.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {applicationChecklist.map((item) => (

                <CheckItem
                  key={item}
                  tone="dark"
                >
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
                What should you clarify before starting a CRM or ERP project?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Good business software development starts with clear
                expectations. Before implementation begins, the business
                should understand its workflows, users, data, integrations,
                timeline and ongoing requirements.
              </p>

            </div>

            <div className="space-y-7">

              {expectations.map(({ title, text }) => (

                <div
                  key={title}
                  className="flex gap-4"
                >

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
            CRM and ERP software development for businesses in Hyderabad and across India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            MrTechies provides custom CRM, ERP and business software
            development from Hyderabad and works with businesses in other
            locations across India through structured remote collaboration.
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
            title="Connect CRM and ERP software with your wider digital system"
            description="Business software can work alongside websites, applications and digital marketing when the technical structure and customer journey are planned together."
          />

          <div className="grid gap-6 md:grid-cols-3">

            {relatedServices.map(
              ({ href, icon: Icon, title, text, cta }) => (

                <Link
                  key={title}
                  href={href}
                  className={`group rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl ${focusRing}`}
                >

                  <Icon
                    size={25}
                    className="text-brand-orange"
                  />

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
            title="Frequently asked questions about CRM and ERP software development"
            description="Answers to common questions about custom CRM development, ERP software, business automation, integrations, timelines and project requirements."
          />

          <h2
            id="faq-heading"
            className="sr-only"
          >
            CRM and ERP software development frequently asked questions
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
          INTERNAL MODULE LINKS
      ====================================================== */}

      <section className="border-t border-gray-100 bg-white py-16">

        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">

          <h2 className="text-2xl font-bold text-brand-blue md:text-3xl">
            Explore CRM and ERP modules
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Explore individual CRM and business automation solutions based on
            the functionality your organization needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">

            <Link
              href="/services/crm-erp-solutions/lead-management"
              className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-blue"
            >
              Lead Management
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services/crm-erp-solutions/sales-pipelines"
              className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-blue"
            >
              Sales Pipelines
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services/crm-erp-solutions/customer-dashboards"
              className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-blue"
            >
              Customer Dashboards
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services/crm-erp-solutions/automation-systems"
              className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-blue"
            >
              Automation Systems
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-gradient-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Start your business software project
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Need a CRM or ERP system built around your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tell us how your current process works, what your teams need to
            manage, which systems you already use and what you want the new
            software to improve. We can then discuss the appropriate
            development approach.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className={btnPrimary}
            >
              Discuss your project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className={btnGhost}
            >
              Explore all services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}