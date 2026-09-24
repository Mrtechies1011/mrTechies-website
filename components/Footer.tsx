import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND ================= */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/techies.png"
                alt="MrTechies – Web Development & SEO Company"
                width={180}
                height={40}
                priority
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">
              MrTechies is a Hyderabad‑based web development, web design, and SEO
              company helping startups and businesses across Telangana and Andhra
              Pradesh build fast, secure, and growth‑focused digital platforms.
            </p>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "Web Designing",
                "Web Development",
                "SEO Optimization",
                "App Development",
                "Digital Marketing",
                "CRM Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About MrTechies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog & Insights
                </Link>
              </li>
               <li>
                <Link href="/web-designing-services-hyderabad" className="hover:text-white">
                  Web Designing Services in Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                Hyderabad, Telangana, India
              </li>

              <li>
                <a
                  href="mailto:contact@mrtechies.com"
                  className="hover:text-white"
                >
                  contact@mrtechies.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+918309570802"
                  className="hover:text-white"
                >
                  +91 83095 70802
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="
                inline-block
                mt-6
                bg-brand-orange
                text-white
                px-6
                py-3
                rounded-lg
                text-sm
                font-medium
                transition
                hover:opacity-90
              "
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* ================= SEO LOCATIONS ================= */}
        <div className="mt-16 text-sm text-gray-500 leading-relaxed max-w-5xl">
          <p>
            <strong className="text-gray-300">Service Locations:</strong>{" "}
            Hyderabad, Telangana, Visakhapatnam (Vizag), Vijayawada, Andhra Pradesh.
          </p>

          <p className="mt-2">
            Keywords: Web Development Company in Hyderabad, Web Design Agency in
            Hyderabad, SEO Company in Telangana, Web Developers in Vizag,
            Digital Marketing Company in Andhra Pradesh.
          </p>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="
          border-t border-gray-800
          mt-14 pt-6
          flex flex-col sm:flex-row
          items-center
          justify-between
          text-xs sm:text-sm
          text-gray-500
        ">
          <p>
            © {new Date().getFullYear()} MrTechies. All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            Affordable Web Development & SEO Company in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
