"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const INITIAL_MESSAGES = [
  {
    id: "welcome",
    role: "assistant",
    content: "Hi! I'm your Planify Care assistant. Ask me about your account, billing, scheduling, or how to get the most out of Planify AI.",
    timestamp: new Date(),
  },
];

async function fetchCareReply(messages) {
  const res = await fetch("/api/care/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    const msg = data?.error || "Failed to get response";
    throw new Error(msg);
  }
  return data.reply;
}

export default function CareDashboard() {
  const { user } = useAuth();
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    inputRef.current?.focus();

    const updated = [...messages, userMsg];
    fetchCareReply(updated)
      .then((reply) => {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: reply,
            timestamp: new Date(),
          },
        ]);
      })
      .catch((err) => {
        const content =
          err?.message && err.message !== "Failed to fetch"
            ? err.message
            : "Sorry, I couldn't get a response. Please try again or check your connection.";
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content,
            timestamp: new Date(),
          },
        ]);
      })
      .finally(() => setIsLoading(false));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const displayName = user?.name || user?.email?.split("@")[0] || "there";

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50/90">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-xl font-semibold text-slate-900 tracking-tight mb-1">
              Planify Care
            </h1>
            <p className="text-sm text-slate-500">
              Hi {displayName}, ask anything about your account or product.
            </p>
          </div>

          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 text-sm font-semibold" aria-hidden="true">
                    A
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-slate-900 text-white rounded-br-md"
                      : "bg-white border border-slate-200/90 shadow-sm text-slate-800 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content.replace(/\*\*(.*?)\*\*/g, "$1")}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 text-sm font-semibold" aria-hidden="true">
                  A
                </div>
                <div className="rounded-2xl rounded-bl-md bg-white border border-slate-200/90 shadow-sm px-4 py-3">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/90 bg-white/95 backdrop-blur-sm p-4">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about billing, scheduling, or product help..."
            className="flex-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-shadow"
            aria-label="Message"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="shrink-0 w-11 h-11 rounded-xl bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none transition-colors"
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2.5 10l15-7.5-7.5 15V11L2.5 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p className="max-w-2xl mx-auto mt-2 text-xs text-slate-400 text-center">
          Planify Care — typically replies in seconds
        </p>
      </div>
    </div>
  );
}
