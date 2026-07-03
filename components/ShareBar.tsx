"use client";

import { Twitter, Linkedin, Link2 } from "lucide-react";

export default function ShareBar({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;

  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    alert("Link copied");
  };

  return (
    <div className="fixed left-4 top-1/3 hidden lg:flex flex-col gap-3">

      <a
        href={twitter}
        target="_blank"
        className="p-3 rounded-xl bg-white border hover:bg-sky-50"
      >
        <Twitter size={18} />
      </a>

      <a
        href={linkedin}
        target="_blank"
        className="p-3 rounded-xl bg-white border hover:bg-sky-50"
      >
        <Linkedin size={18} />
      </a>

      <button
        onClick={copy}
        className="p-3 rounded-xl bg-white border hover:bg-orange-50"
      >
        <Link2 size={18} />
      </button>

    </div>
  );
}