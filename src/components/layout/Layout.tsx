import { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./layout.module.css";
type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children} </main>
      <Footer />
    </div>
  );
};
