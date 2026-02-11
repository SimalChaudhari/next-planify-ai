"use client";

import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";
import { HiOutlineCalendar } from "react-icons/hi2";

const VIEW_OPTIONS = ["Daily", "Weekly", "Monthly"];

// Rects as paths (createDrawable needs path)
const CALENDAR_RECT_1_PATH = "M36.94894,199.30861h100.91574v65.59523h-100.91574Z";
const CALENDAR_RECT_2_PATH = "M162.34439,199.30861h100.91574v65.59523h-100.91574Z";
const CALENDAR_RECT_3_PATH = "M413.13531,106.46612h100.91577v65.59524h-100.91577Z";
const DURATION = 10000;

export default function CalendarViewFeature() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const container = containerRef.current;
    const run = () => {
      ["calendar-rect-1-draw", "calendar-rect-2-draw", "calendar-rect-3-draw"].forEach((id, i) => {
        const el = container.querySelector(`#${id}`);
        if (el) animate(svg.createDrawable(el), { draw: "0 1", ease: "linear", duration: DURATION, loop: true, delay: i * 400 });
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right">
        <div className="inline-flex items-center gap-2 rounded-lg bg-violet-100 text-violet-700 px-3 py-1.5 text-sm font-medium mb-4">
          <HiOutlineCalendar className="w-5 h-5" /> Calendar View
        </div>
        <p className="text-slate-600 mb-4">Drag, drop, and adjust your schedule effortlessly.</p>
        <div className="flex gap-2">
          {VIEW_OPTIONS.map((v, i) => (
            <button key={i} type="button" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? "bg-violet-600 text-white hover:bg-violet-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center min-h-[200px]" data-aos="fade-left">
        <div ref={containerRef} className="relative w-full max-w-[500px]">
          <img src="/home/calendar.svg" alt="" className="w-full h-auto" aria-hidden />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 866.33071 605.73993" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g fill="none" strokeWidth="2">
            <path id="calendar-rect-1-bg" d={CALENDAR_RECT_1_PATH} stroke="#fff" style={{ opacity: 0.5 }} />
            <path id="calendar-rect-1-draw" d={CALENDAR_RECT_1_PATH} stroke="#8e51ff" strokeLinecap="round" strokeLinejoin="round" />
            <path id="calendar-rect-2-bg" d={CALENDAR_RECT_2_PATH} stroke="#fff" style={{ opacity: 0.5 }} />
            <path id="calendar-rect-2-draw" d={CALENDAR_RECT_2_PATH} stroke="#8e51ff" strokeLinecap="round" strokeLinejoin="round" />
            <path id="calendar-rect-3-bg" d={CALENDAR_RECT_3_PATH} stroke="#fff" style={{ opacity: 0.5 }} />
            <path id="calendar-rect-3-draw" d={CALENDAR_RECT_3_PATH} stroke="#8e51ff" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
        </div>
      </div>
    </div>
  );
}
