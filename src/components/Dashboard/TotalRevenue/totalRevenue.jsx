import React from "react";
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

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const randomData = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);
const randomData2 = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);

export const data = {
  labels,
  datasets: [
    {
      label: "Online Sales",
      data: randomData, // Ubah data sesuai dengan kebutuhan
      backgroundColor: "#0095FF", // Ubah warna latar belakang untuk online sales
      //   barThickness: 10, // Mengatur ketebalan bar (lebar) menjadi lebih tipis sesuai kebutuhan
      barPercentage: 0.7, // Mengatur lebar relatif bar Offline Sales
      borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
    {
      label: "Offline Sales",
      data: randomData2, // Ubah data sesuai dengan kebutuhan
      backgroundColor: "#00E096", // Ubah warna latar belakang untuk offline sales
      //   barThickness: 10, // Mengatur ketebalan bar (lebar) menjadi lebih tipis sesuai kebutuhan
      barPercentage: 0.7, // Mengatur lebar relatif bar Offline Sales
      borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
  ],
};

function TotalRevenue() {
  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans my-5  lg:col-span-4">
      <div className="text-left">
        <h1 className="text-[#05004E] text-lg font-bold">Total Revenue</h1>
      </div>

      <div className=" ">  
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default TotalRevenue;
