import React from "react";

import Card from "./Card";
import ExportIcon from "../../../assets/Dashboard/TodaysSales/ExportIcon.png";

function todaysSales() {
  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans  lg:col-span-6 mt-24">
      <div className="flex justify-between   mb-3">
        <div className="text-left">
          <h1 className="text-[#05004E] text-lg font-bold ">
            Today's Sales
          </h1>
          <p className="text[#737791] text-sm font-light">Sales Summery</p>
        </div>
        <div className=" p-2">
          <div className="text-right border rounded-md flex justify-center gap-1 h-9 w-20 cursor-pointer">
            <img src={ExportIcon} alt="" className="h-4 w-4 my-auto" />
            <p className="text-xs font-semibold text-[#0F3659] my-auto">Export</p>
          </div>
        </div>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
}

export default todaysSales;
