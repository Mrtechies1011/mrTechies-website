import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LayoutTemplate,
  Link2,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";


/* =========================================================
   CONSTANTS
========================================================= */

const BASE_URL = "https://mrtechies.com";

const PAGE_URL =
  `${BASE_URL}/services/web-designing-services`;


/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "Web Designing Services in Hyderabad | Website Design Company | MrTechies",

  description:
    "Professional web designing services in Hyderabad from MrTechies. Responsive business websites, UI/UX, landing pages, ecommerce design, SEO-ready architecture, redesigns and fast delivery.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Professional Web Designing Services in Hyderabad | MrTechies",

    description:
      "Build a responsive, conversion-focused and SEO-ready website with MrTechies. Web design, UI/UX, redesign, landing pages and business websites for Hyderabad and India.",

    url: PAGE_URL,

    siteName: "MrTechies",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary",

    title:
      "Web Designing Services in Hyderabad | MrTechies",

    description:
      "Responsive web design, UI/UX, business websites, landing pages, ecommerce interfaces, SEO-ready architecture and fast delivery.",
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
   WEBSITE DESIGN CATEGORIES
========================================================= */

const webDesignCategories = [
  {
    title: "Corporate Websites",

    description:
      "Professional business websites designed to communicate credibility, expertise, services and clear reasons for customers to trust your company.",

    imageSrc:
      "/services/design-corporate.jpg",

    slug:
      "/services/web-designing-services/corporate",

    icon: Layers3,

    audience:
      "Companies, B2B businesses, professional service firms and established brands",
  },

  {
    title: "Startup & Landing Pages",

    description:
      "Focused landing pages and startup websites that explain the offer quickly, support campaigns and guide visitors toward a measurable action.",

    imageSrc:
      "/services/design-landing.jpg",

    slug:
      "/services/web-designing-services/startups",

    icon: Target,

    audience:
      "Startups, SaaS companies, campaigns, product launches and lead-generation teams",
  },

  {
    title: "E-commerce UI",

    description:
      "Customer-friendly ecommerce interfaces designed around product discovery, trust, mobile shopping and a clear path toward checkout.",

    imageSrc:
      "/services/design-ecom.jpg",

    slug:
      "/services/web-designing-services/ecommerce",

    icon: ShoppingCart,

    audience:
      "D2C brands, retailers, product businesses and ecommerce companies",
  },

  {
    title: "Personal & Portfolio Brands",

    description:
      "Clean portfolio websites for consultants, creators and professionals who need their work, expertise and personal brand to look credible online.",

    imageSrc:
      "/services/design-portfolio.png",

    slug:
      "/services/web-designing-services/portfolio",

    icon: Users,

    audience:
      "Consultants, freelancers, creators, founders and professionals",
  },
];


/* =========================================================
   CLIENT PROBLEMS
========================================================= */

const websiteProblems = [
  {
    title:
      "Our website looks outdated",

    description:
      "The business has improved, but the website still looks like an older version of the company and weakens the first impression customers receive.",
  },

  {
    title:
      "Our site gets visitors but not enquiries",

    description:
      "Visitors reach the website, but messaging, page hierarchy, proof or calls to action do not give them enough reason to contact the business.",
  },

  {
    title:
      "Our mobile website is difficult to use",

    description:
      "Desktop layouts may look acceptable while navigation, typography, forms and buttons become frustrating on smartphones.",
  },

  {
    title:
      "Our website is too slow",

    description:
      "Oversized assets, unnecessary scripts, poor development or heavy themes can create a website that feels slow even when the visual design looks attractive.",
  },

  {
    title:
      "Customers do not understand what we offer",

    description:
      "A beautiful design cannot compensate for unclear information architecture. Services, benefits, audience and next steps need to be understandable.",
  },

  {
    title:
      "Our website does not support SEO",

    description:
      "Generic pages, weak internal linking, confusing hierarchy and technical limitations can make future search optimization unnecessarily difficult.",
  },
];


/* =========================================================
   INCLUDED SEO WORK
========================================================= */

const seoFoundation = [
  {
    title: "Internal SEO Structure",

    description:
      "Logical site architecture, crawlable internal links, clean service-page relationships, descriptive navigation and contextual links between important pages.",
  },

  {
    title: "On-Page SEO Foundation",

    description:
      "Page titles, meta descriptions, semantic headings, useful page copy, descriptive image alt text, keyword-intent alignment and properly structured page sections.",
  },

  {
    title: "Technical Search Setup",

    description:
      "Canonical handling, indexability review, XML sitemap support, robots configuration, mobile usability and search-friendly rendering considerations.",
  },

  {
    title: "SERP Appearance Preparation",

    description:
      "Clear title and description signals, useful page headings, breadcrumb structure and content designed to give search engines strong material for relevant snippets.",
  },

  {
    title: "AEO-Friendly Content Structure",

    description:
      "Direct answers, descriptive sections, question-led headings, comparison blocks and entity-rich context so important information is easier for users and machine systems to interpret.",
  },

  {
    title: "Off-Page & Backlink Foundation",

    description:
      "When part of the agreed SEO scope, we can support citation, listing and backlink planning around relevant and legitimate opportunities rather than spam-based link volume.",
  },
];


/* =========================================================
   DESIGN PRINCIPLES
========================================================= */

const designPrinciples = [
  {
    icon: MonitorSmartphone,

    title: "Responsive by Default",

    description:
      "Mobile is not treated as a smaller desktop page. Layouts, typography, navigation and calls to action are considered across screen sizes.",
  },

  {
    icon: Gauge,

    title: "Performance Conscious",

    description:
      "We avoid adding visual effects simply because they are available. Images, motion and interface decisions should justify their performance cost.",
  },

  {
    icon: Search,

    title: "Search-Aware Architecture",

    description:
      "Important services and topics deserve crawlable pages and meaningful internal relationships instead of being hidden inside one generic page.",
  },

  {
    icon: Target,

    title: "Conversion Focused",

    description:
      "Website visitors need a reason to move forward. We design page journeys around enquiries, bookings, calls, purchases or other business actions.",
  },

  {
    icon: ShieldCheck,

    title: "Trust Focused",

    description:
      "Testimonials, clear service explanations, company information, proof and honest expectations help reduce uncertainty for potential customers.",
  },

  {
    icon: Code2,

    title: "Development Ready",

    description:
      "Design decisions are made with real implementation in mind so developers are not forced to rebuild impractical layouts later.",
  },
];


/* =========================================================
   PROCESS
========================================================= */

const designProcess = [
  {
    number: "01",

    title: "Business Discovery",

    description:
      "We first understand what your company sells, who needs it, what your current website is failing to do and what result the new website needs to produce.",
  },

  {
    number: "02",

    title: "SEO & Competitor Context",

    description:
      "When organic growth matters, we consider service intent, relevant competitors, important pages, search behaviour and how the website should support future SEO.",
  },

  {
    number: "03",

    title: "Information Architecture",

    description:
      "We determine pages, navigation, service hierarchy, important content and how users should move through the site before visual styling becomes the focus.",
  },

  {
    number: "04",

    title: "Wireframe & UX Direction",

    description:
      "The important information, CTAs, proof and content sections are positioned so the page makes sense before detailed visual styling is applied.",
  },

  {
    number: "05",

    title: "Visual Design",

    description:
      "Typography, spacing, colour, imagery, components and interaction patterns are developed around your brand and the intended user experience.",
  },

  {
    number: "06",

    title: "Responsive Development",

    description:
      "Approved design is implemented across devices using an appropriate frontend and website architecture.",
  },

  {
    number: "07",

    title: "SEO & Quality Setup",

    description:
      "Important metadata, semantic structure, internal linking, crawl controls, responsive behaviour, forms and key page functions are checked.",
  },

  {
    number: "08",

    title: "Launch & Growth",

    description:
      "Once launched, the site can continue into SEO, content, analytics, digital marketing, backlink development and conversion improvement based on business priorities.",
  },
];


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question:
      "What web designing services does MrTechies provide in Hyderabad?",

    answer:
      "MrTechies provides responsive business website design, corporate websites, startup and landing-page design, ecommerce interfaces, portfolio websites, website redesign, UI/UX planning, SEO-ready information architecture and website development support.",
  },

  {
    question:
      "How quickly can MrTechies design and deliver a website?",

    answer:
      "Delivery depends on scope, content readiness, functionality and approval speed. Focused landing pages may be delivered within a few working days when requirements are clear, while standard business websites generally require more time. Rush delivery can be planned for suitable projects, but we confirm the timeline after reviewing the actual requirement.",
  },

  {
    question:
      "Does web designing include SEO at MrTechies?",

    answer:
      "Our web design process can include important SEO foundations such as search-friendly page architecture, semantic headings, internal linking, metadata preparation, responsive design, sitemap and crawlability considerations. Ongoing competitive SEO, content growth and backlink campaigns can continue through our dedicated SEO services.",
  },

  {
    question:
      "Do you provide on-page SEO with website design?",

    answer:
      "Yes, when included in the project scope we prepare pages with useful heading structure, titles, descriptions, keyword-intent alignment, internal links, image alt text and search-friendly content sections. Deeper content and competitive optimization can be expanded through an ongoing SEO campaign.",
  },

  {
    question:
      "Do you provide backlinks with a web design project?",

    answer:
      "Backlink work is treated carefully because link quality matters more than simply creating large numbers of links. Where off-page SEO is part of the agreed scope, MrTechies can support citation, business-listing and relevant backlink planning. We do not use spam link schemes or promise artificial backlink quantities.",
  },

  {
    question:
      "Can you guarantee first-page Google rankings after redesigning my website?",

    answer:
      "No responsible web design or SEO company can guarantee a specific Google ranking. We can build strong technical, content and on-page foundations and continue optimization, but rankings also depend on competition, relevance, authority, content quality and search engine systems.",
  },

  {
    question:
      "Can MrTechies redesign my existing website?",

    answer:
      "Yes. We can evaluate whether your current website should be visually redesigned, technically improved or completely rebuilt. We generally recommend a full rebuild only when the existing technology or architecture significantly limits performance, usability, SEO or future development.",
  },

  {
    question:
      "Do you design websites for businesses outside Hyderabad?",

    answer:
      "Yes. MrTechies serves businesses in Hyderabad as well as clients across Telangana, Andhra Pradesh and other parts of India. Website design and development can be managed remotely through structured communication and online review workflows.",
  },

  {
    question:
      "What do you need from me before starting a website?",

    answer:
      "Useful starting information includes your business services, target customers, existing website if available, logo and brand assets, competitor or reference sites, required pages, expected functionality and the main action you want visitors to take.",
  },

  {
    question:
      "Can MrTechies handle development after designing the website?",

    answer:
      "Yes. MrTechies provides web development in addition to web design, allowing the approved UI/UX and information architecture to move into responsive implementation without handing the project to an unrelated development provider.",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function WebDesigningHubPage() {
  return (
    <main className="overflow-hidden bg-white text-gray-800">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 text-white">

        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-orange/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-6 md:pb-28 md:pt-36">

          {/* BREADCRUMB */}

          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-400"
          >
            <Link
              href="/"
              className="transition hover:text-brand-orange"
            >
              Home
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <Link
              href="/services"
              className="transition hover:text-brand-orange"
            >
              Services
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <span className="text-gray-200">
              Web Designing
            </span>
          </nav>


          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">

                <WandSparkles size={15} />

                Web Designing Services in Hyderabad

              </span>


              <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

                Websites designed to help customers{" "}

                <span className="text-brand-orange">
                  understand, trust and choose your business.
                </span>

              </h1>


              <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">

                MrTechies provides professional web designing services
                in Hyderabad for startups, growing businesses,
                established companies, ecommerce brands and professionals
                that need more than an attractive homepage.

              </p>


              <p className="mt-5 max-w-3xl leading-8 text-gray-400">

                We connect UI/UX, responsive design, website development,
                internal SEO structure, on-page optimization and
                conversion thinking so your website is prepared for
                customers, search engines and future digital growth.

              </p>


              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Discuss Your Website

                  <ArrowRight size={18} />
                </Link>


                <Link
                  href="/services/web-development-services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Web Development

                  <ArrowRight size={18} />
                </Link>

              </div>


              <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div className="flex items-center gap-3 text-sm text-gray-300">

                  <Zap
                    size={18}
                    className="text-brand-orange"
                  />

                  Fast delivery options

                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">

                  <Search
                    size={18}
                    className="text-brand-orange"
                  />

                  SEO-ready structure

                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">

                  <MonitorSmartphone
                    size={18}
                    className="text-brand-orange"
                  />

                  Responsive by default

                </div>

              </div>

            </div>


            {/* HERO SIDE CARD */}

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                What we design around
              </p>


              <div className="mt-7 space-y-5">

                {[
                  [
                    "Your customers",
                    "What they need to understand before contacting or purchasing.",
                  ],

                  [
                    "Your business objective",
                    "Enquiries, sales, appointments, registrations or product adoption.",
                  ],

                  [
                    "Your search opportunity",
                    "Pages and content organized around relevant topics and customer intent.",
                  ],

                  [
                    "Your growth plan",
                    "An architecture that can support new services, locations, content and campaigns.",
                  ],
                ].map(([title, description]) => (

                  <div
                    key={title}
                    className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >

                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10">

                      <Check
                        size={16}
                        className="text-brand-orange"
                      />

                    </div>


                    <div>

                      <h2 className="font-semibold text-white">
                        {title}
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-gray-400">
                        {description}
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
          QUICK ANSWER / AEO
      ====================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-5xl px-5 sm:px-6">

          <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-orange-50">

            <div className="bg-brand-orange px-7 py-4 text-white">

              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Quick Answer
              </p>

            </div>


            <div className="p-7 md:p-9">

              <h2 className="text-2xl font-bold leading-tight text-brand-blue md:text-3xl">
                What should a professional web designing service actually include?
              </h2>


              <p className="mt-5 text-lg leading-8 text-gray-700">

                Professional web designing should include more than colour,
                typography and visual effects. A strong service considers
                information architecture, mobile responsiveness, UI/UX,
                customer journeys, conversion points, development feasibility,
                page performance and search-friendly structure.

              </p>


              <p className="mt-4 leading-8 text-gray-600">

                At MrTechies, website projects can also connect with web
                development, on-page SEO, internal linking, technical search
                setup, SERP preparation and ongoing SEO support so the finished
                website is prepared for growth rather than simply launched and
                forgotten.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO SHOULD CONTACT US
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Who We Work With
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                Who should reach out to MrTechies for web design?

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600">

                You do not need to know whether your business requires
                WordPress, Next.js, React or another technology before
                contacting us. Start with the business problem and the
                outcome you need.

              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {[
                {
                  title: "New Businesses",

                  text:
                    "You need a professional digital presence from the beginning and want customers to understand the business without relying only on social media.",
                },

                {
                  title: "Growing Businesses",

                  text:
                    "Your existing website no longer reflects the quality, services or scale your company has reached.",
                },

                {
                  title: "Startups",

                  text:
                    "You need to explain a product, validate an idea, launch quickly or build landing pages around acquisition campaigns.",
                },

                {
                  title: "Local Businesses",

                  text:
                    "You want people searching in Hyderabad or other service areas to understand your services and contact you easily.",
                },

                {
                  title: "E-commerce Brands",

                  text:
                    "You need clearer product journeys, stronger mobile shopping interfaces and a website designed to support buying decisions.",
                },

                {
                  title: "Professional Brands",

                  text:
                    "You are a consultant, creator, founder or specialist who needs a website that presents expertise and builds credibility.",
                },
              ].map((item) => (

                <article
                  key={item.title}
                  className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
                >

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">

                    <Users
                      size={20}
                      className="text-brand-orange"
                    />

                  </div>


                  <h3 className="text-xl font-bold text-brand-blue">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLIENT PROBLEMS
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Why Businesses Come to Us
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              Most website projects begin with a problem,
              not a design request.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              Clients often reach us after realizing that their existing
              website is not helping customers understand the business,
              find information or take action.

            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {websiteProblems.map(
              (problem, index) => (

                <article
                  key={problem.title}
                  className="group rounded-3xl border border-gray-100 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >

                  <span className="text-sm font-black text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <h3 className="mt-5 text-xl font-bold text-brand-blue">
                    {problem.title}
                  </h3>


                  <p className="mt-3 leading-7 text-gray-600">
                    {problem.description}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIALIZED DESIGN SERVICES
      ====================================================== */}

      <section className="border-y border-gray-100 bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Website Design Solutions
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              Different businesses need different website structures.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              We do not believe a corporate website, ecommerce store,
              startup landing page and personal portfolio should all be
              designed from the same generic template.

            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {webDesignCategories.map(
              (category) => {

                const Icon = category.icon;

                return (

                  <Link
                    key={category.title}
                    href={category.slug}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-xl"
                  >

                    <div className="relative h-52 overflow-hidden bg-gray-100">

                      <Image
                        src={category.imageSrc}
                        alt={`${category.title} web designing services by MrTechies`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                    </div>


                    <div className="flex flex-1 flex-col p-6">

                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">

                        <Icon
                          size={21}
                          className="text-brand-orange"
                        />

                      </div>


                      <h3 className="text-xl font-bold text-brand-blue transition group-hover:text-brand-orange">
                        {category.title}
                      </h3>


                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {category.description}
                      </p>


                      <p className="mt-5 border-t border-gray-100 pt-5 text-xs leading-5 text-gray-500">

                        <strong className="text-gray-700">
                          Best for:
                        </strong>{" "}

                        {category.audience}

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
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE ARE BEST AT
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Our Design Priorities
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              Where we put the most attention.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              We are strongest when a business needs design,
              development and digital growth to work together rather
              than being handled as unrelated deliverables.

            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {designPrinciples.map(
              ({
                icon: Icon,
                title,
                description,
              }) => (

                <article
                  key={title}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-7"
                >

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">

                    <Icon size={22} />

                  </div>


                  <h3 className="text-xl font-bold text-brand-blue">
                    {title}
                  </h3>


                  <p className="mt-3 leading-7 text-gray-600">
                    {description}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAST DELIVERY
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Need It Fast?
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                We can work to urgent launch timelines when the scope allows it.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600">

                Sometimes a website is tied to a product launch,
                advertising campaign, investor meeting, new office,
                course launch or sales deadline. Waiting several months
                is not always practical.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                We can prioritize fast delivery by defining the most
                important pages first, collecting content early and
                reducing unnecessary decision cycles. Speed works best
                when requirements, content and approvals are available
                quickly from both sides.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                We do not use “fast” as an excuse to ignore responsive
                testing, page structure or fundamental quality. The
                realistic delivery window is confirmed after we understand
                your project.

              </p>

            </div>


            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white">

              <div className="border-b border-gray-100 p-7">

                <Clock3
                  size={26}
                  className="text-brand-orange"
                />


                <h3 className="mt-4 text-2xl font-bold text-brand-blue">
                  Typical design & build windows
                </h3>


                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Indicative timelines when requirements and content are ready.
                </p>

              </div>


              <div className="divide-y divide-gray-100">

                {[
                  [
                    "Focused landing page",
                    "3–7 working days",
                  ],

                  [
                    "Small business website",
                    "7–15 working days",
                  ],

                  [
                    "Custom corporate website",
                    "3–6+ weeks",
                  ],

                  [
                    "Complex web platform",
                    "Scope dependent",
                  ],
                ].map(([type, time]) => (

                  <div
                    key={type}
                    className="flex items-center justify-between gap-4 p-6"
                  >

                    <span className="font-medium text-gray-700">
                      {type}
                    </span>


                    <span className="font-bold text-brand-orange">
                      {time}
                    </span>

                  </div>

                ))}

              </div>


              <div className="bg-orange-50 p-6">

                <p className="text-sm leading-6 text-gray-700">

                  <strong className="text-brand-blue">
                    Urgent project?
                  </strong>{" "}

                  Share your required launch date with us before
                  development begins so we can tell you what is realistic.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SEO / AEO / SERP
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white">

        <div
          aria-hidden="true"
          className="absolute -right-36 top-0 h-[480px] w-[480px] rounded-full bg-brand-orange/15 blur-3xl"
        />


        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                SEO Built Into the Foundation
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">

                We do not want SEO to become an emergency after the website is launched.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-300">

                Search performance depends on far more than design,
                but web design and development decisions can either
                support SEO or make future optimization unnecessarily
                difficult.

              </p>


              <p className="mt-5 leading-8 text-gray-400">

                We therefore consider page structure, headings,
                crawlability, internal links, mobile usability,
                content hierarchy and search appearance while the site
                is being created.

              </p>


              <div className="mt-8">

                <Link
                  href="/services/seo-services"
                  className="inline-flex items-center gap-2 font-semibold text-brand-orange"
                >
                  Explore complete SEO services

                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {seoFoundation.map(
                (item, index) => {

                  const icons = [
                    Link2,
                    Search,
                    Code2,
                    BarChart3,
                    Sparkles,
                    TrendingUp,
                  ];

                  const Icon =
                    icons[index] ?? Search;

                  return (

                    <article
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                    >

                      <Icon
                        size={24}
                        className="text-brand-orange"
                      />


                      <h3 className="mt-5 text-xl font-bold">
                        {item.title}
                      </h3>


                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        {item.description}
                      </p>

                    </article>

                  );
                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTERNAL SEO EXPLAINER
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <div className="mx-auto max-w-4xl">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Internal SEO
            </span>


            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

              What does internal SEO mean when we build your website?

            </h2>


            <p className="mt-6 text-lg leading-8 text-gray-600">

              Internal SEO is the way pages within your own website are
              organized and connected so users and search engines can
              understand which topics and services are important.

            </p>


            <p className="mt-5 leading-8 text-gray-600">

              A common problem with older business websites is that every
              service is placed on a single page. A customer searching for
              one specific service receives very little information and
              search engines have limited context about the individual
              offering.

            </p>


            <p className="mt-5 leading-8 text-gray-600">

              When appropriate, we design stronger service architecture:
              dedicated service pages, understandable navigation,
              contextual links, breadcrumb relationships, supporting blog
              content and clear paths back to conversion pages.

            </p>


            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Descriptive service-page URLs",
                "Logical service hierarchy",
                "Contextual internal links",
                "Breadcrumb relationships",
                "Descriptive anchor text",
                "Relevant blog-to-service linking",
                "Avoiding isolated important pages",
                "Clear primary navigation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4"
                >

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-brand-orange"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ON PAGE SEO
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div className="rounded-[2rem] bg-brand-blue p-8 text-white md:p-10">

              <Search
                size={30}
                className="text-brand-orange"
              />


              <h2 className="mt-6 text-3xl font-bold">
                On-page SEO preparation
              </h2>


              <p className="mt-5 leading-8 text-gray-300">

                Where included in the project scope, important pages are
                prepared with search-friendly on-page signals rather than
                waiting until months after launch.

              </p>


              <div className="mt-8 grid gap-3">

                {[
                  "SEO-focused page titles",
                  "Useful meta descriptions",
                  "One clear page H1",
                  "Logical H2 and H3 hierarchy",
                  "Descriptive image alt text",
                  "Service-intent content",
                  "Internal contextual links",
                  "Canonical configuration",
                  "Search-friendly URLs",
                  "Local relevance where appropriate",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-gray-200"
                  >

                    <Check
                      size={15}
                      className="text-brand-orange"
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>


            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Search Intent Before Keyword Stuffing
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                Pages should answer what customers are actually searching for.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600">

                Repeating “best web designing company in Hyderabad”
                dozens of times does not make a weak page useful.
                Customers searching for web design usually want practical
                answers.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                They want to know what type of website they need,
                whether you can redesign an existing site, what technology
                will be used, how long development takes, whether SEO is
                considered, what happens after launch and whether the team
                can deliver within their business timeline.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                That is the type of information we prefer to build into
                a website: content useful enough for a customer to make
                a decision while still giving search systems clear
                context about each page.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERP / AEO
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Search Appearance & AEO
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              We prepare pages to communicate clearly in search,
              not just on the website.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              Search engines ultimately decide how results are displayed,
              but website owners can provide much stronger signals by
              structuring pages properly.

            </p>

          </div>


          <div className="grid gap-6 lg:grid-cols-3">

            <article className="rounded-3xl border border-gray-100 bg-gray-50 p-7">

              <Globe2
                size={26}
                className="text-brand-orange"
              />


              <h3 className="mt-5 text-xl font-bold text-brand-blue">
                SERP Preparation
              </h3>


              <p className="mt-3 leading-7 text-gray-600">

                Useful page titles, descriptions, heading context,
                breadcrumb relationships and clear page content provide
                search systems better material for result presentation.

              </p>

            </article>


            <article className="rounded-3xl border border-gray-100 bg-gray-50 p-7">

              <Sparkles
                size={26}
                className="text-brand-orange"
              />


              <h3 className="mt-5 text-xl font-bold text-brand-blue">
                Answer-Focused Content
              </h3>


              <p className="mt-3 leading-7 text-gray-600">

                Important questions can be answered directly before
                supporting detail. This improves usability and creates
                clear passages that search and AI systems can interpret.

              </p>

            </article>


            <article className="rounded-3xl border border-gray-100 bg-gray-50 p-7">

              <LayoutTemplate
                size={26}
                className="text-brand-orange"
              />


              <h3 className="mt-5 text-xl font-bold text-brand-blue">
                Structured Content
              </h3>


              <p className="mt-3 leading-7 text-gray-600">

                Headings, comparisons, lists, service entities and
                relevant structured data help communicate how information
                on the page relates together.

              </p>

            </article>

          </div>


          <div className="mt-10 rounded-3xl border-l-4 border-brand-orange bg-orange-50 p-7">

            <p className="leading-8 text-gray-700">

              <strong className="text-brand-blue">
                Important:
              </strong>{" "}

              No web design agency can control exactly which title,
              snippet, sitelinks, featured answer or AI citation a search
              engine chooses to show. We optimize the signals and the
              content; the final presentation is determined by the search
              platform.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACKLINKS
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Backlinks & Off-Page SEO
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                We focus on useful link signals, not bulk backlink numbers.

              </h2>

            </div>


            <div>

              <p className="text-lg leading-8 text-gray-600">

                Backlinks can contribute to how search engines discover
                and evaluate websites, but backlink quality and relevance
                matter far more than simply creating thousands of links.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                When off-page SEO is part of your project or ongoing SEO
                package, work may include relevant business citations,
                legitimate listings, outreach planning, content assets
                worth referencing and identification of useful link
                opportunities.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                We do not position automated spam links, purchased
                low-quality networks or unrealistic backlink counts as a
                safe shortcut to ranking. If your growth plan requires an
                ongoing off-page campaign, it is handled through our
                dedicated
                {" "}

                <Link
                  href="/services/seo-services"
                  className="font-semibold text-brand-orange underline underline-offset-4"
                >
                  SEO services
                </Link>.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WEBSITE REDESIGN
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Already Have a Website?
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              You may need a redesign.
              You may not need a complete rebuild.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              We prefer diagnosing the actual problem before recommending
              that a business replace everything.

            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8">

              <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Redesign may be enough
              </p>


              <h3 className="mt-4 text-2xl font-bold text-brand-blue">
                Keep the foundation, improve the experience.
              </h3>


              <ul className="mt-7 space-y-4">

                {[
                  "Existing website technology is maintainable",
                  "Current URLs and structure are mostly suitable",
                  "Primary issue is outdated visual design",
                  "Content can be improved within the current system",
                  "Performance problems can be corrected",
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

            </article>


            <article className="rounded-3xl bg-brand-blue p-8 text-white">

              <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Rebuild may be better
              </p>


              <h3 className="mt-4 text-2xl font-bold">
                Replace the limiting foundation.
              </h3>


              <ul className="mt-7 space-y-4">

                {[
                  "Current technology is difficult to maintain",
                  "Mobile behaviour is fundamentally broken",
                  "Website architecture limits new service pages",
                  "SEO problems are deeply structural",
                  "Important integrations cannot be added cleanly",
                  "Performance is limited by the underlying implementation",
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

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESIGN + DEVELOPMENT
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Design That Can Actually Be Built
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                We connect web design and web development instead of treating them as separate worlds.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600">

                A design file can look impressive and still be a poor
                website if it ignores development constraints,
                performance, content growth, responsiveness or
                accessibility.

              </p>


              <p className="mt-5 leading-8 text-gray-600">

                Our design thinking considers the actual implementation.
                Components should behave consistently, mobile layouts
                should make sense and future pages should be able to
                reuse the same design system.

              </p>


              <Link
                href="/services/web-development-services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange"
              >

                Explore our web development services

                <ArrowRight size={18} />

              </Link>

            </div>


            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">

              <div className="grid gap-5">

                {[
                  [
                    "Reusable Design System",
                    "Consistent buttons, cards, forms, typography, spacing and page components.",
                  ],

                  [
                    "Responsive Implementation",
                    "Layouts planned for real breakpoints rather than desktop screenshots only.",
                  ],

                  [
                    "Maintainable Architecture",
                    "Future pages should not require redesigning the entire website.",
                  ],

                  [
                    "Performance Awareness",
                    "Animation and visual assets are balanced against loading and interaction cost.",
                  ],

                  [
                    "SEO-Compatible Components",
                    "Headings, links, content blocks and navigation remain understandable in the final implementation.",
                  ],
                ].map(([title, description]) => (

                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl bg-gray-50 p-5"
                  >

                    <BadgeCheck
                      size={21}
                      className="mt-1 shrink-0 text-brand-orange"
                    />


                    <div>

                      <h3 className="font-bold text-brand-blue">
                        {title}
                      </h3>


                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {description}
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
          PROCESS
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Our Web Design Process
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              From business problem to launch.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              Clear process helps us move faster without skipping the
              decisions that determine whether the final website is useful.

            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {designProcess.map((step) => (

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
                  {step.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT IS INCLUDED
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Project Deliverables
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                What can be included in a MrTechies web design project?

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600">

                Exact deliverables depend on the project, but a
                professional website can involve far more than simply
                selecting colours and arranging sections.

              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Business and audience discovery",
                "Competitor review",
                "Page architecture",
                "Navigation planning",
                "Wireframes",
                "Responsive UI/UX",
                "Homepage design",
                "Service-page layouts",
                "Landing-page design",
                "Mobile layouts",
                "CTA placement",
                "Form experience",
                "SEO page structure",
                "Internal linking strategy",
                "Metadata preparation",
                "Image optimization guidance",
                "Development",
                "Responsive testing",
                "Search crawl setup",
                "Analytics preparation",
                "Launch support",
                "Post-launch improvement plan",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4"
                >

                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-brand-orange"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST / E-E-A-T
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm md:p-12">

            <div className="grid gap-12 lg:grid-cols-2">

              <div>

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Clear Expectations
                </span>


                <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">

                  What we will tell you clearly before starting.

                </h2>


                <p className="mt-5 leading-8 text-gray-600">

                  Website projects involve decisions that many business
                  owners do not make every day. We believe the important
                  trade-offs should be understandable before development
                  begins.

                </p>

              </div>


              <div className="space-y-6">

                {[
                  {
                    title: "What needs to be built",

                    text:
                      "The major page, design and functionality scope should be understandable before work expands.",
                  },

                  {
                    title: "What timeline is realistic",

                    text:
                      "Urgent projects are possible, but we prefer confirming an achievable delivery plan instead of making an arbitrary promise.",
                  },

                  {
                    title: "What SEO is included",

                    text:
                      "Foundational SEO, ongoing SEO and off-page backlink campaigns are different levels of work. We define what belongs to the project.",
                  },

                  {
                    title: "What we cannot guarantee",

                    text:
                      "We will not guarantee a specific Google position, search snippet or AI citation because those results are controlled by external search systems.",
                  },

                  {
                    title: "What happens after launch",

                    text:
                      "We can continue into SEO, content, advertising, analytics and digital improvement when the business wants ongoing growth.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="flex gap-4"
                  >

                    <ShieldCheck
                      size={22}
                      className="mt-1 shrink-0 text-brand-orange"
                    />


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
          INTERNAL SERVICES
      ====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Beyond Web Design
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              Your website can connect with the rest of your digital growth system.

            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <Link
              href="/services/web-development-services"
              className="group rounded-3xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <Code2
                size={25}
                className="text-brand-orange"
              />


              <h3 className="mt-5 text-xl font-bold text-brand-blue">
                Web Development
              </h3>


              <p className="mt-3 leading-7 text-gray-600">

                Turn approved website architecture and UI into a
                responsive, scalable and maintainable digital product.

              </p>


              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange">

                Explore development

                <ArrowRight size={17} />

              </span>

            </Link>


            <Link
              href="/services/seo-services"
              className="group rounded-3xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <Search
                size={25}
                className="text-brand-orange"
              />


              <h3 className="mt-5 text-xl font-bold text-brand-blue">
                SEO Services
              </h3>


              <p className="mt-3 leading-7 text-gray-600">

                Continue beyond the initial SEO foundation with content,
                technical optimization, local SEO and off-page growth.

              </p>


              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange">

                Explore SEO

                <ArrowRight size={17} />

              </span>

            </Link>


            <Link
              href="/services/digital-marketing-services"
              className="group rounded-3xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <TrendingUp
                size={25}
                className="text-brand-orange"
              />


              <h3 className="mt-5 text-xl font-bold text-brand-blue">
                Digital Marketing
              </h3>


              <p className="mt-3 leading-7 text-gray-600">

                Connect your website with campaigns, content, landing
                pages and measurable customer-acquisition activity.

              </p>


              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange">

                Explore marketing

                <ArrowRight size={17} />

              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-5 sm:px-6">

          <div className="mb-12 text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Frequently Asked Questions
            </span>


            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-5xl">

              Questions businesses ask before starting.

            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">

              Clear answers about timelines, SEO, redesigns,
              rankings, backlinks and working with MrTechies.

            </p>

          </div>


          <div className="space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">

                  <h3 className="font-bold leading-7 text-brand-blue">
                    {faq.question}
                  </h3>


                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 font-bold text-brand-orange transition-transform group-open:rotate-45">
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
            Build Something Worth Finding
          </span>


          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">

            Need a website that looks better,
            works better and is prepared to grow?

          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">

            Tell us what is wrong with your current website or what
            you need the new one to accomplish. We can help decide
            whether you need a redesign, a new website or a broader
            development and SEO solution.

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
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >

              Explore All Services

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":
              "https://schema.org",

            "@graph": [
              {
                "@type": "WebPage",

                "@id":
                  `${PAGE_URL}#webpage`,

                url:
                  PAGE_URL,

                name:
                  "Web Designing Services in Hyderabad | MrTechies",

                description:
                  "Professional web designing services in Hyderabad including responsive websites, UI/UX, business website design, landing pages, ecommerce interfaces, website redesign and SEO-ready architecture.",

                isPartOf: {
                  "@id":
                    `${BASE_URL}/#website`,
                },

                about: {
                  "@id":
                    `${PAGE_URL}#service`,
                },

                breadcrumb: {
                  "@id":
                    `${PAGE_URL}#breadcrumb`,
                },
              },


              {
                "@type": "Service",

                "@id":
                  `${PAGE_URL}#service`,

                name:
                  "Web Designing Services",

                serviceType:
                  "Web Design and UI/UX Design",

                url:
                  PAGE_URL,

                description:
                  "Responsive web design, business website design, UI/UX, landing pages, ecommerce interfaces, website redesign and search-friendly website architecture from MrTechies.",

                provider: {
                  "@id":
                    `${BASE_URL}/#organization`,
                },

                areaServed: [
                  {
                    "@type": "City",

                    name:
                      "Hyderabad",
                  },

                  {
                    "@type": "State",

                    name:
                      "Telangana",
                  },

                  {
                    "@type": "Country",

                    name:
                      "India",
                  },
                ],

                hasOfferCatalog: {
                  "@type":
                    "OfferCatalog",

                  name:
                    "Web Design Solutions",

                  itemListElement:
                    webDesignCategories.map(
                      (
                        category,
                        index
                      ) => ({
                        "@type":
                          "Offer",

                        position:
                          index + 1,

                        itemOffered: {
                          "@type":
                            "Service",

                          name:
                            category.title,

                          description:
                            category.description,

                          url:
                            `${BASE_URL}${category.slug}`,
                        },
                      })
                    ),
                },
              },


              {
                "@type":
                  "BreadcrumbList",

                "@id":
                  `${PAGE_URL}#breadcrumb`,

                itemListElement: [
                  {
                    "@type":
                      "ListItem",

                    position:
                      1,

                    name:
                      "Home",

                    item:
                      BASE_URL,
                  },

                  {
                    "@type":
                      "ListItem",

                    position:
                      2,

                    name:
                      "Services",

                    item:
                      `${BASE_URL}/services`,
                  },

                  {
                    "@type":
                      "ListItem",

                    position:
                      3,

                    name:
                      "Web Designing Services",

                    item:
                      PAGE_URL,
                  },
                ],
              },


              {
                "@type":
                  "FAQPage",

                "@id":
                  `${PAGE_URL}#faq`,

                mainEntity:
                  faqs.map(
                    (faq) => ({
                      "@type":
                        "Question",

                      name:
                        faq.question,

                      acceptedAnswer: {
                        "@type":
                          "Answer",

                        text:
                          faq.answer,
                      },
                    })
                  ),
              },
            ],
          }).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

    </main>
  );
}