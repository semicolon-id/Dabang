import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["", "", "", "", "", "", ""];

// Generate random data for Last Month
const randomDataLastMonth = labels.map(() => Math.floor(Math.random() * 1000));

// Generate random data for This Month
const randomDataThisMonth = labels.map(() => Math.floor(Math.random() * 1000));

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Last Month",
      data: randomDataLastMonth,
      borderColor: "#0080DA", // Ganti warna label menjadi #0080DA
      backgroundColor: "rgba(0, 128, 218, 0.5)", // Ganti warna latar belakang menjadi warna yang diinginkan
      cubicInterpolationMode: "monotone", // Mengatur jenis garis menjadi melengkung
    },
    {
      fill: true,
      label: "This Month",
      data: randomDataThisMonth,
      borderColor: "#05C283", // Ganti warna label menjadi #05C283
      backgroundColor: "rgba(5, 194, 131, 0.5)", // Ganti warna latar belakang menjadi warna yang diinginkan
      cubicInterpolationMode: "monotone", // Mengatur jenis garis menjadi melengkung
    },
  ],
};

function Customer() {
  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans my-5  lg:col-span-3">
      <div className="text-left">
        <h1 className="text-[#05004E] text-lg font-bold">Customer Satisfaction</h1>
      </div>

      <div className=" ">
        <Line options={options} data={data} />
      </div>

      {/* data */}
      <div className="border-t   flex justify-center gap-4 mt-16">
        <div className="border-r  pr-4 flex relative mt-3">
          {/* warna */}
          <div className="h-[3px] w-6 rounded-full bg-[#0080DA] absolute top-3 right-[100px] "></div>
          <div className="h-3 w-3 rounded-full bg-[rgb(83,175,228)] absolute top-2 right-[106px] "></div>

          <div className="text-left ml-1">
            {/* label */}
            <p className="text-[#96A5B8] ">Last Month</p>
            {/* total */}
            <p className="text-xs text-[#222B45] font-bold">
              ${randomDataLastMonth.reduce((a, b) => a + b, 0)}
            </p>
          </div>
        </div>

        <div className=" flex relative mt-3 pl-4">
          {/* warna */}
          <div className="h-[3px] w-6 rounded-full bg-[#05C283]  absolute top-3 right-[83px] "></div>
          <div className="h-3 w-3 rounded-full bg-[#42f760] absolute top-2 right-[89px] "></div>
          <div className="text-left ml-1">
            {/* label */}
            <p className="text-[#96A5B8] ">This Month</p>
            {/* total */}
            <p className="text-xs text-[#222B45] font-bold">
              ${randomDataThisMonth.reduce((a, b) => a + b, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
