import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogArchive() {
  const posts = getAllPosts();

  // Group posts by year and month
  const groupedPosts: Record<
    string,
    Record<string, typeof posts>
  > = {};

  posts.forEach((post) => {
    const date = new Date(post.date);

    const year = date.getFullYear().toString();

    const month = date.toLocaleString("en-IN", {
      month: "long",
    });

    if (!groupedPosts[year]) {
      groupedPosts[year] = {};
    }

    if (!groupedPosts[year][month]) {
      groupedPosts[year][month] = [];
    }

    groupedPosts[year][month].push(post);
  });

  // Newest year first
  const years = Object.keys(groupedPosts).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            Articles
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Technical Blog
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Browse my technical articles and notes,
            organized by year and month.
          </p>
        </div>

        {/* Years */}
        <div className="space-y-14">
          {years.map((year) => {

            const months = Object.keys(
              groupedPosts[year]
            ).sort(
              (a, b) =>
                new Date(
                  `${b} 1, ${year}`
                ).getMonth() -
                new Date(
                  `${a} 1, ${year}`
                ).getMonth()
            );

            return (
              <div key={year}>

                {/* Year */}
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-teal-400">
                    {year}
                  </h3>

                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                {/* Months */}
                <div className="space-y-8">

                  {months.map((month) => (
                    <div
                      key={month}
                      className="relative pl-6"
                    >

                      {/* Timeline line */}
                      <div className="absolute left-0 top-2 h-full w-px bg-slate-700" />

                      {/* Timeline dot */}
                      <div className="absolute -left-[4px] top-2 h-2 w-2 rounded-full bg-teal-400" />

                      {/* Month */}
                      <h4 className="mb-4 text-lg font-semibold text-slate-200">
                        {month}
                      </h4>

                      {/* Posts */}
                      <div className="space-y-3">

                        {groupedPosts[year][month].map(
                          (post) => (
                            <Link
                              key={post.slug}
                              href={`/posts/${post.slug}`}
                              className="group flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition duration-200 hover:border-teal-500 hover:bg-slate-900 sm:flex-row sm:items-center sm:justify-between"
                            >

                              <div>
                                <h5 className="font-medium text-slate-200 transition group-hover:text-teal-400">
                                  {post.title}
                                </h5>

                                <p className="mt-1 text-sm text-slate-500">
                                  {post.description}
                                </p>
                              </div>

                              <time
                                dateTime={post.date}
                                className="shrink-0 text-sm text-slate-500"
                              >
                                {new Date(
                                  post.date
                                ).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                  }
                                )}
                              </time>

                            </Link>
                          )
                        )}

                      </div>

                    </div>
                  ))}

                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/archive"
            className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-teal-500 hover:text-teal-400"
          >
            View complete archive →
          </Link>
        </div>

      </div>
    </section>
  );
}