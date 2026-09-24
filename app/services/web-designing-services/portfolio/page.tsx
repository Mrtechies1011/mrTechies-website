
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Website Design Company in Hyderabad | MrTechies",
  description:
    "MrTechies designs professional portfolio websites in Hyderabad for creators, professionals, founders, and personal brands with custom UI/UX, responsive layouts, and strong visual presentation.",

  alternates: {
    canonical:
      "https://mrtechies.com/services/web-designing-services/portfolio",
  },

  openGraph: {
    title: "Portfolio Website Design Company in Hyderabad | MrTechies",
    description:
      "Professional portfolio website design in Hyderabad for creators, professionals, founders, and personal brands.",
    url:
      "https://mrtechies.com/services/web-designing-services/portfolio",
    siteName: "MrTechies",
    type: "website",
  },
};

export default function PersonalPortfolioBrandPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50/40 py-24 md:py-28">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-500">
            Portfolio & Personal Brand Websites
          </span>

          <h1
            id="hero-heading"
            className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-sky-950 sm:text-5xl lg:text-6xl"
          >
            Portfolio Website Design Company in Hyderabad
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            We design professional portfolio websites that showcase your work,
            communicate your expertise, and create a strong digital presence
            for your personal brand.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-block rounded-xl bg-sky-950 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-sky-900"
            >
              Discuss Your Portfolio
            </Link>

            <Link
              href="/services/web-designing-services"
              className="inline-block rounded-xl border border-slate-200 bg-white px-8 py-4 font-semibold text-sky-950 transition-colors hover:bg-slate-50"
            >
              Explore Web Design Services
            </Link>

          </div>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="space-y-6">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Personal Portfolio Web Design
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Turn your experience and work into a professional digital
              portfolio
            </h2>

            <p className="leading-relaxed text-gray-600">
              A portfolio website gives people a central place to understand
              who you are, what you do, and the quality of your work. Instead
              of relying only on social profiles or third-party platforms, you
              can present your experience through a website built around your
              own identity.
            </p>

            <p className="leading-relaxed text-gray-600">
              MrTechies provides{" "}
              <strong className="text-sky-900">
                portfolio website design services in Hyderabad
              </strong>{" "}
              for professionals, creators, founders, freelancers, consultants,
              photographers, designers, and other individuals who want a
              polished online presence.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-bold text-sky-950">
                Personal Identity
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Build a website that reflects your personal style, expertise,
                experience, and professional identity.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-bold text-orange-500">
                Work Showcase
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Present projects, case studies, images, videos, achievements,
                and other work in a structured format.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-bold text-orange-500">
                Professional Presence
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Give potential clients, employers, collaborators, or partners
                a clear place to learn more about you.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-bold text-sky-950">
                Mobile Experience
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Create a responsive portfolio that works across smartphones,
                tablets, laptops, and desktop screens.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHO IS IT FOR ================= */}

      <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Who We Design For
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Portfolio websites for professionals and creative brands
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Your portfolio should be designed around what you want people to
              see, understand, and do. We create flexible website experiences
              for different types of personal brands.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold text-sky-950">
                Designers & Creators
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Showcase creative projects, visual work, design systems,
                illustrations, and selected case studies.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold text-sky-950">
                Freelancers
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Present your services, previous work, testimonials, expertise,
                and contact information in one professional website.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold text-sky-950">
                Founders & Executives
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Create a professional personal website for your experience,
                achievements, speaking, publications, and professional profile.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold text-sky-950">
                Photographers
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Organize photography collections and visual projects through
                galleries designed around your style.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold text-sky-950">
                Developers
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Showcase technical projects, skills, experience, GitHub work,
                and professional achievements.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold text-sky-950">
                Consultants & Professionals
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Build credibility through a structured presentation of your
                expertise, services, experience, and professional background.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Portfolio Website Features
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Everything your personal portfolio needs to tell your story
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              We combine visual design, content structure, responsive
              development, and clear navigation to create a portfolio that
              presents your work without unnecessary complexity.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Personal Homepage
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Introduce yourself, your expertise, and your primary value
                proposition immediately.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Project Showcase
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Present selected projects with images, descriptions, results,
                technologies, or other relevant details.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Case Studies
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Explain the challenge, process, solution, and outcome behind
                important projects.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                About & Experience
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Organize your professional background, experience,
                qualifications, and achievements.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Media Integration
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Include photography, videos, articles, social profiles, or
                other relevant media.
              </p>

            </div>


            <div className="rounded-xl border border-gray-200 p-6">

              <h3 className="font-bold text-sky-950">
                Contact & Enquiries
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Give visitors a simple way to contact you for projects,
                opportunities, collaborations, or enquiries.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DESIGN APPROACH ================= */}

      <section className="bg-sky-950 py-20 text-white md:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-400">
            Custom Portfolio Design
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            Your portfolio should look like you, not a generic template
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-slate-300">
            We create portfolio interfaces around your content, visual
            identity, audience, and professional goals. Typography, spacing,
            project presentation, navigation, and visual hierarchy are
            planned to create a consistent experience.
          </p>


          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold">
                Visual Identity
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Design elements that create consistency across your personal
                website and professional presence.
              </p>

            </div>


            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold">
                Content Hierarchy
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Organize your work and experience so visitors can understand
                the most important information quickly.
              </p>

            </div>


            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold">
                Responsive Design
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Ensure your portfolio remains usable and visually consistent
                across different screen sizes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Our Portfolio Design Process
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
            From your ideas to a polished personal website
          </h2>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 p-6">

            <span className="text-sm font-black text-orange-500">
              STEP 01
            </span>

            <h3 className="mt-3 font-bold text-sky-950">
              Discover
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Understand your profession, audience, work, goals, and personal
              brand direction.
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
              Plan the pages, navigation, portfolio sections, content
              hierarchy, and user journey.
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
              Create the visual interface, typography, layouts, project
              presentation, and responsive experience.
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
              Review the website experience and refine important details
              before development or final implementation.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Portfolio Website FAQ
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-sky-950 md:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Do you design custom portfolio websites?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Yes. We design portfolio websites around your profession,
                content, visual identity, audience, and goals rather than
                relying entirely on a generic layout.
              </p>

            </div>


            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Who can benefit from a portfolio website?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Designers, developers, photographers, freelancers, consultants,
                founders, executives, creators, and other professionals can
                use a portfolio website to present their work and expertise.
              </p>

            </div>


            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Can you redesign my existing portfolio?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Yes. An existing portfolio can be redesigned with improved
                navigation, content structure, visual hierarchy, responsive
                layouts, and a more consistent user experience.
              </p>

            </div>


            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold text-sky-950">
                Can my portfolio include videos and project galleries?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Yes. Portfolio websites can include project galleries, videos,
                case studies, articles, social profiles, testimonials, and
                other relevant content.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="bg-orange-500 py-20 text-center text-white md:py-24">

        <div className="mx-auto max-w-3xl px-6">

          <span className="text-sm font-bold uppercase tracking-wider text-orange-100">
            Build Your Portfolio
          </span>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Ready to put your work online?
          </h2>

          <p className="mt-5 leading-relaxed text-orange-100">
            Tell us about your work, professional goals, and the type of
            portfolio you want to build. We can help you create a website that
            presents your expertise and projects professionally.
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