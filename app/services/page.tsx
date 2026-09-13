import type { Metadata } from "next";

import ServicesClient from "./ServiceClient";

const BASE_URL = "https://mrtechies.com";
const SERVICES_URL = `${BASE_URL}/services`;


/* =========================================================
   SERVICE DATA
========================================================= */

const SERVICES = [
  {
    name: "Web Designing Services",
    serviceType: "Web Design",
    description:
      "Responsive UI/UX, website redesign and professional web designing services focused on clarity, usability, brand trust and conversion.",
    url: `${BASE_URL}/services/web-designing-services`,
  },

  {
    name: "Web Development Services",
    serviceType: "Web Development",
    description:
      "Modern business website development and custom web solutions built for performance, scalability and maintainability.",
    url: `${BASE_URL}/services/web-development-services`,
  },

  {
    name: "SEO Services",
    serviceType: "Search Engine Optimization",
    description:
      "Technical, on-page and search-intent driven SEO services designed to improve organic visibility and qualified search traffic.",
    url: `${BASE_URL}/services/seo-services`,
  },

  {
    name: "App Development Services",
    serviceType: "Application Development",
    description:
      "User-focused mobile and web application development for businesses that require reliable digital products and custom functionality.",
    url: `${BASE_URL}/services/app-development-services`,
  },

  {
    name: "CRM & ERP Solutions",
    serviceType: "CRM and ERP Development",
    description:
      "Custom CRM and ERP systems that organize leads, customers, workflows, operations and business information.",
    url: `${BASE_URL}/services/crm-erp-solutions`,
  },

  {
    name: "Digital Marketing Services",
    serviceType: "Digital Marketing",
    description:
      "Digital marketing services connecting campaigns, content, landing pages, lead generation and measurable business objectives.",
    url: `${BASE_URL}/services/digital-marketing-services`,
  },

  {
    name: "Video Editing Services",
    serviceType: "Video Editing and Content",
    description:
      "Professional video editing and digital content services for social media, YouTube, advertising, corporate communication and campaigns.",
    url: `${BASE_URL}/services/video-editing-services`,
  },
];


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "Web Design, Development & SEO Services Hyderabad | MrTechies",

  description:
    "MrTechies provides web design, web development, SEO, app development, CRM & ERP, digital marketing and video editing services in Hyderabad and across India.",

  alternates: {
    canonical: SERVICES_URL,
  },

  openGraph: {
    title:
      "Web Design, Development & Digital Services | MrTechies",

    description:
      "Explore professional web design, development, SEO, applications, CRM & ERP, digital marketing and video editing services from MrTechies.",

    url: SERVICES_URL,

    siteName: "MrTechies",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary",

    title:
      "Web Design, Development & SEO Services | MrTechies",

    description:
      "Web design, development, SEO, applications, CRM, digital marketing and video services for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  category:
    "Web Development and Digital Marketing",

  creator: "MrTechies",

  publisher: "MrTechies",
};


/* =========================================================
   STRUCTURED DATA
========================================================= */

const servicesSchema = {
  "@context": "https://schema.org",

  "@graph": [

    /* =====================================================
       SERVICES COLLECTION PAGE
    ===================================================== */

    {
      "@type": "CollectionPage",

      "@id": `${SERVICES_URL}#webpage`,

      url: SERVICES_URL,

      name:
        "Web Design, Development & SEO Services Hyderabad | MrTechies",

      description:
        "Explore web design, web development, SEO, application development, CRM and ERP, digital marketing and video editing services from MrTechies.",

      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },

      about: [
        {
          "@type": "Thing",
          name: "Web Design",
        },

        {
          "@type": "Thing",
          name: "Web Development",
        },

        {
          "@type": "Thing",
          name: "Search Engine Optimization",
        },

        {
          "@type": "Thing",
          name: "Application Development",
        },

        {
          "@type": "Thing",
          name: "Digital Marketing",
        },

        {
          "@type": "Thing",
          name: "CRM and ERP Development",
        },

        {
          "@type": "Thing",
          name: "Video Editing",
        },
      ],

      breadcrumb: {
        "@id": `${SERVICES_URL}#breadcrumb`,
      },

      mainEntity: {
        "@id": `${SERVICES_URL}#service-list`,
      },
    },


    /* =====================================================
       BREADCRUMBS
    ===================================================== */

    {
      "@type": "BreadcrumbList",

      "@id": `${SERVICES_URL}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: BASE_URL,
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Services",

          item: SERVICES_URL,
        },
      ],
    },


    /* =====================================================
       SERVICE COLLECTION
    ===================================================== */

    {
      "@type": "ItemList",

      "@id": `${SERVICES_URL}#service-list`,

      name: "MrTechies Digital Services",

      description:
        "Web design, development, SEO, application development, CRM and ERP, digital marketing and video editing services.",

      numberOfItems: SERVICES.length,

      itemListElement: SERVICES.map(
        (service, index) => ({
          "@type": "ListItem",

          position: index + 1,

          item: {
            "@type": "Service",

            "@id": `${service.url}#service`,

            name: service.name,

            serviceType:
              service.serviceType,

            description:
              service.description,

            url: service.url,

            provider: {
              "@id": `${BASE_URL}/#organization`,
            },

            areaServed: [
              {
                "@type": "City",
                name: "Hyderabad",
              },

              {
                "@type": "Country",
                name: "India",
              },
            ],
          },
        })
      ),
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            servicesSchema
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
    </>
  );
}