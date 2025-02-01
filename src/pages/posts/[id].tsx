import type { ParsedUrlQuery } from "node:querystring";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import CodeBlock from "~/components/atoms/CodeBlock";
import Layout from "~/components/layouts/Post";
import contents, { type Meta, type Post } from "~/libs/api/contents";
import styles from "./styles.module.scss";

interface Props {
  post?: Post;
  latestMetaList?: Meta[];
}

const PostPage: NextPage<Props> = ({ post, latestMetaList }) => {
  if (!post || !latestMetaList) return null;
  return (
    <Layout meta={post} latestMetaList={latestMetaList}>
      <ReactMarkdown
        className={styles.markdown}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CodeBlock language={match[1]}>{children}</CodeBlock>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.body}
      </ReactMarkdown>
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) return { props: {} };

  const getResponse = await contents.get(params.id);
  const listResponse = await contents.list({
    limit: 3,
    filters: `id[not_equals]${params.id}`,
  });

  return {
    props: {
      post: getResponse,
      latestMetaList: listResponse.contents,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default PostPage;
