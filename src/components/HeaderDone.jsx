import React from "react";
import logo from "../assets/theme_logo.png"; 
import { IoMdSearch } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdLiveTv } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdChatbubbles, IoIosNotificationsOutline } from "react-icons/io";
import { IoAccessibility } from "react-icons/io5";

const Header = () => {

  const headerItems = [
    {
      label: "The Small Business Plan",
      icon: <HiOutlineSparkles />,
      color: "text-violet-500",
    },
    {
      label: "Live webinars",
      icon: <MdLiveTv />,
      color: "text-blue-500",
    },
    {
      label: "Help",
      icon: null,
      color: "text-blue-700",
      dropdown: true,
    },
  ];

  const profileItems = [
    {
      icon: <IoAccessibility />,
    },
    {
      icon: <IoMdChatbubbles />,
    },
    {
      icon: <IoIosNotificationsOutline />,
    },
  ];

  return (
    <div className="header bg-white w-full shadow-md p-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Connecteam Logo" className="h-8" />
        <div className="search flex items-center border rounded-xl px-2 bg-white">
          <input
            type="text"
            placeholder="Search anything"
            className="border-none focus:outline-none flex-grow px-2 text-sm"
          />
          <IoMdSearch className="text-gray-500 text-lg" />
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium">
        {headerItems.map((item, index) => (
          <div key={index} className={`flex items-center ${item.color}`}>
            {item.icon && <span className="mr-1 text-lg">{item.icon}</span>}
            <span>{item.label}</span>
            {item.dropdown && <FaCaretDown className="ml-1 text-xs" />}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {profileItems.map((item, index) => (
          <span key={index} className="text-gray-500 text-lg">
            {item.icon}
          </span>
        ))}
        <div className="flex items-center gap-2">
          <div className="bg-teal-600 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
            RK
          </div>
          <span className="text-gray-700 text-sm">Rohit Kumar</span>
          <FaCaretDown className="text-gray-500 text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Header;
