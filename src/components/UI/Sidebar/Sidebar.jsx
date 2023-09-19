import React from "react";

import logo from "../../../assets/components/UI/logo.png";
import logow from "../../../assets/components/UI/logow.png";

function Sidebar() {
  return (
    <div className="font-sans">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#5D5FEF] dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <a href="# " class="flex items-center pl-2.5 mb-5 ml-10 mt-7">
            <img src={logo} class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
            <span class="self-center text-xl font-bold whitespace-nowrap  ">
              Dabang
            </span>
          </a>
          <ul class="space-y-2 font-medium text-[#737791] ">
            <li className="flex justify-start">
              <a
                href="#"
                class="flex items-center p-2  rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group mt-7 mb-3 w-48 mx-auto justify-center"
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  <ion-icon name="pie-chart-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto justify-start"
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="stats-chart-outline"></ion-icon>
                </span>

                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Leaderboard
                </span>
              </a>
            </li>
            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto"justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Order
                </span>
              </a>
            </li>
            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto"justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="bag-handle-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Products
                </span>
              </a>
            </li>
            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto"justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="bar-chart-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Sales Report
                </span>
              </a>
            </li>
            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto"justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Messeges
                </span>
              </a>
            </li>
            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto"justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Settings
                </span>
              </a>
            </li>

            <li className="flex justify-start ">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-[#5D5FEF] group my-2 mb-3 w-48 mx-auto"justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-white">
                  {" "}
                  <ion-icon name="log-in-outline"></ion-icon>
                </span>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#737791] group-hover:text-white ">
                  Sign Out
                </span>
              </a>
            </li>
          </ul>

          <div className="bg-[#5D5FEF] rounded-2xl h-56 text-white p-5 mt-24 mb-14">
            <div className="flex justify-center"> <img src={logow} alt="" className=""/></div>
           
            <h1 className="text-lg font-semibold">Dabang Pro</h1>

            <div className="w-[80%] mx-auto text-sm mt-3 mb-4">  <p>Get access to all features on tetumbas</p></div>
          
            <button className="bg-white rounded-lg text-[#5D5FEF] font-bold w-36 h-10">Get Pro</button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
