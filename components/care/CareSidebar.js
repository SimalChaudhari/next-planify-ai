"use client";

import React from "react";
import Link from "next/link";

function IconChat({ className }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6l-3 3V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CareSidebar() {
  return (
    <aside className="w-[72px] shrink-0 flex flex-col items-center py-6 gap-1 bg-white border-r border-slate-200/80">
      <Link
        href="/care"
        aria-label="Care support"
        className="w-11 h-11 flex items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm"
      >
        <IconChat className="text-white" />
      </Link>
      <div className="mt-auto pt-6 border-t border-slate-200/80">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
          aria-label="Planify home"
        >
          P
        </Link>
      </div>
    </aside>
  );
}
