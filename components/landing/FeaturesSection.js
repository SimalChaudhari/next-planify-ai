"use client";

import React from "react";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import Card from "@/components/common/card";
import AnimatedSplitText from "../common/AnimatedSplitText";

export default function FeaturesSection({ innerRef }) {
  return (
    <section className="py-20 md:py-24 bg-white" id="features" ref={innerRef} aria-labelledby="smart-task-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-violet-500 mb-3" data-aos="fade-down">Core capability</p>
        <h2 id="smart-task-heading" className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
        <AnimatedSplitText text="AI-Powered Smart Task Management" />
          {/* AI-Powered Smart Task Management */}
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed">
        <AnimatedSplitText text="Planify automatically organizes, prioritizes, and schedules your tasks by urgency, deadlines, and how you work — so you always know what to do next." />
          {/* Planify automatically organizes, prioritizes, and schedules your tasks by urgency, deadlines, and how you work — so you always know what to do next. */}
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-white rounded-xl p-6 md:p-7 w-full max-w-md shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-slate-200/90" data-aos="fade-right">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">Sample checklist</p>
            <div className="space-y-1">
              <div className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-slate-50/80 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded border-2 border-slate-300 shrink-0 accent-slate-700" aria-label="Call Mom" />
                <span className="text-sm text-slate-800">Call Mom</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-slate-50/80 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-2 border-slate-300 shrink-0 accent-slate-700" aria-label="Client Meeting" />
                  <span className="text-sm text-slate-800 flex-1">Client Meeting</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-red-500 text-white shrink-0">High Priority</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-slate-50/80 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-2 border-slate-300 shrink-0 accent-slate-700" aria-label="Gym" />
                  <span className="text-sm text-slate-800 flex-1">Gym</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-500 text-white shrink-0">Medium</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
          <Card
          className=""
            icon={HiOutlineClipboardDocumentCheck}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
