import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export const runtime = "nodejs";

/* ===================== METADATA ===================== */

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { title: "Post Not Found | MrTechies" };
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | MrTechies Blog`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
    },
  };
}

/* ===================== PAGE ===================== */

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <p className="p-10">Post not found</p>;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  /* ===== RELATED POSTS ===== */
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
      };
    });

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* ================= BACK BUTTON ================= */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-gray-500
            hover:text-brand-blue
            transition
          "
        >
          ← Back to all blogs
        </Link>
      </div>

      {/* ================= ARTICLE ================= */}
      <article className="max-w-3xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-semibold text-brand-blue mb-4">
          {data.title}
        </h1>

        <p className="text-sm text-gray-400 mb-12">
          {data.date}
        </p>

        {/* CONTENT */}
        <div
          className="
            prose
            prose-lg
            max-w-none
            prose-headings:text-brand-blue
            prose-h2:mt-14
            prose-h2:mb-4
            text-brand-dark
            prose-p:text-brand-dark-700
            prose-p:leading-relaxed

            prose-li:text-brand-dark-700
            prose-strong:text-gray-900
          "
        >
          <MDXRemote source={content} />
        </div>
      </article>

      {/* ================= RELATED BLOGS ================= */}
      {relatedPosts.length > 0 && (
        <section className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-brand-orange mb-10">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="
                  group
                  block
                  border
                  rounded-2xl
                  p-6
                  transition
                  hover:shadow-xl
                  hover:-translate-y-1
                  cursor-pointer
                "
              >
                <h3 className="text-lg font-semibold text-brand-blue mb-3 group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MrTechies Blog",
            description:
              "Expert insights on web development, SEO, digital marketing, Next.js, and business growth.",
            url: "https://mrtechies.com/blog",
            publisher: {
              "@type": "Organization",
              name: "MrTechies",
              logo: {
                "@type": "ImageObject",
                url: "https://mrtechies.com/logo.png",
              },
            },
          }),
        }}
      />

    </main>
  );
}
