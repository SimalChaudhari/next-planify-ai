"use client";

import React, { useEffect, useState } from "react";
import {
  HERO_CHAT_SCENARIOS,
  TYPING_SPEED_USER,
  TYPING_SPEED_AI,
  THINKING_MS,
  SCHEDULE_ITEM_MS,
  HOLD_BEFORE_NEXT_MS,
} from "./constants";

export default function HeroChatDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState("user_typing");
  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [scheduleVisible, setScheduleVisible] = useState(0);

  const scenario = HERO_CHAT_SCENARIOS[scenarioIndex % HERO_CHAT_SCENARIOS.length];
  const schedule = scenario.schedule || [];

  useEffect(() => {
    if (phase === "user_typing") {
      if (userText.length < scenario.user.length) {
        const t = setTimeout(() => setUserText(scenario.user.slice(0, userText.length + 1)), TYPING_SPEED_USER);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("thinking"), 400);
      return () => clearTimeout(t);
    }
    if (phase === "thinking") {
      const t = setTimeout(() => {
        setPhase("ai_typing");
        setAiText("");
      }, THINKING_MS);
      return () => clearTimeout(t);
    }
    if (phase === "ai_typing") {
      if (aiText.length < scenario.ai.length) {
        const t = setTimeout(() => setAiText(scenario.ai.slice(0, aiText.length + 1)), TYPING_SPEED_AI);
        return () => clearTimeout(t);
      }
      if (schedule.length === 0) {
        const t = setTimeout(() => setPhase("hold"), 500);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("schedule"), 400);
      return () => clearTimeout(t);
    }
    if (phase === "schedule") {
      if (scheduleVisible < schedule.length) {
        const t = setTimeout(() => setScheduleVisible((n) => n + 1), SCHEDULE_ITEM_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("hold"), 400);
      return () => clearTimeout(t);
    }
    if (phase === "hold") {
      const t = setTimeout(() => {
        setScenarioIndex((i) => i + 1);
        setUserText("");
        setAiText("");
        setScheduleVisible(0);
        setPhase("user_typing");
      }, HOLD_BEFORE_NEXT_MS);
      return () => clearTimeout(t);
    }
  }, [phase, userText, aiText, scheduleVisible, scenario.user, scenario.ai, scenario.schedule, schedule.length]);

  return (
    <div className="rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50/80">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="text-sm font-medium text-slate-800">Planify AI</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-xl rounded-br-md bg-slate-900 text-white px-4 py-2.5 text-sm">
            {userText}
            {(phase === "user_typing" || phase === "thinking") && <span className="inline-block w-0.5 h-4 ml-0.5 -translate-y-0.5 align-middle bg-current animate-[cursor-blink_1s_step-end_infinite]" />}
          </div>
        </div>
        {phase === "thinking" && (
          <div className="flex justify-start">
            <div className="rounded-xl rounded-bl-md bg-slate-100 text-slate-500 px-4 py-2.5 text-sm italic">
              Thinking...
            </div>
          </div>
        )}
        {(phase === "ai_typing" || phase === "schedule" || phase === "hold") && (
          <div className="flex justify-start">
            <div className="max-w-[90%] rounded-xl rounded-bl-md bg-slate-50 text-slate-800 px-4 py-2.5 text-sm border border-slate-100">
              {aiText}
              {phase === "ai_typing" && <span className="inline-block w-0.5 h-4 ml-0.5 -translate-y-0.5 align-middle bg-current animate-[cursor-blink_1s_step-end_infinite]" />}
            </div>
          </div>
        )}
        {schedule.length > 0 && (phase === "schedule" || phase === "hold") && (
          <div className="space-y-1.5 pt-1">
            {schedule.map((row, i) => (
              <div
                key={i}
                className={`flex gap-3 items-center rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-sm transition-all ${i < scheduleVisible ? "opacity-100 animate-[schedule-fade_0.4s_ease-out_forwards]" : "opacity-0"}`}
              >
                <span className="text-slate-600 font-medium shrink-0 w-16 text-xs">{row.time}</span>
                <span className="text-slate-800">{row.task}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
