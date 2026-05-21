"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";

const FRAME_COUNT = 69;
const FRAME_INTERVAL_MS = 95;

function framePath(index) {
  return `/images/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
}

export default function HeroFrameSequence() {
  const frames = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, index) => framePath(index)),
    []
  );
  const [currentFrame, setCurrentFrame] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    const preload = window.setTimeout(() => {
      frames.slice(1).forEach((src) => {
        const image = new window.Image();
        image.src = src;
      });
    }, 300);

    const interval = window.setInterval(() => {
      setCurrentFrame((frame) => (frame + 1) % frames.length);
    }, FRAME_INTERVAL_MS);

    return () => {
      window.clearTimeout(preload);
      window.clearInterval(interval);
    };
  }, [frames]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateParallax = () => {
      if (reducedMotion.matches || window.innerWidth < 768) {
        setParallaxOffset(0);
        return;
      }

      setParallaxOffset(Math.min(window.scrollY * 0.08, 64));
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        src={frames[currentFrame]}
        alt=""
        className="sv-hero-parallax h-full w-full object-cover opacity-90"
        style={{ transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)` }}
        draggable="false"
      />
      <img
        src={frames[Math.min(8, frames.length - 1)]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        draggable="false"
      />
      <div className="sv-grain absolute inset-0 opacity-45" />
    </div>
  );
}
