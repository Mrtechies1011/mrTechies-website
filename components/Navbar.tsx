"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SERVICES = [
  {
    id: "design",
    label: "Web Designing",
    summary: "Visual identity, UX clarity",
    href: "/services/web-designing-services",
  },
  {
    id: "development",
    label: "Web Development",
    summary: "Performance & scalability",
    href: "/services/web-development-services",
  },
  {
    id: "seo",
    label: "SEO Services",
    summary: "Visibility & growth",
    href: "/services/seo-services",
  },
  {
    id: "app",
    label: "App Development",
    summary: "User-centric fast apps",
    href: "/services/app-development-services",
  },
  {
    id: "crm",
    label: "CRM Solutions",
    summary: "Automation & structure",
    href: "/services/crm-erp-solutions",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    summary: "Reach & conversions",
    href: "/services/digital-marketing-services",
  },
  {
    id: "content",
    label: "Content & Video Editing",
    summary: "Storytelling & recall",
    href: "/services/video-editing-services",
  },
];

// Helper component to render the correct icon directly
function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "design":
      return (
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-sky-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      );
    case "development":
      return (
        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      );
    case "seo":
      return (
        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
      );
    case "app":
      return (
        <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      );
    case "crm":
      return (
        <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
      );
    case "marketing":
      return (
        <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
      );
    case "content":
      return (
        <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
      {/* LOGO */}
        <Link href="/" className="flex items-center overflow-visible">
          <img
            src="/techies.png"
            alt="MrTechies Logo"
            className="h-12 md:h-16 w-auto object-contain scale-[3.8] origin-left"
          />
        </Link>
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/about"
            className={`transition-colors py-2 ${isActive("/about")
                ? "text-sky-800 font-semibold"
                : "text-gray-700 hover:text-sky-800"
              }`}
          >
            About
          </Link>

          {/* SERVICES MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1.5 py-5 ${isServicesActive
                  ? "text-gray-700 font-semibold"
                  : "text-gray-700 hover:text-sky-800 transition-colors"
                }`}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* EXPANDED MEGA MENU CONTAINER */}
            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 z-50 -mt-1"
                style={{ width: "760px" }}
              >
                <div className="grid grid-cols-3 gap-3">
                  {SERVICES.map((service, index) => {
                    const isLast = index === SERVICES.length - 1;
                    return (
                      <Link
                        key={service.id}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        style={isLast ? { gridColumn: "span 3" } : {}}
                        className="group p-3 rounded-xl bg-white hover:bg-sky-800 hover:text-white border border-gray-100 hover:border-transparent transition-all duration-300 shadow-2xs hover:shadow-md flex items-center gap-3.5"
                      >
                        <ServiceIcon id={service.id} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-bold text-gray-900 group-hover:text-white transition-colors">
                            {service.label}
                          </p>
                          <p className="text-[11px] text-gray-500 group-hover:text-white/80 transition-colors truncate mt-0.5">
                            {service.summary}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navLinks
            .filter((l) => l.href !== "/about")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-2 ${isActive(link.href)
                    ? "text-gray-700 font-semibold"
                    : "text-gray-700 hover:text-sky-800"
                  }`}
              >
                {link.label}
              </Link>
            ))}

          <Link
            href="/contact"
            className="bg-orange-500 text-white px-4 py-2 rounded-xl font-medium text-xs shadow-md hover:opacity-95 transition-all"
          >
            Get Quote
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none cursor-pointer p-2"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-5 space-y-4 text-sm font-medium">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={
                isActive("/about")
                  ? "text-sky-800 font-semibold"
                  : "text-gray-700"
              }
            >
              About
            </Link>

            {/* MOBILE SERVICES ACCORDION */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={
                    isServicesActive
                      ? "text-sky-800 font-semibold"
                      : "text-gray-700 font-semibold"
                  }
                >
                  Services Hub
                </Link>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="p-1 text-gray-500 focus:outline-none"
                  aria-label="Toggle services list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {servicesOpen && (
                <div className="pl-3 border-l-2 border-gray-100 flex flex-col space-y-3 py-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={() => {
                        setOpen(false);
                        setServicesOpen(false);
                      }}
                      className="text-gray-600 hover:text-sky-800 text-xs flex items-center gap-3 py-1.5"
                    >
                      <ServiceIcon id={service.id} />
                      <div>
                        <span className="font-semibold text-gray-900 text-[14px] block">
                          {service.label}
                        </span>
                        <span className="text-gray-400 mt-0.5 text-[10.5px] block">
                          {service.summary}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={
                isActive("/blog")
                  ? "text-sky-800 font-semibold"
                  : "text-gray-700"
              }
            >
              Blog
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={
                isActive("/contact")
                  ? "text-sky-800 font-semibold"
                  : "text-gray-700"
              }
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-orange-500 text-white px-5 py-3 rounded-xl text-center mt-3 font-medium shadow-sm"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}