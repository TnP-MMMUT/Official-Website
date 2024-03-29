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

      <div className="container-fluid">
        <div className="about ms-2 ms-md-6 ms-lg-5">Programmes</div>
        <div className="border-bottom ms-2 ms-md-6 ms-lg-5"></div>
        <div className="text1-all mx-auto">
          The University offers various programmes at undergraduate,
          postgraduate and doctoral level.
        </div>
        <UG />
        <PG />
      </div>

      <Footer />
    </>
  );
};

export default Academics;
