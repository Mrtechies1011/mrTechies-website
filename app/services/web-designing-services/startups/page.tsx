
import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Startup Landing Page Design Company in Hyderabad | MrTechies",
  description:
    "MrTechies designs high-converting startup landing pages in Hyderabad with clear messaging, modern UI/UX, responsive layouts, and conversion-focused user journeys.",
  alternates: {
    canonical:
      "https://mrtechies.com/services/web-designing-services/startups",
  },
  openGraph: {
    title: "Startup Landing Page Design Company in Hyderabad | MrTechies",
    description:
      "Conversion-focused startup landing page design for SaaS companies, new businesses, and growing brands in Hyderabad.",
    url: "https://mrtechies.com/services/web-designing-services/startups",
    siteName: "MrTechies",
    type: "website",
  },
};

/* ===================== PAGE ===================== */
export default function StartupLandingPagesPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-orange-50/60 via-white to-sky-50 py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800">
            Startup & SaaS Website Design
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-sky-950 md:text-6xl">
            Startup Landing Page Design Company in Hyderabad
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            We design modern startup landing pages that explain your product
            clearly, build trust quickly, and guide visitors toward meaningful
            actions. MrTechies creates responsive and conversion-focused
            landing page experiences for startups, SaaS products, and growing
            businesses.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-orange-600"
            >
              Start Your Landing Page
            </Link>

            <Link
              href="/services/web-designing-services"
              className="inline-block rounded-xl border border-sky-200 bg-white px-8 py-4 font-semibold text-sky-950 transition-colors duration-200 hover:bg-sky-50"
            >
              Explore Web Design Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Turn Your Startup Idea Into a Clear Digital Experience
            </h2>

            <p className="leading-relaxed text-gray-600">
              A startup website needs to communicate value quickly. Visitors
              should understand what you offer, who it is for, and why they
              should take the next step without having to search through
              unnecessary information.
            </p>

            <p className="leading-relaxed text-gray-600">
              Our startup landing page design approach combines visual
              hierarchy, clear messaging, intuitive navigation, responsive
              layouts, and strategically placed calls to action. The result is
              a website experience built around your product and business
              objectives.
            </p>

            <p className="leading-relaxed text-gray-600">
              Whether you are launching a SaaS product, validating a new
              business idea, promoting a service, or preparing for your next
              stage of growth, we create a landing page that gives your startup
              a professional digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 text-lg font-bold text-orange-500">
                Clear Messaging
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Organize your product value proposition so visitors can quickly
                understand what your startup offers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 text-lg font-bold text-sky-800">
                Conversion Paths
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Create logical user journeys that guide visitors toward demos,
                enquiries, registrations, purchases, or other key actions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 text-lg font-bold text-sky-800">
                Responsive UI
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Deliver a consistent experience across smartphones, tablets,
                laptops, and desktop screens.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 text-lg font-bold text-orange-500">
                Scalable Design
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Build a flexible visual system that can evolve as your startup,
                product, and content grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO IT IS FOR ================= */}
      <section className="border-y border-slate-200/70 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-sky-950 md:text-4xl">
              Landing Page Design for Growing Startups
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Different startup stages require different website experiences.
              We structure the design around your audience, product, offer,
              and conversion goal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950">
                SaaS Startups
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Explain software products, key benefits, features, pricing,
                integrations, and calls to action through a focused experience.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950">
                New Businesses
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Establish a professional online presence and introduce your
                new business to potential customers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950">
                Product Launches
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Create dedicated landing experiences for new products,
                campaigns, announcements, and market launches.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950">
                Startup Services
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Present consulting, technology, marketing, and professional
                services through a focused business landing page.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950">
                Lead Generation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Structure landing pages around enquiries, consultations,
                registrations, demos, and other measurable business actions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-sky-950">
                MVP Websites
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Launch a focused digital presence while keeping the structure
                flexible for future product and business expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-sky-950 md:text-4xl">
            What Your Startup Landing Page Can Include
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Every landing page is structured around the product, audience, and
            action you want visitors to take.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "High-Impact Hero Section",
              text: "Introduce your product, value proposition, and primary call to action immediately.",
            },
            {
              title: "Product & Feature Sections",
              text: "Present important product capabilities in a simple and easy-to-scan structure.",
            },
            {
              title: "Social Proof",
              text: "Showcase testimonials, client logos, statistics, reviews, or other trust signals.",
            },
            {
              title: "Conversion-Focused CTAs",
              text: "Use strategically placed calls to action throughout the visitor journey.",
            },
            {
              title: "Pricing & Plans",
              text: "Present subscription plans or service packages with clear comparison points.",
            },
            {
              title: "Lead Capture",
              text: "Connect forms and enquiry paths to help turn website visitors into potential leads.",
            },
            {
              title: "FAQ Sections",
              text: "Address common questions and remove hesitation before visitors take action.",
            },
            {
              title: "Analytics Integration",
              text: "Prepare the website for tracking user interactions and important conversion events.",
            },
            {
              title: "Mobile-First Experience",
              text: "Make sure your landing page remains easy to use across modern mobile devices.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-sky-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DESIGN APPROACH ================= */}
      <section className="bg-sky-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Our Design Approach
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                Design the Journey, Not Just the Page
              </h2>

              <p className="mt-6 leading-relaxed text-sky-100">
                A successful startup landing page needs more than attractive
                visuals. Its sections should work together to move visitors
                from initial interest to understanding, trust, and action.
              </p>

              <p className="mt-5 leading-relaxed text-sky-100">
                We combine structured content hierarchy with purposeful UI
                elements so your website communicates your startup story
                without unnecessary complexity.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-black text-orange-400">01</div>
                <h3 className="mt-3 font-bold">Understand</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100">
                  Understand your product, audience, positioning, and primary
                  business objective.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-black text-orange-400">02</div>
                <h3 className="mt-3 font-bold">Structure</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100">
                  Organize content and page sections into a logical visitor
                  journey.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-black text-orange-400">03</div>
                <h3 className="mt-3 font-bold">Design</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100">
                  Create the visual system, UI components, layouts, and
                  responsive experience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-black text-orange-400">04</div>
                <h3 className="mt-3 font-bold">Refine</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100">
                  Refine spacing, hierarchy, responsiveness, and conversion
                  paths before launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HYDERABAD ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Hyderabad Startup Web Design
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Startup Website Design Built for Modern Businesses
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Hyderabad has a growing ecosystem of technology companies,
              founders, SaaS businesses, service providers, and emerging
              brands. Your website needs to communicate your value clearly
              while presenting your startup with a polished and credible
              digital identity.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              MrTechies creates startup landing pages that combine modern
              visual design with practical business objectives. From an MVP
              landing page to a product launch website, we can structure the
              experience around your stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sky-950 md:text-4xl">
              Startup Landing Page Design FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Common questions about designing a landing page for a startup.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <details className="rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer font-bold text-sky-950">
                Can you design a landing page for an early-stage startup?
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Yes. We can create focused landing pages for early-stage
                startups, MVPs, product validation, service launches, and new
                business ideas.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer font-bold text-sky-950">
                Can you design SaaS landing pages?
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Yes. SaaS landing pages can include product features, use
                cases, pricing, integrations, testimonials, FAQs, and
                conversion-focused calls to action.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer font-bold text-sky-950">
                Will the landing page work on mobile devices?
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Yes. Responsive design is built into the layout so the page can
                provide a consistent experience across mobile, tablet, and
                desktop screens.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer font-bold text-sky-950">
                Can the landing page be expanded later?
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Yes. The design can be structured with scalability in mind so
                additional pages, features, sections, and product information
                can be added as the startup grows.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-sky-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to Build Your Startup Landing Page?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-sky-100">
            Tell us about your startup, product, audience, and goals. We will
            help you plan a professional landing page designed around your
            business objectives.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Request a Consultation
            </Link>

            <Link
              href="/services/web-designing-services"
              className="rounded-xl border border-sky-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-sky-900"
            >
              View Web Designing Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}