import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Twitter,
  Linkedin,
  Link2,
  Sparkles,
  User2,
  Tag,
  Lightbulb,
} from "lucide-react";

export const runtime = "nodejs";

/* ===================== SEO ===================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Post Not Found | MrTechies",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  const articleUrl = `https://mrtechies.com/blog/${slug}`;

  return {
    title: `${data.title} | MrTechies`,
    description: data.description,

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title: data.title,
      description: data.description,
      url: articleUrl,
      siteName: "MrTechies",
      type: "article",
      images: [
        {
          url: data.image || "/blog/default-cover.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image || "/blog/default-cover.webp"],
    },
  };
}

/* ===================== HELPERS ===================== */

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ===================== PAGE ===================== */

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-xl text-gray-500">Post not found.</h2>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  const readingTime = calculateReadingTime(content);

  const articleUrl = `https://mrtechies.com/blog/${slug}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    articleUrl
  )}&text=${encodeURIComponent(data.title)}`;

  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    articleUrl
  )}`;

  const relatedPosts = fs
    .readdirSync(postsDir)
    .filter((file) => file !== `${slug}.mdx`)
    .slice(0, 3)
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(raw);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
      };
    });

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-gray-200">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />
        <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">

          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-blue transition"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-10 max-w-4xl">

            {/* Category */}
            <div className="flex flex-wrap items-center gap-3 mb-6">

              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
                <Sparkles size={15} />
                {data.category || "Technology"}
              </span>

              {data.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}

            </div>

            {/* Title */}

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              {data.title}
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-3xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-600">
              {data.description}
            </p>

            {/* Meta */}

            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 lg:gap-8 text-sm text-gray-500">

              <div className="flex items-center gap-2">
                <User2 size={16} />
                {data.author || "MrTechies Team"}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {formatDate(data.date)}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                {readingTime} min read
              </div>

            </div>

          </div>

          {/* Featured Image */}

          {data.image && (
            <div className="mt-10 sm:mt-16 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-2xl">

              <Image
                src={data.image}
                alt={data.title}
                width={1400}
                height={800}
                priority
                className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
              />

            </div>
          )}

        </div>

      </section>
      {/* ================= CONTENT ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-12 gap-8 lg:gap-12">

        {/* ================= ARTICLE ================= */}

        <article className="col-span-12 lg:col-span-8 min-w-0">

          <div
            className="
            prose prose-base sm:prose-lg lg:prose-xl
            max-w-none

            prose-headings:font-bold
            prose-headings:text-gray-900
            prose-headings:scroll-mt-32

            prose-p:text-gray-700
            prose-p:leading-8

            prose-a:text-brand-blue
            prose-a:no-underline
            hover:prose-a:underline

            prose-img:rounded-2xl
            prose-img:shadow-xl

            prose-code:rounded
            prose-code:bg-slate-100
            prose-code:px-1.5
            prose-code:py-1
            prose-code:text-brand-blue

            prose-pre:bg-slate-950
            prose-pre:rounded-2xl

            prose-li:marker:text-brand-blue

            prose-table:block
            prose-table:overflow-x-auto
            prose-table:border
            prose-table:rounded-xl
          "
          >

            <MDXRemote
              source={content}
              components={{

                h2: (props) => (
                  <h2
                    className="mt-12 sm:mt-16 mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold border-b pb-3"
                    {...props}
                  />
                ),

                h3: (props) => (
                  <h3
                    className="mt-10 mb-4 text-xl sm:text-2xl font-semibold"
                    {...props}
                  />
                ),

                blockquote: ({ children }) => (
                  <div className="my-10 rounded-2xl sm:rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-5 sm:p-8">

                    <div className="flex items-center gap-3 mb-4">

                      <div className="rounded-xl bg-brand-blue p-2 text-white">
                        <Lightbulb size={18} />
                      </div>

                      <h4 className="font-bold text-brand-blue">
                        Key Insight
                      </h4>

                    </div>

                    <div className="text-gray-700 leading-8">
                      {children}
                    </div>

                  </div>
                ),

                strong: ({ children }) => (
                  <strong className="rounded bg-yellow-100 px-1 text-gray-900">
                    {children}
                  </strong>
                ),

                table: (props) => (
                  <div className="overflow-auto rounded-2xl border my-10">
                    <table {...props} />
                  </div>
                ),
              }}
            />

          </div>

          {/* ================= CTA ================= */}

          <div className="mt-16 overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-blue via-blue-700 to-slate-900 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              🚀 Build Faster
            </span>

            <h3 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Ready to Grow Your Business Online?
            </h3>

            <p className="mt-5 max-w-2xl text-blue-100 leading-8">
              We design high-performance websites, SEO strategies and modern
              web applications that help businesses generate more leads and
              increase revenue.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-brand-blue transition hover:scale-105"
            >
              Book Free Consultation →
            </Link>

          </div>

        </article>

        {/* ================= SIDEBAR ================= */}

        <aside className="hidden lg:block col-span-4">

          <div className="sticky top-28 space-y-6">

            <div className="rounded-3xl border bg-white p-6 shadow-sm">

              <h3 className="mb-5 font-bold">
                Share this article
              </h3>

              <div className="flex flex-wrap gap-3">

                <a
                  href={twitterShare}
                  target="_blank"
                  className="rounded-xl border p-3 transition hover:bg-blue-50"
                >
                  <Twitter size={20} />
                </a>

                <a
                  href={linkedinShare}
                  target="_blank"
                  className="rounded-xl border p-3 transition hover:bg-blue-50"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href={articleUrl}
                  target="_blank"
                  className="rounded-xl border p-3 transition hover:bg-orange-50"
                >
                  <Link2 size={20} />
                </a>

              </div>

            </div>

            <div className="rounded-3xl border bg-slate-50 p-6">

              <h4 className="font-bold mb-3">
                About MrTechies
              </h4>

              <p className="text-sm leading-7 text-gray-600">
                We help startups and businesses build modern websites,
                improve SEO rankings and create digital experiences
                that generate real business growth.
              </p>

            </div>

          </div>

        </aside>

      </section>

      {/* ================= RELATED ARTICLES ================= */}

      <section className="border-t bg-slate-50 py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <span className="text-brand-blue font-semibold uppercase tracking-wider">
              Continue Reading
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold">
              More Insights
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedPosts.map((post) => (

              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue hover:shadow-xl"
              >

                <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                  {post.category || "Technology"}
                </span>

                <h3 className="mt-5 text-2xl font-bold transition group-hover:text-brand-blue">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-gray-600 leading-7">
                  {post.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>

                  <span className="font-semibold text-brand-blue">
                    Read →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}