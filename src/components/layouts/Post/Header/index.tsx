import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import type React from "react";
import { useRef } from "react";
import Card from "~/components/atoms/Card";
import Tag from "~/components/atoms/Tag";
import { useIntersection } from "~/hooks/useIntersection";
import type { Meta } from "~/libs/api/contents";
import styles from "./styles.module.scss";

interface P {
  meta: Meta;
}

const Header: React.FC<P> = ({ meta }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const intersection = useIntersection(ref);
  const revisedAt = format(new Date(meta.revisedAt), "yyyy-MM-dd");
  const publishedAt = format(new Date(meta.publishedAt), "yyyy-MM-dd");
  const time = revisedAt;
  const isRevised = meta.revisedAt !== meta.publishedAt;
  const timeIcon: FontAwesomeIconProps["icon"] = isRevised
    ? ["fas", "sync-alt"]
    : ["far", "clock"];
  const timeTitle = isRevised ? `公開: ${publishedAt}\n更新: ${revisedAt}` : "";

  return (
    <>
      <Card tag="header" className={styles.component}>
        <h1 className={styles.title}>{meta.title}</h1>
        <p>
          <time className={styles.time} dateTime={time} title={timeTitle}>
            <FontAwesomeIcon icon={timeIcon} className={styles.timeIcon} />
            {time}
          </time>
        </p>
        <div className={styles.tags}>
          {meta.tags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </div>
      </Card>
      <div ref={ref}>{/* スクロール固定ヘッダー表示判定用のダミー要素 */}</div>
      {!intersection && (
        <header className={styles.floatHeaderContainer}>
          <div className={styles.floatHeader}>
            <div className={styles.floatTitle} title={meta.title}>
              {meta.title}
            </div>
            <button type="button" className={styles.floatButton}>
              <FontAwesomeIcon
                icon={["fas", "angle-down"]}
                className={styles.floatIcon}
              />
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
