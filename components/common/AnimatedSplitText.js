"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger, splitText } from "animejs";

export default function AnimatedSplitText({
  text,
  as: Tag = "span",
  className = "",
  wrap = true,
  duration = 850,
  ease = "out(3)",
  staggerDelay = 50,
  loop = false,
  alternate = true,
  yFrom = "100%",
  yTo = "0%",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        const { chars } = splitText(el, { chars: { wrap } });
        animate(chars, {
          y: [yFrom, yTo],
          duration,
          ease,
          delay: stagger(staggerDelay),
          loop,
          alternate,
        });
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, wrap, duration, ease, staggerDelay, loop, alternate, yFrom, yTo]);

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
