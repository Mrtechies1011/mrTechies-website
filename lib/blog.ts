import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  return fs.readdirSync(BLOG_DIR).map((file) => {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(content);
    return {
      slug: file.replace(".mdx", ""),
      ...data,
    };
  });
}
