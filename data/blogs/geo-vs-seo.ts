];

const GeoVsSeoAiSearchVisibility2026 = () => {
  return (
    <article className="blog-post mx-auto w-full max-w-4xl px-4 py-8 md:px-6">
      <header className="blog-header mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">
          {blogMetadata.category} · {blogMetadata.readTime}
        </p>
        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          {blogMetadata.title}
        </h1>
        <p className="mb-4 text-lg leading-8 text-gray-600">{blogMetadata.excerpt}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <span>By {blogMetadata.author}</span>
          <time dateTime={blogMetadata.publishedDate}>{blogMetadata.publishedDate}</time>
        </div>
      </header>

      <div className="blog-content prose prose-lg max-w-none prose-headings:scroll-mt-24">
        <div dangerouslySetInnerHTML={{ __html: articleContent }} />
      </div>

      <section className="faq my-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item rounded-2xl border border-gray-200 p-5">
              <summary className="cursor-pointer font-semibold text-gray-900">
                {item.question}
              </summary>
              <p className="mb-0 mt-3 leading-7 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="blog-footer mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>Published by {blogMetadata.author} · Updated {blogMetadata.publishedDate}</p>
      </footer>
    </article>
  );
};

export default GeoVsSeoAiSearchVisibility2026;
