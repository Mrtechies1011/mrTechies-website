import type { Metadata } from "next";

import Link from "next/link";
import HeroClient from "@/components/HeroClient";

import { blogs } from "@/data/blogs";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Gauge,
  Globe,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Video,
  Workflow,
  Zap,
} from "lucide-react";


/* =========================================================
   CONSTANTS
========================================================= */

const BASE_URL = "https://mrtechies.com";


/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "MrTechies | Web Design, Development & SEO Company Hyderabad",

  description:
    "MrTechies helps businesses grow with web design, web development, SEO, digital marketing, apps, CRM & ERP solutions and video services in Hyderabad and across India.",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title:
      "MrTechies | Web Design, Development, SEO & Digital Growth",

    description:
      "Web design, development, SEO, digital marketing, apps and business systems built around real business growth.",

    url: BASE_URL,

    siteName: "MrTechies",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary",

    title:
      "MrTechies | Web Design, Development & SEO",

    description:
      "Websites, SEO, digital marketing, apps and business systems for growing companies.",
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

  category:
    "Web Development and Digital Marketing",

  creator: "MrTechies",

  publisher: "MrTechies",
};


/* =========================================================
   TRUST
========================================================= */

const TRUST_POINTS = [
  {
    value: "100+",
    label: "Projects Delivered",
    description:
      "Website, digital and technology projects across different business requirements.",
  },

  {
    value: "5+",
    label: "Years Experience",
    description:
      "Experience working across website development, digital marketing and technology.",
  },

  {
    value: "SEO-First",
    label: "Development Approach",
    description:
      "Search architecture and technical foundations are considered during development.",
  },

  {
    value: "Pan-India",
    label: "Business Support",
    description:
      "Remote project delivery for businesses across Hyderabad and other Indian markets.",
  },
];


/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    title: "Web Designing",

    description:
      "Responsive UI/UX, website redesign and customer-focused interfaces built around clarity, trust and conversion.",

    result:
      "Better customer experience and stronger first impressions",

    href:
      "/services/web-designing-services",

    icon: MonitorSmartphone,
  },

  {
    title: "Web Development",

    description:
      "Modern business websites and custom web applications built for performance, scalability and maintainability.",

    result:
      "Reliable digital foundations that can grow with your business",

    href:
      "/services/web-development-services",

    icon: Globe,
  },

  {
    title: "SEO Services",

    description:
      "Technical SEO, on-page optimization, local SEO, content strategy and off-page growth focused on relevant search visibility.",

    result:
      "More opportunities to be discovered through search",

    href:
      "/services/seo-services",

    icon: Search,
  },

  {
    title: "Digital Marketing",

    description:
      "Digital campaigns, landing pages, content and acquisition systems connected to measurable business objectives.",

    result:
      "Reach that is designed to turn into customer action",

    href:
      "/services/digital-marketing-services",

    icon: BarChart3,
  },

  {
    title: "CRM & ERP Solutions",

    description:
      "Custom systems for organizing leads, customers, internal workflows, reporting and repetitive business processes.",

    result:
      "Less manual work and clearer business operations",

    href:
      "/services/crm-erp-solutions",

    icon: LayoutDashboard,
  },

  {
    title: "Video Editing & Content",

    description:
      "Professional editing for social content, YouTube, advertisements, business communication and campaign assets.",

    result:
      "Stronger storytelling, communication and attention",

    href:
      "/services/video-editing-services",

    icon: Video,
  },

  {
    title: "App Development",

    description:
      "Custom mobile and web applications built around useful functionality, reliable experiences and business requirements.",

    result:
      "Digital products designed around real user needs",

    href:
      "/services/app-development-services",

    icon: Smartphone,
  },
];


/* =========================================================
   BUSINESS PROBLEMS
========================================================= */

const BUSINESS_PROBLEMS = [
  {
    title:
      "Our website looks outdated",

    description:
      "Your business may have improved significantly while your website still represents an older version of the company.",
  },

  {
    title:
      "People visit but do not enquire",

    description:
      "Traffic alone is not enough. Messaging, proof, service clarity and calls to action need to help customers make decisions.",
  },

  {
    title:
      "We are difficult to find on Google",

    description:
      "Weak technical SEO, thin service pages, poor local signals or limited authority can reduce organic visibility.",
  },

  {
    title:
      "Our marketing is disconnected",

    description:
      "Ads, social content, SEO and website pages often perform poorly when they are being managed as unrelated activities.",
  },

  {
    title:
      "Lead management is manual",

    description:
      "Enquiries get lost between forms, spreadsheets, WhatsApp, email and team members because there is no connected workflow.",
  },

  {
    title:
      "Our technology cannot scale",

    description:
      "Adding new services, content, locations, integrations or functionality becomes unnecessarily difficult because the original architecture was limited.",
  },
];


/* =========================================================
   INDUSTRIES
========================================================= */

const INDUSTRIES = [
  {
    label: "Startups",

    icon: Rocket,

    description:
      "Websites, landing pages, MVP interfaces and growth systems for businesses that need to launch, learn and scale quickly.",
  },

  {
    label: "Real Estate",

    icon: Building2,

    description:
      "Property-focused websites, enquiry journeys, landing pages, local visibility and campaign support.",
  },

  {
    label: "Healthcare",

    icon: HeartPulse,

    description:
      "Clear websites, service information, location visibility and enquiry experiences for clinics and healthcare businesses.",
  },

  {
    label: "Education",

    icon: GraduationCap,

    description:
      "Course websites, admission funnels, SEO, enquiry systems and content for institutes and education businesses.",
  },

  {
    label: "E-commerce",

    icon: ShoppingBag,

    description:
      "Product experiences, performance, conversion journeys and marketing support for ecommerce and D2C brands.",
  },

  {
    label: "Local Businesses",

    icon: Store,

    description:
      "Website design, local SEO and lead-generation systems for businesses competing within specific service areas.",
  },
];


/* =========================================================
   PROCESS
========================================================= */

const PROCESS = [
  {
    number: "01",

    title: "Understand",

    description:
      "We begin with your business, customers, current challenges, competition and the outcome the project needs to produce.",
  },

  {
    number: "02",

    title: "Plan",

    description:
      "We define website architecture, customer journey, technology, SEO requirements, content and the most important conversion paths.",
  },

  {
    number: "03",

    title: "Design & Build",

    description:
      "UI/UX and development move together with attention to responsiveness, usability, performance and maintainability.",
  },

  {
    number: "04",

    title: "Prepare for Search",

    description:
      "Important technical SEO, page structure, internal linking, metadata and crawlability are considered before launch.",
  },

  {
    number: "05",

    title: "Launch & Improve",

    description:
      "After launch, SEO, analytics, content, campaigns and product improvements can continue based on real priorities and performance.",
  },
];


/* =========================================================
   FAQs
========================================================= */

const FAQS = [
  {
    question:
      "What services does MrTechies provide?",

    answer:
      "MrTechies provides web designing, web development, SEO, digital marketing, app development, CRM and ERP solutions, video editing and related digital services for startups, local businesses and growing companies.",
  },

  {
    question:
      "Does MrTechies provide web designing services in Hyderabad?",

    answer:
      "Yes. MrTechies provides responsive web design, UI/UX, website redesign, landing pages, corporate website design, ecommerce interfaces and related website services for businesses in Hyderabad and other locations across India.",
  },

  {
    question:
      "Does MrTechies provide web development as well as design?",

    answer:
      "Yes. MrTechies handles both website design and development, allowing UI/UX, responsive implementation, technical architecture and SEO foundations to be planned as one connected project.",
  },

  {
    question:
      "Do you provide SEO services in Hyderabad?",

    answer:
      "Yes. SEO services can include technical SEO, on-page optimization, local SEO, content strategy, internal linking, SERP preparation and off-page growth depending on the agreed project scope.",
  },

  {
    question:
      "Can you guarantee Google rankings?",

    answer:
      "No responsible SEO provider can guarantee a specific Google ranking. MrTechies can improve technical foundations, content, relevance, local visibility and authority signals, but final rankings depend on competition, search intent, content quality, authority and Google's systems.",
  },

  {
    question:
      "Do you optimize websites for AI search and AEO?",

    answer:
      "We build clear, crawlable and useful website content with semantic sections, direct answers, meaningful internal links and accurate structured data where appropriate. We treat AEO as part of good SEO rather than relying on artificial AI-only tricks.",
  },

  {
    question:
      "Can MrTechies redesign an existing website?",

    answer:
      "Yes. We first evaluate whether the current website can be improved through design, content, SEO and performance work. A complete rebuild is recommended only when the existing architecture significantly limits usability, maintainability, SEO or future functionality.",
  },

  {
    question:
      "How quickly can you build a website?",

    answer:
      "The timeline depends on scope. Focused landing pages can sometimes be delivered within a few working days when content and requirements are ready, while full business websites and custom platforms require additional planning, review and development time.",
  },

  {
    question:
      "Do you work only with Hyderabad businesses?",

    answer:
      "No. MrTechies is Hyderabad-based but supports businesses remotely across Telangana, Andhra Pradesh and other parts of India.",
  },

  {
    question:
      "What happens after my website is launched?",

    answer:
      "Depending on your goals, work can continue into SEO, content, digital marketing, analytics, conversion improvements, CRM integration, new landing pages and additional website functionality.",
  },
];


/* =========================================================
   DATE FORMATTER
========================================================= */

function formatDate(date: string) {
  return new Intl.DateTimeFormat(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  ).format(
    new Date(date)
  );
}


/* =========================================================
   STRUCTURED DATA
========================================================= */

const organizationSchema = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type":
        "Organization",

      "@id":
        `${BASE_URL}/#organization`,

      name:
        "MrTechies",

      url:
        BASE_URL,

      logo: {
        "@type":
          "ImageObject",

        url:
          `${BASE_URL}/logo.png`,
      },

      description:
        "MrTechies provides web design, web development, SEO, digital marketing, application development, CRM and ERP solutions and video editing services for businesses.",

      knowsAbout: [
        "Web Design",
        "Web Development",
        "Search Engine Optimization",
        "Digital Marketing",
        "Application Development",
        "CRM Development",
        "ERP Development",
        "Video Editing",
      ],

      hasOfferCatalog: {
        "@type":
          "OfferCatalog",

        name:
          "MrTechies Digital Services",

        itemListElement:
          SERVICES.map(
            (service) => ({
              "@type":
                "Offer",

              itemOffered: {
                "@type":
                  "Service",

                name:
                  service.title,

                url:
                  `${BASE_URL}${service.href}`,
              },
            })
          ),
      },
    },


    {
      "@type":
        "WebSite",

      "@id":
        `${BASE_URL}/#website`,

      url:
        BASE_URL,

      name:
        "MrTechies",

      publisher: {
        "@id":
          `${BASE_URL}/#organization`,
      },
    },


    {
      "@type":
        "WebPage",

      "@id":
        `${BASE_URL}/#webpage`,

      url:
        BASE_URL,

      name:
        "MrTechies | Web Design, Development & SEO Company Hyderabad",

      description:
        "MrTechies provides web design, web development, SEO, digital marketing, apps and business technology solutions for growing businesses.",

      isPartOf: {
        "@id":
          `${BASE_URL}/#website`,
      },

      about: {
        "@id":
          `${BASE_URL}/#organization`,
      },
    },
  ],
};


/* =========================================================
   HOME
========================================================= */

export default function Home() {

  const latestBlogs = [...blogs]
    .sort(
      (a, b) =>
        new Date(
          b.publishedDate
        ).getTime() -
        new Date(
          a.publishedDate
        ).getTime()
    )
    .slice(0, 3);


  return (
    <>
      <main className="overflow-hidden bg-white text-gray-800">

        {/* =================================================
            HERO
        ================================================= */}

        <HeroClient />


        {/* =================================================
            TRUST
        ================================================= */}

        <section className="bg-white py-16 md:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

              {TRUST_POINTS.map(
                (item) => (

                  <article
                    key={item.label}
                    className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl md:p-8"
                  >

                    <p className="text-3xl font-bold text-brand-blue md:text-4xl">
                      {item.value}
                    </p>


                    <h2 className="mt-3 font-semibold text-gray-800">
                      {item.label}
                    </h2>


                    <p className="mt-3 hidden text-sm leading-6 text-gray-500 md:block">
                      {item.description}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            WHAT WE SOLVE
        ================================================= */}

        <section className="bg-gray-50 py-24 md:py-28">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Why Businesses Reach Out
              </span>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                Most businesses are not looking for
                another digital service.

                <span className="block">
                  They are trying to solve a problem.
                </span>

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600">

                A website, SEO campaign, application or CRM only matters
                when it improves something important for the business:
                customer understanding, visibility, leads, sales,
                operations or the ability to scale.

              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {BUSINESS_PROBLEMS.map(
                (problem, index) => (

                  <article
                    key={problem.title}
                    className="rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-sm font-black text-brand-orange">

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </div>


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


            <div className="mt-10 text-center">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-brand-orange"
              >
                Tell us what is not working

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT / VALUE
        ================================================= */}

        <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 py-24 text-white md:py-32">

          <div
            aria-hidden="true"
            className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-3xl"
          />


          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

              <div>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-brand-orange">

                  <Sparkles size={16} />

                  Hyderabad-Based Digital Growth Company

                </span>


                <h2 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">

                  We build more than websites.

                  <span className="mt-2 block text-brand-orange">
                    We build connected digital systems.
                  </span>

                </h2>


                <p className="mt-7 text-xl leading-8 text-gray-300">

                  MrTechies helps startups, local businesses,
                  ecommerce brands and growing companies connect
                  their website, search visibility, marketing and
                  business technology around one goal:
                  sustainable digital growth.

                </p>


                <p className="mt-5 leading-8 text-gray-400">

                  A business website should support SEO.
                  SEO should lead customers to useful pages.
                  Marketing campaigns should send people into
                  conversion-focused experiences. Leads should move
                  into organized systems instead of getting lost
                  across email, WhatsApp and spreadsheets.

                </p>


                <div className="mt-9 grid gap-4 sm:grid-cols-2">

                  {[
                    "SEO-ready website architecture",
                    "Responsive UI/UX",
                    "Performance-conscious development",
                    "Conversion-focused pages",
                    "Connected marketing journeys",
                    "Scalable business systems",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >

                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-brand-orange"
                      />

                      <span className="text-sm text-gray-200">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>


                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Start Your Project

                    <ArrowRight size={18} />
                  </Link>


                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore All Services

                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                {[
                  {
                    title:
                      "Design for customers",

                    icon:
                      MonitorSmartphone,

                    description:
                      "Interfaces built around clarity, mobile usability, trust and important customer decisions.",

                    href:
                      "/services/web-designing-services",
                  },

                  {
                    title:
                      "Build for growth",

                    icon:
                      Globe,

                    description:
                      "Web development that considers performance, maintainability and future business requirements.",

                    href:
                      "/services/web-development-services",
                  },

                  {
                    title:
                      "Get discovered",

                    icon:
                      Search,

                    description:
                      "SEO designed around relevant search intent, technical quality, content and sustainable authority.",

                    href:
                      "/services/seo-services",
                  },

                  {
                    title:
                      "Organize operations",

                    icon:
                      LayoutDashboard,

                    description:
                      "CRM and ERP systems that bring lead management, workflows and business information together.",

                    href:
                      "/services/crm-erp-solutions",
                  },
                ].map(
                  ({
                    title,
                    icon: Icon,
                    description,
                    href,
                  }) => (

                    <Link
                      key={title}
                      href={href}
                      className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                    >

                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-orange">

                        <Icon
                          size={24}
                          className="text-white"
                        />

                      </div>


                      <h3 className="mt-6 text-xl font-bold">
                        {title}
                      </h3>


                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        {description}
                      </p>


                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">

                        Learn more

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />

                      </span>

                    </Link>

                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          id="services"
          className="bg-gray-50 py-24 md:py-32"
        >

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="mb-16 max-w-4xl">

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Our Services
              </span>


              <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-blue md:text-5xl">

                Digital services that can work independently
                or as one connected growth system.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">

                You do not need to purchase every service.
                Start with the problem that matters most today,
                then connect other capabilities when your growth
                requires them.

              </p>

            </div>


            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {SERVICES.map(
                ({
                  title,
                  description,
                  result,
                  href,
                  icon: Icon,
                }) => (

                  <Link
                    key={title}
                    href={href}
                    className="group flex min-h-[320px] flex-col rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-8"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange transition-all group-hover:bg-brand-orange group-hover:text-white">

                      <Icon size={25} />

                    </div>


                    <h3 className="mt-6 text-2xl font-bold text-brand-blue">
                      {title}
                    </h3>


                    <p className="mt-4 leading-7 text-gray-600">
                      {description}
                    </p>


                    <div className="mt-auto pt-7">

                      <p className="mb-5 border-t border-gray-100 pt-5 text-sm font-medium leading-6 text-gray-700">
                        {result}
                      </p>


                      <span className="inline-flex items-center gap-2 font-semibold text-brand-orange">

                        Explore {title}

                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />

                      </span>

                    </div>

                  </Link>

                )
              )}

            </div>


            <div className="mt-10 text-center">

              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-brand-orange"
              >

                Compare all MrTechies services

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </section>


        {/* =================================================
            HOW SERVICES CONNECT
        ================================================= */}

        <section className="bg-white py-24 md:py-28">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Connected Growth
                </span>


                <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                  A website is stronger when the systems around it
                  work together.

                </h2>


                <p className="mt-6 text-lg leading-8 text-gray-600">

                  Businesses often lose performance because design,
                  development, SEO, advertisements and lead management
                  are handled as separate projects with no shared
                  strategy.

                </p>


                <p className="mt-5 leading-8 text-gray-600">

                  MrTechies can connect those areas when needed.
                  Your website becomes the central digital asset,
                  search helps potential customers discover it,
                  marketing brings targeted demand and CRM systems
                  help the team manage the opportunities that arrive.

                </p>

              </div>


              <div className="grid gap-4">

                {[
                  {
                    number: "01",
                    title: "Build the Experience",
                    text:
                      "Start with clear web design and customer-focused page architecture.",
                    href:
                      "/services/web-designing-services",
                  },

                  {
                    number: "02",
                    title: "Build the Technology",
                    text:
                      "Develop responsive pages and functionality on an appropriate technical foundation.",
                    href:
                      "/services/web-development-services",
                  },

                  {
                    number: "03",
                    title: "Build Visibility",
                    text:
                      "Improve technical SEO, content, local relevance and authority so useful pages can be discovered.",
                    href:
                      "/services/seo-services",
                  },

                  {
                    number: "04",
                    title: "Build Demand",
                    text:
                      "Use digital marketing and campaigns when the business needs additional targeted reach.",
                    href:
                      "/services/digital-marketing-services",
                  },

                  {
                    number: "05",
                    title: "Build the Workflow",
                    text:
                      "Connect enquiries and operations through CRM, ERP or custom business systems where required.",
                    href:
                      "/services/crm-erp-solutions",
                  },
                ].map((item) => (

                  <Link
                    key={item.number}
                    href={item.href}
                    className="group flex gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-orange-100 hover:bg-orange-50/50"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-sm font-bold text-white">
                      {item.number}
                    </div>


                    <div>

                      <h3 className="font-bold text-brand-blue transition group-hover:text-brand-orange">
                        {item.title}
                      </h3>


                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.text}
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            SEO + AI SEARCH
        ================================================= */}

        <section className="relative overflow-hidden bg-linear-to-br from-brand-blue via-slate-900 to-slate-950 py-24 text-white md:py-28">

          <div
            aria-hidden="true"
            className="absolute right-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full bg-brand-orange/15 blur-3xl"
          />


          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

              <div>

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Search + AI Visibility
                </span>


                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">

                  Build content for customers first,
                  then make it easy for search systems to understand.

                </h2>


                <p className="mt-6 text-lg leading-8 text-gray-300">

                  We do not treat AEO or AI search as a collection
                  of special hacks. Strong search visibility starts
                  with useful information, crawlable pages, clear
                  relationships between topics and technically
                  accessible content.

                </p>


                <p className="mt-5 leading-8 text-gray-400">

                  When appropriate, MrTechies combines semantic
                  content structure, direct answers, service pages,
                  internal linking, structured data, local context,
                  relevant blog content and traditional SEO foundations.

                </p>


                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    href="/services/seo-services"
                    className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Explore SEO Services

                    <ArrowRight size={18} />
                  </Link>


                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Our Insights

                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                {[
                  {
                    icon: Search,
                    title: "Search-Friendly Structure",
                    text:
                      "Logical pages, descriptive headings, crawlable links, metadata and technical indexability.",
                  },

                  {
                    icon: BookOpen,
                    title: "Useful Content",
                    text:
                      "Pages that answer the questions customers actually ask instead of repeating keywords.",
                  },

                  {
                    icon: Workflow,
                    title: "Internal Topic Relationships",
                    text:
                      "Services, blogs and supporting pages linked using descriptive and contextually useful anchors.",
                  },

                  {
                    icon: Sparkles,
                    title: "AI-Readable Information",
                    text:
                      "Direct explanations, comparisons and structured content that remain useful to human readers first.",
                  },
                ].map(
                  ({
                    icon: Icon,
                    title,
                    text,
                  }) => (

                    <article
                      key={title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                    >

                      <Icon
                        size={25}
                        className="text-brand-orange"
                      />


                      <h3 className="mt-5 text-xl font-bold">
                        {title}
                      </h3>


                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        {text}
                      </p>

                    </article>

                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            INDUSTRIES
        ================================================= */}

        <section className="bg-white py-24 md:py-32">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="mb-16 max-w-4xl">

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Industries We Serve
              </span>


              <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-blue md:text-5xl">

                Different markets require different digital journeys.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">

                A healthcare visitor, ecommerce shopper, coaching
                student and B2B buyer do not make decisions in the
                same way. The website, content and marketing structure
                should reflect that difference.

              </p>

            </div>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {INDUSTRIES.map(
                ({
                  label,
                  icon: Icon,
                  description,
                }) => (

                  <article
                    key={label}
                    className="group rounded-3xl border border-gray-100 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >

                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-blue text-white transition group-hover:bg-brand-orange">

                      <Icon size={24} />

                    </div>


                    <h3 className="mt-6 text-2xl font-bold text-brand-blue">
                      {label}
                    </h3>


                    <p className="mt-4 leading-7 text-gray-600">
                      {description}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            QUALITY + DELIVERY
        ================================================= */}

        <section className="bg-gray-50 py-24">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <div>

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Quality Without Unnecessary Delay
                </span>


                <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                  Need to launch quickly?
                  We design the scope around the real deadline.

                </h2>


                <p className="mt-6 text-lg leading-8 text-gray-600">

                  Website projects are often connected to launches,
                  campaigns, new services, investor meetings or sales
                  deadlines. When requirements and content are ready,
                  focused projects can move quickly.

                </p>


                <p className="mt-5 leading-8 text-gray-600">

                  We do not apply one unrealistic deadline to every
                  project. A landing page and a custom business platform
                  are fundamentally different jobs. The right approach is
                  to prioritize what must launch first without sacrificing
                  core usability or technical quality.

                </p>

              </div>


              <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm md:p-9">

                <div className="flex items-center gap-3">

                  <Clock3
                    size={24}
                    className="text-brand-orange"
                  />


                  <h3 className="text-xl font-bold text-brand-blue">
                    Indicative website timelines
                  </h3>

                </div>


                <div className="mt-7 divide-y divide-gray-100">

                  {[
                    [
                      "Focused landing page",
                      "3–7 working days",
                    ],

                    [
                      "Small business website",
                      "1–3 weeks",
                    ],

                    [
                      "Custom corporate website",
                      "3–8+ weeks",
                    ],

                    [
                      "Web app / business system",
                      "Scope dependent",
                    ],
                  ].map(
                    ([label, time]) => (

                      <div
                        key={label}
                        className="flex items-center justify-between gap-6 py-5"
                      >

                        <span className="font-medium text-gray-700">
                          {label}
                        </span>


                        <span className="text-right font-bold text-brand-orange">
                          {time}
                        </span>

                      </div>

                    )
                  )}

                </div>


                <p className="mt-5 rounded-2xl bg-orange-50 p-5 text-sm leading-6 text-gray-700">

                  Timelines depend on scope, content readiness,
                  functionality and review speed. We confirm the
                  practical delivery window after understanding
                  the project.

                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            PROCESS
        ================================================= */}

        <section className="bg-white py-24 md:py-32">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="mx-auto mb-16 max-w-4xl text-center">

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                How We Work
              </span>


              <h2 className="mt-5 text-4xl font-bold leading-tight text-brand-blue md:text-5xl">

                A clearer process creates a better final product.

              </h2>


              <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">

                We reduce unnecessary rework by understanding
                requirements, customers and growth priorities
                before jumping directly into development.

              </p>

            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

              {PROCESS.map((step) => (

                <article
                  key={step.number}
                  className="relative rounded-3xl border border-gray-100 bg-gray-50 p-7"
                >

                  <div className="absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-linear-to-r from-brand-orange to-orange-300" />


                  <span className="text-sm font-black tracking-widest text-brand-orange">
                    STEP {step.number}
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


        {/* =================================================
            TRUST / E-E-A-T
        ================================================= */}

        <section className="bg-gray-50 py-24">

          <div className="mx-auto max-w-6xl px-5 sm:px-6">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Clear Expectations
                </span>


                <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-5xl">

                  Trust comes from explaining what is realistic,
                  not from making bigger promises.

                </h2>


                <p className="mt-6 text-lg leading-8 text-gray-600">

                  Digital projects involve decisions that business
                  owners may not make every day. We believe scope,
                  technology, timelines and limitations should be
                  understandable before work begins.

                </p>

              </div>


              <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">

                <div className="space-y-6">

                  {[
                    {
                      title:
                        "We explain the scope",

                      text:
                        "Important pages, functionality and deliverables should be clear before development expands.",
                    },

                    {
                      title:
                        "We explain technology choices",

                      text:
                        "Tools should be chosen because they fit the requirement—not simply because they are familiar.",
                    },

                    {
                      title:
                        "We do not guarantee #1 rankings",

                      text:
                        "SEO can improve technical quality, relevance, content and authority, but search positions remain competitive and externally controlled.",
                    },

                    {
                      title:
                        "We do not recommend rebuilding without a reason",

                      text:
                        "If an existing website can be effectively improved, redesigning or optimizing it may be better than replacing everything.",
                    },

                    {
                      title:
                        "We plan beyond launch",

                      text:
                        "Websites can continue into SEO, analytics, campaigns, content and business-system improvements when growth requires them.",
                    },
                  ].map((item) => (

                    <div
                      key={item.title}
                      className="flex gap-4"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">

                        <ShieldCheck
                          size={20}
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


        {/* =================================================
            SERVICE AREAS
        ================================================= */}

        <section className="relative overflow-hidden bg-brand-blue py-24 text-white md:py-28">

          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />


          <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-6">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Service Areas
            </span>


            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">

              Hyderabad-based.
              Built to work with businesses across India.

            </h2>


            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">

              MrTechies provides web designing, web development,
              SEO, digital marketing, ecommerce solutions,
              application development and business automation
              support for companies in Hyderabad, Telangana,
              Andhra Pradesh and other Indian markets.

            </p>


            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">

              Remote project delivery allows strategy, reviews,
              development and ongoing optimization to continue
              without requiring the client and our team to be in
              the same location.

            </p>


            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/services/web-designing-services"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-7 py-4 font-semibold transition hover:bg-orange-600"
              >
                Web Designing Services

                <ArrowRight size={18} />
              </Link>


              <Link
                href="/services/seo-services"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                SEO Services

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </section>


        {/* =================================================
            BLOG / INTERNAL CONTENT LINKS
        ================================================= */}

        {latestBlogs.length > 0 && (

          <section
            id="insights"
            className="bg-white py-24 md:py-32"
          >

            <div className="mx-auto max-w-7xl px-5 sm:px-6">

              <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">

                <div className="max-w-3xl">

                  <span className="font-semibold uppercase tracking-widest text-brand-orange">
                    MrTechies Insights
                  </span>


                  <h2 className="mt-4 text-4xl font-bold leading-tight text-brand-blue md:text-5xl">

                    Practical guides for better digital decisions.

                  </h2>


                  <p className="mt-5 text-lg leading-8 text-gray-600">

                    Our blog explores real questions businesses ask
                    about website development, SEO, digital marketing,
                    video, technology and growth.

                  </p>

                </div>


                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-semibold text-brand-orange"
                >
                  View all insights

                  <ArrowRight size={18} />
                </Link>

              </div>


              <div className="grid gap-7 lg:grid-cols-3">

                {latestBlogs.map(
                  (blog) => (

                    <article
                      key={blog.slug}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="block bg-linear-to-br from-brand-blue to-slate-950 p-7 text-white"
                      >

                        <div className="flex items-center justify-between gap-4">

                          <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-orange">
                            {blog.category}
                          </span>


                          <BookOpen
                            size={20}
                            className="text-brand-orange"
                          />

                        </div>


                        <p className="mt-12 text-xs uppercase tracking-widest text-gray-400">
                          MrTechies Insights
                        </p>

                      </Link>


                      <div className="flex flex-1 flex-col p-7">

                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">

                          <time
                            dateTime={
                              blog.publishedDate
                            }
                          >
                            {formatDate(
                              blog.publishedDate
                            )}
                          </time>

                          <span>
                            •
                          </span>

                          <span>
                            {blog.readTime}
                          </span>

                        </div>


                        <Link
                          href={`/blog/${blog.slug}`}
                        >

                          <h3 className="mt-4 text-2xl font-bold leading-snug text-brand-blue transition-colors group-hover:text-brand-orange">

                            {blog.title}

                          </h3>

                        </Link>


                        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">

                          {blog.excerpt}

                        </p>


                        <div className="mt-auto pt-7">

                          <Link
                            href={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-2 font-semibold text-brand-orange"
                          >

                            Read article

                            <ArrowRight
                              size={17}
                              className="transition-transform group-hover:translate-x-1"
                            />

                          </Link>

                        </div>

                      </div>

                    </article>

                  )
                )}

              </div>

            </div>

          </section>

        )}


        {/* =================================================
            HIGH INTENT ROUTING
        ================================================= */}

        <section className="bg-gray-50 py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10">

              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

                <div>

                  <span className="font-semibold uppercase tracking-widest text-brand-orange">
                    Know What You Need?
                  </span>


                  <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue">

                    Go directly to the service that matches your priority.

                  </h2>

                </div>


                <div className="grid gap-3 sm:grid-cols-2">

                  {[
                    [
                      "Web Designing Services in Hyderabad",
                      "/services/web-designing-services",
                    ],

                    [
                      "Web Development Services",
                      "/services/web-development-services",
                    ],

                    [
                      "SEO Services in Hyderabad",
                      "/services/seo-services",
                    ],

                    [
                      "Digital Marketing Services",
                      "/services/digital-marketing-services",
                    ],

                    [
                      "CRM & ERP Solutions",
                      "/services/crm-erp-solutions",
                    ],

                    [
                      "App Development Services",
                      "/services/app-development-services",
                    ],
                  ].map(
                    ([label, href]) => (

                      <Link
                        key={href}
                        href={href}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm font-semibold text-brand-blue transition hover:border-orange-100 hover:bg-orange-50 hover:text-brand-orange"
                      >

                        {label}

                        <ArrowRight
                          size={17}
                          className="shrink-0"
                        />

                      </Link>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            FAQ
        ================================================= */}

        <section className="bg-white py-24 md:py-28">

          <div className="mx-auto max-w-4xl px-5 sm:px-6">

            <div className="mb-12 text-center">

              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                Common Questions
              </span>


              <h2 className="mt-4 text-4xl font-bold text-brand-blue md:text-5xl">

                Before working with MrTechies

              </h2>


              <p className="mt-5 text-lg leading-8 text-gray-600">

                Straight answers about our services,
                websites, SEO, timelines and ongoing digital support.

              </p>

            </div>


            <div className="space-y-4">

              {FAQS.map((faq) => (

                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5">

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


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="relative overflow-hidden bg-linear-to-r from-brand-blue to-slate-950 py-24 text-white md:py-28">

          <div
            aria-hidden="true"
            className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
          />


          <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Start With the Problem
            </span>


            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">

              Tell us what your business needs to improve.

            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">

              Whether you need a new website, redesign,
              stronger Google visibility, a digital campaign,
              an application or a better lead-management system,
              we can help determine the right starting point.

            </p>


            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-orange-600"
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

      </main>


      {/* =====================================================
          ORGANIZATION / WEBSITE STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              organizationSchema
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

    </>
  );
}