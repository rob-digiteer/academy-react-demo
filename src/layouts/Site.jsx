import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Site = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* main */}

      <main>
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Site;
