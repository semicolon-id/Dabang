import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const randomData = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);
const randomData2 = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);
const randomData3 = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);

export const data = {
  labels,
  datasets: [
    {
      label: "Loyal Customers",
      data: randomData,
      borderColor: "#A700FF", // Ganti warna label menjadi #A700FF
      backgroundColor: "#A700FF", // Ganti warna latar belakang menjadi #A700FF
      cubicInterpolationMode: "monotone", // Mengatur jenis garis menjadi melengkung
      borderWidth: 3, // Mengatur ketebalan garis menjadi lebih tebal
      borderRadius: 10, // Mengatur sudut garis menjadi lebih bulat
    },
    {
      label: "New Customers",
      data: randomData2,
      borderColor: "#EF4444", // Ganti warna label menjadi #EF4444
      backgroundColor: "#EF4444", // Ganti warna latar belakang menjadi #EF4444
      cubicInterpolationMode: "monotone", // Mengatur jenis garis menjadi melengkung
      borderWidth: 3, // Mengatur ketebalan garis menjadi lebih tebal
      borderRadius: 10, // Mengatur sudut garis menjadi lebih bulat
    },
    {
      label: "Unique Customers",
      data: randomData3,
      borderColor: "#3CD856", // Ganti warna label menjadi #3CD856
      backgroundColor: "#3CD856", // Ganti warna latar belakang menjadi #3CD856
      cubicInterpolationMode: "monotone", // Mengatur jenis garis menjadi melengkung
      borderWidth: 3, // Mengatur ketebalan garis menjadi lebih tebal
      borderRadius: 10, // Mengatur sudut garis menjadi lebih bulat
    },
  ],
};

function Visitor() {
  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans  lg:col-span-4 mt-24">
      <div className="text-left">
        <h1 className="text-[#05004E] text-lg font-bold">Visitor Insights</h1>
      </div>

      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Visitor;
