'use client';

import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 1400,
  locale = 'en-IN',
  className = '',
}) {
  const ref = useRef(null);
  const frameRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setValue(target);
        return;
      }

      const startedAt = performance.now();

      const animate = (now) => {
        const elapsed = now - startedAt;
        const progress = Math.min(elapsed / duration, 1);

        setValue(Math.round(target * easeOutCubic(progress)));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.3,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, target]);

  const formattedValue = new Intl.NumberFormat(locale).format(value);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${formattedValue}${suffix}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
