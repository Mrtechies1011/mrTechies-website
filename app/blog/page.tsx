import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MrTechies Blog | Web Development, SEO & Digital Growth Insights",
  description:
    "Explore expert blogs from MrTechies on web development, web design, SEO optimization, digital marketing, Next.js, and business growth strategies.",
  keywords: [
    "Web Development Blog",
    "SEO Blog India",
    "Next.js Tutorials",
    "Digital Marketing Blog",
    "Web Design Tips",
    "SEO Optimization Articles",
    "MrTechies Blog",
    "Hyderabad Web Development Blog",
  ],
  openGraph: {
    title: "MrTechies Blog | Web, SEO & Digital Growth Insights",
    description:
      "Latest insights on web development, SEO, digital marketing, and modern technologies from MrTechies.",
    url: "https://mrtechies.com/blog",
    siteName: "MrTechies",
    type: "website",
  },
  alternates: {
    canonical: "https://mrtechies.com/blog",
  },
};

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(".mdx", ""),
        ...data,
      };
    })
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return (
    <main className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb10,transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
              🚀 MrTechies Blog
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-brand-blue leading-tight">
              Trending Blogs & Insights
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Insights, tutorials, and growth strategies on web development,
              SEO, digital marketing, and modern technologies — written by the
              MrTechies team.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border px-4 py-2 text-sm text-gray-600">
                Web Development
              </span>

              <span className="rounded-full border px-4 py-2 text-sm text-gray-600">
                SEO
              </span>

              <span className="rounded-full border px-4 py-2 text-sm text-gray-600">
                Digital Marketing
              </span>

              <span className="rounded-full border px-4 py-2 text-sm text-gray-600">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/30 hover:shadow-2xl"
            >
              {/* Category */}
              <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                Blog
              </span>

              {/* Date */}
              {post.date && (
                <p className="mt-5 text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}

              {/* Title */}
              <h2 className="mt-3 text-2xl font-bold leading-snug text-brand-blue transition-colors group-hover:text-blue-700">
                {post.title}
              </h2>

              {/* Description */}
              <p className="mt-4 flex-1 text-gray-600 leading-7 line-clamp-3">
                {post.description}
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between border-t pt-6">
                <span className="text-sm text-gray-500">
                  MrTechies Team
                </span>

                <span className="inline-flex items-center gap-2 font-semibold text-brand-blue">
                  Read Article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-brand-blue">
            Learn More About Digital Growth
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Stay updated with practical guides, SEO strategies, web development
            tutorials, and business insights designed to help your company grow
            online.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-gray-500">
        Articles focused on web development, SEO optimization, Next.js,
        digital growth, and modern business technologies.
      </footer>
    </main>
  );
}