import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Short-Form Reels Video Editing Services | TikTok & Shorts | MrTechies",
  description: "Professional short-form reels video editing services for Instagram, TikTok, and YouTube Shorts. High-engagement edits, captions, and pacing to maximize retention.",
  keywords: [
    "short-form reels video editing services",
    "instagram reels video editing",
    "tiktok video editing services",
    "youtube shorts video editing",
    "best short-form video editors",
    "vertical video editing company",
    "reels editing for businesses",
    "shorts post production india"
  ],
  alternates: {
    canonical: "https://www.mrtechies.com/services/video-editing-services/short-form-reels",
  },
};

export default function ShortFormReelsPage() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-sky-50 via-white to-orange-50 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">High-Engagement Vertical Video</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-sky-900">
            Short-Form Reels Video Editing Services
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            High-engagement videos tailored perfectly for modern social platforms. We optimize the first 3 seconds with aggressive hooks, dynamic kinetic captions, and micro-loops designed to stop the scroll and keep retention metrics high across Instagram, TikTok, and YouTube Shorts.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="bg-sky-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-sky-900 transition-colors">
              Get Free Reels Quote
            </Link>
            <Link href="/services/video-editing-services" className="border border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              All Video Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ALGORITHM BENCHMARKS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4 text-center">
          Engineered for Social Platform Algorithms
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Platform distributions favor retention. Our specialized post-production layouts ensure your content stays sticky from frame zero.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl bg-white shadow-xs">
            <h3 className="font-bold text-xl text-sky-900 mb-2">Scroll-Stopping Hooks</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We sync intense visual text layers, striking graphic elements, and structural pattern interrupts right at frame 0 to immediately command viewer attention on fast feeds.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-white shadow-xs">
            <h3 className="font-bold text-xl text-sky-900 mb-2">Kinetic Typography</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Custom platform-native text animations and auto-timed audio highlights that boost message clarity, engineered perfectly for users browsing timelines on mute.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-white shadow-xs">
            <h3 className="font-bold text-xl text-sky-900 mb-2">Fast-Paced Pacing</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tightening raw cuts, stripping out repetitive breathing blocks, and dropping highly rhythmic sound design layers to keep the visual engagement velocity constant.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM SPECIFIC MATRICES ================= */}
      <section className="bg-slate-50 border-y py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-sky-900 mb-4 text-center">
            Multi-Platform Optimization Breakdown
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            We don&apos;t believe in generic aspect-ratio stretching. Every piece of short-form media is reformatted natively for its native destination framework.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border">
              <h3 className="font-bold text-orange-600 text-xl mb-3">Instagram Reels Video Editing</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Focused heavily on brand lifestyle aesthetics, clean audio track trending matches, and aesthetic lower thirds. Perfect for capturing target audiences, scaling direct-to-consumer pipelines, and establishing brand presence in major hubs like Bangalore and Hyderabad.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border">
              <h3 className="font-bold text-sky-900 text-xl mb-3">TikTok Video Editing Services</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Built around organic, native, high-energy creator pacing styles. We apply rapid micro-cuts, zoom transitions, sound effects, pop-culture assets, and hyper-dynamic graphical elements that perfectly align with global viral trends.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border">
              <h3 className="font-bold text-sky-900 text-xl mb-3">YouTube Shorts Video Editing</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Engineered directly for search intent retention metrics. We optimize information-dense scripts into tightly structured timelines, integrating interactive call-outs to push subscribers, channel watch time, and click-through tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= B2B COMPLIANCE & VALUE FAQS ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-sky-900 text-center mb-12">
          Short-Form Post Production FAQ
        </h2>

        <div className="space-y-8 text-gray-700">
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">Can you repurpose long-form raw files into multiple short clips?</h4>
            <p className="leading-relaxed">
              Yes, this is one of our primary specialties. Send us long podcasts, lengthy corporate webinars, or extensive interviews, and our team will find the highest impact hooks, split them into standalone vertical assets, and reframe them with premium assets for shorts distribution frameworks.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">What is your turnaround timeframe for batch reels editing?</h4>
            <p className="leading-relaxed">
              Standard short-form updates are routinely delivered within 48 business hours. For enterprise volume batches, we align dedicated editors to your workspace, establishing clean production lines to deliver consistent drops every week.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">What is the HSN/SAC code classification for short-form video editing services?</h4>
            <p className="leading-relaxed">
              For commercial invoicing in India, short-form editing usually fits within structural technical or creative electronic service categories under GST frameworks. Because specific parameters change based on comprehensive contract setups, we always advise checking with your financial team or tax advisor before filing profiles.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">Is corporate TDS applicable on your vertical video contracts?</h4>
            <p className="leading-relaxed">
              Yes, standard professional B2B compliance standards apply based on current Indian tax codes. The execution percentages vary slightly depending on if the billing structure utilizes corporate contracts or retainer agreements. Please review with your internal accounting division to determine exact withholding setups.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ACTION SECTION ================= */}
      <section className="bg-sky-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate the Vertical Feed?
          </h2>
          <p className="mb-10 text-sky-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing potential customers to boring, unedited vertical video formats. Partner with MrTechies to turn raw phone clips or studio videos into hyper-optimized, high-retention client acquisition assets.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-bold text-gray-900 transition-colors shadow-lg">
              Start Your Batch Project
            </Link>
          </div>
        </div>
      </section>

      {/* ================= RELATED SERVICES INTERNAL LINKS ================= */}
      <section className="bg-slate-50 border-y py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="font-bold text-sky-900 text-lg mb-4">Explore More Specialized Video Editing Solutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-medium">
            <Link href="/services/video-editing-services" className="text-sky-800 hover:text-orange-600 transition-colors">
              ← Main Video Services Hub
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/services/video-editing-services/promotional-videos" className="text-sky-800 hover:text-orange-600 transition-colors">
              Promotional Video Ads
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/services/video-editing-services/editing-motion" className="text-sky-800 hover:text-orange-600 transition-colors">
              Motion Graphics & Design
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/services/video-editing-services/brand-content" className="text-sky-800 hover:text-orange-600 transition-colors">
              Corporate Brand Content
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}