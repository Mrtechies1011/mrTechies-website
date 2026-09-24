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
  Crop,
  Film,
  GraduationCap,
  Megaphone,
  Palette,
  Rocket,
  Scissors,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Type,
  Video,
  Volume2,
} from "lucide-react";

/* =========================================================
   CONSTANTS
========================================================= */

/**
 * Keep this identical to the base URL used on your other service pages.
 * (Your old file used https://www.mrtechies.com, while the web design page
 * used https://mrtechies.com. Pick ONE and redirect the other in
 * next.config / your host, otherwise canonicals conflict.)
 */
const BASE_URL = "https://mrtechies.com";
const PAGE_URL = `${BASE_URL}/services/video-editing-services`;

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
  title: "Video Editing Services in Hyderabad | MrTechies",

  description:
    "Professional video editing for businesses, brands and creators: reels, promo videos, brand content and motion graphics. Fast turnaround. Get a free quote.",

  keywords: [
    "video editing services",
    "video editing services in Hyderabad",
    "professional video editors",
    "social media video editing",
    "reels editing service",
    "promotional video editing",
    "YouTube video editing",
    "motion graphics editing",
  ],

  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },

  openGraph: {
    title: "Video Editing Services in Hyderabad | MrTechies",
    description:
      "Turn raw footage into polished, platform-ready videos. Reels, promos, brand content and motion design with fast turnaround.",
    url: PAGE_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
    // TODO: create this 1200x630 image (or point to an existing one).
    images: [
      {
        url: `${BASE_URL}/og/video-editing-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Video editing services by MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Video Editing Services in Hyderabad | MrTechies",
    description:
      "Reels, promotional videos, brand content and motion design edited for your platform and audience.",
    images: [`${BASE_URL}/og/video-editing-services.jpg`],
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

  category: "Video Editing",
  creator: "MrTechies",
  publisher: "MrTechies",
};

/* =========================================================
   DATA
========================================================= */

const subServices = [
  {
    title: "Short-Form Reels",
    description:
      "High-engagement vertical videos for Instagram Reels, YouTube Shorts and other social platforms.",
    href: "/services/video-editing-services/short-form-reels",
    icon: Smartphone,
    image: "/services/content-short.jpg",
    includes: "Strong hooks, fast pacing, captions, vertical framing",
    bestFor: "Creators, coaches, local businesses and social media teams",
  },
  {
    title: "Promotional Videos",
    description:
      "Professional brand and product videos that explain the offer and give viewers a reason to act.",
    href: "/services/video-editing-services/promotional-videos",
    icon: Megaphone,
    image: "/services/content-promotional.jpg",
    includes: "Story structure, product highlights, clean audio, clear CTA",
    bestFor: "Product launches, ad campaigns, service businesses and events",
  },
  {
    title: "Brand Content",
    description:
      "Consistent visuals that reflect your identity across every video you publish.",
    href: "/services/video-editing-services/brand-content",
    icon: Palette,
    image: "/services/content-brand.jpg",
    includes: "Consistent colour, type, intros and reusable templates",
    bestFor: "Brands publishing regularly and teams that need one look",
  },
  {
    title: "Editing & Motion",
    description:
      "Clean edits with smooth motion design, titles and animated graphics.",
    href: "/services/video-editing-services/editing-motion",
    icon: Film,
    image: "/services/content-editing.jpg",
    includes: "Precise cuts, transitions, titles and animated graphics",
    bestFor: "Explainers, YouTube videos, course content and presentations",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Businesses",
    text: "You have footage from events, products or your team and need it to look professional.",
  },
  {
    icon: Sparkles,
    title: "Creators",
    text: "You want to post consistently without spending your own hours in the editing timeline.",
  },
  {
    icon: Rocket,
    title: "Startups",
    text: "You need launch videos, product demos and ad creatives quickly and on brand.",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    text: "You need reliable extra editing capacity for client work without hiring full-time.",
  },
  {
    icon: GraduationCap,
    title: "Educators and coaches",
    text: "You record lessons and talks and need them tightened, captioned and easy to follow.",
  },
  {
    icon: Megaphone,
    title: "Marketing teams",
    text: "You run campaigns across platforms and need every video cut to the right format.",
  },
];

const includedWork = [
  { icon: Scissors, label: "Cutting, pacing and story flow" },
  { icon: Palette, label: "Colour correction and consistent look" },
  { icon: Volume2, label: "Audio clean-up and balancing" },
  { icon: Type, label: "Captions, subtitles and on-screen text" },
  { icon: Sparkles, label: "Motion graphics and transitions" },
  { icon: Crop, label: "Versions for 9:16, 1:1 and 16:9" },
];

const process = [
  {
    title: "Brief and footage",
    description:
      "You share your footage, the goal of the video, the platform and any brand references. We confirm scope, length and deadline before we start.",
  },
  {
    title: "Rough cut",
    description:
      "We build the story: what stays, what goes, where the hook sits and how the pacing feels. You see the structure before polish is added.",
  },
  {
    title: "Feedback",
    description:
      "You review the rough cut and tell us what to change. Revision rounds are agreed upfront so there are no surprises.",
  },
  {
    title: "Polish",
    description:
      "Colour, audio, captions, titles and motion are finished to match your brand.",
  },
  {
    title: "Delivery",
    description:
      "You receive final files in the formats and aspect ratios your platforms need.",
  },
];

const turnaroundFactors = [
  "Length of the final video",
  "Amount and quality of raw footage",
  "Complexity: motion graphics, effects, multi-camera",
  "Number of videos and versions per batch",
  "How quickly feedback is returned",
  "Urgency of the deadline",
];

const acceptedFormats = ["MP4", "MOV", "ProRes", "Phone footage", "Camera footage"];

const relatedServices = [
  {
    href: "/services/digital-marketing-services",
    title: "Digital Marketing",
    text: "Put your videos to work in campaigns, ads and content plans that reach the right audience.",
    cta: "Explore marketing",
  },
  {
    href: "/services/web-designing-services",
    title: "Web Designing",
    text: "Feature your videos on a fast, conversion-focused website built to turn viewers into enquiries.",
    cta: "Explore web design",
  },
  {
    href: "/services/seo-services",
    title: "SEO Services",
    text: "Help customers find your video and website content through search.",
    cta: "Explore SEO",
  },
];

const expectations = [
  {
    title: "What you get",
    text: "Edited, platform-ready videos in the formats we agree on, with the scope and revisions confirmed before work starts.",
  },
  {
    title: "How long it takes",
    text: "Standard edits take 2–4 business days depending on video length and complexity. We confirm the real timeline after seeing your footage.",
  },
  {
    title: "What we can’t promise",
    text: "We can’t guarantee views, reach, followers or viral results. Those depend on your idea, audience and the platform’s algorithm. We can make sure the edit gives your content its best chance.",
  },
];

const faqs = [
  {
    question: "What video formats do you accept?",
    answer:
      "We work with all standard camera and phone formats, including MP4, MOV and ProRes raw clips. If you have an unusual format, send a sample and we’ll confirm before you upload everything.",
  },
  {
    question: "What is the usual turnaround time for video editing?",
    answer:
      "Standard editing takes 2–4 business days, depending on the length and complexity of the final video. Larger batches or heavy motion graphics can take longer, and urgent deadlines can be discussed. We confirm the timeline after reviewing your footage.",
  },
  {
    question: "How much do video editing services cost?",
    answer:
      "Pricing depends on the type of video, its length, the amount of footage, the level of motion graphics and how many videos or versions you need. Share your requirement and we’ll send a scoped quote rather than a generic price.",
  },
  {
    question: "Do you edit Reels, YouTube Shorts and social media videos?",
    answer:
      "Yes. Our short-form editing is built for vertical platforms, with strong opening hooks, fast pacing and captions. We can also deliver the same video in other aspect ratios for different platforms.",
  },
  {
    question: "Can you add captions, subtitles and motion graphics?",
    answer:
      "Yes. Captions, subtitles, on-screen text, titles and animated graphics can all be included in the scope. Tell us the style you want and share any brand guidelines so it matches your other content.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Revision rounds are agreed before the project starts, so both sides know what is included. Most feedback is easiest to handle at the rough-cut stage, before final polish is applied.",
  },
  {
    question: "Can you keep my videos consistent with my brand?",
    answer:
      "Yes. Our brand content work focuses on consistency: colours, fonts, intros, lower thirds and pacing that make every video feel like it came from the same company.",
  },
  {
    question: "Do you work with clients outside Hyderabad?",
    answer:
      "Yes. We work with businesses and creators in Hyderabad and across India, and files, feedback and delivery are all handled online.",
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

/* Static so server and client render identically. */
const waveform = [
  30, 55, 40, 70, 45, 80, 35, 60, 90, 50, 65, 30, 75, 55, 40, 85, 60, 35, 70,
  50, 45, 80, 30, 65, 55, 90, 40, 60, 35, 75, 50, 45, 70, 55, 30, 80, 60, 40,
  65, 50,
];

function Track({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-[11px] text-gray-400">{label}</span>
      <div className="relative h-9 flex-1 overflow-hidden rounded-md bg-white/5">
        {children}
      </div>
    </div>
  );
}

function Clip({
  left,
  width,
  className,
}: {
  left: number;
  width: number;
  className: string;
}) {
  return (
    <div
      className={`absolute top-1 bottom-1 rounded ${className}`}
      style={{ left: `${left}%`, width: `${width}%` }}
    />
  );
}

/** A simplified editing timeline: the one memorable visual on the page. */
function HeroTimeline() {
  return (
    <figure>
      <div
        aria-hidden="true"
        className="rounded-2xl border border-white/15 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-sm sm:p-5"
      >
        {/* preview */}
        <div className="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-brand-blue to-slate-800">
          <div className="absolute inset-x-0 bottom-5 mx-auto w-2/3 text-center">
            <span className="rounded bg-black/60 px-3 py-1 text-sm font-semibold text-white">
              This is where viewers decide to stay
            </span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90">
            <Video size={26} className="text-white" />
          </div>
        </div>

        {/* timeline */}
        <div className="relative space-y-2">
          <Track label="Titles">
            <Clip left={4} width={18} className="bg-purple-400/70" />
            <Clip left={46} width={22} className="bg-purple-400/70" />
          </Track>

          <Track label="Video">
            <Clip left={0} width={24} className="bg-sky-400/70" />
            <Clip left={25} width={16} className="bg-brand-orange/80" />
            <Clip left={42} width={30} className="bg-sky-400/70" />
            <Clip left={73} width={27} className="bg-brand-orange/80" />
          </Track>

          <Track label="Captions">
            <Clip left={2} width={10} className="bg-emerald-400/70" />
            <Clip left={14} width={12} className="bg-emerald-400/70" />
            <Clip left={30} width={14} className="bg-emerald-400/70" />
            <Clip left={50} width={11} className="bg-emerald-400/70" />
            <Clip left={66} width={16} className="bg-emerald-400/70" />
          </Track>

          <Track label="Audio">
            <div className="flex h-full items-center gap-[2px] px-1">
              {waveform.map((h, i) => (
                <span
                  key={i}
                  className="w-full rounded-full bg-white/50"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </Track>

          {/* playhead */}
          <div
            className="pointer-events-none absolute -top-1 bottom-0"
            style={{ left: "calc(3.5rem + 0.75rem + (100% - 4.25rem) * 0.38)" }}
          >
            <div className="h-full w-0.5 bg-brand-orange" />
            <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-orange" />
          </div>
        </div>
      </div>

      <figcaption className="mt-5 grid gap-3 text-sm leading-6 text-gray-300 sm:grid-cols-3">
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          A hook in the first seconds
        </p>
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Pacing that holds attention
        </p>
        <p className="flex gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
          Clean sound and clear captions
        </p>
      </figcaption>
    </figure>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function VideoEditingServicesPage() {
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
                Video Editing
              </li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1
                id="hero-heading"
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Video editing services in Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                We turn raw clips into polished videos that hold attention on
                Instagram, YouTube, LinkedIn and your own website. Fast
                turnaround, clean edits and a workflow that scales with the
                number of videos you publish.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Get a free quote
                  <ArrowRight size={18} />
                </Link>

                <a href="#services" className={btnGhost}>
                  See video services
                </a>
              </div>

              <ul className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock3 size={18} className="text-brand-orange" />
                  2–4 day standard turnaround
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Smartphone size={18} className="text-brand-orange" />
                  Cut for every platform
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Palette size={18} className="text-brand-orange" />
                  On-brand, consistent look
                </li>
              </ul>
            </div>

            <HeroTimeline />
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK ANSWER (AEO)
      ====================================================== */}
      <section aria-labelledby="quick-answer" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="rounded-2xl border-l-4 border-brand-orange bg-orange-50 p-7 md:p-10">
            <h2
              id="quick-answer"
              className="text-2xl font-bold leading-tight text-brand-blue md:text-3xl"
            >
              What does a professional video editing service include?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A professional video editing service does more than trim clips. It
              shapes the story and pacing, cleans up audio, corrects colour,
              adds captions and graphics, and exports the video in the right
              format and aspect ratio for each platform.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              At MrTechies, editing is built around what the video needs to do:
              earn attention, explain an offer, or keep your brand consistent
              across every post.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_LABEL}</time>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-24 border-y border-gray-100 bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2
              id="services-heading"
              className="text-3xl font-bold text-brand-blue md:text-5xl"
            >
              Video editing services for every kind of content
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A quick social reel, a product promo and a brand series each need
              a different edit. Pick the one closest to what you’re making.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl ${focusRing}`}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={`${service.title} example from MrTechies video editing services`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <Icon size={22} className="text-brand-orange" />

                    <h3 className="mt-4 text-xl font-bold text-brand-blue transition group-hover:text-brand-orange">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      <strong className="text-gray-800">Includes:</strong>{" "}
                      {service.includes}
                    </p>

                    <p className="mt-5 border-t border-gray-100 pt-5 text-xs leading-5 text-gray-500">
                      <strong className="text-gray-700">Best for:</strong>{" "}
                      {service.bestFor}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-orange">
                      See this service
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
          WHO IT'S FOR
      ====================================================== */}
      <section aria-labelledby="audience-heading" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="audience-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                Who our video editing service is for
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you record video but don’t have the time, tools or team to
                edit it well, we can take that work off your plate. You send the
                footage and we deliver something you’re proud to publish.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {audiences.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
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
          WHAT'S INCLUDED
      ====================================================== */}
      <section
        aria-labelledby="included-heading"
        className="bg-brand-blue py-24 text-white"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              id="included-heading"
              className="text-3xl font-bold md:text-5xl"
            >
              What can be included in a video editing project
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              The exact scope depends on the video, but a finished edit can
              involve much more than cutting clips together.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedWork.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <Icon size={22} className="shrink-0 text-brand-orange" />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section
        aria-labelledby="process-heading"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2
                id="process-heading"
                className="text-3xl font-bold leading-tight text-brand-blue md:text-5xl"
              >
                How our video editing process works
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reviewing a rough cut first means big decisions are made early,
                and the final polish never has to be redone.
              </p>
            </div>

            <ol className="relative border-l-2 border-orange-200 pl-8">
              {process.map((step, index) => (
                <li key={step.title} className="relative pb-10 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white ring-4 ring-white"
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
          TURNAROUND + FORMATS
      ====================================================== */}
      <section
        aria-labelledby="turnaround-heading"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <Clock3 size={28} className="text-brand-orange" />

              <h2
                id="turnaround-heading"
                className="mt-4 text-2xl font-bold text-brand-blue md:text-3xl"
              >
                Turnaround: usually 2–4 business days
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Standard edits are typically delivered in 2–4 business days.
                The real timeline depends on what’s in your project:
              </p>

              <ul className="mt-6 space-y-3">
                {turnaroundFactors.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>

              <p className="mt-6 rounded-xl bg-orange-50 p-4 text-sm leading-6 text-gray-700">
                <strong className="text-brand-blue">On a deadline?</strong> Tell
                us the date when you send the brief and we’ll say what’s
                realistic before work begins.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-blue p-8 text-white">
              <Video size={28} className="text-brand-orange" />

              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                Send footage in the formats you already have
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                We work with standard camera and phone formats, so you don’t
                need to convert anything before sending it over.
              </p>

              <ul className="mt-6 flex flex-wrap gap-3">
                {acceptedFormats.map((format) => (
                  <li
                    key={format}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium"
                  >
                    {format}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-6 text-gray-300">
                Have something unusual? Send a sample and we’ll confirm it
                works before you upload the full set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLEAR EXPECTATIONS
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
                Good projects start with honest expectations. These are the
                three things we make sure you know upfront.
              </p>
            </div>

            <ul className="space-y-6">
              {expectations.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <ShieldCheck
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
              Get more from every video you publish
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A great edit works harder when it’s part of a wider plan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map(({ href, title, text, cta }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 transition motion-safe:hover:-translate-y-1 hover:shadow-xl ${focusRing}`}
              >
                <BadgeCheck size={25} className="text-brand-orange" />
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
              Video editing questions, answered
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Formats, turnaround, cost, revisions and how we work.
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
            Got footage waiting to become a great video?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tell us what you’re making, where it will be published and when you
            need it. We’ll reply with a clear scope, timeline and quote.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Get a free quote
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
          Get a free quote
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
                name: "Video Editing Services in Hyderabad | MrTechies",
                description:
                  "Professional video editing for businesses, brands and creators: reels, promotional videos, brand content and motion graphics.",
                inLanguage: "en-IN",
                dateModified: LAST_UPDATED_ISO,
                isPartOf: { "@id": `${BASE_URL}/#website` },
                about: { "@id": `${PAGE_URL}#service` },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
              },

              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "Video Editing Services",
                serviceType: "Video Editing",
                url: PAGE_URL,
                description:
                  "Short-form reels, promotional videos, brand content, editing and motion graphics for businesses, brands and creators.",
                provider: { "@id": `${BASE_URL}/#organization` },
                areaServed: [
                  { "@type": "City", name: "Hyderabad" },
                  { "@type": "Country", name: "India" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Video Editing Solutions",
                  itemListElement: subServices.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: service.title,
                      description: service.description,
                      url: `${BASE_URL}${service.href}`,
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
                    name: "Video Editing Services",
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