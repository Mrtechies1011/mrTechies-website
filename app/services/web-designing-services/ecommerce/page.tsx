
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce Website Design Company in Hyderabad | MrTechies",
  description:
    "MrTechies provides ecommerce website design services in Hyderabad with conversion-focused UI/UX, responsive layouts, intuitive navigation, and scalable online store experiences.",

  alternates: {
    canonical:
      "https://mrtechies.com/services/web-designing-services/ecommerce",
  },

  openGraph: {
    title: "Ecommerce Website Design Company in Hyderabad | MrTechies",
    description:
      "Conversion-focused ecommerce website design in Hyderabad with responsive UI/UX, intuitive shopping experiences, and scalable online store layouts.",
    url:
      "https://mrtechies.com/services/web-designing-services/ecommerce",
    siteName: "MrTechies",
    type: "website",
  },
};

export default function EcommerceUIDesignPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-sky-900 via-sky-950 to-slate-950 py-24 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            Ecommerce Website Design
          </span>

          <h1
            id="hero-heading"
            className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ecommerce Website Design Company in Hyderabad
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            We design ecommerce websites that make it easier for customers
            to discover products, understand your brand, and complete their
            purchases across mobile and desktop devices.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              Discuss Your Ecommerce Website
            </Link>

            <Link
              href="/services/web-designing-services"
              className="inline-block rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
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
              Ecommerce Web Design Services
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Design an online store around how customers actually shop
            </h2>

            <p className="leading-relaxed text-gray-600">
              An ecommerce website needs to do more than display products.
              Customers should be able to find what they want, understand
              product information, compare options, and move through checkout
              without unnecessary friction.
            </p>

            <p className="leading-relaxed text-gray-600">
              MrTechies provides{" "}
              <strong className="text-sky-900">
                ecommerce website design services in Hyderabad
              </strong>{" "}
              focused on clear product presentation, intuitive navigation,
              responsive layouts, and user experiences designed around your
              store&apos;s goals.
            </p>

          </div>


          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <h3 className="mb-6 text-xl font-bold text-sky-950">
              Key Ecommerce Design Priorities
            </h3>

            <ul className="space-y-5 text-sm text-gray-700">

              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-500">✓</span>
                <span>
                  <strong>Simple product discovery</strong>
                  <br />
                  Help shoppers find relevant products through clear
                  categories, search, and filtering.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-500">✓</span>
                <span>
                  <strong>Clear product presentation</strong>
                  <br />
                  Organize images, pricing, specifications, variations, and
                  important product information effectively.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-500">✓</span>
                <span>
                  <strong>Mobile-first shopping</strong>
                  <br />
                  Create shopping experiences that work smoothly across
                  smartphones, tablets, and desktops.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-500">✓</span>
                <span>
                  <strong>Clear purchase journeys</strong>
                  <br />
                  Make important actions such as adding products to the cart
                  and starting checkout easy to understand.
                </span>
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* ================= SHOPPING EXPERIENCE ================= */}

      <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Ecommerce UI/UX
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Build a shopping experience that keeps the journey simple
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Good ecommerce UI/UX reduces unnecessary steps and helps
              shoppers understand what to do next. We structure interfaces
              around product discovery, product evaluation, cart management,
              and checkout.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="text-2xl font-black text-orange-500">
                01
              </div>

              <h3 className="mt-4 font-bold text-sky-950">
                Product Discovery
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Categories, search, filters, and navigation designed to help
                shoppers reach relevant products quickly.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="text-2xl font-black text-orange-500">
                02
              </div>

              <h3 className="mt-4 font-bold text-sky-950">
                Product Pages
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Clear layouts for product images, descriptions, pricing,
                variants, specifications, and purchase actions.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="text-2xl font-black text-orange-500">
                03
              </div>

              <h3 className="mt-4 font-bold text-sky-950">
                Cart Experience
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                A straightforward cart interface that lets shoppers review
                products, quantities, prices, and next steps.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="text-2xl font-black text-orange-500">
                04
              </div>

              <h3 className="mt-4 font-bold text-sky-950">
                Checkout Flow
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Focused checkout layouts that keep essential information and
                actions easy to understand.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DESIGN FEATURES ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              What We Design
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Ecommerce website interfaces built around your products
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Every store has different products, customers, and purchasing
              requirements. We create layouts that reflect your brand while
              keeping the shopping experience clear and consistent.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Homepage Design
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Introduce your brand, categories, offers, and important
                products through a structured homepage.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Product Listing Pages
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Organize products using practical grids, sorting, categories,
                and filtering options.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Product Detail Pages
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Present product information in a format that helps customers
                evaluate their purchase.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Cart & Checkout
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Design focused interfaces for reviewing orders and completing
                purchases.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Mobile Ecommerce UI
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Responsive shopping experiences designed for smaller screens
                and touch interactions.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Ecommerce Website Redesign
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Improve an existing store with clearer navigation, updated
                layouts, and a more consistent user experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PERFORMANCE ================= */}

      <section className="bg-sky-950 py-20 text-white md:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-400">
            Performance & Responsive Design
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            Ecommerce design that works across devices
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-slate-300">
            Shoppers can visit an online store from many different devices
            and network conditions. Our responsive design approach focuses on
            usable layouts, accessible content, efficient interfaces, and
            consistent shopping experiences across mobile and desktop.
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold">
                Responsive Layouts
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Interfaces adapt to different screen sizes without losing
                important content or actions.
              </p>

            </div>


            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold">
                Performance-Aware Design
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Design decisions consider efficient assets, page structure,
                and the overall user experience.
              </p>

            </div>


            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold">
                Search-Friendly Structure
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Clear content and page structures help users and search
                engines understand your store.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Our Ecommerce Design Process
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
            From store requirements to a complete shopping experience
          </h2>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 p-6">

            <span className="text-sm font-black text-orange-500">
              STEP 01
            </span>

            <h3 className="mt-3 font-bold text-sky-950">
              Understand
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We understand your products, customers, business model, and
              ecommerce requirements.
            </p>

          </div>


          <div className="rounded-2xl border border-gray-200 p-6">

            <span className="text-sm font-black text-orange-500">
              STEP 02
            </span>

            <h3 className="mt-3 font-bold text-sky-950">
              Structure
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We plan the information architecture, navigation, product
              journeys, and important page sections.
            </p>

          </div>


          <div className="rounded-2xl border border-gray-200 p-6">

            <span className="text-sm font-black text-orange-500">
              STEP 03
            </span>

            <h3 className="mt-3 font-bold text-sky-950">
              Design
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We create the visual interface and responsive layouts around
              your brand and customer experience.
            </p>

          </div>


          <div className="rounded-2xl border border-gray-200 p-6">

            <span className="text-sm font-black text-orange-500">
              STEP 04
            </span>

            <h3 className="mt-3 font-bold text-sky-950">
              Refine
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We review the experience and refine layouts before development
              or final implementation.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Ecommerce Web Design FAQ
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-sky-950 md:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Do you provide custom ecommerce UI design?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Yes. We can create custom ecommerce interfaces based on your
                brand identity, product categories, customer journey, and
                business requirements.
              </p>

            </div>


            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Can you redesign an existing ecommerce website?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Yes. We can review an existing store and redesign its
                navigation, product pages, responsive layouts, and overall
                shopping experience.
              </p>

            </div>


            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Is ecommerce design mobile-friendly?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our ecommerce interfaces are designed with responsive
                experiences in mind so customers can browse and interact with
                the store across different screen sizes.
              </p>

            </div>


            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Do you also provide ecommerce development?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Yes. Ecommerce design can be combined with website development
                depending on your project requirements and chosen technology
                stack.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="bg-orange-500 py-20 text-center text-white md:py-24">

        <div className="mx-auto max-w-3xl px-6">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-100">
            Start Your Ecommerce Project
          </span>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Ready to build a better online store?
          </h2>

          <p className="mt-5 leading-relaxed text-orange-100">
            Tell us about your products, customers, and ecommerce goals. We
            can help you plan a professional online store experience designed
            around your business.
          </p>

          <div className="mt-8">

            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-sky-950 px-8 py-4 font-semibold text-white transition-colors hover:bg-sky-900"
            >
              Talk to MrTechies
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
