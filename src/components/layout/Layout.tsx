import { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />

      <main>{children} </main>
      <Footer />
    </div>
  );
};
