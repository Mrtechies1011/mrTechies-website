import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

// SEO Expert Configuration for Hyderabad Local Targeting
export const metadata: Metadata = {
  title: 'Top Mobile App Development Services in Hyderabad | Custom Solutions',
  description: 'Looking for professional app development services in Hyderabad? We build high-performance web applications, mobile-first apps, admin dashboards, and custom internal tools.',
  keywords: ['mobile app development services hyderabad', 'app development company', 'custom app development services'],
};

export default function AppDevelopmentHub() {
  const services = [
    {
      title: 'Web Applications',
      description: 'High-performance apps built for real users.',
      href: '/services/app-development-services/web-applications',
      imgSrc: "/services/app-web.avif",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Mobile-First Apps',
      description: 'Smooth experiences across modern devices.',
      href: '/services/app-development-services/mobile-first-apps',
      imgSrc: "/services/app-mobile.png",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 002-2H8a2 2 0 002 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Admin Dashboards',
      description: 'Internal tools for managing operations and data.',
      href: '/services/app-development-services/admin-dashboards',
      imgSrc: "/services/app-admin.webp",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Internal Tools',
      description: 'Custom systems designed around workflows.',
      href: '/services/app-development-services/internal-tools',
      imgSrc: "/services/app-internal.jpg",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  const bottomTags = ['React', 'Modern UX', 'Scalable Systems'];

  return (
    <div className="min-h-screen bg-[#DED6FA] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E1A47] tracking-tight mb-4">
            Next-Gen <strong className="text-indigo-700">Mobile App Development Services in Hyderabad</strong>
          </h1>
          <p className="text-base text-purple-950/80 leading-relaxed font-medium">
            Apps must feel effortless to earn daily usage. We engineer robust, intuitive corporate architectures as a premier <strong className="text-indigo-800">app development company</strong>, tailoring <strong className="text-indigo-800">custom app development services</strong> to complex enterprise requirements, transforming modern concepts into localized marketplace leaders.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {services.map((service, index) => (
            <Link 
              href={service.href} 
              key={index} 
              className="bg-white rounded-3xl border border-purple-200/60 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                <img 
                  src={service.imgSrc} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center flex-grow bg-white">
                <div className="mb-4 text-indigo-600">
                  {service.icon}
                </div>
                
                <h2 className="text-lg font-bold text-[#4A2E80] mb-2">
                  {service.title}
                </h2>
                
                <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {bottomTags.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="px-6 py-2 border border-purple-300 rounded-full text-xs font-medium text-[#5D478A] bg-purple-50/40 backdrop-blur-sm shadow-sm hover:bg-purple-100/60 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <footer className="mt-8 border-t border-purple-300/40 pt-10 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#3B2361] mb-3">
            Why Choose Our Custom Mobile App Development Services?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
            As a leading <strong className="text-indigo-800">app development company</strong> serving businesses across Hyderabad, we specialize in bridging engineering gaps. Whether deployment calls for scaling modern full-stack progressive web apps or configuring responsive cross-platform architectures, our <strong className="text-indigo-800">custom app development services</strong> optimize data visibility, reduce workflow overhead, and ensure sustainable code integrity.
          </p>
        </footer>

      </div>
    </div>
  );
}