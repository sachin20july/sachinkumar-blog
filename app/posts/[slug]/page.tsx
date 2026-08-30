import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";

import { getAllPosts, getPostBySlug } from "@/lib/posts";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-10 mb-6 text-4xl font-bold tracking-tight text-slate-900"
      {...props}
    />
  ),

  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-900"
      {...props}
    />
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-slate-900" {...props} />
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-lg leading-8 text-slate-700" {...props} />
  ),

  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-teal-600 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-800"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-6 ml-6 list-disc space-y-2 text-lg text-slate-700"
      {...props}
    />
  ),

  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-6 ml-6 list-decimal space-y-2 text-lg text-slate-700"
      {...props}
    />
  ),

  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 border-l-4 border-teal-500 bg-teal-50 px-6 py-4 text-lg italic text-slate-700"
      {...props}
    />
  ),

  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-teal-700"
      {...props}
    />
  ),
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

  export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,

    description: post.description,

    keywords: post.tags,

    authors: [
      {
        name: "Sachin Kumar",
      },
    ],

    alternates: {
      canonical: `https://sachintechnology.com/posts/${post.slug}`,
    },

    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://sachintechnology.com/posts/${post.slug}`,
      publishedTime: post.date,
      authors: ["Sachin Kumar"],
      tags: post.tags,
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

  export default async function PostPage({ params }: Props) {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
      notFound();
    }

  const posts = getAllPosts();

  const currentIndex = posts.findIndex((item) => item.slug === slug);

  const previousPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
    },
    components,
  });

  return (
    <article className="bg-white">
      {/* Article Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-14">
          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl leading-8 text-slate-600">
            {post.description}
          </p>

          {/* Date */}
          <div className="mt-6 text-sm text-slate-500">
            Published on <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Article Content */}
        <div className="text-slate-800">{content}</div>

        {/* Article Navigation */}
        <div className="mt-16 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
          {/* Previous Article */}
          <div>
            {previousPost && (
              <Link
                href={`/posts/${previousPost.slug}`}
                className="group block rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <span className="text-sm text-slate-500">
                  ← Previous Article
                </span>

                <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-teal-700">
                  {previousPost.title}
                </h3>
              </Link>
            )}
          </div>

          {/* Next Article */}
          <div>
            {nextPost && (
              <Link
                href={`/posts/${nextPost.slug}`}
                className="group block rounded-xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-teal-300 hover:bg-teal-50 sm:text-right"
              >
                <span className="text-sm text-slate-500">Next Article →</span>

                <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-teal-700">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
