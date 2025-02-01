import type { NextPage } from "next";
import Head from "next/head";
import Icon from "~/components/atoms/Icon";
import SkillCard from "~/components/molecules/SkillCard";
import OGP from "~/components/ogp";
import Profile from "~/components/organisms/Profile";
import styles from "./styles.module.scss";

const Page: NextPage = () => {
  const title = "About - yKicchan's blog";
  const description =
    "Web engineer.\n主な生息地は関西。\n声優の花澤香菜さんの大ファンで、たまにイベントに出没してます。\n宗教上の理由により JavaScript を卒業し、現在は TypeScript がメイン武器。";
  const path = "/about";

  return (
    <>
      <OGP meta={{ title, description, path }} />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Description</h2>
        <p className={styles.description}>
          主に技術系(ウェブ開発)のナレッジを残していきつつ、ときどき個人的な趣味の記事も書きます。
          <br />
          <br />
          サイト制作には Next.js + TypeScript をベースとし、SSG 機能を利用。
          <br />
          インフラには AWS Amplify を採用し公開しました。
          <br />
          <br />
          このサイトの
          <a
            className={styles.link}
            href="https://github.com/yKicchan/BLOG"
            target="_blank"
            rel="noreferrer"
          >
            ソースコード
          </a>
          は GitHub に公開してますので、ご自由にどうぞ！
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.profileTitle}`}>
          Author
        </h2>
        <Profile />
        <h3 className={styles.socialTitle}>Social</h3>
        <div className={styles.social}>
          <Icon
            icon={["fab", "twitter"]}
            label="Twitter"
            href="https://twitter.com/yKicchan"
            className={styles.socialLink}
          />
          <Icon
            icon={["fab", "github"]}
            label="GitHub"
            href="https://github.com/yKicchan"
            className={styles.socialLink}
          />
        </div>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skills}>
          <SkillCard src="/assets/react.svg" alt="React" level="ﾁｮｯﾄﾃﾞｷﾙ(嘘)" />
          <SkillCard
            src="/assets/angular.svg"
            alt="Angular"
            level="完全に理解した"
          />
          <SkillCard src="/assets/vue.svg" alt="Vue.js" level="ふつう" />
          <SkillCard
            src="/assets/typescript.svg"
            alt="TypeScript"
            level="型パズル初心者です"
          />
          <SkillCard
            src="/assets/javascript.svg"
            alt="JavaScript"
            level="6年くらい"
          />
          <SkillCard src="/assets/go.svg" alt="Golang" level="Goはいいぞ。" />
          <SkillCard src="/assets/php.svg" alt="PHP" level="4年くらい" />
          <SkillCard
            src="/assets/laravel.svg"
            alt="Laravel"
            level="半年くらい"
          />
        </div>
      </section>
    </>
  );
};

export default Page;
