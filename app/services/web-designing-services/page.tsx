import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  Link2,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* =========================================================
   CONSTANTS
========================================================= */

const BASE_URL = "https://mrtechies.com";
const PAGE_URL = `${BASE_URL}/services/web-designing-services`;

/**
 * Update this whenever you make a real content change.
 * It is shown on the page and sent to search engines as dateModified.
 */
const LAST_UPDATED_ISO = "2026-09-19";
const LAST_UPDATED_LABEL = "19 September 2026";

/** Shared button styles (kept here so every CTA looks and behaves the same). */
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
  title: "Web Designing Services in Hyderabad | MrTechies",

  description:
    "Responsive, SEO-ready web designing services in Hyderabad. Business websites, landing pages, ecommerce UI and redesigns by MrTechies. Get a free consultation.",

  keywords: [
    "web designing services in Hyderabad",
    "website design company in Hyderabad",
    "web design company Hyderabad",
    "website redesign Hyderabad",
    "responsive website design",
    "UI UX design Hyderabad",
    "ecommerce website design Hyderabad",
    "landing page design",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },

  openGraph: {
    title: "Web Designing Services in Hyderabad | MrTechies",
    description:
      "Responsive, conversion-focused and SEO-ready websites for Hyderabad and India. Web design, UI/UX, redesigns, landing pages and ecommerce interfaces.",
    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
    // TODO: create this 1200x630 image (or point to an existing one).
    images: [
      {
        url: `${BASE_URL}/og/web-designing-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Web designing services in Hyderabad by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Designing Services in Hyderabad | MrTechies",
    description:
      "Responsive web design, UI/UX, business websites, landing pages and ecommerce interfaces with SEO-ready architecture.",
    images: [`${BASE_URL}/og/web-designing-services.jpg`],
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

  category: "Web Design",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   DATA
========================================================= */

const jumpLinks = [
  { href: "#solutions", label: "Website types" },
  { href: "#problems", label: "Problems we fix" },
  { href: "#process", label: "Process" },
  { href: "#timeline", label: "Timeline & cost" },
  { href: "#seo", label: "SEO included" },
  { href: "#faq", label: "FAQ" },
];

const webDesignCategories = [
  {
    title: "Corporate Websites",
    description:
      "Professional business websites that communicate credibility, expertise and clear reasons for customers to trust your company.",
    imageSrc: "/services/design-corporate.jpg",
    slug: "/services/web-designing-services/corporate",
    icon: Layers3,
    audience:
      "Companies, B2B businesses, professional service firms and established brands",
  },
  {
    title: "Startup & Landing Pages",
    description:
      "Focused pages that explain the offer quickly, support campaigns and guide visitors toward one measurable action.",
    imageSrc: "/services/design-landing.jpg",
    slug: "/services/web-designing-services/startups",
    icon: Target,
    audience:
      "Startups, SaaS companies, campaigns, product launches and lead-generation teams",
  },
  {
    title: "E-commerce UI",
    description:
      "Customer-friendly store interfaces built around product discovery, trust, mobile shopping and a clear path to checkout.",
    imageSrc: "/services/design-ecom.jpg",
    slug: "/services/web-designing-services/ecommerce",
    icon: ShoppingCart,
    audience: "D2C brands, retailers, product businesses and online stores",
  },
  {
    title: "Personal & Portfolio Brands",
    description:
      "Clean portfolio websites for consultants, creators and professionals who need their work and expertise to look credible online.",
    imageSrc: "/services/design-portfolio.png",
    slug: "/services/web-designing-services/portfolio",
    icon: Users,
    audience: "Consultants, freelancers, creators, founders and professionals",
  },
];

const audiences = [
  {
    icon: Rocket,
    title: "New businesses",
    text: "You need a professional presence from day one, not just a social media page.",
  },
  {
    icon: Building2,
    title: "Growing companies",
    text: "Your website no longer reflects the quality, services or scale you have reached.",
  },
  {
    icon: Zap,
    title: "Startups",
    text: "You need to explain a product, validate an idea or launch campaign landing pages fast.",
  },
  {
    icon: Store,
    title: "Local businesses",
    text: "You want people searching in Hyderabad to understand your services and contact you easily.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce brands",
    text: "You need clearer product journeys and a mobile shopping experience that supports buying.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    text: "You are a consultant, creator or specialist who needs a site that builds credibility.",
  },
];

const websiteProblems = [
  {
    problem: "Our website looks outdated",
    detail:
      "The business has moved on, but the site still weakens the first impression customers get.",
    fix: "A modern visual system built around your current brand, services and customers.",
  },
  {
    problem: "We get visitors but not enquiries",
    detail:
      "Messaging, page hierarchy, proof or calls to action don’t give people a reason to get in touch.",
    fix: "A clear offer, proof near the buttons and one primary action on every key page.",
  },
  {
    problem: "Our mobile site is hard to use",
    detail:
      "Desktop may look fine, while navigation, type, forms and buttons frustrate phone users.",
    fix: "Mobile-first layouts with thumb-friendly navigation, readable type and short forms.",
  },
  {
    problem: "Our website is slow",
    detail:
      "Oversized images, unnecessary scripts and heavy themes make even good designs feel sluggish.",
    fix: "Optimised images, lean scripts and a build that doesn’t depend on bloated themes.",
  },
  {
    problem: "Customers don’t understand what we offer",
    detail:
      "A beautiful design can’t make up for unclear services, audience or next steps.",
    fix: "Plain-language service pages that say what you do, who it’s for and what happens next.",
  },
  {
    problem: "Our site doesn’t support SEO",
    detail:
      "Generic pages, weak internal links and confusing hierarchy make future SEO harder than it needs to be.",
    fix: "A crawlable page structure, clean headings and internal links in place from launch.",
  },
];

const designPrinciples = [
  {
    icon: MonitorSmartphone,
    title: "Responsive by default",
    description:
      "Mobile isn’t a shrunken desktop page. Layout, type, navigation and calls to action are planned for every screen size.",
  },
  {
    icon: Gauge,
    title: "Performance-conscious",
    description:
      "Every image, animation and script has to justify its loading cost.",
  },
  {
    icon: Search,
    title: "Search-aware architecture",
    description:
      "Important services get their own crawlable pages with meaningful links between them.",
  },
  {
    icon: Target,
    title: "Built to convert",
    description:
      "Page journeys are designed around enquiries, bookings, calls or purchases.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-focused",
    description:
      "Clear service explanations, company information, proof and honest expectations reduce doubt.",
  },
  {
    icon: Code2,
    title: "Ready to build",
    description:
      "Designs are made with real implementation in mind: reusable components, consistent spacing, no impractical layouts.",
  },
];

const designProcess = [
  {
    title: "Business discovery",
    description:
      "We learn what you sell, who buys it, what your current site fails to do and what the new one must achieve.",
  },
  {
    title: "SEO and competitor context",
    description:
      "We review service intent, relevant competitors and search behaviour so the site supports future organic growth.",
  },
  {
    title: "Information architecture",
    description:
      "We decide pages, navigation, service hierarchy and user paths before visual styling starts.",
  },
  {
    title: "Wireframes and UX direction",
    description:
      "Key content, calls to action and proof are positioned so each page makes sense before it is styled.",
  },
  {
    title: "Visual design",
    description:
      "Typography, spacing, colour, imagery and components are built around your brand and the intended experience.",
  },
  {
    title: "Responsive development",
    description:
      "The approved design is implemented across devices with a suitable frontend and site architecture.",
  },
  {
    title: "SEO and quality checks",
    description:
      "Metadata, heading structure, internal links, crawl controls, forms and responsive behaviour are tested.",
  },
  {
    title: "Launch and growth",
    description:
      "After launch we can continue with SEO, content, analytics, marketing and conversion improvements.",
  },
];

const timelines = [
  { type: "Focused landing page", time: "3–7 working days" },
  { type: "Small business website", time: "7–15 working days" },
  { type: "Custom corporate website", time: "3–6+ weeks" },
  { type: "Complex web platform", time: "Scope dependent" },
];

const costFactors = [
  "Number of pages and unique page layouts",
  "Custom UI/UX versus adapting a proven structure",
  "Functionality: forms, booking, payments, integrations",
  "Content readiness: copywriting, photography, brand assets",
  "Size of the product catalogue for online stores",
  "SEO scope: foundation only or ongoing campaign",
  "Delivery urgency and how fast approvals arrive",
];

const templateVsCustom = [
  {
    factor: "Visual identity",
    template: "Looks similar to other sites using the same theme",
    custom: "Designed around your brand and customers",
  },
  {
    factor: "Page speed",
    template: "Often carries unused theme code and plugins",
    custom: "Only the code and assets the site needs",
  },
  {
    factor: "SEO control",
    template: "Limited by theme structure",
    custom: "Headings, URLs and internal links planned for search",
  },
  {
    factor: "Scaling later",
    template: "New sections may fight the theme",
    custom: "Reusable components make new pages faster",
  },
  {
    factor: "Best for",
    template: "Tight budgets and simple, short-lived sites",
    custom: "Businesses where the website drives revenue",
  },
];

const seoFoundation = [
  {
    icon: Link2,
    title: "Internal SEO structure",
    description:
      "Logical site architecture, crawlable internal links, clean service-page relationships and descriptive navigation.",
  },
  {
    icon: Search,
    title: "On-page foundation",
    description:
      "Page titles, meta descriptions, semantic headings, useful copy, image alt text and keyword-intent alignment.",
  },
  {
    icon: Code2,
    title: "Technical search setup",
    description:
      "Canonical handling, indexability review, XML sitemap, robots configuration and mobile usability.",
  },
  {
    icon: Globe2,
    title: "Search appearance",
    description:
      "Clear title and description signals, breadcrumb structure and headings that give search engines strong snippet material.",
  },
  {
    icon: Sparkles,
    title: "Answer-friendly content",
    description:
      "Direct answers, question-led headings and comparison blocks so people and AI systems can interpret the page.",
  },
  {
    icon: TrendingUp,
    title: "Off-page planning",
    description:
      "When it is part of the agreed scope: citations, listings and relevant backlink opportunities, never spam volume.",
  },
];

const internalSeoChecklist = [
  "Descriptive service-page URLs",
  "Logical service hierarchy",
  "Contextual internal links",
  "Breadcrumb relationships",
  "Descriptive anchor text",
  "Blog-to-service linking",
  "No isolated important pages",
  "Clear primary navigation",
];

const onPageChecklist = [
  "SEO-focused page titles",
  "Useful meta descriptions",
  "One clear H1 per page",
  "Logical H2 and H3 hierarchy",
  "Descriptive image alt text",
  "Service-intent content",
  "Canonical configuration",
  "Local relevance where appropriate",
];

const redesignEnough = [
  "Existing technology is maintainable",
  "Current URLs and structure mostly suit the business",
  "The main issue is outdated visual design",
  "Content can be improved within the current system",
  "Performance problems can be corrected",
];

const rebuildBetter = [
  "Current technology is difficult to maintain",
  "Mobile behaviour is fundamentally broken",
  "Architecture blocks new service pages",
  "SEO problems are deeply structural",
  "Important integrations can’t be added cleanly",
  "Performance is capped by the implementation",
];

const expectations = [
  {
    title: "What needs to be built",
    text: "The page, design and functionality scope is clear before work expands.",
  },
  {
    title: "What timeline is realistic",
    text: "Urgent projects are possible, but we confirm an achievable plan instead of an arbitrary promise.",
  },
  {
    title: "What SEO is included",
    text: "Foundation SEO, ongoing SEO and off-page campaigns are different levels of work. We define which belongs to your project.",
  },
  {
    title: "What we can’t guarantee",
    text: "We don’t guarantee a Google position, snippet or AI citation. Those are controlled by external search systems.",
  },
  {
    title: "What happens after launch",
    text: "We can continue into SEO, content, advertising and analytics whenever you want ongoing growth.",
  },
];

const serviceAreas = [
  "Hitech City",
  "Madhapur",
  "Gachibowli",
  "Kondapur",
  "Banjara Hills",
  "Jubilee Hills",
  "Secunderabad",
  "Begumpet",
  "Ameerpet",
  "Kukatpally",
  "Uppal",
  "Kompally",
];

const relatedServices = [
  {
    href: "/services/web-development-services",
    icon: Code2,
    title: "Web Development",
    text: "Turn the approved architecture and UI into a responsive, scalable and maintainable website.",
    cta: "Explore development",
  },
  {
    href: "/services/seo-services",
    icon: Search,
    title: "SEO Services",
    text: "Go beyond the launch foundation with content, technical optimisation, local SEO and off-page growth.",
    cta: "Explore SEO",
  },
  {
    href: "/services/digital-marketing-services",
    icon: TrendingUp,
    title: "Digital Marketing",
    text: "Connect your website with campaigns, content and measurable customer acquisition.",
    cta: "Explore marketing",
  },
];

const faqs = [
  {
    question: "What web designing services does MrTechies provide in Hyderabad?",
    answer:
      "MrTechies provides responsive business website design, corporate websites, startup and landing-page design, ecommerce interfaces, portfolio websites, website redesign, UI/UX planning, SEO-ready information architecture and website development support.",
  },
  {
    question: "How much does website design cost in Hyderabad?",
    answer:
      "The cost depends on the number of pages, how custom the design is, the functionality required (forms, booking, payments, integrations), content readiness, SEO scope and delivery urgency. A focused landing page costs far less than a multi-page custom corporate site or an online store. Share your requirement and we will give a scoped quote instead of a generic price.",
  },
  {
    question: "How quickly can MrTechies design and deliver a website?",
    answer:
      "Delivery depends on scope, content readiness, functionality and approval speed. Focused landing pages can be delivered within a few working days when requirements are clear, while standard business websites take longer. Rush delivery can be planned for suitable projects, and we confirm the timeline after reviewing the actual requirement.",
  },
  {
    question: "Does web designing include SEO at MrTechies?",
    answer:
      "Our web design process can include important SEO foundations: search-friendly page architecture, semantic headings, internal linking, metadata preparation, responsive design, sitemap and crawlability. Ongoing competitive SEO, content growth and backlink campaigns continue through our dedicated SEO services.",
  },
  {
    question: "Do you provide on-page SEO with website design?",
    answer:
      "Yes, when included in the project scope we prepare pages with a useful heading structure, titles, descriptions, keyword-intent alignment, internal links, image alt text and search-friendly content sections. Deeper content and competitive optimisation can be expanded through an ongoing SEO campaign.",
  },
  {
    question: "Do you provide backlinks with a web design project?",
    answer:
      "Backlink work is handled carefully because link quality matters more than volume. Where off-page SEO is part of the agreed scope, MrTechies can support citation, business-listing and relevant backlink planning. We do not use spam link schemes or promise artificial backlink quantities.",
  },
  {
    question:
      "Can you guarantee first-page Google rankings after redesigning my website?",
    answer:
      "No responsible web design or SEO company can guarantee a specific Google ranking. We build strong technical, content and on-page foundations and continue optimising, but rankings also depend on competition, relevance, authority, content quality and search engine systems.",
  },
  {
    question: "Can MrTechies redesign my existing website?",
    answer:
      "Yes. We evaluate whether your current website should be visually redesigned, technically improved or completely rebuilt. We recommend a full rebuild only when the existing technology or architecture significantly limits performance, usability, SEO or future development.",
  },
  {
    question: "Do you design websites for businesses outside Hyderabad?",
    answer:
      "Yes. MrTechies serves businesses in Hyderabad as well as clients across Telangana, Andhra Pradesh and other parts of India. Design and development can be managed remotely through structured communication and online review workflows.",
  },
  {
    question: "What do you need from me before starting a website?",
    answer:
      "Useful starting information includes your services, target customers, existing website if you have one, logo and brand assets, competitor or reference sites, required pages, expected functionality and the main action you want visitors to take.",
  },
  {
    question: "Can MrTechies handle development after designing the website?",
    answer:
      "Yes. MrTechies provides web development as well as web design, so the approved UI/UX and information architecture move straight into responsive implementation without handing the project to an unrelated provider.",
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
        align === "center" ? "mx-auto mb-14 max-w-3xl text-center" : "max-w-xl"
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

/** Annotated wireframe used in the hero: shows *how* we think about a page. */
function Pin({ n, className }: { n: number; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white shadow-lg ring-4 ring-brand-orange/25 ${className}`}
    >
      {n}
    </span>
  );
}

function HeroWireframe() {
  return (
    <figure className="relative">
      <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-sm">
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-2 pb-3 pt-1">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="ml-3 flex-1 rounded-md bg-white/10 px-3 py-1 text-xs text-gray-300">
            yourbusiness.com
          </span>
        </div>

        {/* page */}
        <div
          aria-hidden="true"
          className="relative rounded-xl bg-white p-5 sm:p-6"
        >
          {/* nav */}
          <div className="flex items-center justify-between">
            <div className="h-4 w-20 rounded bg-brand-blue" />
            <div className="hidden items-center gap-3 sm:flex">
              <div className="h-2 w-10 rounded bg-gray-200" />
              <div className="h-2 w-10 rounded bg-gray-200" />
              <div className="h-2 w-10 rounded bg-gray-200" />
            </div>
            <div className="h-6 w-16 rounded-md bg-brand-orange" />
          </div>

          {/* hero block */}
          <div className="relative mt-8">
            <Pin n={1} className="-left-3 -top-3" />
            <div className="h-4 w-4/5 rounded bg-brand-blue" />
            <div className="mt-2 h-4 w-3/5 rounded bg-brand-blue" />
            <div className="mt-4 h-2 w-full rounded bg-gray-200" />
            <div className="mt-2 h-2 w-5/6 rounded bg-gray-200" />

            <div className="relative mt-5 flex gap-3">
              <Pin n={2} className="-left-3 -top-3" />
              <div className="h-9 w-28 rounded-lg bg-brand-orange" />
              <div className="h-9 w-24 rounded-lg border border-gray-300" />
            </div>
          </div>

          {/* proof row */}
          <div className="relative mt-7 flex items-center gap-4 rounded-lg bg-gray-50 px-4 py-3">
            <Pin n={3} className="-left-3 -top-3" />
            <div className="h-5 w-5 rounded-full bg-orange-200" />
            <div className="h-2 w-24 rounded bg-gray-300" />
            <div className="ml-auto h-2 w-16 rounded bg-gray-200" />
          </div>

          {/* service cards */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-3">
                <div className="h-5 w-5 rounded bg-orange-100" />
                <div className="mt-3 h-2 w-3/4 rounded bg-gray-300" />
                <div className="mt-2 h-2 w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-5 space-y-2 text-sm leading-6 text-gray-300">
        <p className="flex gap-3">
          <span className="font-bold text-brand-orange">1</span>
          Say what you do in the first screen.
        </p>
        <p className="flex gap-3">
          <span className="font-bold text-brand-orange">2</span>
          Give visitors one obvious next step.
        </p>
        <p className="flex gap-3">
          <span className="font-bold text-brand-orange">3</span>
          Put proof right next to the decision.
        </p>
      </figcaption>
    </figure>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function WebDesigningHubPage() {
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
                Web Designing
              </li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Web designing services in Hyderabad 
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                MrTechies designs responsive, search-ready websites for
                startups, growing businesses, ecommerce brands and
                professionals who need more than an attractive homepage.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                UI/UX, development, internal SEO structure and conversion
                thinking work together, so your site is ready for customers,
                search engines and future growth.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Get a free consultation
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
                  Fast delivery options
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Search size={18} className="text-brand-orange" />
                  SEO-ready structure
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <MonitorSmartphone size={18} className="text-brand-orange" />
                  Responsive by default
                </li>
              </ul>
            </div>

            <HeroWireframe />
          </div>
        </div>
      </section>

      {/* =====================================================
          JUMP NAV (helps users, and earns in-page sitelinks)
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
          QUICK ANSWER (AEO / featured-snippet friendly)
      ====================================================== */}
      <section aria-labelledby="quick-answer" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="rounded-2xl border-l-4 border-brand-orange bg-orange-50 p-7 md:p-10">
            <h2
              id="quick-answer"
              className="text-2xl font-bold leading-tight text-brand-blue md:text-3xl"
            >
              What should a professional web designing service include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A professional web designing service covers far more than colour
              and layout. It should include information architecture, mobile
              responsiveness, UI/UX, customer journeys, conversion points,
              development feasibility, page performance and a search-friendly
              structure.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              At MrTechies, design also connects with web development, on-page
              SEO, internal linking and technical search setup, so the finished
              website is prepared for growth rather than launched and forgotten.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_LABEL}</time>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE WORK WITH
      ====================================================== */}
      <section aria-labelledby="audience-heading" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="audience-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                Who should reach out to MrTechies for web design?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                You don’t need to know whether you need WordPress, Next.js or
                React before contacting us. Start with the business problem and
                the result you need. We’ll recommend the right approach.
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
                  <p className="mt-2 text-sm leading-7 text-gray-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WEBSITE TYPES
      ====================================================== */}
      <section
        id="solutions"
        aria-labelledby="solutions-heading"
        className="scroll-mt-24 border-y border-gray-100 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2
              id="solutions-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              Different businesses need different website structures
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A corporate site, an online store, a startup landing page and a
              personal portfolio shouldn’t all come from the same template.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {webDesignCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href={category.slug}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl ${focusRing}`}
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <Image
                      src={category.imageSrc}
                      alt={`${category.title} design example from MrTechies web designing services`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <Icon size={22} className="text-brand-orange" />

                    <h3 className="mt-4 text-xl font-bold text-brand-blue transition group-hover:text-brand-orange">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {category.description}
                    </p>

                    <p className="mt-5 border-t border-gray-100 pt-5 text-xs leading-5 text-gray-500">
                      <strong className="text-gray-700">Best for:</strong>{" "}
                      {category.audience}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-orange">
                      See this solution
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
          PROBLEMS → FIXES
      ====================================================== */}
      <section
        id="problems"
        aria-labelledby="problems-heading"
        className="scroll-mt-24 bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            title="Most website projects start with a problem, not a design request"
            description="Here are the six we hear most, and what we do about each one."
          />

          <h3 id="problems-heading" className="sr-only">
            Common website problems and how we fix them
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="hidden grid-cols-2 border-b border-gray-200 bg-gray-50 px-8 py-4 text-sm font-semibold text-gray-500 md:grid">
              <span>What you’re seeing</span>
              <span>What we do</span>
            </div>

            <ul className="divide-y divide-gray-100">
              {websiteProblems.map((item) => (
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
          PRINCIPLES + DESIGN/DEV
      ====================================================== */}
      <section
        aria-labelledby="principles-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              id="principles-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              Design and development that work as one team
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A design file can look impressive and still make a poor website if
              it ignores performance, responsiveness or content growth. We
              design with the build in mind.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {designPrinciples.map(({ icon: Icon, title, description }) => (
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

          <div className="mt-14 text-center">
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
              <h2
                id="process-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                Our web design process, from business problem to launch
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A clear process helps us move faster without skipping the
                decisions that decide whether the finished site is useful.
              </p>
            </div>

            <ol className="relative border-l-2 border-orange-200 pl-8">
              {designProcess.map((step, index) => (
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
          TIMELINE + COST + TEMPLATE VS CUSTOM
      ====================================================== */}
      <section
        id="timeline"
        aria-labelledby="timeline-heading"
        className="scroll-mt-24 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="How long it takes and what affects the cost"
            description="Launch dates and budgets both depend on scope. Here’s what drives each, so you can plan before we talk."
          />

          <h3 id="timeline-heading" className="sr-only">
            Web design timelines and cost factors
          </h3>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* timelines */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="border-b border-gray-100 p-7">
                <Clock3 size={26} className="text-brand-orange" />
                <h3 className="mt-4 text-2xl font-bold text-brand-blue">
                  Typical design and build windows
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Indicative timelines when requirements and content are ready.
                </p>
              </div>

              <dl className="divide-y divide-gray-100">
                {timelines.map(({ type, time }) => (
                  <div
                    key={type}
                    className="flex items-center justify-between gap-4 p-6"
                  >
                    <dt className="font-medium text-gray-700">{type}</dt>
                    <dd className="text-right font-bold text-brand-orange">
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="bg-orange-50 p-6 text-sm leading-6 text-gray-700">
                <strong className="text-brand-blue">Urgent project?</strong>{" "}
                Tell us your launch date before development begins. We’ll say
                what’s realistic, prioritise the most important pages and never
                skip responsive testing to hit a date.
              </div>
            </div>

            {/* cost factors */}
            <div className="rounded-2xl bg-brand-blue p-7 text-white md:p-9">
              <TrendingUp size={26} className="text-brand-orange" />
              <h3 className="mt-4 text-2xl font-bold">
                What affects website design cost in Hyderabad
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                We quote against your actual scope, not a generic price list.
                These are the factors that move the number:
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

          {/* template vs custom */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-brand-blue">
              Template website or custom design: which one do you need?
            </h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">
                  Comparison of template-based and custom web design
                </caption>
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">
                      Factor
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold">
                      Template-based
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold text-brand-orange"
                    >
                      Custom design
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {templateVsCustom.map((row) => (
                    <tr key={row.factor}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-semibold text-brand-blue"
                      >
                        {row.factor}
                      </th>
                      <td className="px-6 py-4 text-gray-600">
                        {row.template}
                      </td>
                      <td className="bg-orange-50/50 px-6 py-4 text-gray-800">
                        {row.custom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO (compact, one section)
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
                SEO built into the foundation, not bolted on after launch
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Search performance depends on much more than design, but design
                and development decisions can either support SEO or make it
                harder later. We plan structure, headings, crawlability,
                internal links and search appearance while the site is being
                created.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We write for the questions customers actually ask: what type of
                site they need, whether we can redesign the existing one, how
                long it takes and what happens after launch. That is more
                useful, and more rankable, than repeating a keyword.
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
              {seoFoundation.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <Icon size={24} className="text-brand-orange" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* checklists */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">
                What internal SEO means when we build your site
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Older business sites often put every service on one page, so
                customers and search engines get little detail about any single
                offering. We give important services their own pages and connect
                them clearly.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {internalSeoChecklist.map((item) => (
                  <CheckItem key={item} tone="dark">
                    {item}
                  </CheckItem>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">On-page SEO preparation</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Where included in your scope, key pages are prepared with
                search-friendly signals at launch instead of months later.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {onPageChecklist.map((item) => (
                  <CheckItem key={item} tone="dark">
                    {item}
                  </CheckItem>
                ))}
              </ul>
            </div>
          </div>

          {/* backlinks + honesty */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">
                Backlinks: useful links, not bulk numbers
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Quality and relevance matter far more than link volume. When
                off-page SEO is in your scope, work can include business
                citations, legitimate listings, outreach planning and content
                worth linking to. We don’t sell automated spam links or
                purchased low-quality networks as a shortcut.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-brand-orange bg-white/10 p-7">
              <h3 className="text-xl font-bold">
                What no agency can promise
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                No web design agency controls exactly which title, snippet,
                sitelink, featured answer or AI citation a search engine shows.
                We optimise the signals and the content. The final presentation
                is decided by the search platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REDESIGN VS REBUILD
      ====================================================== */}
      <section
        aria-labelledby="redesign-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              id="redesign-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              You may need a redesign, not a complete rebuild
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We diagnose the actual problem before recommending that you
              replace everything.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <p className="text-sm font-semibold text-brand-orange">
                Redesign may be enough
              </p>
              <h3 className="mt-3 text-2xl font-bold text-brand-blue">
                Keep the foundation, improve the experience
              </h3>
              <ul className="mt-7 space-y-4">
                {redesignEnough.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl bg-brand-blue p-8 text-white">
              <p className="text-sm font-semibold text-brand-orange">
                Rebuild may be better
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Replace the limiting foundation
              </h3>
              <ul className="mt-7 space-y-4">
                {rebuildBetter.map((item) => (
                  <CheckItem key={item} tone="dark">
                    {item}
                  </CheckItem>
                ))}
              </ul>
            </article>
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
          <MapPin size={28} className="mx-auto text-brand-orange" />

          <h2
            id="local-heading"
            className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl"
          >
            Web design for businesses across Hyderabad and India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            We work with companies across Hyderabad, including these areas, as
            well as clients throughout Telangana, Andhra Pradesh and the rest of
            India through structured remote workflows.
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
          CLEAR EXPECTATIONS (E-E-A-T)
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
                What we’ll tell you clearly before we start
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Website projects involve trade-offs most business owners don’t
                make every day. We explain the important ones before
                development begins.
              </p>
            </div>

            <ul className="space-y-6">
              {expectations.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <BadgeCheck
                    size={22}
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
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES
      ====================================================== */}
      <section
        aria-labelledby="related-heading"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="related-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              Connect your website to the rest of your digital growth
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map(({ href, icon: Icon, title, text, cta }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 transition motion-safe:hover:-translate-y-1 hover:shadow-xl ${focusRing}`}
              >
                <Icon size={25} className="text-brand-orange" />
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
        className="scroll-mt-24 bg-white py-24"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="mb-12 text-center">
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              Web design questions businesses ask before starting
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Straight answers about cost, timelines, SEO, rankings, backlinks
              and working with MrTechies.
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
            Need a website that looks better, works better and is ready to grow?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tell us what’s wrong with your current site or what the new one
            must achieve. We’ll help you decide between a redesign, a new
            website or a wider development and SEO plan.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
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

      {/* =====================================================
          MOBILE STICKY CTA
      ====================================================== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <Link
          href="/contact"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 font-semibold text-white"
        >
          Get a free consultation
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
                name: "Web Designing Services in Hyderabad | MrTechies",
                description:
                  "Professional web designing services in Hyderabad including responsive websites, UI/UX, business website design, landing pages, ecommerce interfaces, website redesign and SEO-ready architecture.",
                inLanguage: "en-IN",
                dateModified: LAST_UPDATED_ISO,
                isPartOf: { "@id": `${BASE_URL}/#website` },
                about: { "@id": `${PAGE_URL}#service` },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },

              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "Web Designing Services",
                serviceType: "Web Design and UI/UX Design",
                url: PAGE_URL,
                description:
                  "Responsive web design, business website design, UI/UX, landing pages, ecommerce interfaces, website redesign and search-friendly website architecture from MrTechies.",
                provider: { "@id": `${BASE_URL}/#organization` },
                areaServed: [
                  { "@type": "City", name: "Hyderabad" },
                  { "@type": "State", name: "Telangana" },
                  { "@type": "Country", name: "India" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Web Design Solutions",
                  itemListElement: webDesignCategories.map((category) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: category.title,
                      description: category.description,
                      url: `${BASE_URL}${category.slug}`,
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
                    name: "Web Designing Services",
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