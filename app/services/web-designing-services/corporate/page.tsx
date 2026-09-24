
import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */

export const metadata: Metadata = {
  title: "Corporate Website Design Company in Hyderabad | MrTechies",
  description:
    "MrTechies creates professional corporate websites in Hyderabad with strategic UI/UX, responsive design, fast performance, and scalable website experiences for growing businesses.",

  alternates: {
    canonical:
      "https://mrtechies.com/services/web-designing-services/corporate",
  },

  openGraph: {
    title: "Corporate Website Design Company in Hyderabad | MrTechies",
    description:
      "Professional corporate website design in Hyderabad focused on strong branding, clear user experiences, responsive layouts, and business growth.",
    url:
      "https://mrtechies.com/services/web-designing-services/corporate",
    siteName: "MrTechies",
    type: "website",
  },
};

export default function CorporateWebDesignPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950 text-white py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            Corporate Website Design
          </span>

          <h1
            id="hero-heading"
            className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Corporate Website Design Company in Hyderabad
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Build a professional corporate website that strengthens your
            brand, communicates your value clearly, and gives customers,
            partners, and investors a better digital experience.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              Discuss Your Website
            </Link>

            <Link
              href="/services/web-designing-services"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Web Design Services
            </Link>

          </div>
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-12">

          <div className="space-y-6 lg:col-span-7">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Corporate Web Design Services
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
              A corporate website should represent the way your business
              operates
            </h2>

            <p className="leading-relaxed text-gray-600">
              Your corporate website is often the first place potential
              customers, business partners, investors, and employees learn
              about your company. A professional website should therefore do
              more than display information. It should communicate your brand,
              explain your services, and make important information easy to
              find.
            </p>

            <p className="leading-relaxed text-gray-600">
              MrTechies provides{" "}
              <strong className="text-sky-900">
                corporate website design services in Hyderabad
              </strong>{" "}
              focused on clear navigation, responsive layouts, strong visual
              presentation, and practical user experiences. We design websites
              around your business goals instead of forcing your company into
              a generic template.
            </p>

          </div>


          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-8 lg:col-span-5">

            <h3 className="mb-6 text-xl font-bold text-slate-950">
              What Your Corporate Website Should Deliver
            </h3>

            <ul className="space-y-5 text-sm text-gray-700">

              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-orange-500">✓</span>
                <span>
                  <strong>Clear brand presentation</strong>
                  <br />
                  Communicate your company&apos;s identity and value
                  proposition clearly.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-orange-500">✓</span>
                <span>
                  <strong>Responsive user experience</strong>
                  <br />
                  Provide a consistent experience across phones, tablets,
                  laptops, and desktops.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-orange-500">✓</span>
                <span>
                  <strong>Business-focused navigation</strong>
                  <br />
                  Help visitors quickly find services, company information,
                  contact details, and important resources.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 font-bold text-orange-500">✓</span>
                <span>
                  <strong>Scalable website structure</strong>
                  <br />
                  Create a foundation that can grow with your business.
                </span>
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* ================= WHY CORPORATE DESIGN ================= */}

      <section className="bg-slate-50 py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Designed Around Your Business
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
              Professional design with a clear business purpose
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              A corporate website needs to balance visual quality,
              usability, performance, and business communication. Our design
              process brings these elements together to create a website that
              is easier for visitors to understand and use.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold text-slate-950">
                Brand-Focused Design
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Your website should look and feel consistent with your
                company&apos;s brand. We build layouts around your visual
                identity, messaging, services, and target audience.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold text-slate-950">
                Strategic UI/UX
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                We structure pages and navigation so visitors can understand
                your business and reach important information without
                unnecessary friction.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold text-slate-950">
                Responsive Experience
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Your corporate website is designed to work across different
                screen sizes, providing a consistent experience for mobile and
                desktop visitors.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold text-slate-950">
                Conversion-Focused Layouts
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Important actions such as contacting your company, requesting
                information, or exploring services are given clear and
                accessible paths.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold text-slate-950">
                Performance-Conscious Development
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                We consider page structure, responsive behavior, asset usage,
                and implementation choices that support a smooth website
                experience.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-xl font-bold text-slate-950">
                Search-Friendly Structure
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                We create clear page structures and meaningful content
                sections so visitors and search engines can better understand
                what your company offers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-5">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Corporate Website Solutions
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
              Corporate websites designed for different business needs
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Whether you are launching a new company website, updating an
              existing digital presence, or building a larger corporate
              platform, the website structure should match the way your
              organization communicates with its audience.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">

            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-slate-950">
                Corporate Company Websites
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Professional websites for companies that need a stronger
                online presence.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-slate-950">
                Business Service Websites
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Structured websites that clearly present services,
                capabilities, and business information.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-slate-950">
                Enterprise Website Interfaces
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Scalable page structures for organizations with larger
                content and navigation requirements.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-slate-950">
                Website Redesign
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Modernize outdated websites with improved layouts,
                navigation, responsiveness, and user experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HYDERABAD ================= */}

      <section className="bg-sky-950 py-20 text-white md:py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-orange-400">
                Hyderabad Web Design
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                Corporate website design for businesses in Hyderabad
              </h2>

            </div>


            <div className="space-y-5 text-slate-300">

              <p className="leading-relaxed">
                MrTechies works with businesses that want a professional
                digital presence supported by thoughtful website design and
                development.
              </p>

              <p className="leading-relaxed">
                Our approach combines visual design, user experience,
                responsive development, content structure, and technical
                implementation to create websites that support real business
                requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Start Your Project
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
            Ready to build a stronger corporate website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
            Tell us about your company, website requirements, and business
            goals. We can help you plan a corporate website that fits your
            brand and audience.
          </p>

          <div className="mt-8">

            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              Talk to MrTechies
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}