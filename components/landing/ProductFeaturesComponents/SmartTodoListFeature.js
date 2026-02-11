"use client";

import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const TODO_ITEMS = ["Call Mom", "Client Meeting", "Gym"];

// Circles as paths (createDrawable needs path, not circle element)
const TODO_CIRCLE_1_PATH = "M784.51883,46.49385a29.75918,29.75918 0 1,0 59.51836,0a29.75918,29.75918 0 1,0 -59.51836,0";
const TODO_CIRCLE_2_PATH = "M784.51883,178.5111a29.75918,29.75918 0 1,0 59.51836,0a29.75918,29.75918 0 1,0 -59.51836,0";
const TODO_CIRCLE_3_PATH = "M784.51883,310.52835a29.75918,29.75918 0 1,0 59.51836,0a29.75918,29.75918 0 1,0 -59.51836,0";
const CHECKMARK_1_PATH = "M988.19964,238.8671a3.30935,3.30935,0,0,1-2.648-1.32439l-8.11876-10.8252a3.31022,3.31022,0,1,1,5.29648-3.97209L988.041,229.827l13.64209-20.46285a3.31036,3.31036,0,1,1,5.50877,3.67252L990.9543,237.39292a3.31173,3.31173,0,0,1-2.66252,1.4731C988.26107,238.86656,988.23036,238.8671,988.19964,238.8671Z";
const CHECKMARK_2_PATH = "M988.19964,370.88434a3.30932,3.30932,0,0,1-2.648-1.32439l-8.11876-10.82519a3.31022,3.31022,0,1,1,5.29648-3.97209l5.31157,7.08155,13.64209-20.46285a3.31036,3.31036,0,1,1,5.50877,3.67251L990.9543,369.41016a3.31172,3.31172,0,0,1-2.66252,1.47311C988.26107,370.8838,988.23036,370.88434,988.19964,370.88434Z";
const CHECKMARK_3_PATH = "M988.19964,502.90159a3.30935,3.30935,0,0,1-2.648-1.32439L977.43291,490.752a3.31022,3.31022,0,1,1,5.29648-3.9721l5.31157,7.08156,13.64209-20.46285a3.31036,3.31036,0,1,1,5.50877,3.67251L990.9543,501.42741a3.31171,3.31171,0,0,1-2.66252,1.4731C988.26107,502.90105,988.23036,502.90159,988.19964,502.90159Z";
const DURATION = 10000;

export default function SmartTodoListFeature() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const container = containerRef.current;
    const run = () => {
      const drawIds = ["todo-circle-1-draw", "todo-circle-2-draw", "todo-circle-3-draw", "todo-checkmark-1-draw", "todo-checkmark-2-draw", "todo-checkmark-3-draw"];
      drawIds.forEach((id, i) => {
        const el = container.querySelector(`#${id}`);
        if (el) animate(svg.createDrawable(el), { draw: "0 1", ease: "linear", duration: DURATION, loop: true, delay: i * 300 });
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right">
        <div className="inline-flex items-center gap-2 rounded-lg bg-violet-100 text-violet-700 px-3 py-1.5 text-sm font-medium mb-4">
          <HiOutlineClipboardDocumentCheck className="w-5 h-5" /> Smart To-Do List
        </div>
        <p className="text-slate-600 mb-4">AI prioritizes your tasks based on deadlines and importance.</p>
        <div className="rounded-xl bg-white border border-slate-200/90 shadow-sm p-4 space-y-2">
          {TODO_ITEMS.map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-700 text-sm">
              <input type="checkbox" className="w-4 h-4 rounded border-2 border-slate-300 accent-violet-600" aria-label={t} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center rounded-2xl" data-aos="fade-left">
        <div ref={containerRef} className="relative w-full max-w-[520px]">
          <img src="/home/inbox-cleanup.svg" alt="" className="w-full h-auto" aria-hidden />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 844.0372 546.23006" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g fill="none" strokeWidth="3">
            <path id="todo-circle-1-bg" d={TODO_CIRCLE_1_PATH} stroke="#8e51ff" style={{ opacity: 0.5 }} />
            <path id="todo-circle-1-draw" d={TODO_CIRCLE_1_PATH} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" />
            <path id="todo-circle-2-bg" d={TODO_CIRCLE_2_PATH} stroke="#8e51ff" style={{ opacity: 0.5 }} />
            <path id="todo-circle-2-draw" d={TODO_CIRCLE_2_PATH} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" />
            <path id="todo-circle-3-bg" d={TODO_CIRCLE_3_PATH} stroke="#8e51ff" style={{ opacity: 0.5 }} />
            <path id="todo-circle-3-draw" d={TODO_CIRCLE_3_PATH} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" />
            <g transform="translate(-177.9814 -176.88497)">
              <path id="todo-checkmark-1-bg" d={CHECKMARK_1_PATH} stroke="#fff" style={{ opacity: 0.5 }} strokeWidth="2" />
              <path id="todo-checkmark-1-draw" d={CHECKMARK_1_PATH} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path id="todo-checkmark-2-bg" d={CHECKMARK_2_PATH} stroke="#fff" style={{ opacity: 0.5 }} strokeWidth="2" />
              <path id="todo-checkmark-2-draw" d={CHECKMARK_2_PATH} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path id="todo-checkmark-3-bg" d={CHECKMARK_3_PATH} stroke="#fff" style={{ opacity: 0.5 }} strokeWidth="2" />
              <path id="todo-checkmark-3-draw" d={CHECKMARK_3_PATH} stroke="#45556c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
        </div>
      </div>
    </div>
  );
}
