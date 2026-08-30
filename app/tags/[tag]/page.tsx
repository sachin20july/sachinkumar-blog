import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/posts";
import PostTags from "@/components/PostTags";

type TagPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;

  const tagName = decodeURIComponent(tag);

  return {
    title: `${tagName} Articles`,
    description: `Technical articles and tutorials about ${tagName}.`,
  };
}

export default async function TagPage({
  params,
}: TagPageProps) {
  const { tag } = await params;

  const tagName = decodeURIComponent(tag);

  const posts = getAllPosts();

  const filteredPosts = posts.filter((post) =>
    post.tags.some(
      (postTag) =>
        postTag.toLowerCase() === tagName.toLowerCase()
    )
  );

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Topic
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {tagName}
          </h1>

          <p className="mt-4 text-slate-600">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1
              ? "article"
              : "articles"}{" "}
            about {tagName}.
          </p>

        </div>
      </section>


      {/* Articles */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12">

          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">

              <h2 className="text-xl font-semibold text-slate-900">
                No articles found
              </h2>

              <p className="mt-2 text-slate-600">
                There are no articles with this tag.
              </p>

              <Link
                href="/posts"
                className="mt-6 inline-block font-semibold text-teal-600 hover:text-teal-800"
              >
                ← View all articles
              </Link>

            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
                >

                  {/* Tags */}
                  <div className="mb-5">
                    <PostTags tags={post.tags} />
                  </div>


                  {/* Title */}
                  <h2 className="text-xl font-bold leading-snug text-slate-900">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="transition group-hover:text-teal-600"
                    >
                      {post.title}
                    </Link>
                  </h2>


                  {/* Description */}
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {post.description}
                  </p>


                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                    <time
                      dateTime={post.date}
                      className="text-sm text-slate-500"
                    >
                      {post.date}
                    </time>

                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-sm font-semibold text-teal-600 transition hover:text-teal-800"
                    >
                      Read more →
                    </Link>

                  </div>

                </article>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}