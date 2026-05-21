"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value) {
  const match = String(value).match(/^([^0-9]*)([\d,]+)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: value, format: false };
  }

  return {
    prefix: match[1],
    target: Number(match[2].replace(/,/g, "")),
    suffix: match[3],
    format: true,
  };
}

export default function AnimatedStatValue({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const { prefix, target, suffix, format } = parseStatValue(value);
    if (!format) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    let frameId;
    let started = false;
    const formatter = new Intl.NumberFormat("en-IN");

    const animate = () => {
      const start = performance.now();
      const duration = 1400;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);

        setDisplayValue(`${prefix}${formatter.format(current)}${suffix}`);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}
