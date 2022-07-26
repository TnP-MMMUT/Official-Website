import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import UG from "./UG";
import PG from "./PG";

import "../../style/academics.css";

import { motion, useScroll } from "framer-motion";

const Academics = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div className="container-academics">
        <div className="about ms-3 ms-md-6 ms-lg-5">Programmes</div>
        <div className="border1 border-head ms-3 ms-md-6 ms-lg-5"></div>
        <div className="text1-all mx-auto">
          The University offers various programmes at undergraduate,
          postgraduate and doctoral level.
        </div>
        <UG />
        <PG />
      </div>

      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
    </>
  );
};

export default Academics;
