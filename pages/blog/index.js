import Link from "next/link";

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold text-zinc-900">
        Blog
      </h1>
      <p className="mb-8 text-zinc-600">
        Updates, tips, and ideas from Planify AI.
      </p>
      <div className="space-y-6">
        <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="mb-2 text-xl font-medium text-zinc-900">
            Getting started with Planify AI
          </h2>
          <p className="text-sm text-zinc-500">
            Coming soon.
          </p>
        </article>
      </div>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
