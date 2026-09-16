import type { ReactNode } from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title:
        "Digital Marketing Services in Visakhapatnam (Vizag) | SEO, Ads & Growth Solutions – MrTechies",
    description:
        "Professional digital marketing services in Visakhapatnam including SEO, Google Ads, social media marketing, and lead generation to help businesses grow online.",
    alternates: {
        canonical:
            "https://mrtechies.com/digital-marketing-services-visakhapatnam",
    },
};

/* ================= UI BUILDING BLOCKS ================= */

type GlowBadgeProps = {
    children: ReactNode;
};

type SectionProps = {
    children: ReactNode;
    className?: string;
};

type GlassProps = {
    children: ReactNode;
};

type IconCardProps = {
    icon: ReactNode;
    title: string;
    desc: string;
};

const GlowBadge = ({ children }: GlowBadgeProps) => (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-md">
        ⚡ {children}
    </div>
);

const Section = ({ children, className = "" }: SectionProps) => (
    <section className={`relative py-24 ${className}`}>
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 relative">{children}</div>
    </section>
);

const Glass = ({ children }: GlassProps) => (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10">
        {children}
    </div>
);

const IconCard = ({ icon, title, desc }: IconCardProps) => (
    <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
        <div className="text-2xl mb-3">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

/* ================= FAQ SCHEMA ================= */

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why do businesses in Vizag need digital marketing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Digital marketing helps businesses in Vizag increase visibility, attract targeted customers, and generate consistent leads through SEO, ads, and social media."
            }
        },
        {
            "@type": "Question",
            "name": "How long does SEO take to show results?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "SEO typically takes 3 to 6 months to show strong results depending on competition, website structure, and content quality."
            }
        },
        {
            "@type": "Question",
            "name": "Are Google Ads better than SEO?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Google Ads provide instant results while SEO builds long-term growth. The best strategy is using both together."
            }
        }
    ]
};

export default function VizagDigitalMarketingPage() {
    return (
        <main className="bg-white text-gray-800 overflow-hidden">

            {/* ================= FAQ SCHEMA ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ================= HERO ================= */}
            <section className="relative bg-linear-to-br from-slate-950 via-blue-900 to-slate-900 text-white py-32 overflow-hidden">

                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

                    <GlowBadge>Growth-Focused Digital Marketing in Vizag</GlowBadge>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
                        Digital Marketing Services in{" "}
                        <span className="text-orange-400">Visakhapatnam (Vizag)</span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        In today’s competitive digital world, simply having a business is not enough.
                        You need visibility, trust, and consistent customer acquisition.
                        Our digital marketing services in Vizag are designed to help businesses
                        build a strong online presence, attract qualified customers, and grow revenue sustainably.
                    </p>

                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
                        <Link href="/contact" className="bg-orange-500 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                            Get Free Consultation
                        </Link>

                        <Link href="/seo-services-hyderabad" className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition">
                            Explore SEO Services
                        </Link>
                    </div>

                </div>
            </section>

            {/* ================= INTRO ================= */}
            <Section>

                <div className="mb-10">
                    <span className="text-orange-500 font-semibold uppercase tracking-wide">
                        Business Growth Insight
                    </span>

                    <h2 className="text-4xl font-bold text-slate-900 mt-3">
                        Why Digital Marketing Matters for Businesses in Vizag
                    </h2>
                </div>

                <Glass>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">

                        <p>Visakhapatnam is one of the fastest-growing commercial and industrial cities in Andhra Pradesh...</p>
                        <p>Businesses across retail, healthcare, education, real estate, and technology are rapidly shifting online...</p>
                        <p>Digital marketing bridges this gap...</p>
                        <p>The biggest advantage is measurability...</p>
                        <p>Whether startup or established brand...</p>

                    </div>
                </Glass>

            </Section>

            {/* ================= BUSINESS REALITY ================= */}
            <Section className="bg-gray-50">

                <div className="mb-10">
                    <span className="text-orange-500 font-semibold uppercase">
                        Market Reality
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        Why Most Businesses in Vizag Struggle Online
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <IconCard icon="⚠️" title="No Strategy" desc="Most businesses have no structured marketing system." />
                    <IconCard icon="📉" title="Low Visibility" desc="Without SEO they stay invisible on Google." />
                    <IconCard icon="💸" title="Wasted Ads" desc="Poor targeting leads to wasted ad spend." />
                    <IconCard icon="🔁" title="No Consistency" desc="Random posting fails to generate predictable leads." />

                </div>

            </Section>

            {/* ================= SEO ================= */}
            <Section>

                <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
                    🔍 Search Engine Optimization (SEO)
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <Glass>
                        <div className="space-y-6 text-lg text-gray-700">
                            <p>SEO is the process of improving visibility...</p>
                            <p>It brings organic traffic...</p>
                            <p>Focus on structure, speed, intent...</p>
                            <p>Helps Vizag businesses rank locally...</p>
                            <p>Builds authority...</p>
                            <p>Reduces ad dependency...</p>
                            <p>Improves UX...</p>
                            <p>Long-term growth system...</p>
                        </div>
                    </Glass>

                    <div className="bg-linear-to-br from-slate-900 to-blue-900 text-white rounded-3xl p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">SEO Impact</h3>
                        <div className="space-y-4">
                            <p>✔ Higher Google rankings</p>
                            <p>✔ Organic leads</p>
                            <p>✔ Brand authority</p>
                            <p>✔ Long-term traffic system</p>
                        </div>
                    </div>

                </div>

            </Section>

            {/* ================= GOOGLE ADS ================= */}
            <Section className="bg-gray-50">

                <h2 className="text-4xl font-bold mb-10">🚀 Google Ads (PPC)</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        ["⚡", "Instant Visibility", "Appear on top of Google instantly"],
                        ["🎯", "Target Users", "Reach high-intent customers"],
                        ["📈", "Fast Leads", "Generate immediate inquiries"],
                        ["🔑", "Keyword Ads", "Bid on search terms"],
                        ["🧠", "Smart Optimization", "AI-driven ad improvements"],
                        ["💰", "Budget Control", "Pay only for clicks"]
                    ].map(([i, t, d]) => (
                        <IconCard key={t} icon={i} title={t} desc={d} />
                    ))}
                </div>

            </Section>
            {/* ================= COMPLETE DIGITAL MARKETING SERVICES ================= */}
            <Section className="bg-gray-50">

                <div className="text-center mb-16">
                    <span className="text-orange-500 font-semibold uppercase tracking-wide">
                        Complete Marketing Ecosystem
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        Complete Digital Marketing Services in Visakhapatnam
                    </h2>

                    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
                        We provide end-to-end digital marketing solutions for businesses in Vizag
                        including SEO, paid advertising, social media growth, content creation,
                        lead generation, and conversion optimization.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <IconCard
                        icon="🔍"
                        title="Search Engine Optimization (SEO)"
                        desc="Improve Google rankings, increase organic traffic, and generate long-term business visibility."
                    />

                    <IconCard
                        icon="🚀"
                        title="Google Ads / PPC"
                        desc="Run highly targeted paid campaigns that generate immediate leads and sales."
                    />

                    <IconCard
                        icon="📱"
                        title="Social Media Marketing"
                        desc="Build brand awareness and audience engagement across social platforms."
                    />

                    <IconCard
                        icon="📘"
                        title="Facebook Marketing"
                        desc="Create high-converting Facebook campaigns, lead ads, and retargeting funnels."
                    />

                    <IconCard
                        icon="📸"
                        title="Instagram Marketing"
                        desc="Grow your brand using reels, stories, influencer strategies, and engagement campaigns."
                    />

                    <IconCard
                        icon="▶️"
                        title="YouTube SEO & Marketing"
                        desc="Optimize videos for search visibility, subscribers, watch time, and business growth."
                    />

                    <IconCard
                        icon="✍️"
                        title="Content Marketing"
                        desc="Publish valuable blogs, landing pages, and website content that attracts customers."
                    />

                    <IconCard
                        icon="🎨"
                        title="Content Creation"
                        desc="Professional graphics, reels, ad creatives, videos, and marketing copy for campaigns."
                    />

                    <IconCard
                        icon="📧"
                        title="Email Marketing"
                        desc="Increase repeat customers and nurture leads using automated email campaigns."
                    />

                    <IconCard
                        icon="📍"
                        title="Local SEO"
                        desc="Rank your business in Google Maps and local Vizag search results."
                    />

                    <IconCard
                        icon="📊"
                        title="Analytics & Reporting"
                        desc="Track traffic, leads, conversions, and campaign performance with data-driven insights."
                    />

                    <IconCard
                        icon="🎯"
                        title="Conversion Optimization"
                        desc="Improve landing pages and funnels to maximize leads and sales conversions."
                    />

                </div>

            </Section>

            {/* ================= SOCIAL MEDIA ================= */}
            <Section>

                <h2 className="text-4xl font-bold mb-10">📱 Social Media Marketing</h2>

                <Glass>
                    <div className="space-y-6 text-lg text-gray-700">
                        <p>Social media builds brand awareness...</p>
                        <p>Helps connect with audience...</p>
                        <p>Shows products and services...</p>
                        <p>Creates engagement...</p>
                        <p>Boosts Vizag visibility...</p>
                        <p>Supports paid campaigns...</p>
                        <p>Builds branding...</p>
                        <p>Drives retention...</p>
                    </div>
                </Glass>

            </Section>

            {/* ================= LEAD GEN ================= */}
            <Section className="bg-linear-to-br from-slate-950 to-blue-950 text-white">

                <h2 className="text-4xl font-bold mb-10 text-center">
                    🎯 Lead Generation Strategy
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="space-y-6 text-gray-200">
                        <p>Combines SEO + Ads + Funnels...</p>
                        <p>Focuses on quality leads...</p>
                        <p>Landing pages optimized...</p>
                        <p>Conversion tracking...</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
                        <p>✔ Predictable growth</p>
                        <p>✔ High conversion system</p>
                        <p>✔ Scalable model</p>
                    </div>

                </div>

            </Section>
            {/* ================= HOW WE APPROACH ================= */}
            <Section>

                <div className="text-center mb-16">
                    <span className="text-orange-500 font-semibold uppercase tracking-wide">
                        Our Process
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        How We Approach Digital Marketing
                    </h2>

                    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
                        Successful digital marketing is not about random posting or running ads
                        without strategy. Our approach focuses on research, positioning,
                        consistency, data analysis, and continuous optimization to build
                        predictable business growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <Glass>
                        <div className="space-y-4">
                            <div className="text-3xl">🔍</div>
                            <h3 className="text-xl font-bold">Research & Analysis</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We study your business, competitors, target audience, and market
                                opportunities in Vizag to build a strong marketing foundation.
                            </p>
                        </div>
                    </Glass>

                    <Glass>
                        <div className="space-y-4">
                            <div className="text-3xl">🧠</div>
                            <h3 className="text-xl font-bold">Strategy Planning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We create a customized digital marketing strategy combining SEO,
                                social media, content, and paid advertising for maximum impact.
                            </p>
                        </div>
                    </Glass>

                    <Glass>
                        <div className="space-y-4">
                            <div className="text-3xl">🚀</div>
                            <h3 className="text-xl font-bold">Execution & Optimization</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Campaigns are launched with continuous monitoring, testing, and
                                optimization to improve visibility, engagement, and conversions.
                            </p>
                        </div>
                    </Glass>

                    <Glass>
                        <div className="space-y-4">
                            <div className="text-3xl">📈</div>
                            <h3 className="text-xl font-bold">Growth & Scaling</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Once results are stable, we scale winning strategies to generate
                                consistent leads, higher revenue, and long-term online growth.
                            </p>
                        </div>
                    </Glass>

                </div>

            </Section>


            {/* ================= HOW WE HELP BUSINESSES GROW ================= */}
            <Section className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

                <div className="text-center mb-16">
                    <span className="text-orange-400 font-semibold uppercase tracking-wide">
                        Business Growth
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        How We Help Businesses Grow Online
                    </h2>

                    <p className="text-gray-300 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
                        Our goal is not just generating traffic — we focus on building a complete
                        digital growth system that helps businesses attract customers, increase
                        trust, improve conversions, and grow sustainably.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">

                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                📍 Increase Online Visibility
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                We improve your visibility across Google search, social media,
                                YouTube, and local listings so potential customers can easily find
                                your business online.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                🎯 Generate Quality Leads
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Our campaigns target high-intent users who are actively searching for
                                your products or services, helping generate better leads and inquiries.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                💬 Build Brand Trust
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Consistent branding, valuable content, customer engagement, and strong
                                online presence help establish trust and credibility in your industry.
                            </p>
                        </div>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">

                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                📈 Improve Conversions
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                We optimize landing pages, ad campaigns, website experience, and
                                conversion funnels to maximize leads and sales performance.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                🔁 Create Long-Term Growth
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Instead of short-term marketing tactics, we build scalable systems
                                that continue generating traffic, leads, and business growth over time.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                📊 Data-Driven Decisions
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Every strategy is backed by analytics, tracking, and performance data
                                to ensure measurable and continuous improvement.
                            </p>
                        </div>

                    </div>

                </div>

            </Section>

            {/* ================= CTA ================= */}
            <Section>

                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Grow Your Business in Vizag?
                    </h2>

                    <p className="text-gray-600 mb-10 text-lg">
                        Start building structured digital growth system today.
                    </p>

                    <Link href="/contact" className="bg-orange-500 px-10 py-5 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition">
                        Get Started
                    </Link>

                </div>

            </Section>

        </main>
    );
}