import Link from "next/link";
import { slugify } from "@/lib/slugify";

type PostTagsProps = {
  tags: string[];
};

export default function PostTags({ tags }: PostTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${slugify(tag)}`}
          className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 transition hover:bg-teal-100 hover:text-teal-800"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
