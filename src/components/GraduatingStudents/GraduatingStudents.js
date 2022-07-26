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
        label: "B.Tech. Students Graduating in 2023",
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
        label: "PG Students Graduating in 2023",
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
      <div style={{ marginBottom: "1rem" }}>
        <div className="chart-head ms-4 ms-lg-5" id="Graduate-title">
          Graduating Students
        </div>
        <div className="border-graduating ms-4 ms-lg-5"></div>

        <div className="chart-container">
          <div className="border-outer">
            <div
              className="chart"
              style={{
                position: "relative",
                margin: "0 auto",
              }}
            >
              <PieChart chartData={chartDataBTech} />
            </div>
          </div>

          <div className="border-outer">
            <div
              className="chart"
              style={{
                position: "relative",
                margin: "0 auto",
              }}
            >
              <PieChart chartData={chartDataPG} />
            </div>
          </div>

          <div className="border-outer">
            <div
              className="chart"
              style={{
                position: "relative",
                margin: "0 auto",
              }}
            >
              <PieChart chartData={chartDataCourse} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraduatingStudent;
