import type { GetServerSidePropsContext } from "next";
import contents from "~/libs/api/contents";

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;

async function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >`;
  xml += `
    <url>
      <loc>${process.env.HOST}</loc>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>${process.env.HOST}/about</loc>
      <changefreq>daily</changefreq>
    </url>
  `;

  const res = await contents.list();
  const urls = res.contents.map(
    (post) => `
      <url>
        <loc>${process.env.HOST}/posts/${post.id}</loc>
        <lastmod>${post.revisedAt}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `,
  );

  xml += urls.join("");
  xml += "</urlset>";
  return xml;
}
