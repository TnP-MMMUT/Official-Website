import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import Map from "../utils/Map";
import Location from "./Location";
import Connectivity from "./Connectivity";

import "../../style/reaching.css";

import { motion, useScroll } from "framer-motion";

const ReachingMMMUT = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div className="reaching-container">
        <Location />
        <Connectivity />
        <Map />
      </div>

      <Footer />
    </>
  );
};

export default ReachingMMMUT;
