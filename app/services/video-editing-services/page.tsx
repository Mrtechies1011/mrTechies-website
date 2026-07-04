import type { Metadata } from "next";
import Link from "next/link";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Video Editing Services | Professional Video Editors | MrTechies",
  description:
    "Professional video editing services for businesses, YouTubers, real estate, and brands. Fast turnaround, premium quality, and dedicated editors. Get a free consultation.",
  keywords: [
    "video editing services",
    "professional video editing services",
    "best video editing services",
    "video editing services company",
    "video editing services online",
    "youtube video editing services",
    "video editing services for businesses",
    "real estate video editing services",
    "video editing services in bangalore",
    "video editing services in hyderabad",
    "professional video editing services in gurgaon",
    "video editing services india",
  ],
  alternates: {
    // Updated to match your exact live URL layout
    canonical: "https://www.mrtechies.com/services/video-editing-services",
  },
};

export default function VideoEditingServicesPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-sky-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Video Editing Services for{" "}
            <span className="text-orange-600">Businesses</span>, Brands &{" "}
            <span className="text-sky-800">Creators</span>
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your footage deserves more than a quick trim and a fade-out. Our dedicated team of editors works exclusively on business, brand, and creator content — turning raw clips into polished, high-converting videos built for YouTube, social platforms, and enterprise marketing campaigns. With rapid turnaround times and a workflow built for scale, you get broadcast-quality edits without the overhead of hiring in-house. Send us the footage; we’ll send back the results.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-sky-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-sky-900 transition-colors">
              Get Free Quote
            </Link>

            <Link href="#portfolio" className="border border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-sky-900">⚡ Fast Delivery</h3>
            <p className="text-sm mt-1">On-Time Pipeline Execution</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">🔁 Unlimited Revisions</h3>
            <p className="text-sm mt-1">Polished Until Perfect</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">🔒 NDA Protected</h3>
            <p className="text-sm mt-1">Strict File Confidentiality</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-900">💼 Business-Focused</h3>
            <p className="text-sm mt-1">Engineered for Conversion</p>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION / PROBLEM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-6">
          Why Professional Video Editing Matters
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-8">
          Why Editing Is More Than Cutting Clips
        </h3>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Great footage doesn&apos;t guarantee a great video. What happens in the edit determines whether viewers stay for the whole story or bounce in the first eight seconds. Choppy pacing, muddy audio, and a weak opening hook are silent conversion killers — they don&apos;t just lose views, they lose trust before your message even lands.
          </p>

          <p>
            Professional <strong>video editing services</strong> exist to fix exactly these retention traps. A skilled editor tightens pacing to match attention spans, balances and cleans audio so every word is heard clearly, and structures the first few seconds around a hook that earns the rest of the watch time. The difference shows up in the numbers: longer average view duration, stronger brand recall, and more viewers who convert into leads instead of scrolling past.
          </p>

          <p>
            This is the gap between a video that simply <em>exists</em> and one that actively works for your business — generating watch time, building brand trust, and feeding your pipeline with inbound interest, one well-edited frame at a time.
          </p>
        </div>
      </section>

      {/* ================= CORE SERVICES SUITE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-4">
          Our Professional Video Editing Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Explore our complete post-production suite built around platform mechanics, user intent, and high visual engagement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-8 border rounded-2xl transition-all hover:border-orange-500 shadow-xs hover:shadow-md">
            <h3 className="text-xl font-bold text-sky-900 mb-3">Corporate & Business Video Editing Services</h3>
            <p className="text-gray-700 leading-relaxed">
              We help companies turn internal footage, interviews, and event recordings into polished brand assets. Our <strong>video editing services for businesses</strong> cover training modules, product demos, investor updates, and company culture videos — all edited with clean transitions, on-brand graphics, and consistent tone.
            </p>
          </div>

          <div className="p-8 border rounded-2xl transition-all hover:border-orange-500 shadow-xs hover:shadow-md">
            <h3 className="text-xl font-bold text-sky-900 mb-3">YouTube Video Editing Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Our <strong>youtube video editing services</strong> are built around one goal: keeping people watching. We craft scroll-stopping hooks in the first few seconds, tighten pacing throughout, and use pattern interrupts, captions, and B-roll layering to combat drop-off and maximize algorithm metrics.
            </p>
          </div>

          <div className="p-8 border rounded-2xl transition-all hover:border-orange-500 shadow-xs hover:shadow-md">
            <h3 className="text-xl font-bold text-sky-900 mb-3">Social Media Video Editing</h3>
            <p className="text-gray-700 leading-relaxed">
              Reels, Shorts, TikTok, and LinkedIn each demand a different rhythm, aspect ratio, and hook style — and we edit for all of them natively. We reformat long-form footage into punchy vertical clips with platform-native text animations and trending effects to stop the scroll.
            </p>
          </div>

          <div className="p-8 border rounded-2xl transition-all hover:border-orange-500 shadow-xs hover:shadow-md">
            <h3 className="text-xl font-bold text-sky-900 mb-3">Real Estate Video Editing Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Our <strong>real estate video editing services</strong> turn walkthroughs and drone footage into listings that sell the lifestyle. We stabilize and color-grade aerial shots, sync smooth transitions between rooms, and layer property details that make your agency listings feel ultra-premium.
            </p>
          </div>

          <div className="p-8 border rounded-2xl transition-all hover:border-orange-500 shadow-xs hover:shadow-md">
            <h3 className="text-xl font-bold text-sky-900 mb-3">Motion Graphics & Animation</h3>
            <p className="text-gray-700 leading-relaxed">
              When live footage isn&apos;t enough, we bring in motion graphics — animated logos, lower thirds, kinetic typography, data visualizations, and explainer-style animation sequences. These elements add clarity to complex layouts and give your brand a studio-grade finish.
            </p>
          </div>

          <div className="p-8 border rounded-2xl transition-all hover:border-orange-500 shadow-xs hover:shadow-md flex flex-col justify-between bg-orange-50/50">
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Need Custom Post-Production?</h3>
              <p className="text-gray-700">We handle complex multi-cam files, podcast balancing, promotional launch campaigns, and long-form storytelling edits tailored to your precise workflow metrics.</p>
            </div>
            <Link href="/contact" className="mt-4 inline-block text-orange-600 font-bold underline hover:text-orange-700">
              Inquire About Custom Formats &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* ================= GEOGRAPHIC TARGETING STRIP ================= */}
      <section className="bg-slate-50 border-y py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-4">
            Video Editing Services Across India & Worldwide
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our cloud-first workflow means footage moves through secure file-sharing systems seamlessly, removing all geographical bottlenecks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-orange-600 text-lg mb-2">Video Editing Services in Bangalore</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Supporting Bangalore’s startup, SaaS, and product ecosystem with quick-turnaround demo videos, investor pitch edits, and feature launch content through clean remote collaboration tracks.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-sky-900 text-lg mb-2">Video Editing Services in Hyderabad</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Partnering with Hyderabad’s corporate hubs, tech parks, and real estate developers to produce precise corporate presentations, walkthrough layouts, and localized regional ad promos.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-sky-900 text-lg mb-2">Professional Video Editing Services in Gurgaon</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Handling executive corporate communications, brand campaign videos, and structured B2B materials tailored perfectly to the strict requirements of enterprise marketing headquarters.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-sky-900 text-lg mb-2">Serving Clients Across India & Globally</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our <strong>video editing services india</strong> flex perfectly across international time-zones. Enjoy robust cloud file infrastructure, secure file backups, and clean asynchronous update timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE EDITING WORKFLOW (PROCESS) ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-14">
          Our Step-by-Step Editing Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            ["1. Upload Footage", "Share your raw clips through our secure cloud portal. No file size limits, no complicated configurations—just a simple, protected upload process."],
            ["2. Creative Brief", "Tell us your goals, tone, and target platform metrics. We align on specific style benchmarks and key pacing before a single cut is made."],
            ["3. Editing & GFX", "Our professional editors assemble your footage tracks, balance acoustic frequencies, and layer in targeted motion sequences or clean subtitles."],
            ["4. Review & Feedback", "You review the digital cut using frame-accurate time-coded links. Share feedback and we implement revision passes until it matches expectations."],
            ["5. Final Delivery", "Receive your uncompressed, high-bitrate master files perfectly structured and formatted for immediate platform deployments."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-orange-50/70 p-6 rounded-xl border border-orange-100 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-orange-600 mb-3">{title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-10">
          In-House vs. Freelancer vs. MrTechies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-sky-900 text-white">
                <th className="p-4 rounded-tl-xl">Attribute</th>
                <th className="p-4">In-House Team</th>
                <th className="p-4">Freelancer</th>
                <th className="p-4 rounded-tr-xl">MrTechies</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y bg-slate-50/50">
              <tr>
                <td className="p-4 font-semibold">Cost</td>
                <td className="p-4">High (salaries, equipment, software licenses)</td>
                <td className="p-4">Variable, often unpredictable</td>
                <td className="p-4 font-semibold text-orange-600">Transparent, project-based or fixed bundle pricing</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Turnaround</td>
                <td className="p-4">Slower, bottlenecked by basic team bandwidth</td>
                <td className="p-4">Inconsistent, dependent on solo availability</td>
                <td className="p-4 font-semibold text-orange-600">Fast, dedicated asset delivery timelines</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Scalability</td>
                <td className="p-4">Difficult to expand infrastructure quickly</td>
                <td className="p-4">Hard to balance across scaling requirements</td>
                <td className="p-4 font-semibold text-orange-600">Built to fluidly scale with your raw video volumes</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Quality</td>
                <td className="p-4">Depends heavily on localized individual skill levels</td>
                <td className="p-4">Varies widely from single contract to contract</td>
                <td className="p-4 font-semibold text-orange-600">Consistent, structured studio-grade quality benchmarks</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Communication</td>
                <td className="p-4">Direct but resource-intensive to internally manage</td>
                <td className="p-4">Can be slow, fragile, or highly inconsistent</td>
                <td className="p-4 font-semibold text-orange-600">Dedicated point of contact with transparent cloud tools</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t">
        <h2 className="text-3xl font-bold text-sky-900 text-center mb-12">
          Frequently Asked Post-Production Questions
        </h2>

        <div className="space-y-8 text-gray-700">
          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">What video editing services do you provide?</h4>
            <p className="leading-relaxed">We provide end-to-end video editing across corporate and business content, YouTube videos, social media clips (Reels, Shorts, TikTok, LinkedIn), real estate walkthroughs, and motion graphics and animation. This includes color correction, audio cleanup, pacing and story structuring, captioning, and platform-specific formatting — so whether you need one polished video or an ongoing content pipeline, we handle it end to end.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">How long does editing usually take and what video formats do you accept?</h4>
            <p className="leading-relaxed">Turnaround time depends on project length and complexity, but most standard edits are delivered within a few business days, with faster options available for urgent deliverables. We accept a wide range of professional formats, including <strong>MP4, MOV, ProRes, BRAW, MXF, AVI</strong>, and most other common codecs from DSLR, mirrorless, drone, and cinema cameras.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">Do you offer wedding video editing services?</h4>
            <p className="leading-relaxed">Our core focus is B2B and creator growth content — corporate videos, YouTube, social media, and real estate — rather than personal event editing. That said, we do accept custom wedding or event editing projects on special request. If you have a specific event video you&apos;d like edited, reach out and we&apos;ll let you know if it&apos;s a fit for our team&apos;s schedule and style.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">What is the HSN code for video editing services?</h4>
            <p className="leading-relaxed">Video editing services in India are generally classified under creative or technical electronic services codes for GST purposes, though the exact classification can depend on how the service is billed and structured in your invoice. Since HSN/SAC classification can vary by contract type and billing method, we&apos;d recommend confirming the applicable code with your tax professional or chartered accountant before filing.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sky-900 mb-2">Is TDS applicable on video editing services?</h4>
            <p className="leading-relaxed">Whether TDS applies typically depends on the nature of the service agreement, the payment structure, and the applicable section under Indian tax law (such as provisions relating to professional or technical services). Because this varies based on your specific contract and business structure, we recommend checking with your accountant or tax advisor to confirm TDS applicability before processing payment.</p>
          </div>
        </div>
      </section>

      {/* ================= INTERNAL LINKS STRIP ================= */}
      <section className="bg-slate-50 border-t py-12 text-center">
        <h3 className="text-md font-semibold text-sky-900 uppercase tracking-wider mb-4">
          Explore Our Digital Marketing Ecosystem
        </h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/web-designing-services-regional" className="text-orange-600 hover:text-orange-700 underline">
            Website Development Services
          </Link>
          <Link href="/seo-services-regional" className="text-orange-600 hover:text-orange-700 underline">
            SEO Services
          </Link>
          <Link href="/digital-marketing-services" className="text-orange-600 hover:text-orange-700 underline">
            Digital Marketing Services
          </Link>
          <Link href="/blog/best-video-editing-service-hyderabad" className="text-orange-600 hover:text-orange-700 underline">
            Best Video Editing Service in Hyderabad
          </Link>
        </div>
      </section>

      {/* ================= FINAL CONVERSION CTA ================= */}
      <section className="bg-sky-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Videos That Drive Results?
          </h2>

          <p className="mb-10 text-sky-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a single high-impact video or a reliable partner to handle your entire content pipeline, MrTechies gives you the speed of an in-house team, the flexibility of a freelancer, and the consistency of a dedicated production studio. Let&apos;s turn your footage into videos that move the needle.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-bold text-gray-900 transition-colors shadow-lg">
              Get a Free Quote
            </Link>
            <Link href="/contact?type=consultation" className="border border-white/30 hover:border-white text-white px-10 py-4 rounded-xl font-bold transition-colors">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}