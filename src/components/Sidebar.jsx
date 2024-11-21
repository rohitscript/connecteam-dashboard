import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdChat, MdUpdate, MdEvent, MdHelpOutline } from "react-icons/md";
import { BsPeople, BsBook } from "react-icons/bs";
import { FaUserFriends, FaRegClock, FaTasks } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";

const Sidebar = () => {
  const sections = [
    {
      title: null,
      items: [
        { name: "Overview", icon: <AiOutlineDashboard /> },
        { name: "Activity", icon: <HiDocumentText /> },
      ],
    },
    {
      title: "User Section",
      items: [
        { name: "Users", icon: <BsPeople /> },
        { name: "Smart groups", icon: <FaUserFriends /> },
      ],
    },
    {
      title: "Communication",
      items: [
        { name: "Chat", icon: <MdChat />, color: "text-teal-500" },
        { name: "Updates", icon: <MdUpdate />, color: "text-blue-500" },
        { name: "Directory", icon: <HiDocumentText />, color: "text-pink-500" },
        { name: "Events", icon: <MdEvent />, color: "text-green-500" },
        { name: "Knowledge base", icon: <BsBook />, color: "text-purple-500" },
        {
          name: "Help Desk",
          icon: <MdHelpOutline />,
          color: "text-orange-500",
        },
        {
          name: "Add new",
          icon: <IoIosAddCircleOutline />,
          color: "text-blue-500",
        },
      ],
    },
    {
      title: "Operations",
      items: [
        { name: "Time Clock", icon: <FaRegClock />, color: "text-blue-500" },
        { name: "Forms", icon: <HiDocumentText />, color: "text-purple-500" },
        {
          name: "Job scheduling",
          icon: <HiDocumentText />,
          color: "text-orange-500",
        },
        { name: "Quick Tasks", icon: <FaTasks />, color: "text-teal-500" },
        {
          name: "Add new",
          icon: <IoIosAddCircleOutline />,
          color: "text-blue-500",
        },
      ],
    },
  ];

  return (
    <div className="sidebar bg-white w-64 h-screen shadow-md p-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          {section.title && (
            <h4 className="text-gray-600 text-xs font-bold mb-2">
              {section.title}
            </h4>
          )}

          {section.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`flex items-center gap-2 text-gray-700 cursor-pointer mb-2 ${
                item.color || ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
          {index !== sections.length - 1 && (
            <hr className="border-gray-300 mt-4" />
          )}
        </div>
      ))}

      <div className="add-section mt-4 flex items-center gap-2 text-blue-500 cursor-pointer">
        <IoIosAddCircleOutline className="text-lg" />
        <span className="text-sm font-medium">Add section</span>
      </div>
    </div>
  );
};

export default Sidebar;
