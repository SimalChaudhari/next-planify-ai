"use client";

import React from "react";

export default function CTASection({ innerRef, onGetStarted }) {
  return (
    <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500" ref={innerRef} aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 id="cta-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Let AI Plan Your Day — You Focus on What Matters
        </h2>
        <p className="text-violet-100 text-lg md:text-xl leading-relaxed mb-10">
          Join thousands who start every day with a clear plan. Free to start, no credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button type="button" onClick={onGetStarted} className="px-8 py-4 rounded-xl bg-white text-violet-600 font-semibold shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all">
            Start Free Trial
          </button>
          <a href="#how-it-works" className="px-8 py-4 rounded-xl border-2 border-white/90 text-white font-semibold hover:bg-white/10 transition-colors">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
