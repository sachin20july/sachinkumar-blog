import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sachin Kumar | IT Professional",
    template: "%s | Sachin Kumar",
  },

  description:
    "Personal technical blog covering web development, programming, Linux, networking and Information Technology.",

  keywords: [
    "Sachin Kumar",
    "IT Professional",
    "Web Development",
    "Programming",
    "Linux",
    "Networking",
    "Information Technology",
    "Next.js",
    "React",
  ],

  authors: [
    {
      name: "Sachin Kumar",
    },
  ],

  creator: "Sachin Kumar",

  metadataBase: new URL("https://sachintechnology.com"),

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sachin Kumar",
    title: "Sachin Kumar | IT Professional",
    description:
      "Technical articles, tutorials and experiences covering web development, programming, Linux, networking and IT.",
    url: "https://sachintechnology.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sachin Kumar | IT Professional",
    description:
      "Technical articles, tutorials and experiences covering web development, programming, Linux, networking and IT.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}