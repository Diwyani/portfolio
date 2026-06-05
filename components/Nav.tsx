"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Fun", href: "#fun" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "work", "fun"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/80 border-b border-navy/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center gap-10">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`nav-link font-sans text-xs tracking-widest uppercase font-medium text-navy transition-colors hover:text-accent ${
              active === href.slice(1) ? "active" : ""
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
