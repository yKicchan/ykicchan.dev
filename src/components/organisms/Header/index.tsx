import Link from "next/link";
import type React from "react";
import { useState } from "react";
import Menu from "~/components/organisms/Menu";
import Icon from "../../atoms/Icon";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className={styles.component}>
      <Link href="/" className={styles.title}>
        BLOG
      </Link>
      {isShow && <Menu onClose={() => setIsShow(false)} />}
      <Icon
        label="Menu"
        icon={["fas", "bars"]}
        onClick={() => setIsShow(true)}
        className={styles.menu}
      />
    </header>
  );
};

export default Header;
