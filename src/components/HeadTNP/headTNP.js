import Navsm from "../Navbar/Navsm";
import "../../style/headTNP.css";
import Footer from "../utils/Footer";
import InvitationText from "../utils/invitationText";
import Email from "../../images/email2.png";
import Phone from "../../images/phone-call.png";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const HeadTNP = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="headTNP">
        <div className="headImg">
          <div className="imaGE"></div>
          <br />
          <h4 style={{ color: "#457B9D" }}>Prof. V K Dwivedi</h4>
          <h4>Professor, Training & Placement Cell</h4>
          <h4>MMMUT, Gorakhpur</h4>
          <h4>
            <img src={Email} alt="email icon" className="img-fluid" />
            <a
              href="mailto:tnp@mmmut.ac.in"
              style={{ textDecoration: "none", color: " #212121" }}
            >
              tnp@mmmut.ac.in /
            </a>
          </h4>{" "}
          <h4>
            <a
              href="mailto:vkdtnp@mmmut.ac.in"
              style={{ textDecoration: "none", color: " #212121" }}
            >
              vkdtnp@mmmut.ac.in
            </a>
          </h4>
          <h4>
            <img src={Phone} alt="phone icon" className="img-fluid" />
            <a
              href="tel:+919953001761"
              style={{ textDecoration: "none", color: " #212121" }}
            >
              +91 9953 0017 61
            </a>
          </h4>
          <Link
            to="/"
            style={{
              color: "#457B9D",
              fontSize: "24px",
              marginBottom: "10px",
              fontWeight: "700",
            }}
          >
            Home
          </Link>
          <h2 style={{ textDecoration: "underline" }}>INVITATION</h2>
        </div>

        <InvitationText />
        <Footer />
      </div>
    </>
  );
};

export default HeadTNP;
