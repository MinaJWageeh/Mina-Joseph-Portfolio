"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main > section, main > section .liquid-glass-card")
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    targets.forEach((target) => {
      const siblings = targets.filter((candidate) => candidate.parentElement === target.parentElement);
      const siblingIndex = siblings.indexOf(target);
      target.style.setProperty("--reveal-delay", `${Math.min(siblingIndex, 4) * 70}ms`);
      target.classList.add("scroll-reveal");
    });

    document.documentElement.classList.add("scroll-reveal-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-reveal-enabled");
      targets.forEach((target) => {
        target.classList.remove("scroll-reveal", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
