"use client";

import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const CHAT_TOP_PATH =
  "M488.93638,356.14169a4.47525,4.47525,0,0,1-3.30664-1.46436L436.00767,300.544a6.02039,6.02039,0,0,0-4.42627-1.94727H169.3618a15.02615,15.02615,0,0,1-15.00928-15.00927V189.025a15.02615,15.02615,0,0,1,15.00928-15.00928H509.087A15.02615,15.02615,0,0,1,524.0963,189.025v94.5625A15.02615,15.02615,0,0,1,509.087,298.59676h-9.63135a6.01157,6.01157,0,0,0-6.00464,6.00489v47.0332a4.474,4.474,0,0,1-2.87011,4.1958A4.52563,4.52563,0,0,1,488.93638,356.14169Z";

// Single continuous path (outer bubble only) - like top, for smooth animation
const CHAT_BOTTOM_PATH =
  "M709.41908,676.83065a4.474,4.474,0,0,1-2.87011-4.1958v-47.0332a6.01157,6.01157,0,0,0-6.00464-6.00489H690.913a15.02615,15.02615,0,0,1-15.00928-15.00927V510.025A15.02615,15.02615,0,0,1,690.913,495.01571H1030.6382a15.02615,15.02615,0,0,1,15.00928,15.00928v94.5625a15.02615,15.02615,0,0,1-15.00928,15.00927H768.4186a6.02039,6.02039,0,0,0-4.42627,1.94727l-49.62207,54.1333a4.47525,4.47525,0,0,1-3.30664,1.46436A4.52563,4.52563,0,0,1,709.41908,676.83065Z";

const SAMPLE_MESSAGES = ["Plan my day for tomorrow", "Add meeting at 10 AM", "Remind me at 6 PM"];

export default function AIChatAssistantFeature() {
  const chatBubbleRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !chatBubbleRef.current) return;
    const container = chatBubbleRef.current;
    const topPath = container.querySelector("#chat-bubble-top-draw");
    const bottomPath = container.querySelector("#chat-bubble-bottom-draw");
    const duration = 10000;
    if (topPath) {
      animate(svg.createDrawable(topPath), {
        draw: "0 1",
        ease: "linear",
        duration,
        loop: true,
      });
    }
    if (bottomPath) {
      animate(svg.createDrawable(bottomPath), {
        draw: "0 1",
        ease: "linear",
        duration,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div className="md:pr-4" data-aos="fade-right">
        <span className="inline-flex items-center gap-2 rounded-lg bg-violet-100 text-violet-700 px-3 py-1.5 text-sm font-medium mb-4">
          <HiOutlineChatBubbleLeftRight className="w-5 h-5 shrink-0" aria-hidden /> AI Chat Assistant
        </span>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Just tell Planify what you need</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">Natural language commands — Planify AI handles the rest.</p>
        <div className="space-y-2">
          {SAMPLE_MESSAGES.map((msg, i) => (
            <div key={i} className="rounded-lg bg-white border border-slate-200/90 shadow-sm px-4 py-3 text-sm text-slate-700" data-aos="fade-up">
              &quot;{msg}&quot;
            </div>
          ))}
        </div>
      </div>
      <div ref={chatBubbleRef} className="relative w-full max-w-[420px] mx-auto" style={{ aspectRatio: "891.29 / 745.19" }} data-aos="fade-left">
        <img src="/home/chatting.svg" alt="" className="w-full h-full object-contain" aria-hidden />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 891.29496 745.19434" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <filter id="chat-bubble-dot-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#5b21b6" floodOpacity="0.5" />
            </filter>
          </defs>
          <g transform="translate(-154.35252 -77.40283)" fill="none" strokeWidth="2">
            {/* <path id="chat-bubble-top-bg" d={CHAT_TOP_PATH} stroke="#334155" strokeWidth="2" fill="none" style={{ opacity: 0.5 }} aria-hidden /> */}
            <path id="chat-bubble-top-bg" d={CHAT_TOP_PATH} stroke="#fff" strokeWidth="2" fill="none" style={{ opacity: 0.5 }} aria-hidden />
            <path id="chat-bubble-top-draw" d={CHAT_TOP_PATH} stroke="#7c3aed" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" fill="none" aria-hidden />
            <path id="chat-bubble-bottom-bg" d={CHAT_BOTTOM_PATH} stroke="#fff" strokeWidth="2" fill="none" style={{ opacity: 0.5 }} aria-hidden />
            <path id="chat-bubble-bottom-draw" d={CHAT_BOTTOM_PATH} stroke="#7c3aed" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" fill="none" aria-hidden />
          </g>
        </svg>
      </div>
    </div>
  );
}
