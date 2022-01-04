import React from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import "./layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout__container">
      <Header />
      <Navbar />
      <main className="main">{children}</main>
    </div>
  );
};

export { Layout };
