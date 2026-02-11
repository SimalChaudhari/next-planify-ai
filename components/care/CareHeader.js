"use client";

import React from "react";
import Link from "next/link";

export default function CareHeader() {
  return (
    <header className="flex items-center justify-between w-full px-6 sm:px-8 py-4 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shrink-0">
      <Link
        href="/"
        className="flex items-center gap-2 text-slate-800 font-semibold text-sm hover:text-violet-600 transition-colors"
      >
        <span className="text-violet-600">Planify</span>
        <span className="text-slate-500 font-medium">Care</span>
      </Link>
      <span className="text-slate-500 text-sm hidden sm:inline">AI support</span>
      <Link
        href="/"
        className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors"
      >
        Back to app
      </Link>
    </header>
  );
}
