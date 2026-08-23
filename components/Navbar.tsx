"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaGithub,
  FaRss,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Navbar */}
        <div className="min-h-20 flex items-center justify-between gap-6">

          {/* Logo / Site Information */}
          <Link href="/" className="flex items-center gap-3 shrink-0">

            {/* Avatar Placeholder */}
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
              SK
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                Sachin Kumar
              </h1>

              <p className="text-xs text-teal-100">
                IT Professional & Developer
              </p>
            </div>

          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">

            <Link
              href="/"
              className="text-sm font-medium hover:text-teal-100 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/posts"
              className="text-sm font-medium hover:text-teal-100 transition-colors"
            >
              Posts
            </Link>

            <Link
              href="/archive"
              className="text-sm font-medium hover:text-teal-100 transition-colors"
            >
              Archive
            </Link>

            <Link
              href="/tags"
              className="text-sm font-medium hover:text-teal-100 transition-colors"
            >
              Tags
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium hover:text-teal-100 transition-colors"
            >
              About
            </Link>

          </nav>


          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Search */}
            <Link
              href="/search"
              aria-label="Search"
              className="hover:text-teal-100 transition-colors"
            >
              <FaSearch />
            </Link>

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


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-xl p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>


        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-teal-500 py-4">

            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-teal-700"
              >
                Home
              </Link>

              <Link
                href="/posts"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-teal-700"
              >
                Posts
              </Link>

              <Link
                href="/archive"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-teal-700"
              >
                Archive
              </Link>

              <Link
                href="/tags"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-teal-700"
              >
                Tags
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-teal-700"
              >
                About
              </Link>

              <Link
                href="/search"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-teal-700"
              >
                Search
              </Link>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
}