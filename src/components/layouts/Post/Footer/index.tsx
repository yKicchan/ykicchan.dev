import type React from "react";
import { useEffect, useState } from "react";
import Icon from "~/components/atoms/Icon";
import type { Meta } from "~/libs/api/contents";
import styles from "./styles.module.scss";

interface P {
  meta: Meta;
}

const Footer: React.FC<P> = () => {
  const [shareText, setShareText] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    setShareText(document.title);
    setUrl(location.href);
  });

  const [isShareable, setIsShareable] = useState(false);
  useEffect(() => {
    setIsShareable(!!navigator?.share);
  });
  const share = () => {
    if (!isShareable) return;
    navigator
      .share({
        title: shareText,
        url: url,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(() => {
        console.error("Failed share...");
      });
  };

  // Todo: いいねの実装
  // const [liked, setLiked] = useState(false)
  // useEffect(() => {
  //   const init = localStorage.getItem(meta.id)
  //   setLiked(init === '1')
  // })
  //
  //
  // const like = () => {
  //   setLiked(!liked)
  //   localStorage.setItem(meta.id, !liked ? '1' : '0')
  // }

  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>SHARE</h2>
      <div className={styles.icons}>
        {isShareable ? (
          <Icon icon={["fas", "share-alt"]} label="Share" onClick={share} />
        ) : (
          <Icon
            icon={["fab", "twitter"]}
            label="twitter"
            href={`http://twitter.com/share?url=${url}&text=${shareText}&via=yKicchan`}
            className={styles.twitter}
          />
        )}
        {/*<Icon*/}
        {/*  icon={[liked ? 'fas' : 'far', 'heart']}*/}
        {/*  label="like"*/}
        {/*  onClick={like}*/}
        {/*  className={styles.like}*/}
        {/*/>*/}
      </div>
    </footer>
  );
};

export default Footer;
