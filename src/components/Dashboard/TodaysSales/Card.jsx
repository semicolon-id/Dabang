import React from "react";

import SalesIcon from "../../../assets/Dashboard/TodaysSales/SalesIcon.png";
import OrderIcon from "../../../assets/Dashboard/TodaysSales/OrderIcon.png";
import DiscIcon from "../../../assets/Dashboard/TodaysSales/DiscIcon.png";
import NewCostumersIcon from "../../../assets/Dashboard/TodaysSales/NewCostumersIcon.png";

function Card() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="rounded-lg bg-[#FFE2E5] text-left p-3 w-[142px] ">
        <div className="bg-[#FA5A7D] rounded-full w-7 h-7 flex justify-center mt-1">
          <img src={SalesIcon} alt="" className="w-4 h-4 mt-[6px] " />
        </div>

        <div>
          <h1 className="text-[#151D48] text-lg font-bold mt-2 mb-1">$1k</h1>
          <p className="text[#425166] mb-1 ">Total Sales</p>
          <p className="text-[#4079ED] text-xs mb-1">+8% from yesterday</p>
        </div>
      </div>

      <div className="rounded-lg bg-[#FFF4DE] text-left p-3 w-[142px]">
        <div className="bg-[#FF947A] rounded-full w-7 h-7 flex justify-center mt-1">
          <img src={OrderIcon} alt="" className="w-4 h-4 mt-[6px] " />
        </div>

        <div>
          <h1 className="text-[#151D48] text-lg font-bold mt-2 mb-1">300</h1>
          <p className="text[#425166] mb-1 ">Total Order</p>
          <p className="text-[#4079ED] text-xs mb-1">+5% from yesterday</p>
        </div>
      </div>

      <div className="rounded-lg bg-[#DCFCE7] text-left p-3 w-[142px]">
        <div className="bg-[#3CD856] rounded-full w-7 h-7 flex justify-center mt-1">
          <img src={DiscIcon} alt="" className="w-4 h-4 mt-[6px] " />
        </div>

        <div>
          <h1 className="text-[#151D48] text-lg font-bold mt-2 mb-1">5</h1>
          <p className="text[#425166] mb-1 ">Product Sold</p>
          <p className="text-[#4079ED] text-xs mb-1">+1,2% from yesterday</p>
        </div>
      </div>

      <div className="rounded-lg bg-[#F3E8FF] text-left p-3 w-[142px]">
        <div className="bg-[#BF83FF] rounded-full w-7 h-7 flex justify-center mt-1">
          <img src={NewCostumersIcon} alt="" className="w-4 h-4 mt-[6px] " />
        </div>

        <div>
          <h1 className="text-[#151D48] text-lg font-bold mt-2 mb-1">$1k</h1>
          <p className="text[#425166] mb-1 ">Total Sales</p>
          <p className="text-[#4079ED] text-xs mb-1">+8% from yesterday</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
