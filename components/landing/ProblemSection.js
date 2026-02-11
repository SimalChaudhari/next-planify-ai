"use client";

import React from "react";
import AnimatedSplitText from "@/components/common/AnimatedSplitText";

const ITEMS = [
  { problem: "Forget tasks", solution: "Smart reminders", desc: "Never miss a deadline or an important call. Planify surfaces the right task at the right time." },
  { problem: "Overloaded schedule", solution: "AI prioritization", desc: "AI ranks by urgency and impact so you always know what to do next — no more decision fatigue." },
  { problem: "Unorganized day", solution: "Auto daily planning", desc: "One message builds your day. Breaks, focus blocks, and meetings in seconds — not hours." },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-50" aria-labelledby="problem-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-violet-500 mb-3" data-aos="fade-up" >Why Planify</p>
        <h2 id="problem-heading" className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
          <AnimatedSplitText text="Struggling with Time Management?" />
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed">
        <AnimatedSplitText text="We built Planify AI to solve the three biggest productivity blockers — so you can focus on what actually" />
          {/* We built Planify AI to solve the three biggest productivity blockers — so you can focus on what actually matters. */}
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-slate-200 transition-all text-left" data-aos="fade-up">
              <p className="text-xs font-medium text-violet-500 uppercase tracking-wider mb-2">{item.problem}</p>
              <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">{item.solution}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
