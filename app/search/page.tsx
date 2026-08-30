import Link from "next/link";

import { getAllPosts } from "@/lib/posts";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  const query = q?.trim() || "";

  const posts = getAllPosts();

  const results = query
    ? posts.filter((post) => {
        const searchableText = [
          post.title,
          post.description,
          post.content,
          ...post.tags,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query.toLowerCase());
      })
    : [];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Search
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Search Articles
          </h1>

          {/* Search Form */}
          <form
            action="/search"
            method="GET"
            className="mt-8 flex max-w-2xl gap-3"
          >
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search articles..."
              className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />

            <button
              type="submit"
              className="rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-12">
          {!query && (
            <p className="text-slate-600">
              Enter a search term to find articles.
            </p>
          )}

          {query && results.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900">
                No articles found
              </h2>

              <p className="mt-2 text-slate-600">
                No articles matched{" "}
                <span className="font-medium">"{query}"</span>.
              </p>
            </div>
          )}

          {query && results.length > 0 && (
            <>
              <p className="mb-6 text-sm text-slate-500">
                {results.length} {results.length === 1 ? "article" : "articles"}{" "}
                found for{" "}
                <span className="font-medium text-slate-700">"{query}"</span>
              </p>

              <div className="space-y-5">
                {results.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
                  >
                    <h2 className="text-xl font-bold text-slate-900">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="transition group-hover:text-teal-600"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-2 leading-7 text-slate-600">
                      {post.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <time
                      dateTime={post.date}
                      className="mt-5 block text-sm text-slate-500"
                    >
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
