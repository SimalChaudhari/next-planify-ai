"use client";

import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function PricingSection({ innerRef, onGetStarted }) {
  return (
    <section id="pricing" className="pt-20 pb-20 md:pt-24 md:pb-24 bg-white" ref={innerRef} aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Pricing</p>
        <h2 id="pricing-heading" className="font-bold text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Start free. Upgrade when you need more power — no lock-in, cancel anytime.
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/80 hover:shadow-md transition-all text-left flex flex-col">
            <h3 className="font-heading font-bold text-gray-900 text-xl mb-1">Free</h3>
            <p className="text-sm text-gray-500 mb-4">For trying out and light use</p>
            <div className="text-3xl font-heading font-bold text-gray-900 mb-6"><span className="text-4xl">$0</span><span className="text-lg font-normal text-gray-500">/forever</span></div>
            <ul className="space-y-3 text-gray-600 mb-8 flex-1">
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Basic daily planning</li>
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Limited reminders</li>
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> AI chat</li>
            </ul>
            <button type="button" onClick={onGetStarted} className="w-full py-3.5 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50/50 transition-all">
              Get Started Free
            </button>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-violet-500 shadow-violet-500/15 hover:shadow-md transition-all text-left flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-semibold uppercase tracking-wider">Most popular</span>
            <h3 className="font-heading font-bold text-gray-900 text-xl mb-1">Pro</h3>
            <p className="text-sm text-gray-500 mb-4">For serious planners and teams</p>
            <div className="text-3xl font-heading font-bold text-gray-900 mb-6"><span className="text-4xl">$7</span><span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-gray-600 mb-8 flex-1">
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Smart adaptive scheduling</li>
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> AI priority system</li>
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Calendar sync</li>
              <li className="flex items-center gap-3"><HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Advanced reminders</li>
            </ul>
            <button type="button" onClick={onGetStarted} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all text-white font-semibold">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
