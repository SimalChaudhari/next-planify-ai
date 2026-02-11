"use client";

import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";
import { HiOutlineArrowPath } from "react-icons/hi2";

const CLOUD_PATH = "M1041.81277,221.75021a44.67678,44.67678,0,0,0-87.65662-9.41942c-.54125-.01942-1.082-.04117-1.628-.04117a44.68754,44.68754,0,0,0-42.86662,32.08892,31.5744,31.5744,0,0,0-37.46546,9.31921h139.36225a30.21954,30.21954,0,0,0,30.28607-31.28863Q1041.831,222.08017,1041.81277,221.75021Z";
// Circle cx=113 cy=184.2194 r=113 as path
const CIRCLE_PATH = "M0,184.2194a113,113 0 1,0 226,0a113,113 0 1,0 -226,0";
// Ellipse cx=459.05561 cy=53.00636 rx=62.73286 ry=17.42579 as path
const ELLIPSE_PATH = "M396.32275,53.00636A62.73286,17.42579 0 0 1 521.78847,53.00636A62.73286,17.42579 0 0 1 396.32275,53.00636Z";
const DURATION = 10000;

export default function AdaptiveAISchedulingFeature() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const container = containerRef.current;
    const run = () => {
      const cloudDraw = container.querySelector("#adaptive-cloud-draw");
      const circleDraw = container.querySelector("#adaptive-circle-draw");
      const ellipseDraw = container.querySelector("#adaptive-ellipse-draw");
      if (cloudDraw) animate(svg.createDrawable(cloudDraw), { draw: "0 1", ease: "linear", duration: DURATION, loop: true });
      if (circleDraw) animate(svg.createDrawable(circleDraw), { draw: "0 1", ease: "linear", duration: DURATION, loop: true, delay: 400 });
      if (ellipseDraw) animate(svg.createDrawable(ellipseDraw), { draw: "0 1", ease: "linear", duration: DURATION, loop: true, delay: 800 });
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div ref={containerRef} className="relative w-full" data-aos="fade-right">
        <img src="/home/change.svg" alt="" className="w-full h-auto" aria-hidden />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 892.6139 540.80203" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g fill="none" strokeWidth="3">
            <path id="adaptive-circle-bg" d={CIRCLE_PATH} stroke="#fff" style={{ opacity: 0.5 }} />
            <path id="adaptive-circle-draw" d={CIRCLE_PATH} stroke="#8e51ff" strokeLinecap="round" strokeLinejoin="round" />
            <path id="adaptive-cloud-bg" d={CLOUD_PATH} transform="translate(-153.69305 -179.59899)" stroke="#e6e6e6" style={{ opacity: 0.5 }} />
            <path id="adaptive-cloud-draw" d={CLOUD_PATH} transform="translate(-153.69305 -179.59899)" stroke="#8e51ff" strokeLinecap="round" strokeLinejoin="round" />
            <path id="adaptive-ellipse-bg" d={ELLIPSE_PATH} stroke="#3f3d56" style={{ opacity: 0.5 }} />
            <path id="adaptive-ellipse-draw" d={ELLIPSE_PATH} stroke="#8e51ff" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>

      <div className="rounded-xl bg-white border border-slate-200/90 shadow-sm p-6 space-y-4" data-aos="fade-left">
        <div className="inline-flex items-center gap-2 rounded-lg bg-violet-100 text-violet-700 px-3 py-1.5 text-sm font-medium mb-4">
          <HiOutlineArrowPath className="w-5 h-5" /> Adaptive AI Scheduling
        </div>
        <p className="text-slate-600">Plans change — your schedule adapts instantly.</p>
        <div className="rounded-lg bg-slate-50 border border-slate-200/80 px-3 py-2 text-sm text-slate-700">User: &quot;I have a meeting at 4 PM&quot;</div>
        <div className="rounded-lg bg-violet-100 border border-violet-200/80 px-3 py-2 text-sm text-violet-800">AI: Rearranges tasks automatically.</div>
      </div>
    </div>
  );
}
