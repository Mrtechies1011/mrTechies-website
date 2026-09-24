import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  FileText,
  Globe2,
  Link2,
  ListChecks,
  MapPin,
  Newspaper,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
  XCircle,
} from "lucide-react";

/* =========================================================
   CONSTANTS
========================================================= */

const BASE_URL = "https://mrtechies.com";

/**
 * IMPORTANT: your old canonical was /seo-services, but every other page and
 * all sub-service links use /services/seo-services. The canonical must be the
 * real, final URL of this page. If the page lives at /services/seo-services,
 * keep this as is. If /seo-services is a redirect, that is fine too.
 */
const PAGE_URL = `${BASE_URL}/services/seo-services`;

const LAST_UPDATED_ISO = "2026-09-19";
const LAST_UPDATED_LABEL = "19 September 2026";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-4 font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "SEO Services in Hyderabad & India | MrTechies",

  description:
    "Technical, on-page, local and ecommerce SEO services from MrTechies. White-hat, metrics-led campaigns for Hyderabad and India. Request a free SEO audit.",

  keywords: [
    "SEO services",
    "SEO services in Hyderabad",
    "SEO company in Hyderabad",
    "local SEO services",
    "ecommerce SEO services",
    "technical SEO services",
    "on-page SEO services",
    "SEO services in India",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },

  openGraph: {
    title: "SEO Services in Hyderabad & India | MrTechies",
    description:
      "White-hat technical, on-page, local and ecommerce SEO built around your customers and your revenue goals.",
    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
    // TODO: create this 1200x630 image (or point to an existing one).
    images: [
      {
        url: `${BASE_URL}/og/seo-services.jpg`,
        width: 1200,
        height: 630,
        alt: "SEO services in Hyderabad and India by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Hyderabad & India | MrTechies",
    description:
      "Technical, on-page, local and ecommerce SEO with honest expectations and clear reporting.",
    images: [`${BASE_URL}/og/seo-services.jpg`],
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

  category: "SEO",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   DATA
========================================================= */

const jumpLinks = [
  { href: "#pillars", label: "SEO services" },
  { href: "#ecommerce", label: "Ecommerce SEO" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results & timing" },
  { href: "#faq", label: "FAQ" },
];

const principles = [
  {
    title: "White-hat methods only",
    text: "No spam links, no keyword stuffing, no shortcuts that put your site at risk.",
  },
  {
    title: "Metrics-led strategy",
    text: "Decisions are based on search data, crawl data and what your customers do.",
  },
  {
    title: "Revenue-focused",
    text: "We aim at enquiries and sales, not just rankings and traffic charts.",
  },
  {
    title: "Honest expectations",
    text: "We explain what is realistic and never promise a specific Google position.",
  },
];

const pillars = [
  {
    title: "Technical SEO",
    description:
      "Crawlability, indexation, site speed, structured data and the technical issues that stop good pages from being found.",
    imageSrc: "/services/seo-technical.png",
    slug: "/services/seo-services/technical-seo",
    icon: Wrench,
    bestFor: "Sites with indexing problems, slow pages or a recent migration",
  },
  {
    title: "On-Page SEO",
    description:
      "Titles, descriptions, headings and page content organised around what your customers search for and what they want to know.",
    imageSrc: "/services/seo-onpage.png",
    slug: "/services/seo-services/on-page-seo",
    icon: FileText,
    bestFor: "Businesses whose pages exist but aren’t earning clicks",
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile, local citations and location-relevant pages to help nearby customers find you in maps and local results.",
    imageSrc: "/services/seo-local.png",
    slug: "/services/seo-services/local-seo",
    icon: MapPin,
    bestFor: "Clinics, restaurants, agencies, retailers and multi-location brands",
  },
  {
    title: "Content SEO",
    description:
      "High-intent content built around real customer questions, then linked to the pages that turn readers into enquiries.",
    imageSrc: "/services/seo-content.png",
    slug: "/services/seo-services/content-seo",
    icon: Newspaper,
    bestFor: "Businesses that want to grow traffic beyond brand searches",
  },
];

const warningSigns = [
  "Your pages are indexed, but rarely appear for the terms customers use",
  "Traffic exists but very few visitors become enquiries or sales",
  "Every service is squeezed onto one page",
  "Your site is slow or unreliable on mobile",
  "Titles and descriptions are generic or duplicated",
  "Your Google Business Profile is incomplete or inconsistent",
  "An agency reports rankings but not leads or revenue",
  "Old SEO tactics left you with low-quality links or thin pages",
];

const ecommercePoints = [
  {
    title: "Category and product page structure",
    text: "Clear hierarchies and descriptive URLs so search engines and shoppers can find every product group.",
  },
  {
    title: "Duplicate URL and filter control",
    text: "Filters, sorting and variants can create thousands of near-duplicate URLs. We control what gets crawled and indexed.",
  },
  {
    title: "Product structured data",
    text: "Product information in a format search engines can read, which can make listings eligible for richer results.",
  },
  {
    title: "Internal linking",
    text: "Links from categories, guides and best sellers that push authority to the pages that make money.",
  },
  {
    title: "Indexing and crawl issues",
    text: "Fixing the technical bugs that stop large catalogues from being fully discovered.",
  },
  {
    title: "Speed and mobile experience",
    text: "Fast, usable product pages on phones, where most shopping starts.",
  },
];

const capabilities = [
  {
    icon: Search,
    title: "Keyword and intent research",
    description:
      "We find the terms customers use when they’re ready to enquire or buy, not only high-volume vanity keywords.",
  },
  {
    icon: MapPin,
    title: "Multi-location local SEO",
    description:
      "Google Business Profile management and consistent citations for businesses with more than one location.",
  },
  {
    icon: Sparkles,
    title: "AI-search and answer readiness",
    description:
      "Content structured with direct answers and clear entities so search and AI tools can understand it. No one can guarantee AI citations.",
  },
  {
    icon: ListChecks,
    title: "On-page semantic strategy",
    description:
      "Content organised around topics and questions, not repeated keywords.",
  },
  {
    icon: Link2,
    title: "Authority and backlinks",
    description:
      "Relevant, legitimate links through citations, listings, outreach and content worth referencing. Quality over volume.",
  },
  {
    icon: BarChart3,
    title: "Tracking and reporting",
    description:
      "We connect SEO activity to enquiries and sales so you can see what is working.",
  },
];

const process = [
  {
    title: "Audit",
    description:
      "We review technical health, content, structure, competitors and how your site currently performs in search.",
  },
  {
    title: "Strategy",
    description:
      "We choose target topics and pages based on customer intent and business priorities, then agree what to fix first.",
  },
  {
    title: "Technical fixes",
    description:
      "We resolve crawl, indexation, speed and structure problems that hold the rest of the work back.",
  },
  {
    title: "Pages and content",
    description:
      "We improve existing pages, create the missing ones and build internal links between them.",
  },
  {
    title: "Local and authority",
    description:
      "Where in scope, we strengthen local signals and build legitimate links and citations.",
  },
  {
    title: "Report and improve",
    description:
      "We track rankings, traffic and enquiries, learn from the data and keep refining.",
  },
];

const timingFactors = [
  "Competition for your target keywords",
  "Your website’s current technical health",
  "How much content and how many pages need work",
  "The authority of your domain",
  "How quickly changes are approved and published",
  "Whether the campaign is local, national or ecommerce",
];

const locations = [
  {
    title: "SEO services in Hyderabad",
    text: "Campaigns for Hyderabad businesses, from B2B and technology companies to local service providers.",
  },
  {
    title: "SEO services in Bangalore",
    text: "Technical restructuring and content planning for Bangalore businesses, delivered remotely.",
  },
  {
    title: "SEO services across India",
    text: "Scalable SEO for multi-city businesses and large product catalogues.",
  },
];

const relatedServices = [
  {
    href: "/services/web-designing-services",
    title: "Web Designing",
    text: "Get a website designed with SEO structure built in from the start.",
    cta: "Explore web design",
  },
  {
    href: "/services/web-development-services",
    title: "Web Development",
    text: "Fast, clean development that supports crawlability and performance.",
    cta: "Explore development",
  },
  {
    href: "/services/digital-marketing-services",
    title: "Digital Marketing",
    text: "Combine organic growth with campaigns, content and paid channels.",
    cta: "Explore marketing",
  },
];

const faqs = [
  {
    question: "What do SEO services include?",
    answer:
      "SEO services improve how easily search engines can find, understand and rank your website, and how likely people are to click and enquire. They typically include technical SEO, on-page optimisation, content, local SEO, link building and reporting. The exact scope depends on your goals, competition and website.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "Structural fixes can be picked up by search engines quickly, but growth for competitive keywords typically takes 3 to 6 months of steady optimisation. Timing depends on competition, your site’s current condition, the amount of work needed and the authority of your domain.",
  },
  {
    question: "How much do SEO services cost in Hyderabad?",
    answer:
      "Cost depends on the size of your website, the competitiveness of your market, whether you need local or ecommerce SEO, how much content is required and whether link building is included. We scope the work against your goals and give a clear quote instead of a generic price.",
  },
  {
    question: "Can you guarantee first-page or top-3 Google rankings?",
    answer:
      "No. No responsible SEO company can guarantee a specific position, because rankings depend on competition, relevance, authority and search engine systems that nobody outside Google controls. We build strong technical, content and authority foundations and report honestly on progress.",
  },
  {
    question: "What is the difference between cheap and professional SEO?",
    answer:
      "Very cheap SEO often relies on shortcuts such as keyword stuffing, low-quality links or copied content, which can lead to penalties or short-lived results. Professional SEO fixes the site’s structure, improves useful content and builds authority in ways that hold up over time.",
  },
  {
    question: "What is local SEO and who needs it?",
    answer:
      "Local SEO helps a business appear when people search for services near them, in map results and local listings. It suits any business that serves customers in specific areas, such as clinics, restaurants, agencies, retailers and service providers, and includes Google Business Profile optimisation, citations and location-relevant pages.",
  },
  {
    question: "Do you provide ecommerce SEO services?",
    answer:
      "Yes. Ecommerce SEO focuses on category and product page structure, duplicate URLs from filters and variants, structured data, internal linking, crawl and indexing issues, and page speed, so large catalogues can be discovered and turn traffic into sales.",
  },
  {
    question: "Do you build backlinks?",
    answer:
      "Where off-page SEO is part of the agreed scope, we build relevant, legitimate links through citations, business listings, outreach and content worth linking to. We do not use spam link networks or promise artificial link counts, because low-quality links can hurt a site.",
  },
  {
    question: "What is AI SEO or answer engine optimisation?",
    answer:
      "It means structuring content so search engines and AI answer tools can understand it: direct answers, clear headings, defined entities and structured data. It improves clarity for users too. No agency can guarantee that an AI tool will cite your page.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. We work with businesses in Hyderabad, Bangalore and across India. Audits, strategy, reporting and communication are handled online.",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

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

/** A simplified search result: shows what good SEO changes on the results page. */
function HeroSerp() {
  return (
    <figure>
      <div
        aria-hidden="true"
        className="rounded-2xl border border-white/15 bg-white p-5 text-gray-800 shadow-2xl sm:p-6"
      >
        <div className="flex items-center gap-3 rounded-full border border-gray-200 px-4 py-2.5 text-sm text-gray-600">
          <Search size={16} className="text-gray-400" />
          seo services in hyderabad
        </div>

        <div className="mt-5 rounded-xl bg-orange-50 p-4 ring-2 ring-brand-orange/40">
          <p className="text-xs text-gray-500">
            mrtechies.com › services › seo-services
          </p>
          <p className="mt-1 text-lg font-semibold text-blue-700">
            SEO Services in Hyderabad &amp; India | MrTechies
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Technical, on-page, local and ecommerce SEO. White-hat, metrics-led
            campaigns. Request a free SEO audit.
          </p>
        </div>

        <div className="mt-4 space-y-2">
          {["How long does SEO take?", "What is local SEO?"].map((q) => (
            <div
              key={q}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700"
            >
              {q}
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <figcaption className="mt-5 grid gap-3 text-sm leading-6 text-gray-300 sm:grid-cols-3">
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Titles written to earn the click
        </p>
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Structure search engines can read
        </p>
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Answers ready for questions
        </p>
      </figcaption>
    </figure>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SEOServicesMainPage() {
  return (
    <main className="overflow-hidden bg-white pb-20 text-gray-800 md:pb-0">
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

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-36">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-brand-orange">
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
                SEO Services
              </li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                SEO services in Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                MrTechies is an SEO company that combines technical fixes,
                on-page optimisation, local SEO and content to help the right
                customers find your business on Google.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                We use white-hat methods, report on enquiries and sales, and
                tell you plainly what is realistic.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Request a free SEO audit
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/seo-services/local-seo"
                  className={btnGhost}
                >
                  Explore local SEO
                </Link>
              </div>
            </div>

            <HeroSerp />
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
          HOW WE WORK (replaces unverifiable stat strip)
      ====================================================== */}
      <section aria-labelledby="principles-heading" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 id="principles-heading" className="sr-only">
            How we approach SEO
          </h2>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <li key={item.title} className="flex gap-4">
                <ShieldCheck
                  size={24}
                  className="mt-1 shrink-0 text-brand-orange"
                />
                <div>
                  <h3 className="font-bold text-brand-blue">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================
          QUICK ANSWER (AEO)
      ====================================================== */}
      <section
        aria-labelledby="quick-answer"
        className="border-y border-gray-100 bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="rounded-2xl border-l-4 border-brand-orange bg-orange-50 p-7 md:p-10">
            <h2
              id="quick-answer"
              className="text-2xl font-bold leading-tight text-brand-blue md:text-3xl"
            >
              What do professional SEO services include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Professional SEO services make your website easier for search
              engines to crawl and understand, and more convincing to the
              people who find it. That means technical fixes, well-structured
              pages, useful content, local and authority signals, and reporting
              tied to enquiries and sales.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              SEO builds over time. Good work compounds, but no honest agency
              can promise a specific ranking or a fixed date.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_LABEL}</time>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PILLARS
      ====================================================== */}
      <section
        id="pillars"
        aria-labelledby="pillars-heading"
        className="scroll-mt-24 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2
              id="pillars-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              The four parts of an SEO campaign
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Each one solves a different problem. Most businesses need a mix,
              and we start with whichever is holding you back the most.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Link
                  key={pillar.title}
                  href={pillar.slug}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl ${focusRing}`}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={pillar.imageSrc}
                      alt={`${pillar.title} services from MrTechies`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <Icon size={22} className="text-brand-orange" />

                    <h3 className="mt-4 text-xl font-bold text-brand-blue transition group-hover:text-brand-orange">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {pillar.description}
                    </p>

                    <p className="mt-5 border-t border-gray-100 pt-5 text-xs leading-5 text-gray-500">
                      <strong className="text-gray-700">Best for:</strong>{" "}
                      {pillar.bestFor}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-orange">
                      Explore {pillar.title}
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
          WARNING SIGNS
      ====================================================== */}
      <section
        aria-labelledby="signs-heading"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="signs-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                Signs your current SEO isn’t working
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Search engines reward useful, well-structured sites and ignore
                keyword tricks. If any of these sound familiar, the problem is
                usually structure, content or strategy, and it can be fixed.
              </p>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange ${focusRing}`}
              >
                Get a free SEO audit
                <ArrowRight size={18} />
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <li
                  key={sign}
                  className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-6 text-gray-700"
                >
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-orange"
                  />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          ECOMMERCE SEO
      ====================================================== */}
      <section
        id="ecommerce"
        aria-labelledby="ecommerce-heading"
        className="relative scroll-mt-24 overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute -right-36 top-0 h-[480px] w-[480px] rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ShoppingCart size={30} className="text-brand-orange" />

              <h2
                id="ecommerce-heading"
                className="mt-5 text-3xl font-bold leading-tight md:text-5xl"
              >
                Ecommerce SEO services for online stores
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Online stores face SEO problems most websites don’t: thousands
                of product pages, filter combinations that create duplicate
                URLs and category structures that decide what gets found.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                Our ecommerce SEO focuses on helping search engines discover
                the right pages, and on turning those visits into orders.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {ecommercePoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section
        aria-labelledby="capabilities-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              id="capabilities-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              What a full SEO campaign can include
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Your scope depends on your goals and where you are today. These
              are the building blocks we combine.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-blue">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
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
              <h2
                id="process-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                How our SEO process works
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We fix foundations first, then build on them. Skipping straight
                to content or links on a weak site wastes budget.
              </p>
            </div>

            <ol className="relative border-l-2 border-orange-200 pl-8">
              {process.map((step, index) => (
                <li key={step.title} className="relative pb-10 last:pb-0">
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
          RESULTS + TIMING
      ====================================================== */}
      <section
        id="results"
        aria-labelledby="results-heading"
        className="scroll-mt-24 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <Clock3 size={28} className="text-brand-orange" />

              <h2
                id="results-heading"
                className="mt-4 text-2xl font-bold text-brand-blue md:text-3xl"
              >
                How long SEO takes: typically 3 to 6 months
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Structural fixes can be picked up by search engines quickly.
                Growth for competitive keywords usually takes 3 to 6 months of
                steady work. What decides your timeline:
              </p>

              <ul className="mt-6 space-y-3">
                {timingFactors.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-blue p-8 text-white">
              <BadgeCheck size={28} className="text-brand-orange" />

              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                What we promise, and what we don’t
              </h2>

              <ul className="mt-6 space-y-5">
                <li className="flex gap-3 text-sm leading-6 text-gray-200">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-orange"
                  />
                  <span>
                    <strong className="text-white">We promise</strong> white-hat
                    work, a clear scope, honest reporting and a plan tied to
                    enquiries and sales.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-6 text-gray-200">
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-orange"
                  />
                  <span>
                    <strong className="text-white">We don’t promise</strong> a
                    specific Google position, a fixed date for page one, or AI
                    citations. Those are controlled by search platforms, and
                    anyone who guarantees them is guessing.
                  </span>
                </li>
              </ul>

              <Link
                href="/contact"
                className={`mt-8 ${btnPrimary} w-full sm:w-auto`}
              >
                Talk to our SEO team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}
      <section
        aria-labelledby="locations-heading"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Globe2 size={28} className="mx-auto text-brand-orange" />

            <h2
              id="locations-heading"
              className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl"
            >
              SEO for businesses in Hyderabad, Bangalore and across India
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <MapPin size={22} className="text-brand-orange" />
                <h3 className="mt-4 text-lg font-bold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES
      ====================================================== */}
      <section
        aria-labelledby="related-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="related-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              SEO works best with a website built for it
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map(({ href, title, text, cta }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-7 transition motion-safe:hover:-translate-y-1 hover:bg-white hover:shadow-xl ${focusRing}`}
              >
                <Code2 size={25} className="text-brand-orange" />
                <h3 className="mt-5 text-xl font-bold text-brand-blue">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brand-orange">
                  {cta}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
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
          <div className="mb-12 text-center">
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              SEO questions, answered
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Cost, timelines, rankings, backlinks, local and ecommerce SEO.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white open:border-orange-200 open:shadow-sm"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-5 rounded-xl px-6 py-5 ${focusRing}`}
                >
                  <h3 className="font-bold leading-7 text-brand-blue">
                    {faq.question}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 font-bold text-brand-orange transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-gray-100 px-6 py-5">
                  <p className="leading-8 text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="cta-heading"
        className="relative overflow-hidden bg-linear-to-r from-brand-blue to-slate-950 py-24 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <h2
            id="cta-heading"
            className="text-4xl font-bold leading-tight md:text-5xl"
          >
            Want to know what’s holding your site back on Google?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Request a free SEO audit. We’ll look at your site, your competitors
            and your opportunities, then recommend where to start.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Request a free SEO audit
              <ArrowRight size={18} />
            </Link>

            <Link href="/services" className={btnGhost}>
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE STICKY CTA
      ====================================================== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <Link
          href="/contact"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 font-semibold text-white"
        >
          Request a free SEO audit
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: "SEO Services in Hyderabad & India | MrTechies",
                description:
                  "Technical, on-page, local and ecommerce SEO services from MrTechies for businesses in Hyderabad and across India.",
                inLanguage: "en-IN",
                dateModified: LAST_UPDATED_ISO,
                isPartOf: { "@id": `${BASE_URL}/#website` },
                about: { "@id": `${PAGE_URL}#service` },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },

              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "SEO Services",
                serviceType: "Search Engine Optimization",
                url: PAGE_URL,
                description:
                  "Technical SEO, on-page SEO, local SEO, content SEO and ecommerce SEO with white-hat methods and metrics-led reporting.",
                provider: { "@id": `${BASE_URL}/#organization` },
                areaServed: [
                  { "@type": "City", name: "Hyderabad" },
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Country", name: "India" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "SEO Services",
                  itemListElement: pillars.map((pillar) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: pillar.title,
                      description: pillar.description,
                      url: `${BASE_URL}${pillar.slug}`,
                    },
                  })),
                },
              },

              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: BASE_URL,
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
                    name: "SEO Services",
                    item: PAGE_URL,
                  },
                ],
              },

              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}