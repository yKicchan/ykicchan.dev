import type React from "react";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.component}>
      <small className={styles.copy}>
        &copy; 2020 yKicchan All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
