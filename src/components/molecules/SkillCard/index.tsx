import type React from "react";
import { useState } from "react";
import Card from "~/components/atoms/Card";
import styles from "./styles.module.scss";

interface P {
  src: string;
  alt: string;
  level: string;
}

const SkillCard: React.FC<P> = ({ src, alt, level }) => {
  const [isFront, setIsFront] = useState(true);
  const toggle = () => setIsFront(!isFront);

  return (
    <div
      className={`${styles.wrapper} ${isFront ? styles.true : styles.false}`}
    >
      <Card onClick={toggle} className={styles.front} tag="dl">
        <dt>
          <img className={styles.img} src={src} alt={alt} />
        </dt>
        <dd>{alt}</dd>
      </Card>
      <Card onClick={toggle} className={styles.back}>
        {level}
      </Card>
    </div>
  );
};

export default SkillCard;
