import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row">
        <p>© 2026 SachinKumar.com</p>

        <Link href="/privacy-policy" className="transition hover:text-teal-600">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
