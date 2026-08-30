import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://sachintechnology.com";

export async function GET() {
  const posts = getAllPosts();

  const rssItems = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>

          <description><![CDATA[${post.description}]]></description>

          <link>${SITE_URL}/posts/${post.slug}</link>

          <guid isPermaLink="true">
            ${SITE_URL}/posts/${post.slug}
          </guid>

          <pubDate>${new Date(post.date).toUTCString()}</pubDate>

          ${
            post.tags
              ? post.tags
                  .map(
                    (tag) => `
                      <category><![CDATA[${tag}]]></category>
                    `
                  )
                  .join("")
              : ""
          }
        </item>
      `
    )
    .join("");


  const rss = `<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0">

  <channel>

    <title>Sachin Kumar | Technical Blog</title>

    <link>${SITE_URL}</link>

    <description>
      Technical articles, tutorials and experiences covering
      web development, programming, Linux, networking and Information Technology.
    </description>

    <language>en-IN</language>

    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

    <generator>Next.js</generator>

    ${rssItems}

  </channel>

</rss>`;


  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}