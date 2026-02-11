"use client";

import React from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const cardClass = "rounded-xl bg-white border border-slate-200/90 shadow-sm p-6";

const TODO_CARD_PATH = "M16.058,0H283.014a16.058,16.058,0,0,1,16.058,16.058V358.283a16.058,16.058,0,0,1-16.058,16.057H16.058A16.058,16.058,0,0,1,0,358.283V16.058A16.058,16.058,0,0,1,16.058,0Z";

const SCHEDULE_ITEMS = [
  { time: "7:00 AM", task: "Morning Exercise" },
  { time: "9:00 AM", task: "Deep Work" },
  { time: "1:00 PM", task: "Lunch" },
  { time: "4:00 PM", task: "Meeting" },
  { time: "6:00 PM", task: "Call Mom" },
  { time: "8:00 PM", task: "Study" },
];

export default function SmartDailyPlannerFeature() {
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div className="flex items-center justify-center rounded-2xl order-2 md:order-1" data-aos="fade-right">
        <div className="relative w-full max-w-[320px] mx-auto" style={{ aspectRatio: "800 / 800.005" }}>
          <img src="/home/todo-list.svg" alt="" className="w-full h-full object-contain" aria-hidden />
          {/* <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800.005" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <g fill="none" strokeWidth="2">
              <path id="todo-card-bg" d={TODO_CARD_PATH} stroke="#334155" style={{ opacity: 0.5 }} />
              <path id="todo-card-draw" d={TODO_CARD_PATH} stroke="#7c3aed" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg> */}
        </div>
      </div>
      <div className="order-1 md:order-2" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 rounded-lg bg-violet-100 text-violet-700 px-3 py-1.5 text-sm font-medium mb-4">
          <HiOutlineCalendarDays className="w-5 h-5 shrink-0" aria-hidden /> Smart Daily Planner
        </span>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Your day, built by AI</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">Automatically builds your day with breaks and smart time slots.</p>
        <div className={cardClass}>
          <div className="space-y-0">
            {SCHEDULE_ITEMS.map((row, i) => (
              <div key={i} className="flex gap-4 py-2.5 border-b border-slate-100 last:border-0" data-aos="fade-up">
                <span className="text-violet-600 font-medium w-20 shrink-0 text-sm tabular-nums">{row.time}</span>
                <span className="text-slate-800 text-sm">{row.task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
