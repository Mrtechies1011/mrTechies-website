import { Metadata } from "next";
import Link from "next/link";
import HeroClient from "@/components/HeroClient";
import Script from "next/script";
import {
  Rocket,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Store,
  CheckCircle2,
  ArrowRight,
  Globe,
  Search,
  LayoutDashboard,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  Video
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "MrTechies | Web Development, SEO & Digital Marketing Company in Hyderabad",
  description:
    "MrTechies helps startups and businesses grow through modern web development, SEO services, digital marketing, branding, YouTube SEO, and scalable digital solutions in Hyderabad.",
  keywords: [
    "Web Development Company Hyderabad",
    "SEO Services Hyderabad",
    "Digital Marketing Company Hyderabad",
    "Web Designing Hyderabad",
    "YouTube SEO Services",
    "Business Growth Company Hyderabad",
    "CRM ERP Development India",
    "Local SEO Hyderabad",
    "Ecommerce Development Hyderabad",
    "Website Design Company Telangana",
  ],
  openGraph: {
    title: "MrTechies | Build, Grow & Scale Your Business",
    description:
      "Business-focused web development, SEO, digital marketing, and scalable digital systems for startups and growing companies.",
    url: "https://mrtechies.com",
    siteName: "MrTechies",
    type: "website",
  },
  alternates: {
    canonical: "https://mrtechies.com",
  },
};

const INDUSTRIES = [
  {
    label: "Startups",
    icon: Rocket,
    desc: "Scalable digital foundations for growing startups.",
  },
  {
    label: "Real Estate",
    icon: Building2,
    desc: "Lead-focused websites & SEO for real estate businesses.",
  },
  {
    label: "Healthcare",
    icon: HeartPulse,
    desc: "Digital visibility solutions for clinics & hospitals.",
  },
  {
    label: "Education",
    icon: GraduationCap,
    desc: "Web & marketing systems for institutes and coaching centers.",
  },
  {
    label: "E-commerce",
    icon: ShoppingBag,
    desc: "Performance-focused ecommerce experiences.",
  },
  {
    label: "Local Businesses",
    icon: Store,
    desc: "Google visibility & lead generation for local brands.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <HeroClient />


      {/* ================= TRUST BAR ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            {[
              ["100+", "Projects Delivered"],
              ["5+", "Years Experience"],
              ["SEO-First", "Development Approach"],
              ["Pan-India", "Business Support"],
            ].map(([value, label], index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <h2 className="text-4xl font-bold text-brand-blue mb-3">
                  {value}
                </h2>

                <p className="text-gray-600 font-medium">
                  {label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ================= STICKY INTERNSHIP CTA ================= */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-50">

        <div className="bg-white border shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-4">

          <div>
            <p className="text-sm font-semibold text-brand-blue">
              🎓 Summer Internship 2026
            </p>

            <p className="text-xs text-gray-500">
              60 Days Online Training + Certificate + Placement Support
            </p>
          </div>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdptuzktYlRqbB1q6ZwF76d9lHJWD1PYaaC0MZ-Xe0P03lXGA/viewform"
            target="_blank"
            className="bg-brand-orange text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-600"
          >
            Apply
          </Link>

        </div>
      </div>

      {/* ================= ABOUT / VALUE ================= */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 text-white">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm text-brand-orange mb-8">
                🚀 Hyderabad-Based Digital Growth Company
              </span>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                We Build More Than Websites.
                <span className="block text-brand-orange mt-2">
                  We Build Business Growth Systems.
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                MrTechies helps startups, local businesses, ecommerce brands,
                and growing companies launch, scale, and dominate online using
                web development, SEO, automation, and digital marketing.
              </p>

              <p className="text-gray-400 leading-relaxed mb-12">
                We combine strategy, modern technology, performance optimization,
                content, and marketing to help businesses generate visibility,
                trust, leads, and long-term digital growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">

                {[
                  "SEO-Friendly Development",
                  "Fast Loading Websites",
                  "Conversion-Focused UX",
                  "Scalable Business Systems",
                  "Modern UI & Branding",
                  "Long-Term Technical Support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                  >
                    <CheckCircle2 className="text-brand-orange shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

              <div className="flex flex-wrap gap-5 mt-12">

                <Link
                  href="/contact"
                  className="bg-brand-orange hover:bg-orange-600 transition-all px-8 py-4 rounded-2xl font-semibold"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/services"
                  className="border border-white/20 hover:bg-white/10 transition-all px-8 py-4 rounded-2xl font-semibold"
                >
                  Explore Services
                </Link>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-6">

              {[
                {
                  title: "Web Development",
                  icon: Globe,
                  desc: "Fast, scalable websites optimized for SEO & conversions.",
                },
                {
                  title: "SEO Services",
                  icon: Search,
                  desc: "Improve Google rankings, traffic, and business visibility.",
                },
                {
                  title: "Digital Marketing",
                  icon: BarChart3,
                  desc: "Performance-driven campaigns that generate leads.",
                },
                {
                  title: "CRM & ERP",
                  icon: LayoutDashboard,
                  desc: "Automation systems built for operational efficiency.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center mb-6">
                    <item.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mb-20">

            <span className="text-brand-orange uppercase tracking-widest font-semibold">
              Our Expertise
            </span>

            <h2 className="text-5xl font-bold text-brand-blue mt-5 mb-6">
              Complete Digital Solutions for Modern Businesses
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              We help businesses establish a powerful digital presence through
              modern websites, SEO strategies, branding, marketing, and scalable
              business systems.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Web Designing",
                desc: "Modern UI/UX systems designed for trust, engagement, and conversions.",
                href: "/services/web-designing-services",
                icon: MonitorSmartphone,
              },
              {
                title: "Web Development",
                desc: "Fast, scalable, SEO-ready websites and web applications.",
                href: "/services/web-development-services",
                icon: Globe,
              },
              {
                title: "SEO Services",
                desc: "Local SEO, technical SEO, content SEO & Google rankings.",
                href: "/services/seo-services",
                icon: Search,
              },
              {
                title: "Digital Marketing",
                desc: "Marketing systems designed to increase leads and visibility.",
                href: "/services/digital-marketing-services",
                icon: BarChart3,
              },
              {
                title: "CRM & ERP Solutions",
                desc: "Automation and workflow systems for operational efficiency.",
                href: "/services/crm-erp-development-services",
                icon: LayoutDashboard,
              },
              {
                title: "Branding & Content",
                desc: "Content strategies and creative systems that build authority.",
                href: "/services/branding&content-services",
                icon: ShieldCheck,
              },
              {
                title: "Video Editing",
                desc: "Retention-optimized editing for YouTube, Reels, and corporate content.",
                href: "/services/video-editing-services",
                icon: Video,
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-brand-orange font-semibold gap-2">
                  Learn More
                  <ArrowRight size={18} />
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mb-20">

            <span className="text-brand-orange uppercase tracking-widest font-semibold">
              Industries We Serve
            </span>

            <h2 className="text-5xl font-bold text-brand-blue mt-5 mb-6">
              Tailored Solutions for Different Industries
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Every industry has unique customer behavior, competition,
              and growth challenges. We build customized digital strategies
              based on your business goals.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {INDUSTRIES.map(({ label, icon: Icon, desc }, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-all">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                  {label}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-24">

            <span className="text-brand-orange uppercase tracking-widest font-semibold">
              Our Process
            </span>

            <h2 className="text-5xl font-bold text-brand-blue mt-5 mb-6">
              A Proven Workflow Designed for Results
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              We follow a strategic process that ensures clarity, scalability,
              performance, and measurable business growth.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                step: "01",
                title: "Discover",
                desc: "Research your business, audience, competitors, and goals.",
              },
              {
                step: "02",
                title: "Strategize",
                desc: "Plan SEO, UX, branding, and growth-focused architecture.",
              },
              {
                step: "03",
                title: "Develop",
                desc: "Build fast, scalable, and SEO-optimized digital systems.",
              },
              {
                step: "04",
                title: "Launch & Scale",
                desc: "Monitor performance, optimize continuously, and grow.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >

                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-orange to-orange-400 rounded-t-3xl"></div>

                <span className="text-brand-orange font-bold text-sm tracking-widest">
                  STEP {item.step}
                </span>

                <h3 className="text-2xl font-bold text-brand-blue mt-5 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-32 bg-brand-blue text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

          <span className="text-brand-orange uppercase tracking-widest font-semibold">
            Service Locations
          </span>

          <h2 className="text-5xl font-bold mt-5 mb-8">
            Serving Businesses Across Hyderabad,
            Telangana & Andhra Pradesh
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            MrTechies provides web development, SEO services,
            web designing, digital marketing, ecommerce development,
            and business automation solutions for startups and businesses
            across Hyderabad, Vizag, Vijayawada, Telangana, and Andhra Pradesh.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/seo-services-hyderabad"
              className="bg-brand-orange hover:bg-orange-600 transition-all px-8 py-4 rounded-2xl font-semibold"
            >
              Explore SEO Services
            </Link>

            <Link
              href="/web-designing-services-hyderabad"
              className="border border-white/20 hover:bg-white/10 transition-all px-8 py-4 rounded-2xl font-semibold"
            >
              Web Designing Services
            </Link>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="text-brand-orange uppercase tracking-widest font-semibold">
              FAQs
            </span>

            <h2 className="text-5xl font-bold text-brand-blue mt-5 mb-6">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "What services does MrTechies provide?",
                a: "We provide web development, SEO services, digital marketing, branding, YouTube SEO, ecommerce development, CRM systems, and automation solutions.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes. We specialize in helping startups build scalable digital systems and long-term growth strategies.",
              },
              {
                q: "Do you provide SEO services in Hyderabad?",
                a: "Yes. We offer local SEO, technical SEO, content SEO, and Google ranking services for Hyderabad businesses.",
              },
              {
                q: "Can you redesign existing websites?",
                a: "Absolutely. We redesign websites to improve speed, UX, SEO, and conversions.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                  {faq.q}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {faq.a}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 overflow-hidden bg-linear-to-r from-brand-blue to-slate-950 text-white">

        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/20 blur-3xl rounded-full"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <span className="text-brand-orange uppercase tracking-widest font-semibold">
            Let’s Build Something Powerful
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-6 mb-8">
            Ready to Grow Your Business Online?
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Partner with MrTechies to build high-performing digital systems
            that increase visibility, attract customers, and drive long-term growth.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-orange-600 transition-all px-10 py-5 rounded-2xl font-semibold shadow-2xl"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="border border-white/20 hover:bg-white/10 transition-all px-10 py-5 rounded-2xl font-semibold"
            >
              Explore Services
            </Link>

          </div>

        </div>
      </section>
      <Script
        id="internship-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "MrTechies Summer Internship Program 2026",
            description:
              "60-day online internship program for students and professionals in Web Development, SEO, and Digital Marketing with certificate and placement support.",
            provider: {
              "@type": "Organization",
              name: "MrTechies",
              url: "https://mrtechies.com",
            },
            educationalLevel: "Beginner to Advanced",
            courseMode: "Online",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can apply for the internship?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "B.Tech, Degree, PG, Master students and working professionals can apply for the MrTechies internship program.",
                },
              },
              {
                "@type": "Question",
                name: "Is the internship online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, the entire internship is conducted online with live projects and training sessions.",
                },
              },
              {
                "@type": "Question",
                name: "Do I get certificate and placement support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, participants receive internship certificates and placement support after completion.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}