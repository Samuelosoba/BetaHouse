import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
