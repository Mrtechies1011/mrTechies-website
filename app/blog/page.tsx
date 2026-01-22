import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

/* ===================== SEO META ===================== */

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

/* ===================== BLOG PAGE ===================== */

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    };
  });

  return (
    <main
      className="max-w-6xl mx-auto px-6 py-24"
      aria-label="MrTechies Blog Page"
    >
      {/* ================= HEADER ================= */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-semibold text-brand-blue mb-6">
          Trending Blogs & Insights
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Insights, tutorials, and growth strategies on web development, SEO,
          digital marketing, and modern technologies — written by the MrTechies
          team.
        </p>
      </header>

      {/* ================= BLOG LIST ================= */}
      <section className="space-y-10">
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="
              block
              border-b
              pb-8
              transition-all
              duration-300
              cursor-pointer
              hover:opacity-90
            "
          >
            <h2 className="text-2xl font-semibold text-brand-blue mb-2">
              {post.title}
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-3xl">
              {post.description}
            </p>
          </Link>
        ))}
      </section>

      {/* ================= SEO FOOT NOTE ================= */}
      <footer className="mt-24 text-sm text-gray-400">
        Articles focused on web development, SEO optimization, Next.js, digital
        growth, and modern business technologies.
      </footer>
      
    </main>
  );
}
