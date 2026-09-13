"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  CircleCheckBig,
  Clock3,
  Code2,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";


/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    id: "design",
    label: "Web Designing",
    summary:
      "Responsive UI/UX, clear information architecture and website experiences designed around real customer journeys.",
    result: "Better clarity, trust and conversions",
    href: "/services/web-designing-services",
  },

  {
    id: "development",
    label: "Web Development",
    summary:
      "Modern business websites and web solutions built for performance, maintainability and future growth.",
    result: "Fast, scalable digital foundations",
    href: "/services/web-development-services",
  },

  {
    id: "seo",
    label: "SEO Services",
    summary:
      "Technical, on-page and search-intent driven SEO designed to improve how customers discover your business.",
    result: "Stronger organic visibility",
    href: "/services/seo-services",
  },

  {
    id: "app",
    label: "App Development",
    summary:
      "User-focused mobile and web applications built around useful functionality rather than unnecessary complexity.",
    result: "Reliable digital products",
    href: "/services/app-development-services",
  },

  {
    id: "crm",
    label: "CRM & ERP Solutions",
    summary:
      "Custom systems that organize leads, workflows, customers and business operations in one connected environment.",
    result: "Less manual work and better control",
    href: "/services/crm-erp-solutions",
  },

  {
    id: "marketing",
    label: "Digital Marketing",
    summary:
      "Campaigns, content and digital acquisition strategies connected to landing pages, measurement and business goals.",
    result: "Reach that can turn into action",
    href: "/services/digital-marketing-services",
  },

  {
    id: "content",
    label: "Content & Video Editing",
    summary:
      "Professional video and digital content designed for campaigns, social platforms, YouTube and business communication.",
    result: "Stronger communication and recall",
    href: "/services/video-editing-services",
  },
];


/* =========================================================
   COMMON CLIENT PROBLEMS
========================================================= */

const PROBLEMS = [
  {
    title: "The website looks outdated",
    description:
      "The business has improved, but the website still represents an older version of the company and weakens first impressions.",
  },

  {
    title: "The website is slow",
    description:
      "Large images, unnecessary scripts, plugins or poor implementation create frustrating loading experiences.",
  },

  {
    title: "Visitors come, but enquiries do not",
    description:
      "The website may have traffic but lacks clear messaging, trust signals, service information or useful calls to action.",
  },

  {
    title: "Mobile experience is poor",
    description:
      "Layouts, navigation, forms or buttons work on desktop but become difficult to use on smaller screens.",
  },

  {
    title: "Google cannot understand the site well",
    description:
      "Weak page structure, generic service pages, poor internal linking and technical issues can limit search visibility.",
  },

  {
    title: "The website cannot support growth",
    description:
      "Adding services, locations, integrations or new functionality becomes difficult because the existing setup was never built to scale.",
  },
];


/* =========================================================
   DELIVERY EXPECTATIONS
========================================================= */

const TIMELINES = [
  {
    type: "Focused landing page",
    timeline: "3–7 working days",
    note: "When content, offer and direction are ready.",
  },

  {
    type: "Standard business website",
    timeline: "1–3 weeks",
    note: "Depending on page count, content and revision cycles.",
  },

  {
    type: "Custom business website",
    timeline: "3–8+ weeks",
    note: "For custom UI, integrations or larger information architecture.",
  },

  {
    type: "Web application / CRM / ERP",
    timeline: "Scope dependent",
    note: "Estimated after requirements, workflows and integrations are defined.",
  },
];


/* =========================================================
   PROCESS
========================================================= */

const PROCESS = [
  {
    number: "01",
    title: "Understand",
    text:
      "We start with the business, audience, current problems, required outcome and what the website or digital system actually needs to accomplish.",
  },

  {
    number: "02",
    title: "Plan",
    text:
      "We define page architecture, functionality, technology, content requirements, search considerations and the customer journey before unnecessary development begins.",
  },

  {
    number: "03",
    title: "Build",
    text:
      "Design and development move together with attention to responsiveness, performance, usability and maintainable implementation.",
  },

  {
    number: "04",
    title: "Validate",
    text:
      "We test important pages, forms, responsive layouts, content, navigation and technical behaviour before launch.",
  },

  {
    number: "05",
    title: "Launch & Improve",
    text:
      "After launch, SEO, analytics, campaigns, content and product improvements can continue based on actual business priorities.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const FAQS = [
  {
    question: "How quickly can MrTechies build a website?",
    answer:
      "Timelines depend on scope. A focused landing page may take around 3–7 working days when the content and direction are ready, while a standard business website commonly takes around 1–3 weeks. Custom websites and web applications require more planning and development time. We confirm the expected timeline after reviewing the actual scope.",
  },

  {
    question: "Can you redesign our existing website?",
    answer:
      "Yes. We first look at what is actually wrong with the existing website. If the underlying technology and structure are still suitable, a redesign may be enough. If performance, architecture, responsiveness or maintainability are fundamentally limited, a rebuild can be the better long-term option.",
  },

  {
    question: "Will a new website automatically rank on Google?",
    answer:
      "No legitimate web development company can guarantee that a new website will automatically rank at the top of Google. We can build strong SEO foundations such as crawlable structure, semantic headings, metadata support, internal linking, mobile usability, performance and sitemap configuration. Competitive rankings also depend on content quality, search intent, authority, competition and ongoing SEO work.",
  },

  {
    question: "Do you build SEO-friendly websites?",
    answer:
      "Yes. Website architecture and development can be prepared with search visibility in mind. Depending on the project, this can include semantic page structure, crawlable navigation, metadata, sitemap and robots configuration, internal linking, responsive layouts and performance considerations.",
  },

  {
    question: "Do you optimize websites for AI search and AEO?",
    answer:
      "We structure websites so important information is clear, crawlable and easy to understand. That includes useful direct answers, semantic sections, strong internal linking, accurate structured data where appropriate and substantial visible content. We do not rely on artificial AEO tricks or special AI-only markup.",
  },

  {
    question: "Can you connect our website to a CRM?",
    answer:
      "Yes. Website forms and customer workflows can be connected to CRM or custom business systems depending on the project. MrTechies also provides CRM and ERP solutions for businesses that need deeper workflow and lead-management functionality.",
  },

  {
    question: "Do you provide digital marketing after the website is launched?",
    answer:
      "Yes. MrTechies provides SEO and digital marketing services in addition to website design and development, which means businesses can continue improving visibility, content, landing pages and campaign performance after launch.",
  },

  {
    question: "What information do you need before starting a project?",
    answer:
      "Useful starting information includes what your business does, your target customer, current website if one exists, required pages, important functionality, example websites you like, expected launch window and the primary action you want visitors to take.",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function ServicesClient() {
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <main className="overflow-hidden bg-white text-gray-800">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 text-white">

        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">

          <div className="mx-auto max-w-5xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              <Sparkles size={15} />
              Websites • SEO • Apps • Digital Growth
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Digital services built to make your business{" "}
              <span className="text-brand-orange">
                easier to find, trust and choose.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              MrTechies combines web design, development, SEO, applications,
              business systems and digital marketing to solve practical
              business problems — not just deliver disconnected digital tasks.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/web-designing-services"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Web Design
                <ArrowRight size={18} />
              </Link>

            </div>


            {/* HERO TRUST STRIP */}

            <div className="mx-auto mt-14 grid max-w-4xl gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">

              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CircleCheckBig size={17} className="text-brand-orange" />
                Responsive-first
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CircleCheckBig size={17} className="text-brand-orange" />
                Search-aware architecture
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CircleCheckBig size={17} className="text-brand-orange" />
                Built around business goals
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT CLIENTS ARE ACTUALLY DEALING WITH
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              The Real Starting Point
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">
              Most clients are not looking for “a website.”
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              They are usually trying to fix a business problem that happens
              to involve a website, search engine, application or marketing
              system.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {PROBLEMS.map((problem, index) => (

              <article
                key={problem.title}
                className="group rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-brand-blue">
                  {problem.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {problem.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT CLIENTS ACTUALLY NEED
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            <div className="lg:sticky lg:top-28">

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                What Businesses Actually Need
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">
                A digital partner should improve more than appearance.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A modern website or digital system should help customers
                understand the business faster while making the company's own
                marketing and operations easier to manage.
              </p>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: Target,
                  title: "Clarity",
                  text:
                    "Customers should quickly understand what you do, who it is for and why they should continue.",
                },

                {
                  icon: Gauge,
                  title: "Speed",
                  text:
                    "Pages and interactions should feel responsive instead of making customers wait for unnecessary assets.",
                },

                {
                  icon: TrendingUp,
                  title: "Growth",
                  text:
                    "The website should support enquiries, campaigns, content, SEO and future service expansion.",
                },

                {
                  icon: ShieldCheck,
                  title: "Reliability",
                  text:
                    "Technology, forms, integrations and important business flows need to work consistently after launch.",
                },
              ].map(({ icon: Icon, title, text }) => (

                <div
                  key={title}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-7"
                >

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-bold text-brand-blue">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Our Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-bold text-brand-blue md:text-5xl">
              Services designed to work together.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Use one service when that is all you need, or connect several
              services when your website, marketing and internal systems need
              to support the same business objective.
            </p>

          </div>


          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">

            {SERVICES.map((service, index) => {

              const isFocused = focus === service.id;

              const isDimmed =
                Boolean(focus) &&
                focus !== service.id;

              const isLastItem =
                index === SERVICES.length - 1;

              return (

                <Link
                  key={service.id}
                  href={service.href}

                  onMouseEnter={() =>
                    setFocus(service.id)
                  }

                  onMouseLeave={() =>
                    setFocus(null)
                  }

                  onFocus={() =>
                    setFocus(service.id)
                  }

                  onBlur={() =>
                    setFocus(null)
                  }

                  className={`
                    group
                    relative
                    flex
                    min-h-[280px]
                    flex-col
                    rounded-3xl
                    border
                    p-7
                    text-left
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    sm:p-8

                    ${
                      isLastItem
                        ? "md:col-start-2"
                        : ""
                    }

                    ${
                      isFocused
                        ? "z-10 scale-[1.025] border-brand-blue bg-brand-blue text-white shadow-2xl"
                        : "border-gray-200 bg-white text-gray-900"
                    }

                    ${
                      isDimmed
                        ? "opacity-50"
                        : "opacity-100"
                    }
                  `}
                >

                  <span
                    className={`
                      mb-6
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      ${
                        isFocused
                          ? "text-brand-orange"
                          : "text-gray-400"
                      }
                    `}
                  >
                    Service {String(index + 1).padStart(2, "0")}
                  </span>


                  <h3
                    className={`
                      text-xl
                      font-bold
                      transition-colors
                      ${
                        isFocused
                          ? "text-white"
                          : "text-brand-blue"
                      }
                    `}
                  >
                    {service.label}
                  </h3>


                  <p
                    className={`
                      mt-4
                      text-sm
                      leading-7
                      ${
                        isFocused
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                    `}
                  >
                    {service.summary}
                  </p>


                  <div className="mt-auto pt-7">

                    <p
                      className={`
                        mb-5
                        text-sm
                        font-semibold
                        ${
                          isFocused
                            ? "text-white"
                            : "text-gray-800"
                        }
                      `}
                    >
                      {service.result}
                    </p>


                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        transition-all
                        ${
                          isFocused
                            ? "text-brand-orange"
                            : "text-brand-orange"
                        }
                      `}
                    >
                      Explore service

                      <ArrowRight
                        size={17}
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
          QUALITY VS SPEED
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Quality + Delivery Speed
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">
                Fast delivery is useful only when the result is still worth launching.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Businesses often need websites quickly — for a campaign, launch,
                new service, new office or sales requirement. We design the
                project around the shortest realistic path to launch without
                pretending that every website has the same level of complexity.
              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Agree on scope before development expands.",
                  "Collect content and brand assets early.",
                  "Use reusable systems where customization adds no value.",
                  "Prioritize business-critical pages first.",
                  "Test responsiveness and functionality before launch.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange">
                      <Check size={14} />
                    </div>

                    <p className="leading-7 text-gray-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50">

              <div className="border-b border-gray-200 px-7 py-6">

                <div className="flex items-center gap-3">

                  <Clock3
                    size={21}
                    className="text-brand-orange"
                  />

                  <h3 className="text-xl font-bold text-brand-blue">
                    Typical planning windows
                  </h3>

                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Final timelines are confirmed after scope review.
                </p>

              </div>


              <div className="divide-y divide-gray-200">

                {TIMELINES.map((item) => (

                  <div
                    key={item.type}
                    className="grid gap-2 bg-white px-7 py-6 transition hover:bg-orange-50/40 sm:grid-cols-[1fr_auto]"
                  >

                    <div>

                      <p className="font-semibold text-brand-blue">
                        {item.type}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {item.note}
                      </p>

                    </div>

                    <p className="font-bold text-brand-orange">
                      {item.timeline}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OLD WEBSITE / REDESIGN
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto max-w-4xl">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Already Have a Website?
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">
              We do not recommend a rebuild just because your website is old.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The first question should be whether the current website can
              reasonably be improved. A redesign is often enough when the
              underlying technology is healthy. A rebuild makes more sense when
              the existing architecture prevents performance, search, mobile
              usability or future functionality from improving.
            </p>


            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-gray-200 bg-white p-7">

                <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                  Improve the current site
                </p>

                <h3 className="mt-3 text-2xl font-bold text-brand-blue">
                  Redesign
                </h3>

                <ul className="mt-6 space-y-4">

                  {[
                    "Technology is still maintainable",
                    "Pages and URLs are broadly correct",
                    "Main issues are design or UX",
                    "Content needs improvement",
                    "Performance can be repaired",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-gray-700"
                    >
                      <Check
                        size={17}
                        className="mt-1 shrink-0 text-brand-orange"
                      />
                      {item}
                    </li>

                  ))}

                </ul>

              </div>


              <div className="rounded-3xl bg-brand-blue p-7 text-white">

                <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                  Start from a stronger foundation
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Rebuild
                </h3>

                <ul className="mt-6 space-y-4">

                  {[
                    "Existing code is difficult to maintain",
                    "Mobile experience is fundamentally broken",
                    "Architecture limits SEO growth",
                    "New functionality needs major structural changes",
                    "Performance problems are deeply embedded",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-gray-300"
                    >
                      <Check
                        size={17}
                        className="mt-1 shrink-0 text-brand-orange"
                      />
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>


            <div className="mt-8">

              <Link
                href="/services/web-designing-services"
                className="inline-flex items-center gap-2 font-semibold text-brand-orange"
              >
                Explore website design and redesign
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SEO + AI SEARCH / AEO
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white">

        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-brand-orange/15 blur-3xl"
        />


        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                SEO + AI Search Readiness
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Build the website so search systems can understand it — and customers can too.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                We do not treat SEO or AEO as a layer of keywords added after
                development. The website needs clear architecture, useful
                visible information and technically accessible pages first.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                No development company can legitimately guarantee that a new
                website will immediately rank first on Google. Strong technical
                foundations improve the starting point; sustained visibility
                also depends on competition, content, relevance, authority and
                ongoing SEO work.
              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">

                <Search
                  className="text-brand-orange"
                  size={26}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Search-ready foundation
                </h3>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-300">

                  {[
                    "Logical page architecture",
                    "Semantic heading structure",
                    "Crawlable internal links",
                    "Metadata support",
                    "Canonical handling",
                    "XML sitemap support",
                    "Responsive layouts",
                    "Performance considerations",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check
                        size={15}
                        className="mt-1 shrink-0 text-brand-orange"
                      />
                      {item}
                    </li>
                  ))}

                </ul>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">

                <Code2
                  className="text-brand-orange"
                  size={26}
                />

                <h3 className="mt-5 text-xl font-bold">
                  AI-search-friendly content
                </h3>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-300">

                  {[
                    "Direct answers to real customer questions",
                    "Important information in visible text",
                    "Clear service and entity context",
                    "Helpful comparisons and explanations",
                    "Accurate structured data where appropriate",
                    "Strong internal topic relationships",
                    "Original business-specific information",
                    "No artificial AI-only content tricks",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check
                        size={15}
                        className="mt-1 shrink-0 text-brand-orange"
                      />
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </div>


          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/services/seo-services"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore SEO Services
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services/web-development-services"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Web Development
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              How We Work
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">
              Less guessing. More clarity before development.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Good execution becomes easier when scope, users, functionality
              and business goals are clear before the team starts building.
            </p>

          </div>


          <div className="grid gap-5 lg:grid-cols-5">

            {PROCESS.map((step) => (

              <article
                key={step.number}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
              >

                <span className="text-sm font-black text-brand-orange">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-brand-blue">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST / E-E-A-T
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Trust Before Sales Claims
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">
                What we believe a client should know before saying yes.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Digital services involve technical decisions clients may not
                make every day. Our job is to make the important trade-offs
                understandable instead of hiding them behind jargon.
              </p>

            </div>


            <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm md:p-9">

              <div className="space-y-6">

                {[
                  {
                    title: "What is included",
                    text:
                      "Scope, important deliverables and major responsibilities should be clear before work begins.",
                  },

                  {
                    title: "Why a technology is being recommended",
                    text:
                      "WordPress, Next.js, React or custom development should be selected because it fits the requirement — not because it is the only tool available.",
                  },

                  {
                    title: "What can realistically be delivered quickly",
                    text:
                      "We prefer a realistic launch window over promising every project on the same arbitrary deadline.",
                  },

                  {
                    title: "What SEO can and cannot guarantee",
                    text:
                      "We can improve the technical and content foundation. We will not promise an automatic #1 Google position.",
                  },

                  {
                    title: "What happens after launch",
                    text:
                      "A website should remain usable, measurable and capable of being improved instead of becoming an abandoned one-time project.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="flex gap-4"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                      <ShieldCheck
                        size={18}
                        className="text-brand-orange"
                      />
                    </div>

                    <div>

                      <h3 className="font-bold text-brand-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHEAP VS GROWTH-READY
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Compare the Actual Scope
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">
              A cheaper website and a better website are not always the same project.
            </h2>

          </div>


          <div className="overflow-x-auto rounded-3xl border border-gray-200">

            <table className="w-full min-w-[800px] border-collapse text-left">

              <thead className="bg-brand-blue text-white">

                <tr>
                  <th className="px-6 py-5">
                    Area
                  </th>

                  <th className="px-6 py-5">
                    Basic Delivery
                  </th>

                  <th className="px-6 py-5">
                    Growth-Ready Delivery
                  </th>
                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">

                {[
                  [
                    "Design",
                    "Template selected mainly for appearance",
                    "Layouts planned around brand, content and user journey",
                  ],

                  [
                    "Mobile",
                    "Desktop layout compressed for smaller screens",
                    "Responsive behaviour considered throughout design and development",
                  ],

                  [
                    "SEO",
                    "SEO plugin or basic metadata",
                    "Architecture, crawlability, headings, links and technical setup considered",
                  ],

                  [
                    "Performance",
                    "Optimized only if obvious problems appear",
                    "Images, code and third-party assets considered during development",
                  ],

                  [
                    "Conversion",
                    "Contact button added",
                    "Information and calls to action designed around customer decisions",
                  ],

                  [
                    "Growth",
                    "Website completed and left unchanged",
                    "Architecture supports future pages, campaigns, content and integrations",
                  ],
                ].map(([area, basic, better], index) => (

                  <tr
                    key={area}
                    className={
                      index % 2
                        ? "bg-gray-50"
                        : "bg-white"
                    }
                  >

                    <td className="px-6 py-5 font-bold text-brand-blue">
                      {area}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex gap-2">

                        <X
                          size={17}
                          className="mt-1 shrink-0 text-gray-400"
                        />

                        <span>{basic}</span>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex gap-2">

                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-brand-orange"
                        />

                        <span>{better}</span>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGH INTENT ROUTING
      ====================================================== */}

      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10">

            <div className="grid gap-8 md:grid-cols-2 md:items-center">

              <div>

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Looking for Website Services in Hyderabad?
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue">
                  Start with the part of your website that needs the most improvement.
                </h2>

              </div>


              <div className="space-y-3">

                <Link
                  href="/services/web-designing-services"
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 font-semibold text-brand-blue transition hover:border-orange-100 hover:bg-orange-50 hover:text-brand-orange"
                >
                  Web Designing Services in Hyderabad
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/web-development-services"
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 font-semibold text-brand-blue transition hover:border-orange-100 hover:bg-orange-50 hover:text-brand-orange"
                >
                  Web Development Services in Hyderabad
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/seo-services"
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 font-semibold text-brand-blue transition hover:border-orange-100 hover:bg-orange-50 hover:text-brand-orange"
                >
                  SEO Services in Hyderabad
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ — VISIBLE CONTENT
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-5 sm:px-6">

          <div className="mb-12 text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">
              Before you start a digital project
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Straight answers to questions businesses commonly ask before
              choosing a website, SEO or development partner.
            </p>

          </div>


          <div className="space-y-4">

            {FAQS.map((faq, index) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5">

                  <h3 className="font-bold leading-6 text-brand-blue">
                    {faq.question}
                  </h3>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange transition-transform group-open:rotate-45">
                    +
                  </span>

                </summary>

                <div className="border-t border-gray-100 px-6 py-5">

                  <p className="leading-8 text-gray-600">
                    {faq.answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-r from-brand-blue to-slate-950 py-24 text-white">

        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
        />


        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">

          <span className="font-semibold uppercase tracking-widest text-brand-orange">
            Start With the Problem
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Tell us what is not working. We can decide what actually needs to be built.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            New website, redesign, search visibility, application,
            CRM or digital campaigns — the right solution begins with
            understanding the outcome your business needs.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View Our Work
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}