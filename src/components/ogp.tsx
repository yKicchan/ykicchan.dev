import Head from "next/head";
import type React from "react";

export interface OgpMeta {
  title: string;
  description: string;
  path: string;
}

interface P {
  meta: OgpMeta;
}

const ogp: React.FC<P> = ({ meta }) => {
  return (
    <Head>
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta
        property="og:url"
        content={`https://www.ykicchan.dev${meta.path}`}
      />
      <meta
        property="og:image"
        content="https://www.ykicchan.dev/assets/profile.png"
      />
      <meta property="og:site_title" content="yKicchan's blog" />
      <meta property="og:site_name" content="www.ykicchan.dev" />
    </Head>
  );
};

export default ogp;
