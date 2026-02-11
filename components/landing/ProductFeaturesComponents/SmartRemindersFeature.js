"use client";

import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";
import { HiOutlineBell } from "react-icons/hi2";

const cardClass = "rounded-xl bg-white border border-slate-200/90 shadow-sm p-6";

const EXCLAMATION_PATH = "M524.65625,529.9355a45.15919,45.15919,0,0,1-41.25537-26.78614L383.44873,278.05757a59.83039,59.83039,0,1,1,111.87012-41.86426l72.37744,235.41211a45.07978,45.07978,0,0,1-43.04,58.33008Z";
const EXCLAMATION_CIRCLE = { cx: 361.7217, cy: 403.5046, r: 62.98931 };
const DURATION = 10000;

export default function SmartRemindersFeature() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const container = containerRef.current;
    const pathDraw = container.querySelector("#reminder-exclamation-body-draw");
    const circleDraw = container.querySelector("#reminder-exclamation-dot-draw");
    if (pathDraw) {
      animate(svg.createDrawable(pathDraw), { draw: "0 1", ease: "linear", duration: DURATION, loop: true });
    }
    if (circleDraw) {
      animate(svg.createDrawable(circleDraw), { draw: "0 1", ease: "linear", duration: DURATION, loop: true, delay: 500 });
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div ref={containerRef} className="relative w-full" data-aos="fade-right">
        <img src="/home/notify.svg" alt="" className="w-full h-auto" aria-hidden />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 790 512.20805" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g fill="none" strokeWidth="4">
            <circle id="reminder-exclamation-dot-bg" cx={EXCLAMATION_CIRCLE.cx} cy={EXCLAMATION_CIRCLE.cy} r={EXCLAMATION_CIRCLE.r} stroke="#8e51ff" style={{ opacity: 0.5 }} />
            <circle id="reminder-exclamation-dot-draw" cx={EXCLAMATION_CIRCLE.cx} cy={EXCLAMATION_CIRCLE.cy} r={EXCLAMATION_CIRCLE.r} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" />
            <path id="reminder-exclamation-body-bg" d={EXCLAMATION_PATH} transform="translate(-205 -193.89598)" stroke="#8e51ff" style={{ opacity: 0.5 }} />
            <path id="reminder-exclamation-body-draw" d={EXCLAMATION_PATH} transform="translate(-205 -193.89598)" stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>

      <div className={`${cardClass} flex flex-col space-y-4 items-center justify-center min-h-[200px]`} data-aos="fade-left">
        <div className="inline-flex items-center gap-2 rounded-lg bg-violet-100 text-violet-700 px-3 py-1.5 text-sm font-medium mb-4">
          <HiOutlineBell className="w-5 h-5" /> Smart Reminders
        </div>
        <p className="text-slate-600">Never miss an important task again.</p>

        <div className="rounded-lg border border-slate-200 bg-slate-50/80 px-4 py-3 flex items-center gap-3 w-full max-w-sm">
          <HiOutlineBell className="w-8 h-8 text-violet-500 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-medium text-slate-900 text-sm">Reminder: Call Mom — 6 PM</p>
            <p className="text-xs text-slate-500">Never miss an important task again.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
