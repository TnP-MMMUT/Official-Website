import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import PieChart from "./PieChart";

import { useState } from "react";
import { ChartData, ChartDataCourse, ChartDataPG } from "../../data/ChartData";

import "../../style/Graduates.css";

const colorArray = [
  "#1F4690",
  "#FFA500",
  "#4B5D67",
  "#9CB4CC",
  "#EE81B3",
  "#47B5FF",
  "#3BACB6",
];

const borderColor = "#343a40";

const GraduatingStudent = () => {
  const [chartDataBTech, setChartDataBTech] = useState({
    labels: ChartData.map((data) => data.Branch),
    datasets: [
      {
        label: "B.Tech. Graduating Students (2023)",
        data: ChartData.map((data) => data.Strength),
        backgroundColor: colorArray,
        borderColor,
      },
    ],
  });

  const [chartDataPG, setChartDataPG] = useState({
    labels: ChartDataPG.map((data) => data.Course),
    datasets: [
      {
        label: "PG Graduating Students (2023)",
        data: ChartDataPG.map((data) => data.TotalIntake),
        backgroundColor: colorArray,
        borderColor,
      },
    ],
  });

  const [chartDataCourse, setChartDataCourse] = useState({
    labels: ChartDataCourse.map((data) => data.Course),
    datasets: [
      {
        label: "Available Courses & Their Intakes",
        data: ChartDataCourse.map((data) => data.TotalIntake),
        backgroundColor: colorArray,
        borderColor: "#343a40",
      },
    ],
  });

  return (
    <>
      <Navsm />
      <div className="container-fluid">
        <div className="chart-head ms-3 ms-lg-5" id="Graduate-title">
          Graduating Students
        </div>
        <div className="border-bottom ms-3 ms-lg-5"></div>

        <div className="charts-container text-center">
          <div className="chart text-center">
            <PieChart chartData={chartDataBTech} />
          </div>

          <div className="chart text-center">
            <PieChart chartData={chartDataPG} />
          </div>

          <div className="chart text-center">
            <PieChart chartData={chartDataCourse} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraduatingStudent;
