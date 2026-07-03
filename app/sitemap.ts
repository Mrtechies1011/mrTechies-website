import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mrtechies.com"; // change later if needed

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Blog posts
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDirectory);

  const blogPages = files.map((file) => ({
    url: `${baseUrl}/blog/${file.replace(".mdx", "")}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}
