import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import Bag from "../../../assets/Dashboard/TargetVsReality/Bag.png";
import TicketStar from "../../../assets/Dashboard/TargetVsReality/TicketStar.png"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const months = ["", "", "", "", "", "", ""];

const randomData = Array.from(
  { length: months.length },
  () => Math.floor(Math.random() * 300) + 100
);
const randomData2 = Array.from(
  { length: months.length },
  () => Math.floor(Math.random() * 300) + 100
);

export const data = {
  labels: months,
  datasets: [
    {
      label: "Reality Sales",
      data: randomData, // Ganti data sesuai kebutuhan
      backgroundColor: "#4AB58E", // Ubah warna latar belakang untuk Reality Sales
      barPercentage: 0.8, // Mengatur lebar relatif bar Reality Sales
      borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
    {
      label: "Target Sales",
      data: randomData2, // Ganti data sesuai kebutuhan
      backgroundColor: "#FFCF00", // Ubah warna latar belakang untuk Target Sales
      barPercentage: 0.8, // Mengatur lebar relatif bar Target Sales
      borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
  ],
};

function TargetVsReality() {
  // Menghitung total Reality Sales dan Target Sales saat komponen dimuat
  useEffect(() => {
    const totalRealitySales = randomData.reduce((total, value) => total + value, 0);
    const totalTargetSales = randomData2.reduce((total, value) => total + value, 0);
    setTotalRealitySales(totalRealitySales);
    setTotalTargetSales(totalTargetSales);
  }, []);

  const [totalRealitySales, setTotalRealitySales] = useState(0);
  const [totalTargetSales, setTotalTargetSales] = useState(0);

  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans my-5  lg:col-span-3">
      <div className="text-left">
        <h1 className="text-[#05004E] text-lg font-bold">Target vs Reality</h1>
      </div>

      <div className="  ">
        <Bar options={options} data={data} />
      </div>

      <div>
        <div className="grid grid-cols-2 w-full mt-7">
          <div className="flex mb-3">
            <div className="bg-[#8ceeca67]  city-70 rounded-lg w-8 h-8 flex justify-center pt-2">
                <img src={Bag} alt="" className="w-5 h-5"/>
            </div>
            <div className="text-left ml-2">
                <h1 className="text-[#151D48] text-sm font-semibold">Reality Sales</h1>
                <p className="text-[#737791] text-xs">Global</p>
            </div>
          </div>
          {/* total */}
          <h1 className="text-[#27AE60] font-semibold text-lg">{totalRealitySales}</h1>
        </div>

        <div className="grid grid-cols-2 w-full">
          <div className="flex">
            <div className="bg-[#FFF4DE]  city-70 rounded-lg w-8 h-8 flex justify-center pt-2">
                <img src={TicketStar} alt="" className="w-5 h-5"/>
            </div>
            <div className="text-left ml-2">
                <h1 className="text-[#151D48] text-sm font-semibold">Target Sales</h1>
                <p className="text-[#737791] text-xs">Commercial</p>
            </div>
          </div>
          {/* total */}
          <h1 className="text-[#FFA412] font-semibold text-lg">{totalTargetSales}</h1>
        </div>
      </div>
    </div>
  );
}

export default TargetVsReality;
