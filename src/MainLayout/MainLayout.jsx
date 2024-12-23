import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <hr />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;