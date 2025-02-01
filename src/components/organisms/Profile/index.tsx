import type React from "react";
import Card from "~/components/atoms/Card";
import styles from "./styles.module.scss";

const Profile: React.FC = () => {
  return (
    <Card className={styles.component}>
      <figure className={styles.imageWrapper}>
        <img
          className={styles.img}
          src="/assets/profile.png"
          alt="profile icon"
        />
      </figure>
      <main className={styles.content}>
        <div>
          <h3 className={styles.name}>yKicchan</h3>
          <h4 className={styles.job}>Web engineer</h4>
        </div>
        <p className={styles.bio}>
          主な生息地は関西。
          <br />
          声優の花澤香菜さんの大ファンで、たまにイベントに出没してます。
          <br />
          宗教上の理由により JavaScript を卒業し、現在は TypeScript
          がメイン武器。
        </p>
      </main>
    </Card>
  );
};

export default Profile;
