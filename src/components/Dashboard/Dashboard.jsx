import React from "react";

import TodaysSales from "./TodaysSales/todaysSales";
import Visitor from "./Visitor/Visitor";
import TotalRevenue from "./TotalRevenue/totalRevenue";
import Customer from "./Customer/Customer";
import TargetVsReality from "./TargetVsReality/targetVsReallity";
import TopProduct from "./TopProduct/TopProduct";
import SalesMapping from "./SalesMappping/salesMapping";
import VolumeVsService from "./VolumsVsSevice/VolumeVsService";

function dashboard() {
  return (
    <div className="bg-gray-100 p-[1%] grid grid-rows-10 lg:grid-cols-10 gap-3 ">
      <TodaysSales />

      <Visitor />

      <TotalRevenue />

      <Customer />

      <TargetVsReality />

      <TopProduct />

      <SalesMapping />

      <VolumeVsService />
    </div>
  );
}

export default dashboard;
