import React from "react";
import logo from "../assets/theme_logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="header bg-sky-200 w-full shadow-md p-2">
        <img src={logo} alt="logo" className="h-12" />
        <Search />

        <div className="subheader-left">
          <div>The Small Business Plan </div>
          <div>Live Sessions </div>
          <div>Help </div>
        </div>
        <div className="subheader-right">
          <div>Icon </div>
          <div>Icon </div>
          <div>Icon </div>
        </div>
      </div>
    </>
  );
};

export default Header;
