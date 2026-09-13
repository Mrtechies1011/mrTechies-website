// app/sitemap.ts

import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://mrtechies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  /*
   * Main static pages
   */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /*
   * Service pages
   */
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services/web-designing-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/services/web-development-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/services/seo-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/services/digital-marketing-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/services/crm-erp-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/services/video-editing-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/services/app-development-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /*
   * Dynamic blog pages
   *
   * No fs / readdir / content/blog folder required.
   */
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,

    lastModified: new Date(blog.publishedDate),

    changeFrequency: "monthly",

    priority: blog.featured ? 0.8 : 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
  ];
}