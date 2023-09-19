import React from "react";
// import Group1 from "../../../assets/Dashboard/TopProduct/Group1.png";
const TopProduct = () => {
  return (
    <div className=" bg-white  lg:col-span-4 rounded-xl   my-5">
      <div className="  font-sans text-left">
        <div className="p-[5%]">
          <h5 className="font-bold text-[#05004E] text-lg    ">Top Product</h5>
        </div>

        <div>
          <div className="   ">
            <div className="flex flex-col ">
              <div className="flex   w-full  border-b pb-4">
                <h1 className="text-[#96A5B8] text-xs  w-[10%] pl-3  ">#</h1>
                <h1 className="text-[#96A5B8] text-xs  w-[40%]">Name</h1>
                <h1 className="text-[#96A5B8] text-xs w-[30%]">Popularity</h1>
                <h1 className="text-[#96A5B8] text-xs w-[20%]">Sales</h1>
              </div>

              <div className="flex w-full my-1 border-b ">
                <h1 className="text-[#444A6D] lg:py-4 pt-4 w-[10%] pl-3 text-sm">
                  01
                </h1>
                <h1 className="text-[#444A6D] lg:py-4 pt-10  w-[40%] text-sm">
                  Home Decor Range
                </h1>
                <div className="w-[30%] relative pt-6">
                  <div className="bg-[#CDE7FF] rounded-full h-1 w-32 lg:w-[110px] "></div>
                  <div className="bg-[#0095FF] rounded-full h-1 w-[45%] absolute top-6"></div>
                </div>
                <div className="w-[20%]">
                  <div className="border border-[#0095FF] w-[50px] h-[25px] my-3 rounded-xl pt-[2px] ">
                    <h1 className="text-[#0095FF] pl-3 text-sm ">45%</h1>
                  </div>
                </div>
              </div>

              <div className="flex w-full my-1 border-b ">
                <h1 className="text-[#444A6D] lg:py-4 pt-4 w-[10%] pl-3 text-sm">
                  02
                </h1>
                <h1 className="text-[#444A6D] lg:py-4 pt-10  w-[40%] text-sm">
                  Disney Princess Pink
                </h1>
                <div className="w-[30%] relative pt-6">
                  <div className="bg-[#8CFAC7] rounded-full h-1 w-32 lg:w-[110px] "></div>
                  <div className="bg-[#00E096] rounded-full h-1 w-[29%] absolute top-6"></div>
                </div>
                <div className="w-[20%]">
                  <div className="border border-[#00E58F] w-[50px] h-[25px] my-3 rounded-xl pt-[2px] ">
                    <h1 className="text-[#00E58F] pl-3 text-sm ">29%</h1>
                  </div>
                </div>
              </div>

              <div className="flex w-full my-1 border-b ">
                <h1 className="text-[#444A6D] lg:py-4 pt-4 w-[10%] pl-3 text-sm">
                  03
                </h1>
                <h1 className="text-[#444A6D] lg:py-4 pt-10  w-[40%] text-sm">
                  Bathroom Essentials
                </h1>
                <div className="w-[30%] relative pt-6">
                  <div className="bg-[#C5A8FF] rounded-full h-1 w-32 lg:w-[110px] "></div>
                  <div className="bg-[#884DFF] rounded-full h-1 w-[18%] absolute top-6"></div>
                </div>
                <div className="w-[20%]">
                  <div className="border border-[#884DFF] w-[50px] h-[25px] my-3 rounded-xl pt-[2px] ">
                    <h1 className="text-[#884DFF] pl-3 text-sm ">18%</h1>
                  </div>
                </div>
              </div>

              <div className="flex w-full ">
                <h1 className="text-[#444A6D] lg:py-4 pt-4 w-[10%] pl-3 text-sm">
                  04
                </h1>
                <h1 className="text-[#444A6D] lg:py-4 pt-10  w-[40%] text-sm">
                  Apple Smartwatches
                </h1>
                <div className="w-[30%] relative pt-6">
                  <div className="bg-[#FFD5A4] rounded-full h-1 w-32 lg:w-[110px] "></div>
                  <div className="bg-[#FF8F0D] rounded-full h-1 w-[25%] absolute top-6"></div>
                </div>
                <div className="w-[20%]">
                  <div className="border border-[#FF8900] w-[50px] h-[25px] my-3 rounded-xl pt-[2px] ">
                    <h1 className="text-[#FF8900] pl-3 text-sm ">25%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
