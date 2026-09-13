import type { Metadata } from "next";

import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  User2,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

import { blogs } from "@/data/blogs";

const BASE_URL = "https://mrtechies.com";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC ROUTES
========================================================= */

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found | MrTechies",
      description: "The requested MrTechies article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `${BASE_URL}/blog/${blog.slug}`;

  return {
    title: blog.seoTitle,

    description: blog.seoDescription,

    authors: [
      {
        name: blog.author,
      },
    ],

    creator: blog.author,

    publisher: "MrTechies",

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      url: articleUrl,
      siteName: "MrTechies",

      type: "article",

      publishedTime: blog.publishedDate,

      authors: [blog.author],

      section: blog.category,

      tags: blog.tags,

      locale: "en_IN",
    },

    twitter: {
      card: "summary",

      title: blog.seoTitle,

      description: blog.seoDescription,
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
  };
}

/* =========================================================
   DATE FORMATTER
========================================================= */

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/* =========================================================
   BLOG DETAIL PAGE
========================================================= */

export default async function BlogDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const articleUrl = `${BASE_URL}/blog/${blog.slug}`;

  /* =====================================================
     AUTHOR TYPE

     If the article author is MrTechies itself, treat it as
     an Organization.

     Otherwise treat the named author as a Person.
  ===================================================== */

  const authorSchema =
    blog.author.toLowerCase() === "mrtechies"
      ? {
          "@type": "Organization",
          name: "MrTechies",
          url: BASE_URL,
        }
      : {
          "@type": "Person",
          name: blog.author,
        };

  /* =====================================================
     BLOG POSTING SCHEMA
  ===================================================== */

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    "@id": `${articleUrl}#article`,

    url: articleUrl,

    headline: blog.title,

    description: blog.seoDescription,

    datePublished: blog.publishedDate,

    articleSection: blog.category,

    keywords: blog.tags.join(", "),

    author: authorSchema,

    publisher: {
      "@type": "Organization",

      "@id": `${BASE_URL}/#organization`,

      name: "MrTechies",

      url: BASE_URL,

      logo: {
        "@type": "ImageObject",

        url: `${BASE_URL}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": articleUrl,
    },

    isPartOf: {
      "@type": "Blog",

      "@id": `${BASE_URL}/blog#blog`,

      name: "MrTechies Insights",

      url: `${BASE_URL}/blog`,
    },

    about: blog.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  };

  /* =====================================================
     BREADCRUMB SCHEMA
  ===================================================== */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id": `${articleUrl}#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: BASE_URL,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Insights",

        item: `${BASE_URL}/blog`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: blog.title,

        item: articleUrl,
      },
    ],
  };

  /* =====================================================
     FAQ SCHEMA

     Only generated when FAQs actually exist.

     IMPORTANT:
     These same FAQs are rendered visibly below.
  ===================================================== */

  const faqSchema =
    blog.faq && blog.faq.length > 0
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          mainEntity: blog.faq.map((item) => ({
            "@type": "Question",

            name: item.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: item.answer,
            },
          })),
        }
      : null;

  /* =====================================================
     RELATED ARTICLES
  ===================================================== */

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.slug !== blog.slug &&
        item.category === blog.category
    )
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    )
    .slice(0, 3);

  return (
    <>
      <main className="overflow-hidden bg-white text-gray-800">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-brand-blue to-slate-900 text-white">

          {/* Background decorations */}

          <div
            aria-hidden="true"
            className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-32 md:pb-28 md:pt-40">

            {/* Breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-400"
            >

              <Link
                href="/"
                className="transition-colors hover:text-brand-orange"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/blog"
                className="transition-colors hover:text-brand-orange"
              >
                Insights
              </Link>

              <span aria-hidden="true">/</span>

              <span className="max-w-[300px] truncate text-gray-300">
                {blog.title}
              </span>

            </nav>

            {/* Back */}

            <Link
              href="/blog"
              className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-brand-orange"
            >
              <ArrowLeft size={17} />

              Back to Insights
            </Link>

            {/* Category */}

            <div>
              <span className="inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                {blog.category}
              </span>
            </div>

            {/* H1 */}

            <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              {blog.title}
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300 md:text-xl">
              {blog.excerpt}
            </p>

            {/* Metadata */}

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-8 text-sm text-gray-300">

              <div className="flex items-center gap-2">

                <CalendarDays
                  size={18}
                  className="text-brand-orange"
                />

                <time dateTime={blog.publishedDate}>
                  {formatDate(blog.publishedDate)}
                </time>

              </div>

              <div className="flex items-center gap-2">

                <Clock3
                  size={18}
                  className="text-brand-orange"
                />

                <span>{blog.readTime}</span>

              </div>

              <div className="flex items-center gap-2">

                <User2
                  size={18}
                  className="text-brand-orange"
                />

                <span>
                  By {blog.author}
                </span>

              </div>

            </div>

          </div>

        </section>


      <article className="relative bg-white py-16 md:py-24">
  <div className="mx-auto max-w-5xl px-5 md:px-6">

    <div className="mb-12 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10">
            <BookOpen
              size={20}
              className="text-brand-orange"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              MrTechies Insights
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Practical digital guidance for modern businesses.
            </p>
          </div>
        </div>

        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-500">
          {blog.readTime}
        </span>

      </div>
    </div>

    <div
      className="blog-article-content"
      dangerouslySetInnerHTML={{
        __html: blog.content,
      }}
    />

  </div>
</article>


        {/* =================================================
            FAQ
        ================================================= */}

        {blog.faq && blog.faq.length > 0 && (

          <section
            aria-labelledby="article-faq-heading"
            className="bg-gray-50 py-24"
          >

            <div className="mx-auto max-w-4xl px-6">

              <div className="mb-12">

                <span className="font-semibold uppercase tracking-widest text-brand-orange">
                  Frequently Asked Questions
                </span>

                <h2
                  id="article-faq-heading"
                  className="mt-4 text-4xl font-bold text-brand-blue"
                >
                  Questions about this topic
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                  Quick answers to common questions related to this guide.
                </p>

              </div>

              <div className="space-y-5">

                {blog.faq.map((item, index) => (

                  <div
                    key={`${blog.slug}-faq-${index}`}
                    className="rounded-3xl border border-gray-100 bg-white p-7 md:p-8"
                  >

                    <h3 className="text-xl font-bold leading-7 text-brand-blue">
                      {item.question}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {item.answer}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </section>

        )}


        {/* =================================================
            RELATED ARTICLES
        ================================================= */}

        {relatedBlogs.length > 0 && (

          <section
            aria-labelledby="related-heading"
            className="bg-white py-24"
          >

            <div className="mx-auto max-w-7xl px-6">

              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                <div>

                  <span className="font-semibold uppercase tracking-widest text-brand-orange">
                    Keep Learning
                  </span>

                  <h2
                    id="related-heading"
                    className="mt-4 text-4xl font-bold text-brand-blue"
                  >
                    Related insights
                  </h2>

                </div>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-semibold text-brand-orange"
                >
                  View all insights

                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                {relatedBlogs.map((related) => (

                  <article
                    key={related.slug}
                    className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >

                    <div className="mb-5 flex items-center justify-between gap-4">

                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                        {related.category}
                      </span>

                      <span className="text-xs text-gray-500">
                        {related.readTime}
                      </span>

                    </div>

                    <Link href={`/blog/${related.slug}`}>

                      <h3 className="text-2xl font-bold leading-snug text-brand-blue transition-colors group-hover:text-brand-orange">
                        {related.title}
                      </h3>

                    </Link>

                    <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                      {related.excerpt}
                    </p>

                    <div className="mt-auto pt-7">

                      <Link
                        href={`/blog/${related.slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-brand-orange"
                      >
                        Read article

                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />

                      </Link>

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </section>

        )}


        {/* =================================================
            TRUST / SERVICE BRIDGE
        ================================================= */}

        <section className="bg-gray-50 py-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-12">

              <div className="grid gap-10 md:grid-cols-2 md:items-center">

                <div>

                  <span className="font-semibold uppercase tracking-widest text-brand-orange">
                    From Insight to Execution
                  </span>

                  <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
                    Need help applying this to your business?
                  </h2>

                </div>

                <div>

                  <div className="space-y-4">

                    {[
                      "Web Development",
                      "SEO & Search Visibility",
                      "Digital Marketing",
                      "CRM & Business Automation",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 text-gray-700"
                      >

                        <CheckCircle2
                          size={19}
                          className="shrink-0 text-brand-orange"
                        />

                        <span>{item}</span>

                      </div>

                    ))}

                  </div>

                  <Link
                    href="/services"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-orange"
                  >
                    Explore MrTechies services

                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="relative overflow-hidden bg-linear-to-r from-brand-blue to-slate-950 py-24 text-white">

          <div
            aria-hidden="true"
            className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

            <span className="font-semibold uppercase tracking-widest text-brand-orange">
              Grow With MrTechies
            </span>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              Build a stronger digital presence for your business.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              From websites and SEO to digital marketing and business
              automation, MrTechies helps businesses turn digital strategy
              into practical results.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Get Free Consultation

                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                Explore More Insights

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <Script
        id={`blogposting-schema-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Script
        id={`breadcrumb-schema-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {faqSchema && (

        <Script
          id={`faq-schema-${blog.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

      )}

    </>
  );
}