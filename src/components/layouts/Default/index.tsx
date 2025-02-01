import type React from "react";
import Footer from "~/components/organisms/Footer";
import Header from "~/components/organisms/Header";
import styles from "./styles.module.scss";

interface P {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<P> = ({ children, className }) => {
  const style = className || "";
  return (
    <>
      <Header />
      <main className={`${styles.content} ${style}`}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
