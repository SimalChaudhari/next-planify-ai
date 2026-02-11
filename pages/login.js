"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Head from "next/head";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(email, password);
      if (result.success) router.replace("/dashboard");
      else setError(result.message || "Login failed.");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign in - Planify AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white max-w-4xl flex items-center mx-auto min-h-screen p-4">
        <div className="grid md:grid-cols-3 items-center w-full shadow-[0_2px_10px_-3px_rgba(14,14,14,0.3)] rounded-xl overflow-hidden">
          {/* Left: Branding panel */}
          <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-slate-900 to-slate-700 lg:px-8 px-4 py-4">
            <div>
              <h3 className="text-white text-lg font-semibold">Welcome Back</h3>
              <p className="text-[13px] text-slate-300 mt-3 leading-relaxed">
                Sign in to your Planify AI account to continue planning your day with AI-powered assistance.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Your Schedule, Your Way</h3>
              <p className="text-[13px] text-slate-300 mt-3 leading-relaxed">
                Access your tasks, reminders, and calendar. We keep your data secure and private.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-14 max-w-lg mx-auto">
            <div className="mb-8">
              <h1 className="text-slate-900 text-2xl font-bold">Login</h1>
            </div>

            {error && (
              <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-slate-900 bg-white border border-slate-300 w-full text-sm pl-4 pr-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-slate-900 bg-white border border-slate-300 w-full text-sm pl-4 pr-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 font-medium hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

LoginPage.getLayout = (page) => page;
