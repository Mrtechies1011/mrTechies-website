"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How much does a website cost for a business in Hyderabad?",
    answer: "The cost of a website depends on your specific requirements—whether it's a clean landing page, an e-commerce store, or a custom Next.js web application. At Mr Techies, we offer affordable, high-performance packages tailored to startups and established businesses in Hyderabad. Contact us for a free quote!"
  },
  {
    question: "How long does it take to develop a website?",
    answer: "A standard business website typically takes 1 to 2 weeks to design and launch. More complex platforms, e-commerce sites, or custom web apps can take 3 to 4 weeks depending on features and content readiness."
  },
  {
    question: "Why should I choose Next.js for my business website?",
    answer: "Next.js provides lightning-fast loading speeds, superior mobile responsiveness, and exceptional built-in SEO capabilities. Because search engines like Google heavily favor speed and clean technical architecture, Next.js websites rank much higher and convert more visitors."
  },
  {
    question: "Do you provide SEO optimization services along with web development?",
    answer: "Yes! Every website we build is optimized with technical SEO best practices from day one. We also offer dedicated ongoing SEO services and digital marketing strategies to help your business rank at the top of local searches in Hyderabad."
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-brand-orange font-semibold mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-base">
            Everything you need to know about our web development, design, and SEO services in Hyderabad.
          </p>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-gray-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-brand-blue text-lg sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-brand-blue transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 bg-brand-orange/10 text-brand-orange" : ""}`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
