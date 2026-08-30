import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostTags from "@/components/PostTags";
import HomeTags from "@/components/HomeTags";

export default function HomePage() {
  const posts = getAllPosts();

  // Show latest 6 posts on home page
  const latestPosts = posts.slice(0, 6);

  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Technical Blog
          </p>

          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Notes, Tutorials & Experiences
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Practical articles and technical notes covering web development,
            programming, Linux, networking and Information Technology.
          </p>

        </div>

      </section>


      {/* =====================================================
          TWO PART LAYOUT
      ====================================================== */}

      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">

          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">


            {/* =================================================
                PART 1 - ARTICLES
            ================================================= */}

            <div>

              <div className="mb-7 flex items-end justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Latest
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                    Recent Articles
                  </h2>
                </div>

                <Link
                  href="/posts"
                  className="hidden text-sm font-semibold text-teal-600 hover:text-teal-800 sm:block"
                >
                  View all →
                </Link>

              </div>


              <div className="space-y-5">

                {latestPosts.map((post) => (

                  <article
                    key={post.slug}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >

                    {/* Tags */}
                    <div className="mb-4">
                      <PostTags tags={post.tags} />
                    </div>


                    {/* Title */}
                    <h3 className="text-xl font-bold leading-snug text-slate-900">

                      <Link
                        href={`/posts/${post.slug}`}
                        className="transition group-hover:text-teal-600"
                      >
                        {post.title}
                      </Link>

                    </h3>


                    {/* Description */}
                    <p className="mt-3 leading-7 text-slate-600">
                      {post.description}
                    </p>


                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

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


              {/* Mobile View All */}
              <div className="mt-7 sm:hidden">

                <Link
                  href="/posts"
                  className="font-semibold text-teal-600 hover:text-teal-800"
                >
                  View all articles →
                </Link>

              </div>

            </div>


            {/* =================================================
                PART 2 - TAGS
            ================================================= */}

            <div>

              <div className="sticky top-6">
                <HomeTags />
              </div>

            </div>


          </div>

        </div>

      </section>

    </main>
  );
}
