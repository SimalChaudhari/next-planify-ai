"use client";

import React, { useEffect, useRef, useId } from "react";
import { animate, svg } from "animejs";

// Single continuous path (outer bubble only) - no second subpath, so draw + car start at same point
const CHAT_TOP_PATH =
  "M488.93638,356.14169a4.47525,4.47525,0,0,1-3.30664-1.46436L436.00767,300.544a6.02039,6.02039,0,0,0-4.42627-1.94727H169.3618a15.02615,15.02615,0,0,1-15.00928-15.00927V189.025a15.02615,15.02615,0,0,1,15.00928-15.00928H509.087A15.02615,15.02615,0,0,1,524.0963,189.025v94.5625A15.02615,15.02615,0,0,1,509.087,298.59676h-9.63135a6.01157,6.01157,0,0,0-6.00464,6.00489v47.0332a4.474,4.474,0,0,1-2.87011,4.1958A4.52563,4.52563,0,0,1,488.93638,356.14169Z";

const VIEW_WIDTH = 891.29496;
const VIEW_HEIGHT = 745.19434;

export default function ChatBubbleMotionPath({
  duration = 8000,
  className = "",
}) {
  const containerRef = useRef(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;
    const pathEl = container.querySelector(`#chat-bubble-draw-${id}`);
    if (!pathEl) return;
    animate(svg.createDrawable(pathEl), {
      draw: "0 1",
      ease: "linear",
      duration,
      loop: true,
    });
  }, [duration, id]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[320px] mx-auto overflow-hidden ${className}`}
      style={{
        maxWidth: "100%",
        aspectRatio: `${VIEW_WIDTH} / ${VIEW_HEIGHT}`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <filter id={`chat-bubble-shadow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#5b21b6" floodOpacity="0.5" />
          </filter>
        </defs>
        <g transform="translate(-154.35252 -77.40283)" fill="none" strokeWidth="2">
          <path
            id={`chat-bubble-bg-${id}`}
            d={CHAT_TOP_PATH}
            stroke="#334155"
            strokeWidth="2"
            fill="none"
            style={{ opacity: 0.5 }}
            aria-hidden
          />
          <path
            id={`chat-bubble-draw-${id}`}
            d={CHAT_TOP_PATH}
            stroke="#7c3aed"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            fill="none"
            aria-hidden
          />
        </g>
      </svg>
    </div>
  );
}
