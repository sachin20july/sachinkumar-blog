import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/posts";

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
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Article Header */}
        <header className="mb-10">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium
                           bg-teal-100 text-teal-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold
                         tracking-tight text-slate-900 mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 mb-5">
            {post.description}
          </p>

          {/* Date */}
          <time
            dateTime={post.date}
            className="text-sm text-slate-500"
          >
            {post.date}
          </time>

        </header>


        {/* Article Content */}
        <article className="prose prose-slate max-w-none">
          {content}
        </article>

      </div>
    </main>
  );
}