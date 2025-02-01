import type React from "react";
import styles from "./styles.module.scss";

interface P {
  children: React.ReactNode;
  className?: string;
}

const Tag: React.FC<P> = ({ children, className }) => {
  return (
    <span className={`${styles.component} ${className || ""}`}>
      # {children}
    </span>
  );
};

export default Tag;
