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
      <div style={{ marginBottom: "1rem" }}>
        {/* Placement Part */}
        <div className="placement-head ms-4 ms-lg-5" id="Graduate-title">
          Placement Statistics
        </div>
        <div className="border-placement ms-4 ms-lg-5"></div>

        <div className="stats-container">
          <div className="stats">
            <div className="border-outer-placement">
              <div className="bar">
                <BarChart chartData={offersData} />
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="border-outer-placement">
              <div
                className="bar"
                style={{
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <BarChart chartData={averageData} />
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="border-outer-placement">
              <div
                className="bar"
                style={{
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <BarChart chartData={highestData} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="testimonials ms-4 ms-lg-5">
            <h2>Past Recruiters</h2>
            <div
              className="border-placement ms-1 ms-lg-1"
              id="recruiters"
            ></div>
          </div>
          <div className="text-center container-md mx-auto">
            <Logos />
          </div>
        </div>

        {/* Training Part */}
        <div className="training-head ms-4 ms-lg-5" id="Graduate-title">
          Training Activities
        </div>
        <div className="border-training ms-4 ms-lg-5"></div>

        <TrainingTable />

        <TrainingList />
      </div>
      <Footer />
    </>
  );
}

export default PlacementTraining;
