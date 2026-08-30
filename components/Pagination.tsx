import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={`/posts?page=${currentPage - 1}`}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700"
        >
          ← Previous
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-400">
          ← Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex h-10 w-10 items-center justify-center text-slate-500"
              >
                ...
              </span>
            );
          }

          return (
            <Link
              key={page}
              href={`/posts?page=${page}`}
              aria-current={
                page === currentPage ? "page" : undefined
              }
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition ${
                page === currentPage
                  ? "bg-teal-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={`/posts?page=${currentPage + 1}`}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700"
        >
          Next →
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-400">
          Next →
        </span>
      )}
    </nav>
  );
}