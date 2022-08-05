import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  const header = chartData.datasets[0].label;

  const options = {
    interaction: {
      intersect: false,
    },
    // responsive: true,
    maintainAspectRatio: false,
    elements: {
      points: {
        pointStyle: "circle",
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 16,
            family: "Neo Sans Pro",
            padding: 20,
          },
        },
      },
      chartAreaBorder: {
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
      tooltip: {
        titleFont: {
          size: 20,
          family: "Neo Sans Pro",
        },
        bodyFont: {
          size: 20,
          family: "Neo Sans Pro",
        },
      },
      title: {
        display: true,
        text: `${header}`,
        align: "center",
        padding: {
          bottom: 20,
        },
        font: { weight: "bold", size: 22, family: "Neo Sans Pro", padding: 0 },
      },
    },
  };
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
