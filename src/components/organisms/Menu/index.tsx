import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type React from "react";
import Icon from "~/components/atoms/Icon";
import styles from "./styles.module.scss";

interface P {
  onClose: () => void;
}

const Menu: React.FC<P> = ({ onClose }) => {
  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <Icon
          icon={["fas", "times"]}
          label="close"
          onClick={onClose}
          className={styles.close}
        />
      </header>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/" onClick={onClose}>
              TOP
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about" onClick={onClose}>
              ABOUT
            </Link>
          </li>
          <li className={styles.link}>
            <a
              href="https://github.com/yKicchan/BLOG/blob/master/LICENSE.md"
              target="_blank"
              rel="noreferrer"
            >
              LICENSE
              <FontAwesomeIcon
                icon={["fas", "external-link-alt"]}
                className={styles.external}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
