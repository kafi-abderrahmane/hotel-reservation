import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[url('/images/home.jpg')] bg-center">
        <div className="h-[920px] bg-black bg-opacity-60">
          <Header />
          <Nav />
        </div>
      </div>
      <main className={``}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
