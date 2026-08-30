"use client";

import Link from "next/link";
import { FaGithub, FaRss } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-6">

        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}

        <div className="flex min-h-20 items-center justify-between gap-6">

          {/* Logo / Site Information */}

          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-3"
          >
            <Image
              src="/sk.png"
              alt="Sachin Kumar"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover"
              priority
            />

            <div className="min-w-0">
              <h1 className="truncate text-xl font-bold tracking-wide">
                Sachin Kumar
              </h1>

              {/* Keep this exactly as it is */}
              <p className="text-xs text-teal-100">
                MCA  •  IT Professional  •  Developer
              </p>
            </div>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden lg:flex items-center gap-7">

            <Link
              href="/"
              className="text-lg font-medium hover:text-teal-100 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/posts"
              className="text-lg font-medium hover:text-teal-100 transition-colors"
            >
              Posts
            </Link>

            <Link
              href="/archive"
              className="text-lg font-medium hover:text-teal-100 transition-colors"
            >
              Archive
            </Link>

            <Link
              href="/tags"
              className="text-lg font-medium hover:text-teal-100 transition-colors"
            >
              Tags
            </Link>

            <Link
              href="/about"
              className="text-lg font-medium hover:text-teal-100 transition-colors"
            >
              About
            </Link>

          </nav>


          {/* =================================================
              RIGHT SIDE - DESKTOP
          ================================================== */}

          <div className="hidden lg:flex items-center gap-4">

            {/* Search */}

            <form
              action="/search"
              method="GET"
              className="hidden md:flex"
            >
              <input
                type="search"
                name="q"
                placeholder="Search..."
                className="w-40 rounded-md bg-white px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-200"
              />
            </form>


            {/* GitHub */}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-teal-100 transition-colors"
            >
              <FaGithub />
            </a>


            {/* RSS */}

            <a
              href="/rss.xml"
              aria-label="RSS Feed"
              className="hover:text-teal-100 transition-colors"
            >
              <FaRss />
            </a>

          </div>

        </div>


        {/* =====================================================
            MOBILE NAVIGATION
            Only visible below lg
        ====================================================== */}

        <nav className="lg:hidden border-t border-teal-500">

          <div className="flex items-center gap-1 overflow-x-auto py-2">

            <Link
              href="/"
              className="shrink-0 rounded px-3 py-2 text-sm font-medium hover:bg-teal-700"
            >
              Home
            </Link>

            <Link
              href="/posts"
              className="shrink-0 rounded px-3 py-2 text-sm font-medium hover:bg-teal-700"
            >
              Posts
            </Link>

            <Link
              href="/archive"
              className="shrink-0 rounded px-3 py-2 text-sm font-medium hover:bg-teal-700"
            >
              Archive
            </Link>

            <Link
              href="/tags"
              className="shrink-0 rounded px-3 py-2 text-sm font-medium hover:bg-teal-700"
            >
              Tags
            </Link>

            <Link
              href="/about"
              className="shrink-0 rounded px-3 py-2 text-sm font-medium hover:bg-teal-700"
            >
              About
            </Link>

          </div>

        </nav>


        {/* =====================================================
            MOBILE SEARCH + SOCIAL
        ====================================================== */}

        <div className="lg:hidden flex items-center gap-4 border-t border-teal-500 py-3">

          <form
            action="/search"
            method="GET"
            className="flex-1"
          >
            <input
              type="search"
              name="q"
              placeholder="Search..."
              className="w-full rounded-md bg-white px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-200"
            />
          </form>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-lg hover:text-teal-100 transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="/rss.xml"
            aria-label="RSS Feed"
            className="text-lg hover:text-teal-100 transition-colors"
          >
            <FaRss />
          </a>

        </div>

      </div>
    </header>
  );
}