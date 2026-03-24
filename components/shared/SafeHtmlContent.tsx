"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

interface SafeHtmlContentProps {
  html: string;
  className?: string;
}

// Allow iframes from trusted sources (Mentaya, YouTube, Vimeo, etc.)
const ALLOWED_IFRAME_SRCS = [
  "https://app.mentaya.com",
  "https://www.youtube.com",
  "https://player.vimeo.com",
  "https://www.google.com",
  "https://calendly.com",
];

function isTrustedIframeSrc(src: string): boolean {
  try {
    const url = new URL(src);
    return ALLOWED_IFRAME_SRCS.some((allowed) =>
      url.origin.startsWith(new URL(allowed).origin)
    );
  } catch {
    return false;
  }
}

export default function SafeHtmlContent({ html, className }: SafeHtmlContentProps) {
  const [clean, setClean] = useState("");

  useEffect(() => {
    const sanitized = DOMPurify.sanitize(html, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: [
        "allow",
        "allowfullscreen",
        "frameborder",
        "scrolling",
        "src",
        "width",
        "height",
        "style",
        "title",
      ],
      // Hook to strip iframes pointing to untrusted origins
      FORBID_TAGS: [],
    });

    // Post-sanitize: strip untrusted iframes, fix height/scrolling on trusted ones
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitized, "text/html");
    doc.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.getAttribute("src") || "";
      if (!isTrustedIframeSrc(src)) {
        iframe.remove();
        return;
      }
      // Override height to prevent internal scrolling and remove onload resize script
      iframe.removeAttribute("onload");
      iframe.setAttribute("height", "400");
      iframe.setAttribute("scrolling", "no");
      // Merge into existing inline style instead of replacing it
      const existing = iframe.getAttribute("style") || "";
      const cleaned = existing
        .split(";")
        .map((s) => s.trim())
        .filter((s) => s && !s.startsWith("max-width"))
        .join("; ");
      iframe.setAttribute("style", `${cleaned}; height: 400px; width: 100%;`);
    });

    setClean(doc.body.innerHTML);
  }, [html]);

  if (!clean) return <span>{html}</span>;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
