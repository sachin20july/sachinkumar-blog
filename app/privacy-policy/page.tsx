import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sachin Kumar's technical blog.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-16">

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

          <h1 className="text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: August 2026
          </p>

          <div className="prose prose-slate mt-8 max-w-none">

            <p>
              Your privacy is important to me. This Privacy Policy explains
              how information is handled when you visit Sachin Kumar's
              technical blog.
            </p>

            <h2>Information We Collect</h2>

            <p>
              This website does not intentionally collect personal information
              such as your name, address, or phone number unless you
              voluntarily provide it.
            </p>

            <h2>Cookies and Analytics</h2>

            <p>
              This website may use cookies or analytics tools in the future to
              understand website usage and improve the user experience. Any
              such services may collect information such as browser type,
              device information, and general usage data.
            </p>

            <h2>External Links</h2>

            <p>
              This blog may contain links to external websites. I am not
              responsible for the privacy practices or content of those
              websites.
            </p>

            <h2>Changes to This Policy</h2>

            <p>
              This Privacy Policy may be updated from time to time. Any changes
              will be reflected on this page.
            </p>

                      </div>

        </article>

      </div>
    </main>
  );
}