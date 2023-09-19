import React from "react";

import World from "../../../assets/Dashboard/SalesMapping/world.png"

function SalesMapping() {
  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans my-5  lg:col-span-3">
      <div className="text-left">
        <h1 className="text-[#05004E] text-lg font-bold  ">
          Sales Mapping by Country
        </h1>
      </div>

      <div className="my-8">
        <img src={World} alt="" />
      </div>
    </div>
  );
}

export default SalesMapping;
