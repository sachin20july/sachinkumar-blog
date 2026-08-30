import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostTags from "@/components/PostTags";
import Pagination from "@/components/Pagination";

type PostsPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const POSTS_PER_PAGE = 6;

export default async function PostsPage({
  searchParams,
}: PostsPageProps) {
  // Get page number from URL
  const { page } = await searchParams;

  // Convert page to number
  const currentPage = Math.max(
    1,
    Number(page) || 1
  );

  // Get all posts
  const posts = getAllPosts();

  // Calculate total number of pages
  const totalPages = Math.ceil(
    posts.length / POSTS_PER_PAGE
  );

  // Make sure page doesn't go beyond the last page
  const safePage =
    totalPages > 0
      ? Math.min(currentPage, totalPages)
      : 1;

  // Calculate starting post index
  const startIndex =
    (safePage - 1) * POSTS_PER_PAGE;

  // Get only posts for current page
  const paginatedPosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <div>
      {/* Blog Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Technical Blog
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Notes, Tutorials & Experiences
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Practical articles and technical notes covering
            web development, programming, Linux, networking
            and Information Technology.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12">

          {paginatedPosts.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <h2 className="text-xl font-semibold text-slate-900">
                No articles found
              </h2>

              <p className="mt-2 text-slate-600">
                There are currently no articles available.
              </p>
            </div>
          ) : (
            <>
              {/* Article Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
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

              {/* Pagination */}
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
              />
            </>
          )}

        </div>
      </section>
    </div>
  );
}