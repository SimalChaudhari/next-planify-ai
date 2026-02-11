"use client";

import React from "react";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const STATS = [
  { value: "132", label: "Total Tasks", icon: HiOutlineClipboardDocumentList, color: "text-violet-600", bg: "bg-violet-400/20" },
  { value: "79", label: "In Progress", icon: HiOutlineClock, color: "text-amber-600", bg: "bg-amber-400/20" },
  { value: "324", label: "Completed", icon: HiOutlineCheckCircle, color: "text-emerald-600", bg: "bg-emerald-400/20" },
];

const WORKSPACE_PEOPLE = [
  { name: "Chloe Thompson", role: "Entrepreneur", status: "online" },
  { name: "Rina Brookson", role: "Designer", status: "busy" },
];

export default function DashboardPreviewSection() {
  return (
    <section className="pt-20 pb-20 md:pt-24 md:pb-24 relative overflow-hidden" id="dashboard-preview" aria-labelledby="dashboard-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ff] via-[#fdf2f8] to-[#f0f9ff]" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-200/40 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-200/35 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-100/30 blur-[90px] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Product in action</p>
        <h2 id="dashboard-heading" className="font-bold text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">
          Your AI Command Center
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          One dashboard: chat with AI, see your schedule, manage tasks and reminders. Clean, fast, and built for focus.
        </p>
        <div className="max-w-[52rem] mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
              <div key={i} className="bg-white/35 backdrop-blur-xl border border-white/50 shadow-lg rounded-[20px] p-5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-2xl font-heading font-bold ${i === 0 ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800"}`}>{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
            })}
          </div>
          <div className="bg-white/10 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden min-h-[380px] mt-8 mb-4">
            <div className="grid grid-cols-12 min-h-[400px]">
              <aside className="col-span-3 bg-white/20 backdrop-blur-xl border border-white/30 border-r border-white/30 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Sidebar</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {["Today", "Tomorrow", "Calendar", "Tasks", "Settings"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 py-2.5 px-3 rounded-xl hover:bg-white/40 transition-colors text-gray-800">{item}</li>
                  ))}
                </ul>
              </aside>
              <div className="col-span-6 bg-white/25 backdrop-blur-xl border border-white/40 border-r border-white/30 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">AI Chat + Schedule</p>
                <div className="rounded-xl bg-white/50 border border-white/50 h-24 mb-4 flex items-center px-4 text-gray-500 text-sm">Ask Planify anything...</div>
                <div className="space-y-2">
                  <div className="flex gap-3 py-2.5 border-b border-white/30"><span className="text-violet-600 font-semibold w-16">9:00</span><span className="text-gray-800">Deep work</span></div>
                  <div className="flex gap-3 py-2.5 border-b border-white/30"><span className="text-violet-600 font-semibold w-16">12:00</span><span className="text-gray-800">Lunch</span></div>
                  <div className="flex gap-3 py-2.5"><span className="text-violet-600 font-semibold w-16">15:00</span><span className="text-gray-800">Meeting</span></div>
                </div>
              </div>
              <div className="col-span-3 bg-white/20 backdrop-blur-xl border border-white/30 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Your Workspace</p>
                <div className="space-y-3">
                  {WORKSPACE_PEOPLE.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">{p.name[0]}</div>
                        <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${p.status === "online" ? "bg-emerald-500" : "bg-amber-400"}`} title={p.status === "online" ? "Online" : "Busy"} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">{p.name}</p>
                        <p className="text-xs text-gray-600">{p.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-white/30">To-Do + Reminders</p>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-800"><span className="w-4 h-4 rounded border-2 border-gray-400/60" /> Task one</div>
                  <div className="flex items-center gap-2 text-sm text-gray-800"><span className="w-4 h-4 rounded border-2 border-gray-400/60" /> Task two</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
