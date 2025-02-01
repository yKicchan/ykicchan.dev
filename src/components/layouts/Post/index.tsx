import Head from "next/head";
import type React from "react";
import LatestPosts from "~/components/layouts/Post/LatestPosts";
import OGP from "~/components/ogp";
import type { Meta } from "~/libs/api/contents";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles.module.scss";

interface P {
  meta: Meta;
  latestMetaList: Meta[];
  children: React.ReactNode;
}

const Post: React.FC<P> = ({ meta, latestMetaList, children }) => {
  const title = `${meta.title} - yKicchan's blog`;
  const description = `${meta.excerpt}\n${meta.tags
    .map((tag) => tag.name)
    .join(", ")}`;
  const path = `/posts/${meta.id}`;

  return (
    <>
      <OGP meta={{ title, description, path }} />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header meta={meta} />
      <main className={styles.main}>{children}</main>
      <Footer meta={meta} />
      <LatestPosts metaList={latestMetaList} />
    </>
  );
};
export default Post;
