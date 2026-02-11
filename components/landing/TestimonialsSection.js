"use client";

import React from "react";

const TESTIMONIALS = [
  { quote: "Planify helped me balance study, gym, and part-time work without dropping the ball on any of them.", name: "Maya Chen", role: "Student" },
  { quote: "It feels like having a senior assistant who actually gets my priorities. I start every day with a clear plan.", name: "James Okonkwo", role: "Founder" },
  { quote: "I used to miss deadlines all the time. Now I don't. The AI keeps me on track without the guilt.", name: "Sofia Reyes", role: "Freelancer" },
];

export default function TestimonialsSection({ innerRef }) {
  return (
    <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-gray-50/90" ref={innerRef} aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Testimonials</p>
        <h2 id="testimonials-heading" className="font-bold text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">
          Trusted by People Who Get Things Done
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Students, founders, and freelancers use Planify to own their calendar and cut the chaos.
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/80 hover:shadow-md hover:border-gray-200 transition-all text-left">
              <p className="text-base text-gray-600 leading-relaxed mb-5">&quot;{t.quote}&quot;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center font-heading font-bold text-violet-600 text-sm">{t.name.split(" ").map((n) => n[0]).join("")}</div>
                <div>
                  <strong className="text-gray-900 block font-semibold">{t.name}</strong>
                  <span className="text-gray-500 text-sm">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
