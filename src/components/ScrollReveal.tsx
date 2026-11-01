"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.dataset.revealed = "true";
      return;
    }

    element.dataset.revealed = "false";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      data-revealed="true"
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
