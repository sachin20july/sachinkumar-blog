import Link from "next/link";

import { getAllPosts } from "@/lib/posts";

export default function ArchivePage() {
  const posts = getAllPosts();

  const groupedPosts = posts.reduce(
    (groups, post) => {
      const year = new Date(post.date).getFullYear();

      if (!groups[year]) {
        groups[year] = [];
      }

      groups[year].push(post);

      return groups;
    },
    {} as Record<number, typeof posts>,
  );

  const years = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Archive
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            All Articles
          </h1>

          <p className="mt-3 text-slate-600">Browse articles by year.</p>
        </div>
      </section>

      {/* Archive */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="space-y-12">
            {years.map((year) => (
              <section key={year}>
                <h2 className="mb-6 text-3xl font-bold text-slate-900">
                  {year}
                </h2>

                <div className="space-y-4">
                  {groupedPosts[year].map((post) => (
                    <article
                      key={post.slug}
                      className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-md"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <Link
                            href={`/posts/${post.slug}`}
                            className="text-lg font-semibold text-slate-900 transition group-hover:text-teal-600"
                          >
                            {post.title}
                          </Link>

                          <p className="mt-1 text-sm text-slate-500">
                            {post.description}
                          </p>
                        </div>

                        <time
                          dateTime={post.date}
                          className="shrink-0 text-sm text-slate-500"
                        >
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
