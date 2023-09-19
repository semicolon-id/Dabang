import React from "react";

import Sidebar from "../Sidebar/Sidebar";

import profile from "../../../assets/components/UI/profile.png";
import lang from "../../../assets/components/UI/text.png";
const Navbar = () => {
  return (
    <div className="fixed">
      <div className="hidden lg:block">
        {" "}
        <Sidebar />
      </div>

      <div className="grid md:grid-cols-7 grid-cols-3 justify-between  items-center md:px-4 py-3  bg-white lg:ml-64 ">
        <div className="md:col-span-2 pl-2 hidden md:block">
          <h1 className=" hidden lg:block font-bold text-2xl ">Dashboard</h1>
        </div>

        <div className="md:col-span-2 md:relative block  ">
          <span className="absolute top-1 left-4 text-[#5D5FEF] text-xl font-medium">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input
            type="text"
            className="bg-[#F9FAFB] w-24 md:w-80 rounded-xl py-1 pl-12"
            placeholder="Search here..."
          />
        </div>
        <div className="md:col-span-3 flex md:justify-evenly justify-between  gap-4   items-center ">
          <div className="md:flex items-center hidden">
            <img src={lang} alt="" className="w-24 h-6" />
            <select className="bg-white">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </select>
          </div>

          <div className="flex gap-4 md:col-span-3 items-center relative">
            <div className="bg-[#FFFAF1] rounded-lg h-12 w-12 pt-3">
              <div className="bg-[#EB5757] h-2 w-2 rounded-full absolute left-8 "></div>
              <span className="text-2xl text-[#FFA412] ">
                <ion-icon name="notifications-outline"></ion-icon>
              </span>
            </div>
            <img
              src={profile}
              alt=""
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
            />
            <div className="text-xs text-left">
              <h1 className="text-sm font-semibold">Guna</h1>
              <h1 className="text-xs text-[#737791] ">Admin</h1>
            </div>
          </div>
          <div className="">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>
        <div className="md:hidden flex justify-end pr-5 text-2xl">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
