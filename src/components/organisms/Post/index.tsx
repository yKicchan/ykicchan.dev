import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Link from "next/link";
import type React from "react";
import Card from "~/components/atoms/Card";
import Tag from "~/components/atoms/Tag";
import type { Meta } from "~/libs/api/contents";
import styles from "./styles.module.scss";

interface P {
  meta: Meta;
}

const Post: React.FC<P> = ({ meta }) => {
  const datetime = format(new Date(meta.publishedAt), "yyyy-MM-dd");
  return (
    <Link
      href="/posts/[id]"
      as={`/posts/${meta.id}`}
      className={styles.link}
      aria-label={meta.title}
    >
      <Card tag="article" className={styles.component}>
        <h2 className={styles.title}>{meta.title}</h2>
        <time dateTime={datetime}>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={["far", "clock"]} />
          </span>
          {datetime}
        </time>
        <p>{meta.excerpt}</p>
        <div className={styles.tags}>
          {meta.tags.map((tag) => (
            <Tag className={styles.tag} key={tag.id}>
              {tag.name}
            </Tag>
          ))}
        </div>
      </Card>
    </Link>
  );
};

export default Post;
