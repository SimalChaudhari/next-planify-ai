"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Head from "next/head";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!acceptTerms) {
      setError("Please accept the Terms and Conditions.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    try {
      const timezone = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC" : "UTC";
      const result = await register({ name, email, password, timezone });
      if (result.success) router.replace("/dashboard");
      else setError(result.message || "Registration failed.");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create account - Planify AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white max-w-4xl flex items-center mx-auto min-h-screen p-4">
        <div className="grid md:grid-cols-3 items-center w-full shadow-[0_2px_10px_-3px_rgba(14,14,14,0.3)] rounded-xl overflow-hidden">
          {/* Left: Branding panel */}
          <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-slate-900 to-slate-700 lg:px-8 px-4 py-4">
            <div>
              <h3 className="text-white text-lg font-semibold">Create Your Account</h3>
              <p className="text-[13px] text-slate-300 mt-3 leading-relaxed">
                Welcome to Planify AI! Get started by creating your account to plan your day with AI.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Simple & Secure Registration</h3>
              <p className="text-[13px] text-slate-300 mt-3 leading-relaxed">
                Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-14 max-w-lg mx-auto">
            <div className="mb-8">
              <h1 className="text-slate-900 text-2xl font-bold">Register Now</h1>
            </div>

            {error && (
              <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="text-slate-900 text-sm font-medium mb-2 block">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-slate-900 bg-white border border-slate-300 w-full text-sm pl-4 pr-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter name"
                  autoComplete="name"
                />
              </div>
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
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-slate-900 bg-white border border-slate-300 w-full text-sm pl-4 pr-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter password (min 8 characters)"
                  autoComplete="new-password"
                />
              </div>
              <div className="flex items-start">
                <input
                  id="accept-terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="h-4 w-4 shrink-0 mt-0.5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label htmlFor="accept-terms" className="ml-3 block text-sm text-slate-600">
                  I accept the{" "}
                  <Link href="/terms" className="text-blue-600 font-medium hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed transition-colors cursor-pointer  "
              >
                {loading ? "Creating account…" : "Create an account"}
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-medium hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

SignupPage.getLayout = (page) => page;
