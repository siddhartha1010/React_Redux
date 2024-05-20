import React from "react";
// import Product from "./components/Product";
// import Dashboard from "./components/Dashboard";
// import Cart from "./components/Cart";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
