import React from "react";

const TopProductItem = ({ number, name, bgColor1, bgColor2, percentage }) => {
  const calculateWidth = () => {
    return percentage * 0.4; // Sesuaikan dengan faktor skala yang diinginkan
  };

  return (
    <div className="flex w-full my-1 border-b lg:col-span-6 ">
      <h1 className="text-[#444A6D] lg:py-4 pt-4 w-[10%] pl-3 text-sm">
        {number}
      </h1>
      <h1 className="text-[#444A6D] lg:py-4 pt-10 w-[40%] text-sm">{name}</h1>
      <div className="w-[30%] relative pt-6">
        <div className={`bg-${bgColor1} rounded-full h-1 w-32`}></div>
        <div
          className={`bg-${bgColor2} rounded-full h-1`}
          style={{ width: `${calculateWidth()}%`, position: "absolute", top: "6px" }}
        ></div>
      </div>
      <div className="w-[20%]">
        <div className={`border border-${bgColor2} w-[50px] h-[25px] my-3 rounded-xl pt-[2px] `}>
          <h1 className={`text-${bgColor2} pl-3 text-sm `}>{percentage}%</h1>
        </div>
      </div>
    </div>
  );
};

export default TopProductItem;
