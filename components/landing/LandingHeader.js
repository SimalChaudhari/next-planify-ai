"use client";

import React, { useState } from "react";
import Link from "next/link";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 fill-current shrink-0" viewBox="0 0 492.004 492.004" aria-hidden="true">
    <path d="M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1-.016-7.244-2.776-14.04-7.864-19.12z" />
  </svg>
);

export default function LandingHeader({ scrolled, loading, user }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  const navItems = [
    { href: "/", label: "Home", isLink: true },
    { href: "#features", label: "Product", isLink: false },
    { href: "#how-it-works", label: "Solutions", isLink: false },
    { href: "#pricing", label: "Pricing", isLink: false },
    { href: "/blog", label: "Blog", isLink: true },
    { href: "/contact", label: "Contact", isLink: true },
  ];

  const getStartedBtn = (
    <Link href="/signup" onClick={closeMobile} className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-base font-normal rounded-md px-4 py-2 transition-colors">
      Get started
      <ArrowIcon />
    </Link>
  );

  return (
    <header
      className="flex items-center w-full py-3 px-4 sm:px-10 min-h-[75px] bg-white tracking-wide fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={scrolled ? { boxShadow: "rgba(0,0,0,0.1) -4px 9px 25px -6px" } : {}}
      role="banner"
    >
      <div className="relative w-full">
        <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-heading font-semibold text-slate-900 shrink-0" aria-label="Planify AI home">
            <span className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white text-sm font-bold shrink-0">P</span>
            <span className="max-sm:hidden">Planify</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 max-sm:hidden">AI</span>
            <span className="hidden max-sm:inline text-lg">Planify AI</span>
          </Link>

          <div className="relative">
            {mobileOpen && (
              <div
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                onClick={closeMobile}
                aria-hidden="true"
              />
            )}

            {mobileOpen && (
            <button
              type="button"
              onClick={closeMobile}
              className="lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-slate-200 shadow-sm hover:bg-slate-50"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            </button>
            )}

            <ul
              className={
                "lg:flex lg:ml-10 lg:gap-x-6 lg:items-center max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-lg max-lg:overflow-auto z-50 max-lg:pt-14 max-lg:transition-transform max-lg:duration-300 max-lg:ease-out " +
                (mobileOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full")
              }
            >
              <li className="max-lg:border-b max-lg:border-slate-200 max-lg:pb-4 max-lg:px-2 lg:hidden">
                <Link href="/" onClick={closeMobile} className="flex items-center gap-2 font-heading font-semibold text-slate-900">
                  <span className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white text-sm font-bold">P</span>
                  Planify AI
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.label} className="max-lg:border-b max-lg:border-slate-200 max-lg:py-3 max-lg:px-2">
                  {item.isLink ? (
                    <Link href={item.href} onClick={closeMobile} className="text-base text-slate-600 hover:text-slate-900 block transition-colors">{item.label}</Link>
                  ) : (
                    <a href={item.href} onClick={closeMobile} className="text-base text-slate-600 hover:text-slate-900 block transition-colors">{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex ml-auto items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <Link href="/dashboard" onClick={closeMobile} className="max-lg:hidden flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-base font-normal rounded-md px-4 py-2 transition-colors">
                    Dashboard
                    <ArrowIcon />
                  </Link>
                ) : (
                  <div className="max-lg:hidden flex items-center gap-3">
                    <Link href="/login" onClick={closeMobile} className="text-slate-600 hover:text-slate-900 text-base font-normal transition-colors">Log in</Link>
                    {getStartedBtn}
                  </div>
                )}
              </>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && !loading && (
        <div className="lg:hidden fixed bottom-0 left-0 w-1/2 min-w-[300px] p-4 pt-0 z-50 border-t border-slate-200 bg-white">
          <div className="flex flex-col gap-2">
            {user ? (
              <Link href="/dashboard" onClick={closeMobile} className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-base font-normal rounded-md px-4 py-3 transition-colors">
                Dashboard
                <ArrowIcon />
              </Link>
            ) : (
              <>
                <Link href="/login" onClick={closeMobile} className="text-center py-3 border border-slate-200 text-slate-700 font-normal rounded-md hover:bg-slate-50 transition-colors">Log in</Link>
                {getStartedBtn}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
