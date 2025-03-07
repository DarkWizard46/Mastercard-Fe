import React from "react";
import Chart from "react-apexcharts";

const MonthlyTarget = () => {
  const chartOptions = {
    series: [90, 5], // Data contoh untuk kategori
    colors: ["#346CFF", "#EAB308"],
    chart: {
      height: 330,
      width: "100%",
      type: "donut",
    },
    labels: ["Merchant EDC MasterCard", "Merchant EDC Non Merchant"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          labels: {
            show: true,
           
          },
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Total</h2>
      <Chart options={chartOptions} series={chartOptions.series} type="donut" height={330} />
      <div className="text-center mt-4">
        <p className="text-gray-600 dark:text-gray-400">Merchant EDC MasterCard <strong>331 Merchant</strong></p>
        <p className="text-gray-600 dark:text-gray-400">Merchant EDC Non MasterCard Hari Ini: <strong>19 Merchant</strong></p>
      </div>
    </div>
  );
};

export default MonthlyTarget;