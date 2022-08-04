import { Bar } from "react-chartjs-2";

const BarGraph = ({ chartData }) => {
  const header = chartData.datasets[0].label;

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    categoryPercentage: 0.5,
    elements: {
      points: {
        pointStyle: "circle",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
            family: "Montserrat",
          },
        },
        grid: {
          display: false,
        },
      },

      y: {
        ticks: {
          font: {
            size: 16,
            family: "Montserrat",
          },
        },
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        font: {
          size: 20,
          family: "Montserrat",
          padding: 20,
        },
        position: "bottom",
        labels: {
          font: {
            size: 20,
            family: "Montserrat",
            padding: 20,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 10,
          family: "Montserrat",
        },
        bodyFont: {
          size: 10,
          family: "Montserrat",
        },
      },
      title: {
        display: true,
        text: `${header}`,
        align: "center",
        padding: {
          bottom: 30,
        },
        font: {
          weight: "bold",
          size: 20,
          family: "Montserrat",
          padding: 10,
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};

export default BarGraph;
