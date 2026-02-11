"use client";

import React, { useEffect, useRef } from "react";
import HeroChatDemo from "./HeroChatDemo";
import { animate, stagger, splitText } from "animejs";

export default function HeroSection({ visible, onGetStarted }) {
  const planLessRef = useRef(null);
  const withAiRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const run = (el, startDelay = 0) => {
      if (!el) return;
      const { chars } = splitText(el, { chars: { wrap: "clip", clone: false } });
      animate(chars, {
        y: { from: "1em", to: "0" },
        opacity: { from: 0, to: 1 },
        duration: 1000,
        delay: stagger(50, { from: "start", start: startDelay }),
        ease: "outExpo",
      });
    };
    run(planLessRef.current, 0);
    run(withAiRef.current, 400);
  }, []);

  return (
    <section className="relative pt-16 pb-28 md:pt-0 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" aria-hidden="true" />
      <div className="absolute top-32 left-[8%] w-72 h-72 rounded-full bg-violet-100/60 blur-3xl animate-[float_8s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute top-48 right-[5%] w-56 h-56 rounded-full bg-indigo-100/50 blur-3xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: "-2s" }} aria-hidden="true" />
      <div className="absolute bottom-40 left-[15%] w-40 h-40 rounded-full bg-violet-50/80 blur-2xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: "-4s" }} aria-hidden="true" />
      <div className="absolute top-1/2 right-[10%] w-1 h-32 rounded-full bg-violet-200/40 animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: "-6s" }} aria-hidden="true" />
      <div className="absolute bottom-48 right-[20%] w-2 h-2 rounded-full bg-violet-400/50 animate-[float_8s_ease-in-out_infinite]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14 md:gap-20 items-center min-h-[calc(100vh-180px)]">
        <div className={`text-center md:text-left ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-6" data-aos="fade-down">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-violet-700 tracking-wide">AI Daily Planner</span>
          </div>
          <h1 id="hero-heading" className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            <span ref={planLessRef} className="text-slate-700">Plan Less.{" "}</span><br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Achieve More</span>
            <br />
            <span ref={withAiRef} className="text-slate-700">— With AI.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed" data-aos="fade-up">
            Let AI organize your tasks, manage your time, and keep you focused — automatically.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10" data-aos="fade-up">
            <button type="button" onClick={onGetStarted} className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm hover:shadow-md">
              Start Free Trial
            </button>
            <a href="#how-it-works" className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
              See How It Works
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-slate-500" data-aos="fade-up">
            <span>10,000+ professionals</span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span>Students, founders, freelancers</span>
          </div>
        </div>
        <div className={`relative ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 delay-150`}>
          <div className="relative" data-aos="fade-down">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-violet-100/40 to-indigo-100/30 blur-2xl -z-10" />
            <HeroChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
