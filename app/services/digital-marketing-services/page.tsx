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
  Clock3,
  Filter,
  Funnel,
  Globe2,
  Layers,
  Mail,
  Megaphone,
  MousePointerClick,
  Repeat2,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
  XCircle,
} from "lucide-react";

/* =========================================================
   CONSTANTS
========================================================= */

const BASE_URL = "https://mrtechies.com";

/**
 * Your old canonical was /digital-marketing-services, but your other pages
 * and all sub-service links use /services/digital-marketing-services. Keep
 * this pointed at wherever the page actually lives, and redirect the other
 * path to it.
 */
const PAGE_URL = `${BASE_URL}/services/digital-marketing-services`;

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
  title: "Digital Marketing Services in Hyderabad | MrTechies",

  description:
    "Google Ads, social media marketing, brand campaigns and growth funnels from MrTechies. Performance-driven digital marketing for Hyderabad and India. Get a free audit.",

  keywords: [
    "digital marketing services",
    "digital marketing services in Hyderabad",
    "digital marketing agency Hyderabad",
    "performance marketing agency",
    "Google Ads management services",
    "social media marketing services",
    "ecommerce digital marketing services",
    "lead generation services",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },

  openGraph: {
    title: "Digital Marketing Services in Hyderabad | MrTechies",
    description:
      "Google Ads, social media marketing, brand campaigns and growth funnels, tracked against enquiries and sales, not vanity metrics.",
    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
    // TODO: create this 1200x630 image (or point to an existing one).
    images: [
      {
        url: `${BASE_URL}/og/digital-marketing-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Digital marketing services in Hyderabad by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Hyderabad | MrTechies",
    description:
      "Google Ads, social media marketing, brand campaigns and growth funnels tracked against real business results.",
    images: [`${BASE_URL}/og/digital-marketing-services.jpg`],
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

  category: "Digital Marketing",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   DATA
========================================================= */

const jumpLinks = [
  { href: "#pillars", label: "Marketing services" },
  { href: "#ecommerce", label: "Ecommerce marketing" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results & timing" },
  { href: "#faq", label: "FAQ" },
];

const principles = [
  {
    title: "Tracked to revenue",
    text: "We report on enquiries and sales, not just clicks, likes or impressions.",
  },
  {
    title: "Full attribution",
    text: "You see where each enquiry actually came from, not a guess.",
  },
  {
    title: "Budget discipline",
    text: "We watch spend closely and cut what isn’t working instead of letting it run.",
  },
  {
    title: "Honest reporting",
    text: "You get a plain explanation of what worked, what didn’t, and why.",
  },
];

const pillars = [
  {
    title: "Google Ads",
    description:
      "Search and display campaigns built around commercial intent, with tight targeting and ongoing negative-keyword cleanup to reduce wasted spend.",
    imageSrc: "/services/digital-google.webp",
    slug: "/services/digital-marketing-services/google-ads",
    icon: Search,
    bestFor: "Businesses that want enquiries from people already searching",
  },
  {
    title: "Social Media Marketing",
    description:
      "Organic and paid campaigns across Meta, LinkedIn and other platforms, built to reach the right audience and keep them engaged.",
    imageSrc: "/services/digital-SMM.webp",
    slug: "/services/digital-marketing-services/social-media-marketing",
    icon: Share2,
    bestFor: "Brands building awareness and community over time",
  },
  {
    title: "Brand Campaigns",
    description:
      "Consistent visual positioning and messaging across channels, so your brand is recognisable everywhere it appears.",
    imageSrc: "/services/digital-brand.jpg",
    slug: "/services/digital-marketing-services/brand-campaigns",
    icon: Megaphone,
    bestFor: "Businesses investing in long-term brand recognition",
  },
  {
    title: "Growth Funnels",
    description:
      "Landing pages, retargeting and follow-up sequences that turn casual visitors into leads and repeat customers.",
    imageSrc: "/services/digital-growth.png",
    slug: "/services/digital-marketing-services/growth-funnels",
    icon: Funnel,
    bestFor: "Businesses that get traffic but lose people before they convert",
  },
];

const warningSigns = [
  "Ad spend is going up, but enquiries aren’t",
  "You can’t tell which channel actually drives sales",
  "Landing pages don’t match what the ad promised",
  "Checkout or contact forms lose people partway through",
  "Retargeting isn’t set up, so visitors never come back",
  "Reports show impressions and clicks, not leads",
  "Campaigns launched months ago have never been reviewed",
  "Social content is posted but nobody tracks what it earns",
];

const ecommercePoints = [
  {
    title: "Shopping and dynamic product ads",
    text: "Product feeds and ads that show the right item to the right shopper.",
  },
  {
    title: "Abandoned-cart recovery",
    text: "Follow-up emails or ads that bring back visitors who left before checkout.",
  },
  {
    title: "Retargeting by product interest",
    text: "Ads that follow up on the specific products someone viewed, not a generic message.",
  },
  {
    title: "Landing pages built to convert",
    text: "Pages designed for the offer in the ad, not a generic homepage.",
  },
  {
    title: "Attribution across channels",
    text: "Clear reporting on which channel actually drove each sale.",
  },
  {
    title: "Seasonal and sale campaigns",
    text: "Planned campaigns for peak periods instead of last-minute scrambling.",
  },
];

const capabilities = [
  {
    icon: MousePointerClick,
    title: "Search intent targeting",
    description:
      "Campaigns built around what people are actually looking for when they’re ready to buy or enquire.",
  },
  {
    icon: Users,
    title: "Audience and lookalike targeting",
    description:
      "Demographic and interest targeting, refined using data from your existing customers.",
  },
  {
    icon: Repeat2,
    title: "Retargeting",
    description:
      "Bringing back visitors who didn’t convert the first time, with a relevant follow-up message.",
  },
  {
    icon: Layers,
    title: "Landing page and copy support",
    description:
      "Pages and ad copy written to match what brought the visitor there in the first place.",
  },
  {
    icon: Mail,
    title: "Email and follow-up sequences",
    description:
      "Automated follow-ups that keep leads warm after the first click.",
  },
  {
    icon: BarChart3,
    title: "Tracking and attribution",
    description:
      "Pixel and analytics setup so you know which channel and campaign earned each result.",
  },
];

const process = [
  {
    title: "Audit and goals",
    description:
      "We review your current channels, tracking and past campaigns, then agree what success actually looks like.",
  },
  {
    title: "Strategy",
    description:
      "We choose the right channels and offers for your audience and budget, instead of running everything at once.",
  },
  {
    title: "Tracking setup",
    description:
      "We confirm pixels, conversion tracking and attribution are correct before spending on ads.",
  },
  {
    title: "Campaign launch",
    description:
      "We launch with a controlled budget so we can learn what works before scaling spend.",
  },
  {
    title: "Optimisation",
    description:
      "We review performance regularly, cut what underperforms and put more budget behind what works.",
  },
  {
    title: "Report and plan",
    description:
      "You get a plain-language report tied to enquiries and sales, and a plan for the next period.",
  },
];

const timingFactors = [
  "Your current tracking and data quality",
  "How much competition exists for your audience",
  "The size of your budget relative to your goals",
  "Whether landing pages need to be built or fixed",
  "How quickly creative and copy are approved",
  "Whether the goal is immediate leads or long-term brand growth",
];

const locations = [
  {
    title: "Digital marketing services in Hyderabad",
    text: "Campaigns for Hyderabad businesses, from local service providers to growing tech companies.",
  },
  {
    title: "Digital marketing services in Bangalore",
    text: "Social and search campaigns for Bangalore businesses, managed remotely.",
  },
  {
    title: "Digital marketing services across India",
    text: "Scalable campaigns for multi-city businesses and national brands.",
  },
];

const relatedServices = [
  {
    href: "/services/seo-services",
    title: "SEO Services",
    text: "Build organic traffic that keeps working long after a campaign ends.",
    cta: "Explore SEO",
  },
  {
    href: "/services/web-designing-services",
    title: "Web Designing",
    text: "Get landing pages and a website built to convert the traffic you’re paying for.",
    cta: "Explore web design",
  },
  {
    href: "/services/video-editing-services",
    title: "Video Editing",
    text: "Turn footage into ad creative and social content that holds attention.",
    cta: "Explore video editing",
  },
];

const faqs = [
  {
    question: "What do digital marketing services include?",
    answer:
      "Digital marketing services help you reach the right audience and turn that attention into enquiries and sales. They typically include paid search and social ads, organic social media, landing pages, retargeting, email follow-up and reporting tied to business results. The right mix depends on your goals, audience and budget.",
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Cost depends on your ad spend, the number of channels you run, whether landing pages need to be built, and how much ongoing optimisation and reporting you need. We scope the work against your goals and give a clear quote rather than a fixed price list.",
  },
  {
    question: "How quickly will I see results from digital marketing?",
    answer:
      "Tracking fixes and landing page changes can show up in the data quickly. Campaigns usually need 2 to 4 weeks of continuous optimisation before performance stabilises, and longer for competitive markets or brand-building goals. We agree realistic milestones before spending begins.",
  },
  {
    question:
      "What makes digital marketing services worth paying for, compared to running ads myself?",
    answer:
      "Professional management focuses on fixing tracking, targeting the right audience, matching landing pages to the offer, and reviewing performance regularly to cut wasted spend. Running ads without tracking or ongoing review often inflates surface metrics like impressions or likes without moving actual revenue.",
  },
  {
    question: "Do you manage Google Ads and social media ads together?",
    answer:
      "Yes. We can run Google Ads, Meta and LinkedIn campaigns together or separately, depending on where your audience actually spends time and what stage of the funnel each channel is best suited to.",
  },
  {
    question: "Do you provide digital marketing for ecommerce stores?",
    answer:
      "Yes. Our ecommerce digital marketing covers shopping and dynamic product ads, abandoned-cart recovery, retargeting by product interest, conversion-focused landing pages and cross-channel attribution, so you can see which channel actually drives sales.",
  },
  {
    question: "Can you guarantee a specific return on ad spend?",
    answer:
      "No responsible agency can guarantee a specific return, because results depend on your market, competition, offer, budget and the platform’s own systems. We set realistic targets, track performance honestly and adjust campaigns based on what the data shows.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. We work with businesses in Hyderabad, Bangalore and across India. Strategy, campaign management and reporting are all handled online.",
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

/** A simplified funnel: shows where visitors are usually lost, and why tracking matters. */
function HeroFunnel() {
  const stages = [
    { label: "Ad seen", width: 100, value: "10,000" },
    { label: "Landing page visit", width: 72, value: "7,200" },
    { label: "Form started", width: 38, value: "3,800" },
    { label: "Enquiry submitted", width: 21, value: "2,100" },
  ];

  return (
    <figure>
      <div
        aria-hidden="true"
        className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-7"
      >
        <div className="mb-5 flex items-center justify-between text-xs text-gray-400">
          <span>Campaign funnel</span>
          <span>Sample data</span>
        </div>

        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={stage.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm text-gray-200">
                <span>{stage.label}</span>
                <span className="font-semibold text-white">{stage.value}</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    index === stages.length - 1
                      ? "bg-brand-orange"
                      : "bg-sky-400/70"
                  }`}
                  style={{ width: `${stage.width}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl bg-orange-500/10 px-4 py-3 text-sm text-orange-200">
          <Target size={18} className="shrink-0" />
          Every drop-off is a place we can fix tracking, copy or targeting.
        </div>
      </div>

      <figcaption className="mt-5 grid gap-3 text-sm leading-6 text-gray-300 sm:grid-cols-3">
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Reporting tied to enquiries
        </p>
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Budget moved to what works
        </p>
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Clear view of every drop-off
        </p>
      </figcaption>
    </figure>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function DigitalMarketingServicesMainPage() {
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
                Digital Marketing
              </li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Digital marketing services in Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                MrTechies runs Google Ads, social media and growth campaigns
                that are tracked against real business results, so you know
                exactly what your spend is doing.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                We fix tracking, target the right audience and review
                performance regularly instead of letting campaigns run
                unattended.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Request a free marketing audit
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/digital-marketing-services/google-ads"
                  className={btnGhost}
                >
                  Explore Google Ads
                </Link>
              </div>
            </div>

            <HeroFunnel />
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
          HOW WE WORK
      ====================================================== */}
      <section aria-labelledby="principles-heading" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 id="principles-heading" className="sr-only">
            How we approach digital marketing
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
              What do professional digital marketing services include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Professional digital marketing puts your budget in front of the
              right audience and tracks what happens after they click. That
              means paid search and social ads, landing pages built for the
              offer, retargeting, and reporting tied to enquiries and sales,
              not just impressions or likes.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Campaigns improve with review and adjustment. No agency can
              promise a fixed return, but honest tracking and regular
              optimisation are what separate results from guesswork.
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
              The four parts of a digital marketing plan
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Each one plays a different role. Most businesses need a mix, and
              we recommend a starting point based on your goals and budget.
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
      <section aria-labelledby="signs-heading" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="signs-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                Signs your ad spend isn’t working as hard as it should
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Most wasted budget isn’t a bad platform, it’s missing tracking,
                mismatched landing pages, or campaigns nobody has reviewed in
                months.
              </p>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange ${focusRing}`}
              >
                Get a free marketing audit
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
          ECOMMERCE MARKETING
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
                Digital marketing for online stores
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ecommerce brands lose customers at specific, fixable points:
                abandoned carts, mismatched landing pages and retargeting
                that never happens.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                Our ecommerce marketing focuses on recovering that lost demand
                and giving you a clear view of which channel actually drives
                orders.
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
      <section aria-labelledby="capabilities-heading" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              id="capabilities-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              What a full digital marketing plan can include
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Your scope depends on your goals and audience. These are the
              building blocks we combine.
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
                How our digital marketing process works
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tracking and strategy come before spend. Launching ads without
                either just makes it harder to know what worked.
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
                How long results take: typically 2 to 4 weeks to stabilise
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Tracking fixes and landing page changes can show up quickly.
                Campaigns usually need continuous optimisation before
                performance settles. What decides your timeline:
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
                    <strong className="text-white">We promise</strong> honest
                    tracking, clear reporting and budget discipline: we cut
                    what isn’t working.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-6 text-gray-200">
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-orange"
                  />
                  <span>
                    <strong className="text-white">We don’t promise</strong> a
                    fixed return on ad spend or a guaranteed number of leads.
                    Those depend on your market, offer and budget, and anyone
                    who guarantees them is guessing.
                  </span>
                </li>
              </ul>

              <Link
                href="/contact"
                className={`mt-8 ${btnPrimary} w-full sm:w-auto`}
              >
                Talk to our marketing team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}
      <section aria-labelledby="locations-heading" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Globe2 size={28} className="mx-auto text-brand-orange" />

            <h2
              id="locations-heading"
              className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl"
            >
              Digital marketing for businesses in Hyderabad, Bangalore and
              across India
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <Filter size={22} className="text-brand-orange" />
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
      <section aria-labelledby="related-heading" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="related-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              Marketing works best with the rest of your digital presence
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map(({ href, title, text, cta }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-7 transition motion-safe:hover:-translate-y-1 hover:bg-white hover:shadow-xl ${focusRing}`}
              >
                <Sparkles size={25} className="text-brand-orange" />
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
              Digital marketing questions, answered
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Cost, timelines, tracking, ecommerce and how we report results.
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
            Want to know where your marketing budget is actually going?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Request a free audit. We’ll look at your current channels,
            tracking and campaigns, then recommend where to start.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Request a free marketing audit
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
          Request a free marketing audit
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
                name: "Digital Marketing Services in Hyderabad | MrTechies",
                description:
                  "Google Ads, social media marketing, brand campaigns and growth funnels from MrTechies for businesses in Hyderabad and across India.",
                inLanguage: "en-IN",
                dateModified: LAST_UPDATED_ISO,
                isPartOf: { "@id": `${BASE_URL}/#website` },
                about: { "@id": `${PAGE_URL}#service` },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },

              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "Digital Marketing Services",
                serviceType: "Digital Marketing",
                url: PAGE_URL,
                description:
                  "Google Ads, social media marketing, brand campaigns and growth funnels tracked against enquiries and sales.",
                provider: { "@id": `${BASE_URL}/#organization` },
                areaServed: [
                  { "@type": "City", name: "Hyderabad" },
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Country", name: "India" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Digital Marketing Services",
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
                    name: "Digital Marketing Services",
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