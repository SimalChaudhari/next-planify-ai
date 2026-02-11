"use client";

import React from "react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCpuChip,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import AnimatedSplitText from "../common/AnimatedSplitText";

const STEPS = [
  { step: "1", title: "Tell AI", desc: "Say: 'Plan my day'", Icon: HiOutlineChatBubbleLeftRight },
  { step: "2", title: "AI Organizes", desc: "AI creates your smart schedule", Icon: HiOutlineCpuChip },
  { step: "3", title: "Stay Focused", desc: "Follow your optimized plan", Icon: HiOutlineCheckCircle },
];

export default function HowItWorksSection({ innerRef }) {
  return (
    <section className="py-20 md:py-24 bg-white" id="how-it-works" ref={innerRef} aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-violet-600 mb-3" data-aos="fade-down">Getting started</p>
        <h2 id="how-heading" className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
        <AnimatedSplitText text="How Planify AI Works — In 3 Simple Steps" />
          {/* How Planify AI Works — In 3 Simple Steps */}
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed">
        <AnimatedSplitText text="No setup, no learning curve. Tell the AI what you need and get a clear plan in seconds." />
          {/* No setup, no learning curve. Tell the AI what you need and get a clear plan in seconds. */}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((item, i) => {
            const Icon = item.Icon;
            return (
              <div
                key={i}
                className="group select-none w-full max-w-[250px] mx-auto flex flex-col p-6 relative items-center justify-center bg-white hover:bg-violet-50 border border-slate-700 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
               data-aos="flip-down"
              >
                <div className="text-center flex flex-col flex-auto justify-center items-center">
                  <div className="p-3 flex justify-center">
                    <Icon
                      className="w-12 h-12 text-violet-400 group-hover:animate-bounce"
                      aria-hidden
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="inline-flex w-8 h-8 rounded-full bg-white border border-violet-600 text-violet-800 text-sm font-heading font-bold items-center justify-center mb-3" aria-hidden>
                    {item.step}
                  </span>
                  <h3 className="text-xl font-heading font-bold py-2 text-slate-800">{item.title}</h3>
                  <p className="font-medium text-sm text-slate-600 px-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
