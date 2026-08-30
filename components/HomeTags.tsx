import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomeTags() {
  const posts = getAllPosts();

  // Get unique tags
  const tags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
          Explore
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Topics
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Browse articles by technology and topic.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700"
          >
            {tag}
          </Link>
        ))}
      </div>

      <div className="mt-8 border-t border-slate-100 pt-5">
        <Link
          href="/tags"
          className="text-sm font-semibold text-teal-600 transition hover:text-teal-800"
        >
          Browse all topics →
        </Link>
      </div>

    </aside>
  );
}