import type { Metadata } from "next";

import Link from "next/link";

import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Insights | SEO, Websites, Ads & Digital Growth | ErnestPath",
  description:
    "Practical guides on SEO, website development, digital advertising, content, video marketing and business growth from ErnestPath.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "ErnestPath Insights",
    description:
      "Practical insights on SEO, websites, advertising, content and digital growth.",
    url: "/blog",
    type: "website",
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

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-content">
            <span className="blog-eyebrow">ERNESTPATH INSIGHTS</span>

            <h1>
              Practical ideas for{" "}
              <span>better digital growth.</span>
            </h1>

            <p>
              Clear, useful guides on SEO, websites, digital advertising,
              content, video marketing and growing businesses online.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredBlog && (
        <section className="featured-section">
          <div className="blog-container">
            <div className="section-heading">
              <div>
                <span className="section-label">FEATURED</span>
                <h2>Worth reading first.</h2>
              </div>
            </div>

            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="featured-card"
            >

              <div className="featured-content">
                <div className="article-meta">
                  <span>{featuredBlog.category}</span>

                  <span className="meta-dot" />

                  <time dateTime={featuredBlog.publishedDate}>
                    {formatDate(featuredBlog.publishedDate)}
                  </time>

                  <span className="meta-dot" />

                  <span>{featuredBlog.readTime}</span>
                </div>

                <h2>{featuredBlog.title}</h2>

                <p>{featuredBlog.excerpt}</p>

                <div className="featured-bottom">
                  <div className="author">
                    <span>By {featuredBlog.author}</span>
                  </div>

                  <span className="read-link">
                    Read article
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ALL ARTICLES */}
      <section className="articles-section">
        <div className="blog-container">
          <div className="section-heading">
            <div>
              <span className="section-label">LATEST INSIGHTS</span>

              <h2>Learn what actually moves growth.</h2>
            </div>

            <p>
              No filler. Practical thinking you can apply to your website,
              marketing and business.
            </p>
          </div>

          {remainingBlogs.length > 0 ? (
            <div className="articles-grid">
              {remainingBlogs.map((blog) => (
                <article key={blog.slug} className="article-card">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="article-image"
                    aria-label={blog.title}
                  >
                  </Link>

                  <div className="article-content">
                    <div className="article-meta">
                      <span>{blog.category}</span>

                      <span className="meta-dot" />

                      <span>{blog.readTime}</span>
                    </div>

                    <Link href={`/blog/${blog.slug}`}>
                      <h3>{blog.title}</h3>
                    </Link>

                    <p>{blog.excerpt}</p>

                    <div className="article-footer">
                      <time dateTime={blog.publishedDate}>
                        {formatDate(blog.publishedDate)}
                      </time>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="read-link"
                      >
                        Read
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>More insights are coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <div className="blog-container">
          <div className="blog-cta-box">
            <div>
              <span className="section-label">NEED MORE THAN ADVICE?</span>

              <h2>
                Turn these ideas into
                <br />
                measurable growth.
              </h2>
            </div>

            <div className="blog-cta-right">
              <p>
                ErnestPath helps businesses build stronger websites, improve
                search visibility and run digital campaigns designed around
                real business outcomes.
              </p>

              <Link href="/contact" className="primary-button">
                Work with ErnestPath
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}