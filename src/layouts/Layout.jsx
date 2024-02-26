import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckAvailability from "@/components/CheckAvailability";
const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[url('/images/home.jpg')] bg-center">
        <div className="h-[920px] bg-black bg-opacity-60 flex flex-col items-center justify-start">
          <Header />
          <Nav />
          <CheckAvailability />
        </div>
      </div>
      <main className={`min-h-screen`}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
