import Footer from "components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
