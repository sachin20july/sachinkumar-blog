import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tags",
  description:
    "Browse technical articles by topic and technology.",
};

export default function TagsPage() {
  const posts = getAllPosts();

  const tagCounts: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const tags = Object.entries(tagCounts).sort(
    ([tagA], [tagB]) => tagA.localeCompare(tagB)
  );

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Topics
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Browse by Tag
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore articles by technology, topic and area
            of interest.
          </p>

        </div>
      </section>

      {/* Tags */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-14">

          {tags.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-slate-600">
                No tags available.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {tags.map(([tag, count]) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">

                    <h2 className="text-lg font-semibold text-slate-900 transition group-hover:text-teal-600">
                      {tag}
                    </h2>

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                      {count}
                    </span>

                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    {count === 1
                      ? "1 article"
                      : `${count} articles`}
                  </p>

                </Link>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}