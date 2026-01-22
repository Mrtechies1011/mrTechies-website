import { Metadata } from "next";
import ServicesClient from "./ServiceClient";

export const metadata: Metadata = {
  title:
    "Our Services | Web Design, Development, SEO & Digital Marketing – MrTechies",
  description:
    "Explore MrTechies services including web designing, web development, SEO optimization, app development, digital marketing, CRM solutions, and content creation. Serving Hyderabad, Telangana & Andhra Pradesh.",
  keywords: [
    "Web Designing Services",
    "Web Development Company Hyderabad",
    "SEO Services Hyderabad",
    "Digital Marketing Agency Telangana",
    "App Development Company India",
    "CRM Solutions for Businesses",
    "Content Creation Agency",
    "Web Development Andhra Pradesh",
    "Vizag Web Development",
    "Vijayawada Web Designers",
  ],
  alternates: {
    canonical: "https://mrtechies.com/services",
  },
  openGraph: {
    title:
      "MrTechies Services – Web Design, Development, SEO & Digital Marketing",
    description:
      "Premium, performance‑driven digital services by MrTechies. Helping businesses grow across Hyderabad, Telangana & Andhra Pradesh.",
    url: "https://mrtechies.com/services",
    siteName: "MrTechies",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
