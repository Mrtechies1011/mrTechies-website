import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Search,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";

import { blogs } from "@/data/blogs";

const SITE_URL = "https://mrtechies.com";
const BLOG_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Development Insights | MrTechies",

  description:
    "Explore practical guides from MrTechies on SEO, web development, digital marketing, website design, CRM, automation, content and online business growth.",

  alternates: {
    canonical: BLOG_URL,
  },

  openGraph: {
    title: "MrTechies Insights | SEO, Web Development & Digital Marketing",
    description:
      "Practical insights on SEO, websites, digital marketing, content, automation and technology to help businesses build a stronger digital presence.",
    url: BLOG_URL,
    siteName: "MrTechies",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary",
    title: "MrTechies Insights | SEO, Web Development & Digital Marketing",
    description:
      "Practical guides on SEO, websites, marketing, automation and digital business growth.",
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

  category: "Technology and Digital Marketing",

  creator: "MrTechies",
  publisher: "MrTechies",

  other: {
    "content-language": "en-IN",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() -
      new Date(a.publishedDate).getTime()
  );

  const featuredBlog =
    sortedBlogs.find((blog) => blog.featured) ?? sortedBlogs[0];

  const remainingBlogs = sortedBlogs.filter(
    (blog) => blog.slug !== featuredBlog?.slug
  );

  /*
   * Blog listing / collection schema.
   *
   * Individual BlogPosting / Article schema should be placed
   * inside /blog/[slug]/page.tsx because that schema describes
   * the actual article page.
   */
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BLOG_URL}#webpage`,
        url: BLOG_URL,
        name: "MrTechies Insights",
        description:
          "Practical guides and insights from MrTechies covering SEO, web development, digital marketing, website design, automation and online business growth.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "MrTechies",
        },
        about: [
          {
            "@type": "Thing",
            name: "Search Engine Optimization",
          },
          {
            "@type": "Thing",
            name: "Web Development",
          },
          {
            "@type": "Thing",
            name: "Digital Marketing",
          },
          {
            "@type": "Thing",
            name: "Website Design",
          },
          {
            "@type": "Thing",
            name: "Business Automation",
          },
        ],
        mainEntity: {
          "@id": `${BLOG_URL}#articles`,
        },
      },

      {
        "@type": "ItemList",
        "@id": `${BLOG_URL}#articles`,
        name: "MrTechies Articles",
        numberOfItems: sortedBlogs.length,

        itemListElement: sortedBlogs.map((blog, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/blog/${blog.slug}`,
          name: blog.title,
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${BLOG_URL}#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: BLOG_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <main className="overflow-hidden bg-white text-gray-800">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 text-white">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-brand-orange/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
            {/* Visible breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex items-center gap-2 text-sm text-gray-400"
            >
              <Link
                href="/"
                className="transition-colors hover:text-brand-orange"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-white">Insights</span>
            </nav>

            <div className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-brand-orange">
                <BookOpen size={17} />
                MRTECHIES INSIGHTS
              </span>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                Insights for building a stronger{" "}
                <span className="text-brand-orange">
                  digital presence.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
                Practical guides from MrTechies on SEO, website development,
                digital marketing, content, automation and technology —
                created to help businesses make better digital decisions.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/services/seo-services"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  SEO
                </Link>

                <Link
                  href="/services/web-development-services"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  Web Development
                </Link>

                <Link
                  href="/services/digital-marketing-services"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  Digital Marketing
                </Link>

                <Link
                  href="/services/crm-erp-solutions"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  CRM & Automation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOPIC / ENTITY CONTEXT
        ===================================================== */}
        <section
          aria-labelledby="insights-topics-heading"
          className="border-b border-gray-100 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
              <span className="font-semibold uppercase tracking-widest text-brand-orange">
                What We Write About
              </span>

              <h2
                id="insights-topics-heading"
                className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl"
              >
                Practical knowledge across the digital ecosystem
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                MrTechies shares practical knowledge from the areas we work in:
                building digital products, improving search visibility,
                reaching customers and creating scalable business systems.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/services/web-development-services"
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Code2 size={23} />
                </div>

                <h3 className="font-bold text-brand-blue">
                  Websites & Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Development, performance, UX, architecture and modern web
                  technologies.
                </p>
              </Link>

              <Link
                href="/services/seo-services"
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Search size={23} />
                </div>

                <h3 className="font-bold text-brand-blue">
                  SEO & Search Visibility
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Local SEO, technical SEO, content strategy and organic search
                  growth.
                </p>
              </Link>

              <Link
                href="/services/digital-marketing-services"
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <BarChart3 size={23} />
                </div>

                <h3 className="font-bold text-brand-blue">
                  Digital Marketing
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Digital campaigns, content, lead generation and online
                  customer acquisition.
                </p>
              </Link>

              <Link
                href="/services/crm-erp-solutions"
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <LayoutDashboard size={23} />
                </div>

                <h3 className="font-bold text-brand-blue">
                  Business Systems
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  CRM, ERP, automation and digital systems that improve
                  business operations.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED ARTICLE
        ===================================================== */}
        {featuredBlog && (
          <section
            aria-labelledby="featured-heading"
            className="bg-gray-50 py-24 md:py-28"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <span className="font-semibold uppercase tracking-widest text-brand-orange">
                    Featured Insight
                  </span>

                  <h2
                    id="featured-heading"
                    className="mt-4 text-4xl font-bold text-brand-blue md:text-5xl"
                  >
                    Start here.
                  </h2>
                </div>

                <p className="max-w-xl leading-7 text-gray-600">
                  A selected guide from MrTechies covering an important topic
                  in technology, marketing or digital business growth.
                </p>
              </div>

              <article className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="group block"
                >
                  <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                    {/* Visual side */}
                    <div className="relative min-h-[300px] overflow-hidden bg-linear-to-br from-brand-blue via-slate-900 to-slate-950 p-10 text-white lg:min-h-[430px] lg:p-12">
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl"
                      />

                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                            {featuredBlog.category}
                          </span>
                        </div>

                        <div>
                          <BookOpen
                            className="mb-5 text-brand-orange"
                            size={38}
                          />

                          <p className="max-w-sm text-lg leading-8 text-gray-300">
                            Practical thinking from the MrTechies team.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Article content */}
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <time dateTime={featuredBlog.publishedDate}>
                          {formatDate(featuredBlog.publishedDate)}
                        </time>

                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-gray-300"
                        />

                        <span>{featuredBlog.readTime}</span>
                      </div>

                      <h3 className="max-w-3xl text-3xl font-bold leading-tight text-brand-blue transition-colors group-hover:text-brand-orange md:text-4xl">
                        {featuredBlog.title}
                      </h3>

                      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-gray-100 pt-7">
                        <span className="text-sm font-medium text-gray-500">
                          By {featuredBlog.author}
                        </span>

                        <span className="inline-flex items-center gap-2 font-semibold text-brand-orange">
                          Read article
                          <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          </section>
        )}

        {/* =====================================================
            ALL / LATEST ARTICLES
        ===================================================== */}
        <section
          aria-labelledby="latest-articles-heading"
          className="bg-white py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Latest Insights
                </span>

                <h2
                  id="latest-articles-heading"
                  className="mt-4 text-4xl font-bold text-brand-blue md:text-5xl"
                >
                  Learn, apply and make better digital decisions.
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-gray-600">
                Explore actionable articles about websites, search,
                technology, marketing and the systems businesses use to grow
                online.
              </p>
            </div>

            {remainingBlogs.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {remainingBlogs.map((blog) => (
                  <article
                    key={blog.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Card visual */}
                    <Link
                      href={`/blog/${blog.slug}`}
                      aria-label={`Read ${blog.title}`}
                      className="relative flex h-48 items-end overflow-hidden bg-linear-to-br from-brand-blue to-slate-950 p-6"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/20 blur-2xl"
                      />

                      <span className="relative z-10 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-orange backdrop-blur">
                        {blog.category}
                      </span>
                    </Link>

                    <div className="flex flex-1 flex-col p-7">
                      <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500">
                        <time dateTime={blog.publishedDate}>
                          {formatDate(blog.publishedDate)}
                        </time>

                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-gray-300"
                        />

                        <span>{blog.readTime}</span>
                      </div>

                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="text-2xl font-bold leading-snug text-brand-blue transition-colors group-hover:text-brand-orange">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                        {blog.excerpt}
                      </p>

                      <div className="mt-auto pt-7">
                        <Link
                          href={`/blog/${blog.slug}`}
                          aria-label={`Read more about ${blog.title}`}
                          className="inline-flex items-center gap-2 font-semibold text-brand-orange"
                        >
                          Read article

                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-gray-100 bg-gray-50 px-8 py-16 text-center">
                <BookOpen
                  size={34}
                  className="mx-auto mb-5 text-brand-orange"
                />

                <h3 className="text-2xl font-bold text-brand-blue">
                  More insights are coming soon.
                </h3>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
                  We are preparing practical guides about technology, search,
                  marketing and building stronger digital businesses.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="relative overflow-hidden bg-linear-to-r from-brand-blue to-slate-950 py-24 text-white md:py-28">
          <div
            aria-hidden="true"
            className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Need Expert Support?
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Turn digital knowledge into measurable business growth.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-gray-300">
                  MrTechies helps startups and growing businesses build modern
                  websites, improve search visibility, strengthen digital
                  marketing and create scalable business systems.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Get Free Consultation
                    <ArrowUpRight size={18} />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Services
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}
      <Script
        id="mrtechies-blog-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
    </>
  );
}