"use client";

import React, { useEffect } from "react";
import { FAQ_ITEMS } from "./constants";

export default function FAQSection({ innerRef }) {
  useEffect(() => {
    const id = "planify-faq-schema";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      });
      document.head.appendChild(script);
    }
    return () => {
      const el = document.getElementById(id);
      if (el) document.head.removeChild(el);
    };
  }, []);

  return (
    <section className="pt-20 pb-20 md:pt-24 md:pb-24 bg-gray-50/90" ref={innerRef} aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Support</p>
        <h2 id="faq-heading" className="font-bold text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Quick answers to what people ask most about Planify AI.
        </p>
        <dl className="space-y-4 text-left">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/80 hover:shadow-md transition-all">
              <dt className="font-heading font-bold text-gray-900 mb-2">{item.q}</dt>
              <dd className="text-base text-gray-600 leading-relaxed text-sm">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
