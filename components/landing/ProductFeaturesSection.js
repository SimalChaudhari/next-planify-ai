"use client";

import React from "react";
import AIChatAssistantFeature from "./ProductFeaturesComponents/AIChatAssistantFeature";
import SmartDailyPlannerFeature from "./ProductFeaturesComponents/SmartDailyPlannerFeature";
import SmartTodoListFeature from "./ProductFeaturesComponents/SmartTodoListFeature";
import SmartRemindersFeature from "./ProductFeaturesComponents/SmartRemindersFeature.js";
import CalendarViewFeature from "./ProductFeaturesComponents/CalendarViewFeature";
import AdaptiveAISchedulingFeature from "./ProductFeaturesComponents/AdaptiveAISchedulingFeature";
import AnimatedSplitText from "../common/AnimatedSplitText";

const cardClass = "rounded-xl bg-white border border-slate-200/90 shadow-sm p-6";

export default function ProductFeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-50" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-violet-600 mb-3" data-aos="fade-down">Product</p>
        <h2 id="features-heading" className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
        <AnimatedSplitText text="Everything You Need to Stay Productive" />
          {/* Everything You Need to Stay Productive */}
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed">
        <AnimatedSplitText text="One place to plan, execute, and adapt. No context switching — just you and your day, powered by AI." />
          {/* One place to plan, execute, and adapt. No context switching — just you and your day, powered by AI. */}
        </p>

        <div className="space-y-20">
          <AIChatAssistantFeature />

          <SmartDailyPlannerFeature />

          <SmartTodoListFeature />

          <SmartRemindersFeature />

          <CalendarViewFeature />

          <AdaptiveAISchedulingFeature />
        </div>
      </div>
    </section>
  );
}
