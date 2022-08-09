import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  const header = chartData.datasets[0].label;

  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: "top",
        padding: 20,
        labels: {
          padding: 15,
          font: {
            size: 16,
            family: "Exo",
            weight: 600,
          },
        },
      },

      tooltip: {
        titleFont: {
          size: 16,
          family: "Exo",
        },
        bodyFont: {
          size: 16,
          family: "Exo",
        },
      },
      title: {
        display: true,
        text: `${header}`,
        align: "center",
        padding: {
          bottom: 20,
        },
        font: { weight: "bold", size: 22, family: "Exo", padding: 0 },
      },
    },
  };
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
