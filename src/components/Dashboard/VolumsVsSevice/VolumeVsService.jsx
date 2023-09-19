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
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
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
      label: "Volume",
      data: randomData,
      backgroundColor: "#0095FF",
      barPercentage: 0.4, // Mengatur lebar relatif bar Offline Sales
      borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
    {
      label: "Services",
      data: randomData2,
      backgroundColor: "#00E096",
      barPercentage: 0.4, // Mengatur lebar relatif bar Offline Sales
      borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
  ],
};

function VolumeVsService() {
  const [totalVolume, setTotalVolume] = useState(0);
  const [totalServices, setTotalServices] = useState(0);

  // Menghitung total Volume dan Services saat komponen dimuat
  useEffect(() => {
    const volumeData = data.datasets.find((dataset) => dataset.label === "Volume").data;
    const servicesData = data.datasets.find((dataset) => dataset.label === "Services").data;
    const totalVolumeValue = volumeData.reduce((total, value) => total + value, 0);
    const totalServicesValue = servicesData.reduce((total, value) => total + value, 0);
    setTotalVolume(totalVolumeValue);
    setTotalServices(totalServicesValue);
  }, []);

  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans my-5  lg:col-span-3">
      <div className="text-left">
        <h1 className="text-[#05004E] text-lg font-bold">
          Volume vs Service Level{" "}
        </h1>
      </div>

      <div className="">
        <Bar options={options} data={data} />
      </div>

      {/* data */}
      <div className="border-t flex justify-center gap-4 mt-24">
        <div className="border-r  pr-4 flex">
          {/* warna */}
          <div className="h-3 w-3 rounded-full bg-[#0095FF] mt-2"></div>
          <div className="text-left ml-1">
            {/* label */}
            <p className="text-[#96A5B8] ">Volume</p>
            {/* total */}
            <p className="text-xs text-[#222B45] font-semibold">{totalVolume}</p>
          </div>
        </div>

        <div className=" flex ">
          {/* warna */}
          <div className="h-3 w-3 rounded-full bg-[#00E096] mt-2"></div>
          <div className="text-left ml-1">
            {/* label */}
            <p className="text-[#96A5B8] ">Services</p>
            {/* total */}
            <p className="text-xs text-[#222B45] font-semibold">{totalServices}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolumeVsService;
