import React from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export { Layout };
