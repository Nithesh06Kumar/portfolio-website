import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="xl:px-64 lg:px-[8rem] md:px-[2rem] bg-themecolor-white dark:bg-themecolor-black">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
