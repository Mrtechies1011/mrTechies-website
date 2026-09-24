import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const ArrowRight = dynamic(() =>
  import("lucide-react").then((mod) => mod.ArrowRight)
);

const CheckCircle2 = dynamic(() =>
  import("lucide-react").then((mod) => mod.CheckCircle2)
);

const Globe = dynamic(() =>
  import("lucide-react").then((mod) => mod.Globe)
);

const Rocket = dynamic(() =>
  import("lucide-react").then((mod) => mod.Rocket)
);

const ShieldCheck = dynamic(() =>
  import("lucide-react").then((mod) => mod.ShieldCheck)
);

const Sparkles = dynamic(() =>
  import("lucide-react").then((mod) => mod.Sparkles)
);

const Star = dynamic(() =>
  import("lucide-react").then((mod) => mod.Star)
);

export const revalidate = 86400;

export const metadata: Metadata = {
  metadataBase: new URL("https://mrtechies.com"),

  title: {
    default:
      "About MrTechies | Web Development & SEO Agency in Hyderabad",
    template: "%s | MrTechies",
  },

  description:
    "MrTechies is a performance-focused web development and SEO agency helping startups, businesses, educational institutes, and growing brands build scalable digital systems across India.",

  keywords: [
    "Web Development Company Hyderabad",
    "SEO Agency Hyderabad",
    "Next.js Development Company",
    "React Development Services",
    "Technical SEO Services",
    "ERP Development Company",
    "CRM Software Development",
    "Business Automation Solutions",
    "Web Design Agency India",
    "SEO Friendly Websites",
  ],

  authors: [{ name: "MrTechies" }],
  creator: "MrTechies",
  publisher: "MrTechies",
  category: "Technology",

  alternates: {
    canonical: "https://mrtechies.com/about",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mrtechies.com/about",
    siteName: "MrTechies",
    title:
      "MrTechies | Modern Web Development & SEO Solutions",
    description:
      "High-performance websites, scalable applications, SEO systems, and business automation solutions.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "MrTechies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MrTechies",
    description:
      "Modern websites and scalable SEO systems designed for business growth.",
    images: ["/og-image.webp"],
  },
};

const services = [
  "Custom Website Development",
  "Technical SEO Optimization",
  "Next.js & React Applications",
  "UI/UX Design Systems",
  "ERP & CRM Development",
  "Business Automation Solutions",
];

const features = [
  {
    icon: Rocket,
    title: "Performance-Driven Development",
    desc: "Fast-loading websites optimized for Core Web Vitals, conversions, and user experience.",
  },
  {
    icon: Globe,
    title: "Search Engine Visibility",
    desc: "SEO-focused architecture designed for modern Google indexing and AI search systems.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Technical Support",
    desc: "Reliable communication, scalable infrastructure, and continuous optimization support.",
  },
];

const faqs = [
  {
    q: "What services does MrTechies provide?",
    a: "MrTechies provides website development, SEO optimization, UI/UX design, ERP systems, CRM platforms, and business automation solutions.",
  },
  {
    q: "Does MrTechies develop SEO-friendly websites?",
    a: "Yes. Every website is optimized for Core Web Vitals, technical SEO, mobile responsiveness, and modern search engine visibility.",
  },
  {
    q: "Which technologies does MrTechies use?",
    a: "MrTechies primarily uses Next.js, React, TypeScript, Tailwind CSS, scalable backend technologies, and modern SEO frameworks.",
  },
  {
    q: "Does MrTechies work with startups and educational institutes?",
    a: "Yes. MrTechies builds ERP systems, CRM platforms, automation tools, and scalable digital systems for startups, schools, colleges, and businesses.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= JSON-LD ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MrTechies",
              url: "https://mrtechies.com",
              logo: "https://mrtechies.com/logo.png",
              description:
                "MrTechies is a web development and SEO agency helping businesses scale online.",
              sameAs: [
                "https://www.instagram.com/mrtechies",
                "https://www.linkedin.com/company/mr-techies",
                "https://www.facebook.com/mrtechies",
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MrTechies",
              image: "https://mrtechies.com/og-image.webp",
              url: "https://mrtechies.com",
              telephone: "+918309570802",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              areaServed: [
                "Hyderabad",
                "Telangana",
                "Andhra Pradesh",
                "Visakhapatnam",
                "Vijayawada",
              ],
              serviceType: [
                "Web Development",
                "SEO Services",
                "ERP Development",
                "CRM Development",
                "Business Automation",
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MrTechies",
              image: "https://mrtechies.com/logo.png",
              "@id": "https://mrtechies.com",
              url: "https://mrtechies.com",
              telephone: "+918309570802",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.385044",
                longitude: "78.486671",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },

            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mrtechies.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://mrtechies.com/about",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: [".aeo-summary"],
              },
            },
          ]),
        }}
      />

      {/* ================= HERO ================= */}

      <header className="relative">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <section aria-labelledby="hero-heading">

              <div className="inline-flex items-center gap-2 bg-blue-100 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles size={16} />
                Trusted Web Development & SEO Agency
              </div>

              <h1
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-8"
              >
                We Build Digital Systems
                <span className="text-brand-blue">
                  {" "}Designed For Business Growth.
                </span>
              </h1>

              <p className="aeo-summary text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                MrTechies helps startups, educational institutes,
                local businesses, and growing brands build scalable
                websites, SEO systems, ERP platforms, CRM solutions,
                and automation tools using modern technologies like
                Next.js and React.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-12">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 px-8 py-4 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Explore Services
                </Link>

              </div>

              {/* Internal SEO Links */}

              <div className="flex flex-wrap gap-4 text-sm">

                <Link
                  href="/seo-services-hyderabad"
                  className="text-brand-blue font-medium hover:underline"
                >
                  Technical SEO Services
                </Link>

                <Link
                  href="/web-designing-services-hyderabad"
                  className="text-brand-blue font-medium hover:underline"
                >
                  Website Design Services
                </Link>
              </div>

            </section>

            {/* RIGHT */}

            <aside className="relative">

              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8">

                <div className="grid grid-cols-2 gap-6">

                  <article className="bg-slate-50 rounded-2xl p-6">
                    <h2 className="text-4xl font-bold text-brand-blue mb-2">
                      90+
                    </h2>

                    <p className="text-slate-600">
                      Lighthouse Performance
                    </p>
                  </article>

                  <article className="bg-slate-50 rounded-2xl p-6">
                    <h2 className="text-4xl font-bold text-brand-blue mb-2">
                      SEO
                    </h2>

                    <p className="text-slate-600">
                      Technical Optimization
                    </p>
                  </article>

                  <article className="bg-slate-50 rounded-2xl p-6">
                    <h2 className="text-4xl font-bold text-brand-blue mb-2">
                      Fast
                    </h2>

                    <p className="text-slate-600">
                      Optimized User Experience
                    </p>
                  </article>

                  <article className="bg-slate-50 rounded-2xl p-6">
                    <h2 className="text-4xl font-bold text-brand-blue mb-2">
                      24/7
                    </h2>

                    <p className="text-slate-600">
                      Technical Support
                    </p>
                  </article>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </header>

      {/* ================= WHY US ================= */}

      <section
        className="py-24"
        aria-labelledby="why-us-heading"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <h2
              id="why-us-heading"
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
            >
              Why Businesses Choose MrTechies
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              We combine performance-focused development,
              modern UI systems, SEO architecture, and
              scalable technologies to help businesses
              build long-term digital growth.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <article
                key={index}
                className="group border border-slate-200 rounded-3xl p-8 hover:border-brand-blue hover:shadow-xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section
        className="py-24 bg-slate-50"
        aria-labelledby="services-heading"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mb-20">

            <span className="inline-flex items-center gap-2 bg-blue-100 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Advanced Digital Solutions
            </span>

            <h2
              id="services-heading"
              className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8"
            >
              Scalable Digital Infrastructure
              <span className="text-brand-blue">
                {" "}For Modern Businesses
              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              We build websites, business systems,
              automation platforms, ERP software,
              CRM solutions, and SEO-focused digital
              experiences designed for long-term growth.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* WEBSITE DEVELOPMENT */}

            <article className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-all">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-brand-blue mb-8">
                <Globe size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                SEO Optimized Website Development
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                We create fast, scalable, and responsive websites
                using modern frontend technologies like Next.js
                and React. Every project is optimized for user
                experience, Core Web Vitals, accessibility,
                and modern search visibility.
              </p>

              <div className="space-y-4 mb-10">

                {[
                  "Core Web Vitals optimization",
                  "Responsive UI/UX systems",
                  "Technical SEO architecture",
                  "Modern scalable frontend development",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue mt-1 shrink-0"
                    />

                    <p className="text-slate-700">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              <div className="space-y-3">

                <Link
                  href="/seo-services-hyderabad"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
                >
                  SEO Services Hyderabad
                  <ArrowRight size={17} />
                </Link>

                <br />

                <Link
                  href="/web-designing-services-hyderabad"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
                >
                  Website Design Services
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>

            {/* ERP */}

            <article className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-all">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-8">
                <Rocket size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                ERP Solutions For Startups & Businesses
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                Our ERP systems help organizations manage
                operations, workflows, finances, projects,
                employees, and customer activities using
                centralized business management systems.
              </p>

              <div className="space-y-4 mb-10">

                {[
                  "Business process automation",
                  "Centralized dashboards",
                  "Workflow management",
                  "Scalable operational systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue mt-1 shrink-0"
                    />

                    <p className="text-slate-700">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">

                <p className="text-sm text-slate-600 leading-relaxed">
                  Designed for startups and growing businesses
                  looking to streamline operations and improve
                  productivity.
                </p>

              </div>

            </article>

            {/* CRM */}

            <article className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-all">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-8">
                <ShieldCheck size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                CRM Platforms For Educational Institutes
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                We develop advanced CRM systems for schools,
                colleges, coaching centers, and educational
                organizations with automation-focused
                management tools.
              </p>

              <div className="space-y-4 mb-10">

                {[
                  "Student admission management",
                  "Attendance & communication systems",
                  "Fee tracking & reporting",
                  "Analytics & workflow automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-blue mt-1 shrink-0"
                    />

                    <p className="text-slate-700">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl p-5 text-white">

                <p className="text-sm leading-relaxed opacity-95">
                  Enterprise-grade CRM systems tailored
                  for educational institutions and
                  student-focused businesses.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* ================= TRUST SECTION ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="inline-flex items-center gap-2 bg-blue-100 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star size={16} />
              Long-Term Digital Partnership
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Focused On Sustainable Business Growth
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              Our team focuses on scalable architecture,
              technical reliability, SEO performance,
              business automation, and long-term support
              to help brands grow confidently online.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "24/7",
                heading: "Technical Support",
                desc: "Continuous support, maintenance, and monitoring.",
              },
              {
                title: "Fast",
                heading: "Performance Systems",
                desc: "Optimized websites designed for speed and usability.",
              },
              {
                title: "Smart",
                heading: "Business Understanding",
                desc: "Strategic planning based on market and user behavior.",
              },
              {
                title: "Growth",
                heading: "Scalable Infrastructure",
                desc: "Digital systems designed for long-term scalability.",
              },
            ].map((item) => (
              <article
                key={item.heading}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
              >

                <h3 className="text-3xl font-bold text-brand-blue mb-4">
                  {item.title}
                </h3>

                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.heading}
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= LOCATIONS ================= */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={16} />
            Serving Businesses Across India
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Hyderabad To Vizag — We Build Everywhere
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            MrTechies works with startups, educational institutes,
            local businesses, and growing brands across Hyderabad,
            Telangana, Visakhapatnam, Vijayawada, and Andhra Pradesh
            delivering scalable digital solutions remotely.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Hyderabad",
              "Telangana",
              "Visakhapatnam",
              "Vijayawada",
              "Andhra Pradesh",
            ].map((city) => (
              <span
                key={city}
                className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-medium"
              >
                {city}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-slate-600">
              Common questions about our web development,
              SEO, ERP, CRM, and automation services.
            </p>

          </div>

          <div className="space-y-6">

            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8"
              >

                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {faq.q}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-28 px-6 pt-24">

        <div className="max-w-7xl mx-auto bg-gradient-to-r from-brand-blue to-blue-700 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">

          <div className="relative z-10">

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready To Scale Your Business Online?
            </h2>

            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-12">
              Let’s build a high-performance digital platform
              designed for speed, visibility, automation,
              scalability, and long-term business growth.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-brand-blue px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-[1.03] transition"
            >
              Talk With MrTechies
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}