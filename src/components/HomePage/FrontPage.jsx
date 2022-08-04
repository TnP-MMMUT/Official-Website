import Navbar from "../Navbar/Navbar";
import Footer from "../utils/Footer";
import QuickLinks from "../utils/Home/quickLink";
import VCsir from "../utils/Home/VCsir";
import TPO from "../utils/Home/TPO";

import { motion, useScroll } from "framer-motion";

import "../../style/frontPage.css";
import imageCenter from "../../images/Center.png";
import PhotoAlbum from "react-photo-album";
import { gallery } from "../../data/gallery";

const FrontPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="homediv">
        <Navbar />
        <div className="image-div-container">
          <img
            className="image-center text-center"
            src={imageCenter}
            alt="logo&text"
          />
        </div>
      </div>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div className="container-sm mx-auto">
        <h2 className="about ms-1 ms-md-1 ms-lg-1">About Us</h2>
        <div className="border1" id="aboutBor"></div>
        <p className="about-text mt-2">
          <b>Training & Placement Cell (T&P)</b> of the University centrally
          handles all aspects of campus placements/internship,
          training/workshops for the graduating students of all departments. T&P
          Cell is well equipped with excellent infrastructure to support each
          and every stage of the placement processes. T&P Student Coordinators
          assist in arranging Pre-Placement Talks, Written Tests, Group
          Discussions, and Interviews etc. are made as per the requirements of
          the Organizations conducting the drive.
        </p>

        {/* <h2 className="about">Announcements</h2>
        <div className="border1" id="aboutAnn"></div>

        <div className="row col-12 mt-2">
          <p className= about-text">Coming soon!</p>
        </div> */}

        <QuickLinks />

        <div className="about ms-1 ms-md-1 ms-lg-1">
          From the Vice-Chancellor’s Desk
        </div>
        <div className="border1 mb-3" id="aboutVCM"></div>
        <VCsir />

        <div className="about ms-1 ms-md-1 ms-lg-1">From the TPO’s Desk</div>
        <div className="border1 mb-3" id="aboutTPOM"></div>
        <TPO />

        <h2 className="about ms-1 ms-md-1 ms-lg-1">
          Image Gallery of T&P Cell
        </h2>
        <div className="border-gallery"></div>
        <div className="news-container gallery-style container-fluid mt-3 text-center mx-auto">
          <PhotoAlbum layout="masonry" photos={gallery} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FrontPage;
