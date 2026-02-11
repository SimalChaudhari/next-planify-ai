"use client";

import React from "react";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 md:py-20" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Connect</h4>
            <ul className="flex gap-6 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700/80 text-center text-sm text-gray-500">
          <span className="font-semibold text-white">Planify AI</span> — AI-powered daily planning. © {new Date().getFullYear()} Planify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
