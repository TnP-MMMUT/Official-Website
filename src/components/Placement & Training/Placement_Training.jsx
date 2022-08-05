import { useState } from "react";
import "../../style/placement_training.css";
import BarChart from "./BarGraph";
import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import { PlacementData } from "../../data/PlacementData";
import { Chart as ChartJs } from "chart.js/auto";

import TrainingTable from "./TrainingTable";
import TrainingList from "./TrainingList";
import Logos from "../Logo/Logos";

const colorArray = [
  "#1F4690",
  "#FFA500",
  "#4B5D67",
  "#9CB4CC",
  "#EE81B3",
  "#47B5FF",
  "#3BACB6",
];

const borderColor = "#000";

function PlacementTraining() {
  const [offersData, setOffersData] = useState({
    labels: PlacementData.map((data) => data.Year),
    datasets: [
      {
        label: "No. of Offers (Past 6 Years)",
        data: PlacementData.map((data) => data.Offers),
        backgroundColor: colorArray,
        borderColor: borderColor,
      },
    ],
  });

  const [averageData, setAverageData] = useState({
    labels: PlacementData.map((data) => data.Year),
    datasets: [
      {
        label: "Average Package (Past 6 Years)",
        data: PlacementData.map((data) => data.AveragePackage),
        backgroundColor: colorArray,
        borderColor: borderColor,
      },
    ],
  });

  const [highestData, setHighestData] = useState({
    labels: PlacementData.map((data) => data.Year),
    datasets: [
      {
        label: "Highest Package (Past 6 Years)",
        data: PlacementData.map((data) => data.HighestPackage),
        backgroundColor: colorArray,
        borderColor: borderColor,
      },
    ],
  });

  return (
    <>
      <Navsm />
      <div className="container-fluid">
        {/* Placement Part */}
        <div className="placement-head ms-0 ms-lg-5" id="Graduate-title">
          Placement Statistics
        </div>
        <div className="border-bottom ms-0 ms-lg-5"></div>

        <div className="stats-container mt-3">
          <div className="bar text-center">
            <BarChart chartData={offersData} />
          </div>

          <div className="bar text-center">
            <BarChart chartData={averageData} />
          </div>

          <div className="bar text-center">
            <BarChart chartData={highestData} />
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="training-head ms-0 ms-lg-5" id="Graduate-title">
            Past Recruiters
          </div>
          <div className="border-bottom ms-0 ms-lg-5"></div>

          <div className="text-center container-md mx-auto">
            <Logos />
          </div>
        </div>

        {/* Training Part */}
        <div className="training-head ms-0 ms-lg-5" id="Graduate-title">
          Training Activities
        </div>
        <div className="border-bottom ms-0 ms-lg-5"></div>

        <div className="container-fluid mb-4 mx-auto text-center">
          <TrainingTable />
        </div>

        <div className="container-fluid mb-4">
          <TrainingList />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlacementTraining;
