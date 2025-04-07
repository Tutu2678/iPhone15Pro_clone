import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header
      className="w-full py-5 sm:px-10 px-5 
    flex justify-between items-center"
    >
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" className="w-10 h-6" />
        <div
          className="flex flex-1 justify-center
        max-sm:hidden"
        >
          {navLists.map((navItem) => (
            <div
              key={navItem}
              className="px-5 text-sm cursor-pointer text-gray 
              hover:text-white transition-all"
            >
              {navItem}
            </div>
          ))}
        </div>
        <div
          className="flex items-baseline gap-7 
        max-sm:justify-end max-sm:flex-1"
        >
          <img src={searchImg} alt="search" className="w-10 h-6" />
          <img src={bagImg} alt="bag" className="w-10 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
