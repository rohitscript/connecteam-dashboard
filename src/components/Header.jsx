import React from "react";
import logo from "../assets/theme_logo.png";
import Search from "./Search";
import { IoAccessibility } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="header bg-sky-200 w-full shadow-md p-2 flex items-center justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="h-12" />
          <Search />
        </div>

        <div className="header-right flex items-center ">
          <div className="subheader-left flex">
            <div className="text-violet-500 flex items-center">
              <HiOutlineSparkles />
             <div className="text-xl font-semibold border-r-2  "> The Small Business Plan
                </div>
            </div>
            <div className="text-blue-500 flex items-center">
              <MdLiveTv />
             <div className="text-xl font-semibold border-r-2  "> Live Sessions
            </div>
            </div>
            <div className="text-blue-500 flex items-center">
             <div className="text-xl font-semibold border-r-2  "> Help </div><FaCaretDown />
            </div>
          </div>
          <div className="subheader-right flex items-center  border-r-2 ">
            <IoAccessibility />

            <IoMdChatbubbles />

            <IoIosNotificationsOutline />
          </div>
          <div className="flex items-center">
             Rohit Kumar
            <FaCaretDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
