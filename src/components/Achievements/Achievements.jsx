import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import CounterComponent from "./CounterComponent";

import "./achievements.css";

import { motion, useScroll } from "framer-motion";
import Logos from "../Logo/Logos";
import Layout from "./Layout/Layout";
import News from "./In News/News";

const Achievements = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div className="container-fluid">
        <div className="about ms-3 ms-md-5 ms-lg-5">Achievements</div>
        <div className="border1 ms-3 ms-md-5 ms-lg-5"></div>

        <div className="component-div">
          <CounterComponent />

          <div className="logo-component">
            <Logos />
          </div>
        </div>

        <div className="alumni ms-3 ms-md-5 ms-lg-5 mt-2">
          Our Alumni Works At
        </div>
        <div className="border1 border-alumni ms-3 ms-md-5 ms-lg-5"></div>
        <div className="component-alumni">
          <div className="logo-component">
            <Logos />
          </div>
        </div>

        <div className="about ms-3 ms-md-5 ms-lg-5">Students Achievements</div>
        <div className="border1 border-layout ms-3 ms-md-5 ms-lg-5"></div>

        <div className="layout-container">
          <Layout />
        </div>
      </div>

      <div className="about ms-3 ms-md-5 ms-lg-5">MMMUT in News</div>
      <div className="border1 border-news ms-3 ms-md-5 ms-lg-5"></div>

      <div className="news-component">
        <News />
      </div>

      <Footer />
    </>
  );
};

export default Achievements;
