import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="search flex items-center border rounded-xl px-2 bg-white">
    <input
      type="text"
      placeholder="Search anything"
      className="border-none focus:outline-none flex-grow px-2 text-sm"
    />
      <IoMdSearch />
    </div>
  );
};

export default Search;
